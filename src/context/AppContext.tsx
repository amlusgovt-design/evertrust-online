/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useContext, useReducer, ReactNode, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  Transaction,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import {
  AppContextType,
  AppState,
  IAccount,
  INotification,
  ITransaction,
} from "@/app/dashboard/user/types/type";
import emailjs from "@emailjs/browser";

// Define action types
type Action =
  | { type: "SET_USER"; payload: AppState["user"] }
  | { type: "SET_TRANSACTIONS"; payload: AppState["transactions"] }
  | { type: "SET_ACCOUNTS"; payload: AppState["accounts"] }
  | { type: "SET_NOTIFICATIONS"; payload: AppState["notifications"] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "CLEAR_ERROR" }
  | { type: "RESET_STATE" };

// Initial state
const initialState: AppState = {
  user: null,
  loading: false,
  error: null,
  transactions: [],
  accounts: [
    {
      id: "acc-1",
      name: "Checking Account",
      type: "Checking",
      number: `**** **** **** 4390`,
      balance: 0.0,
    },
    {
      id: "acc-2",
      name: "Savings Account",
      type: "Savings",
      number: `**** **** **** 5678`,
      balance: 0.0,
    },
  ],
  notifications: [],
};

// Create context with additional functionalities
const AppContext = createContext<AppContextType | null>(null);

// Reducer function
function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };
    case "SET_ACCOUNTS":
      return {
        ...state,
        accounts: action.payload,
      };
    case "SET_NOTIFICATIONS":
      return {
        ...state,
        notifications: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
}

// Provider component
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const router = useRouter();

  // Authentication functions
 const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    country: string,
    username: string // ← NEW: user chooses this
  ): Promise<AppState["user"] | null> => {
    dispatch({ type: "SET_LOADING", payload: true });

    const cleanUsername = username.trim().toLowerCase();
    if (!cleanUsername || cleanUsername.length < 3 || cleanUsername.length > 20) {
      throw new Error("Username must be 3–20 characters");
    }
    if (!/^[a-z0-9_]+$/.test(cleanUsername)) {
      throw new Error("Username can only contain lowercase letters, numbers, and underscores");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
      const user = userCredential.user;

      const accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();

      try {
        const result = await runTransaction(db, async (transaction) => {
          // Check if username is taken
          const usernameRef = doc(db, "usernames", cleanUsername);
          const usernameSnap = await transaction.get(usernameRef);
          if (usernameSnap.exists()) {
            throw new Error("This username is already taken");
          }

          // Check if account number is taken (very rare)
          const accRef = doc(db, "usernames", accountNumber);
          const accSnap = await transaction.get(accRef);
          if (accSnap.exists()) {
            throw new Error("Account conflict. Try again.");
          }

          const userData = {
            uid: user.uid,
            fullName: `${firstName.trim()} ${lastName.trim()}`,
            email: email.trim(),
            username: cleanUsername,
            country,
            role: "user" as const,
            password,
            pin: null,
            accountNumber,
            status: "active",
            kycStatus: "pending",
            phoneNumber: "",
            address: "",
            sortcode: "",
            occupation: "",
            dateOfBirth: "",
            gender: "",
            createdAt: serverTimestamp(),
          };

          // Reserve both login methods
          transaction.set(usernameRef, { uid: user.uid, createdAt: serverTimestamp() });
          transaction.set(accRef, { uid: user.uid, createdAt: serverTimestamp() });

          // Create user docs
          transaction.set(doc(db, "users", user.uid), userData);
          transaction.set(doc(db, "transactions", user.uid), { transactions: [] });
          transaction.set(doc(db, "accounts", user.uid), {
            accounts: [
              { id: "checking", name: "Checking Account", type: "Checking", number: "**** **** **** 4390", balance: 0 },
              { id: "savings", name: "Savings Account", type: "Savings", number: "**** **** **** 5678", balance: 0 },
            ],
          });
          transaction.set(doc(db, "notifications", user.uid), { notifications: [] });

          return { userData };
        });

        dispatch({ type: "SET_USER", payload: result.userData });

        // Send welcome email
        // await sendAccountNumber(result.userData.fullName, result.userData.email, result.userData.accountNumber);

        return result.userData;
      } catch (transactionError: any) {
        await user.delete();
        throw transactionError;
      }
    } catch (error: any) {
      let msg = "Registration failed";
      if (error.code === "auth/email-already-in-use") msg = "Email already registered";
      if (error.code === "auth/weak-password") msg = "Password too weak";
      if (error.message?.includes("username")) msg = error.message;

      dispatch({ type: "SET_ERROR", payload: msg });
      throw new Error(msg);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const login = async (
    username: string,
    password: string
  ): Promise<AppState["user"] | null | undefined> => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const usernameToCheck = username.toLowerCase().trim();

      // Step 1: Get UID from username
      const usernameRef = doc(db, "usernames", usernameToCheck);
      const usernameDoc = await getDoc(usernameRef);

      if (!usernameDoc.exists()) {
        throw new Error("Invalid username or password");
      }

      const uid = usernameDoc.data().uid;

      // Step 2: Get user data from Firestore
      const userRef = doc(db, "users", uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        throw new Error("User account not found");
      }

      const userData = userDoc.data() as AppState["user"];

      if (!userData?.email) {
        throw new Error("No email linked to this account");
      }

      if (userData.status === "suspended") {
        throw new Error("Your Account Has been Temporarily Suspended!");
      }

      // Step 3: Use Firebase's built-in auth
      const userCredential = await signInWithEmailAndPassword(auth, userData.email, password);
      const user = userCredential.user;

      // Step 4: Get all related data
      const [transactions, accounts, notifications] = await Promise.all([
        getUserTransactions(user.uid),
        getUserAccounts(user.uid),
        getUserNotifications(user.uid),
      ]);

      // Step 5: Update state with all data
      dispatch({ type: "SET_USER", payload: userData });
      dispatch({ type: "SET_TRANSACTIONS", payload: transactions });
      dispatch({ type: "SET_ACCOUNTS", payload: accounts });
      dispatch({ type: "SET_NOTIFICATIONS", payload: notifications });

      return userData;
    } catch (error: any) {
      let errorMessage = "An error occurred";

      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        errorMessage = "Invalid username or password";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Too many failed login attempts. Please try again later.";
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      dispatch({ type: "SET_ERROR", payload: errorMessage });
      throw new Error(errorMessage);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "RESET_STATE" });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      dispatch({ type: "SET_ERROR", payload: errorMessage });
    }
  };

  const getUserData = async (userId: string): Promise<AppState["user"] | null> => {
    try {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        return userDoc.data() as AppState["user"];
      }
      return null;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      dispatch({ type: "SET_ERROR", payload: errorMessage });
      return null;
    }
  };

  const updateUserData = async (userId: string, data: Partial<NonNullable<AppState["user"]>>) => {
    try {
      await updateDoc(doc(db, "users", userId), data);
      const updatedData = await getUserData(userId);
      dispatch({ type: "SET_USER", payload: updatedData });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      dispatch({ type: "SET_ERROR", payload: errorMessage });
    }
  };

  const createTransaction = async (userId: string, transactionData: ITransaction) => {
    try {
      const transactionRef = doc(collection(db, "transactions"));
      const transaction = {
        ...transactionData,
        userId,
        createdAt: new Date().toISOString(),
      };
      await setDoc(transactionRef, transaction);
      return { id: transactionRef.id, ...transaction };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      dispatch({ type: "SET_ERROR", payload: errorMessage });
      return null;
    }
  };

  const getUserTransactions = async (userId: string): Promise<ITransaction[]> => {
    try {
      const transactionsQuery = query(
        collection(db, "transactions"),
        where("userId", "==", userId)
      );
      const querySnapshot = await getDocs(transactionsQuery);
      const transactions = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as ITransaction),
      }));
      dispatch({ type: "SET_TRANSACTIONS", payload: transactions });
      return transactions;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      dispatch({ type: "SET_ERROR", payload: errorMessage });
      return [];
    }
  };

  const getUserNotifications = async (userId: string): Promise<INotification[]> => {
    try {
      const notificationsQuery = query(
        collection(db, "notifications"),
        where("userId", "==", userId)
      );
      const querySnapshot = await getDocs(notificationsQuery);
      return querySnapshot.docs.map((doc) => ({
        ...(doc.data() as INotification),
        id: doc.id,
      }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      dispatch({ type: "SET_ERROR", payload: errorMessage });
      return [];
    }
  };

  const getUserAccounts = async (userId: string): Promise<IAccount[]> => {
    try {
      const accountsRef = await getDoc(doc(db, "accounts", userId));

      if (accountsRef.exists()) {
        const accounts = accountsRef.data().accounts as IAccount[];

        dispatch({ type: "SET_ACCOUNTS", payload: accounts });
        return accounts;
      }
      return [];
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      dispatch({ type: "SET_ERROR", payload: errorMessage });
      return [];
    }
  };

  const updateUserBalance = async (
    userId: string,
    accountType: string,
    transactionType: string,
    amount: number
  ) => {
    try {
      const accountDocRef = doc(db, "accounts", userId);
      const accountDoc = await getDoc(accountDocRef);

      if (accountDoc.exists()) {
        const accounts = accountDoc.data().accounts as IAccount[];
        const account = accounts.find((account) => account.name === accountType);

        if (account) {
          if (transactionType === "deposit") {
            account.balance += amount;
          } else {
            account.balance -= amount;
          }
        }

        await updateDoc(accountDocRef, { accounts: accounts });
        dispatch({ type: "SET_ACCOUNTS", payload: accounts });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      dispatch({ type: "SET_ERROR", payload: errorMessage });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await getUserData(user.uid);

        if (!userData) {
          router.push("/auth");
        }

        const transactions = await getUserTransactions(user.uid);
        const accounts = await getUserAccounts(user.uid);
        const notifications = await getUserNotifications(user.uid);

        dispatch({ type: "SET_USER", payload: userData });
        dispatch({ type: "SET_TRANSACTIONS", payload: transactions });
        dispatch({ type: "SET_ACCOUNTS", payload: accounts });
        dispatch({ type: "SET_NOTIFICATIONS", payload: notifications });
      } else {
        dispatch({ type: "RESET_STATE" });
        router.push("/auth");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Function to send OTP via EmailJS
  const sendOTP = async (email: string, otp: string) => {
    const templateParams = {
      email: email,
      passcode: otp,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_ONE_TIME_PASS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      );
    } catch (error) {
      console.error("Error sending OTP:", error);
      throw error;
    }
  };

  const sendAccountNumber = async (name: string, email: string, accountNumber: string) => {
    const templateParams = {
      name: name,
      accountNumber: accountNumber,
      email: email,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_WELCOME_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      );
    } catch (error) {
      console.error("Error sending account number:", error);
      throw error;
    }
  };

  // Function to verify OTP
  const verifyOTP = (inputOTP: string, generatedOTP: string) => {
    return inputOTP === generatedOTP;
  };

  return (
    <AppContext.Provider
      value={{
        state,
        register,
        login,
        logout,
        updateUserData,
        createTransaction,
        generateOTP,
        sendOTP,
        verifyOTP,
        sendAccountNumber,
        updateUserBalance,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the app context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

export { AppContext, AppProvider };
