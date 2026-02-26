"use client";
// import { doc, updateDoc } from "firebase/firestore";

import { getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { collection } from "firebase/firestore";
import { createContext, ReactNode, useContext, useReducer } from "react";
import { IAccountWithId, ITransaction, IUser } from "@/app/dashboard/user/types/type";
import { AdminContextType, AdminState } from "@/app/dashboard/user/types/type";

const initialState: AdminState = {
    admin: "",
    users: [],
    transactions: [],
    accounts: [],
};

const AdminContext = createContext<AdminContextType | null>(null);

type Action =
    | { type: "SET_ADMIN"; payload: string }
    | { type: "SET_USERS"; payload: IUser[] }
    | { type: "SET_TRANSACTIONS"; payload: ITransaction[] }
    | { type: "SET_ACCOUNTS"; payload: IAccountWithId[] }
    | { type: "SET_ERROR"; payload: string }
    | { type: "SET_LOADING"; payload: boolean };

const adminReducer = (state: AdminState, action: Action) => {
    switch (action.type) {
        case "SET_ADMIN":
            return { ...state, admin: action.payload };
        case "SET_USERS":
            return { ...state, users: action.payload };
        case "SET_TRANSACTIONS":
            return { ...state, transactions: action.payload };
        case "SET_ACCOUNTS":
            return { ...state, accounts: action.payload };
        case "SET_ERROR":
            return { ...state, error: action.payload };
        case "SET_LOADING":
            return { ...state, loading: action.payload };
    }
};
const AdminProvider = ({ children }: { children: ReactNode }) => {
    const [adminState, dispatch] = useReducer(adminReducer, initialState);

    const getAllUsers = async () => {
        try {
            const usersRef = collection(db, "users");
            const querySnapshot = await getDocs(usersRef);
            const users = querySnapshot.docs.map((doc) => ({
                uid: doc.id,
                ...doc.data(),
            }));

            return users;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An error occurred";
            dispatch({ type: "SET_ERROR", payload: errorMessage });
            return [];
        }
    };

    const getAllTransactions = async () => {
        try {
            const transactionsRef = collection(db, "transactions");
            const querySnapshot = await getDocs(transactionsRef);
            const transactions = querySnapshot.docs.map((doc) => ({
                uid: doc.id,
                ...doc.data(),
            }));

            return transactions;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An error occurred";
            dispatch({ type: "SET_ERROR", payload: errorMessage });
            return [];
        }
    };

    const getAllAccounts = async () => {
        try {
            const accountsRef = collection(db, "accounts");
            const querySnapshot = await getDocs(accountsRef);
            const accounts = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            return accounts;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An error occurred";
            dispatch({ type: "SET_ERROR", payload: errorMessage });
            return [];
        }
    };

    const getAllBankData = async () => {
        try {
            dispatch({ type: "SET_LOADING", payload: true });

            const [users, transactions, accounts] = await Promise.all([
                getAllUsers(),
                getAllTransactions(),
                getAllAccounts(),
            ]);

            dispatch({ type: "SET_USERS", payload: users as unknown as IUser[] });
            dispatch({
                type: "SET_TRANSACTIONS",
                payload: transactions as unknown as ITransaction[],
            });
            dispatch({
                type: "SET_ACCOUNTS",
                payload: accounts as unknown as IAccountWithId[],
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An error occurred";
            dispatch({ type: "SET_ERROR", payload: errorMessage });
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    };

    const updateTransaction = async (uid: string, updateData: Partial<ITransaction>) => {
        try {
            const transactionRef = doc(db, "transactions", uid);
            // Update in Firestore
            await updateDoc(transactionRef, updateData);

            // Update local state
            dispatch({
                type: "SET_TRANSACTIONS",
                payload: adminState.transactions.map((transaction) =>
                    transaction.uid === uid ? { ...transaction, ...updateData } : transaction
                ) as ITransaction[],
            });
        } catch (error) {
            console.error("Error updating transaction:", error);
            throw error;
        }
    };

    const deleteTransaction = async (uid: string) => {
        try {
            const transactionRef = doc(db, "transactions", uid);

            // Delete from Firestore
            await deleteDoc(transactionRef);

            // Update local state
            dispatch({
                type: "SET_TRANSACTIONS",
                payload: adminState.transactions.filter(
                    (transaction) => transaction.uid !== uid
                ) as ITransaction[],
            });
        } catch (error) {
            console.error("Error deleting transaction:", error);
            throw error;
        }
    };

    const updateAccount = async (accountId: string, updateData: Partial<IAccountWithId>) => {
        try {
            const accountRef = doc(db, "accounts", accountId);

            // Update in Firestore
            await updateDoc(accountRef, updateData);

            // Update local state
            dispatch({
                type: "SET_ACCOUNTS",
                payload: adminState.accounts.map((account) =>
                    account.id === accountId ? { ...account, ...updateData } : account
                ) as IAccountWithId[],
            });
        } catch (error) {
            console.error("Error updating account:", error);
            throw error;
        }
    };

    const value = {
        adminState,
        getAllBankData,
        updateTransaction,
        deleteTransaction,
        updateAccount,
    };

    return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export { AdminContext, AdminProvider };

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error("useAdmin must be used within an AdminProvider");
    }
    return context;
};
