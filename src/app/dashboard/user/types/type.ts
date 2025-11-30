export interface ITransaction {
    uid?: string;
    type: "deposit" | "transfer" | "withdrawal";
    amount: number;
    description: string;
    status: "pending" | "completed" | "failed";
    date: string;
    userId: string;
    transactionId: string;
    account: string;
    createdAt: string;
    recipient: string;
    bank: string;
    accountNumber: string;
    routingNumber: string;
    bankAddress: string;
    transferType: string;
}

export interface IAccount {
    id: string;
    name: string;
    type: string;
    number: string;
    balance: number;
}

export interface INotification {
    id: string;
    type: "info" | "success" | "warning" | "error";
    message: string;
    createdAt: string;
    read: boolean;
}

export interface IUser {
    uid: string;
    fullName: string;
    username: string;
    email: string;
    password: string;
    role: "user";
    pin: string | null; 
    accountNumber: string;
    status: string;
    kycStatus: string;
    phoneNumber: string;
    address: string;
    country: string;
    sortcode: string;
    occupation: string;
    dateOfBirth: string;
    gender: string;
}

export interface AppState {
    user: IUser | null;
    loading: boolean;
    error: string | null;
    transactions: ITransaction[];
    accounts: IAccount[];
    notifications: INotification[];
}

export interface AppContextType {
    state: AppState;
    register: (
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        country: string,
        username: string,
    ) => Promise<AppState["user"] | null | undefined>;
    login: (
        accountNumber: string,
        password: string
    ) => Promise<AppState["user"] | null | undefined>;
    logout: () => Promise<void>;
    updateUserData: (userId: string, data: Partial<NonNullable<AppState["user"]>>) => Promise<void>;
    createTransaction: (
        userId: string,
        transactionData: ITransaction
    ) => Promise<(ITransaction & { id: string }) | null>;
    generateOTP: () => string;
    sendOTP: (email: string, otp: string) => Promise<void>;
    verifyOTP: (inputOTP: string, generatedOTP: string) => boolean;
    updateUserBalance: (
        userId: string,
        accountType: string,
        transactionType: string,
        amount: number
    ) => Promise<void>;
    sendAccountNumber: (name: string, email: string, accountNumber: string) => Promise<void>;
}

export interface AdminContextType {
    adminState: AdminState;
    getAllBankData: () => Promise<void>;
    updateTransaction: (transactionId: string, updateData: Partial<ITransaction>) => Promise<void>;
    deleteTransaction: (transactionId: string) => Promise<void>;
    updateAccount: (accountId: string, updateData: Partial<IAccountWithId>) => Promise<void>;
}

export interface IAccountWithId {
    id: string;
    accounts: IAccount[];
}

export interface AdminState {
    admin: string;
    users: IUser[];
    transactions: ITransaction[];
    accounts: IAccountWithId[];
}
