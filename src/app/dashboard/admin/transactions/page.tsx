"use client";

import { useEffect, useState } from "react";
import {
    Download,
    Filter,
    Search,
    Eye,
    ArrowUp,
    ArrowDown,
    Activity,
    Pencil,
    Trash,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ITransaction } from "../../user/types/type";
import { useAdmin } from "@/context/AdminContext";
import { toast } from "react-hot-toast";
import { Label } from "@/components/ui/label";

export default function TransactionsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [statusFilter, setStatusFilter] = useState("all");
    const [dateFilter, setDateFilter] = useState("all");
    const [selectedTransaction, setSelectedTransaction] = useState<string | null>(null);
    const [showTransactionDetails, setShowTransactionDetails] = useState(false);
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    const [editingTransaction, setEditingTransaction] = useState<ITransaction | null>(null);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [deletingTransactionId, setDeletingTransactionId] = useState<string | null>(null);

    const { adminState, getAllBankData, updateTransaction, deleteTransaction } = useAdmin();

    useEffect(() => {
        const allTransactions = adminState.transactions.filter(
            (transaction) => transaction.createdAt !== undefined
        );
        setTransactions(allTransactions as unknown as ITransaction[]);
    }, [adminState.transactions]);

    useEffect(() => {
        getAllBankData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // First, create a function to get user's name by userId
    const getUserName = (userId: string) => {
        const user = adminState?.users?.find((user) => user.uid === userId);
        return user ? user.fullName : "Unknown User";
    };

    // Filter transactions based on search and filters
    const filteredTransactions = transactions
        .filter((transaction) => {
            // Search filter
            const matchesSearch =
                searchTerm === "" ||
                transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                transaction.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                transaction.description.toLowerCase().includes(searchTerm.toLowerCase());

            // Type filter
            const matchesType = typeFilter === "all" || transaction.type === typeFilter;

            // Status filter
            const matchesStatus = statusFilter === "all" || transaction.status === statusFilter;

            // Date filter (simplified for demo)
            const matchesDate = true; // In a real app, we would filter by date

            return matchesSearch && matchesType && matchesStatus && matchesDate;
        })
        .sort((a, b) => {
            // Use createdAt instead of date for more precise sorting
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });

    const selectedTransactionData = transactions.find(
        (transaction) => transaction.transactionId === selectedTransaction
    );

    const handleEditTransaction = (transaction: ITransaction) => {
        setEditingTransaction(transaction);
        setShowEditDialog(true);
    };

    const handleDeleteTransaction = (transactionId: string) => {
        setDeletingTransactionId(transactionId);
        setShowDeleteDialog(true);
    };

    const handleSaveTransaction = async (transactionId: string) => {
        if (!editingTransaction) return;
        setIsSaving(true);

        try {
            await updateTransaction(transactionId, {
                type: editingTransaction.type as "deposit" | "withdrawal" | "transfer",
                amount: editingTransaction.amount,
                status: editingTransaction.status as "completed" | "pending" | "failed",
                account: editingTransaction.account,
                description: editingTransaction.description,
                date: editingTransaction.date,
            });

            await getAllBankData();
            setShowEditDialog(false);
            setEditingTransaction(null);
            toast.success("Transaction updated successfully", {
                duration: 3000,
                position: "top-right",
                style: {
                    background: "#fff",
                    color: "#008000",
                    borderRadius: "10px",
                    fontSize: "14px",
                },
            });
        } catch (error) {
            toast.error("Failed to update transaction", {
                duration: 3000,
                position: "top-right",
                style: {
                    background: "#fff",
                    color: "#bc1717",
                    borderRadius: "10px",
                    fontSize: "14px",
                },
            });
            console.error(error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleConfirmDelete = async () => {
        if (!deletingTransactionId) return;

        try {
            await deleteTransaction(deletingTransactionId);
            await getAllBankData();
            setShowDeleteDialog(false);
            setDeletingTransactionId(null);
            toast.success("Transaction deleted successfully", {
                duration: 3000,
                position: "top-right",
                style: {
                    background: "#fff",
                    color: "#008000",
                    borderRadius: "10px",
                    fontSize: "14px",
                },
            });
        } catch (error) {
            toast.error("Failed to delete transaction");
            console.error(error);
        }
    };

    return (
        <div className="flex flex-1">
            {/* Main content */}
            <main className="flex-1 overflow-auto p-4 md:p-6">
                <div className="grid gap-6 max-w-6xl mx-auto">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                                Transactions Monitoring
                            </h1>
                            <p className="text-gray-500">
                                Track and manage all financial movements
                            </p>
                        </div>
                    </div>

                    {/* Filters */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg font-medium">Filters</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4 md:grid-cols-4">
                                <div className="space-y-2">
                                    <label htmlFor="search" className="text-sm font-medium">
                                        Search
                                    </label>
                                    <div className="relative">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                                        <Input
                                            id="search"
                                            type="search"
                                            placeholder="Search by ID, user, or description..."
                                            className="pl-8 border-gray-200"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="type" className="text-sm font-medium">
                                        Transaction Type
                                    </label>
                                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                                        <SelectTrigger id="type" className="border-gray-200 w-full">
                                            <SelectValue placeholder="All Types" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Types</SelectItem>
                                            <SelectItem value="deposit">Deposits</SelectItem>
                                            <SelectItem value="withdrawal">Withdrawals</SelectItem>
                                            <SelectItem value="transfer">Transfers</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="status" className="text-sm font-medium">
                                        Status
                                    </label>
                                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                                        <SelectTrigger
                                            id="status"
                                            className="border-gray-200 w-full"
                                        >
                                            <SelectValue placeholder="All Statuses" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Statuses</SelectItem>
                                            <SelectItem value="completed">Completed</SelectItem>
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="failed">Failed</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="date" className="text-sm font-medium">
                                        Date Range
                                    </label>
                                    <Select value={dateFilter} onValueChange={setDateFilter}>
                                        <SelectTrigger id="date" className="border-gray-200 w-full">
                                            <SelectValue placeholder="All Time" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Time</SelectItem>
                                            <SelectItem value="today">Today</SelectItem>
                                            <SelectItem value="week">This Week</SelectItem>
                                            <SelectItem value="month">This Month</SelectItem>
                                            <SelectItem value="custom">Custom Range</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Transactions Table */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between border-b border-gray-100 pb-3">
                            <div>
                                <CardTitle className="text-lg font-medium">
                                    Transaction History
                                </CardTitle>
                                <CardDescription>
                                    Showing {filteredTransactions.length} transactions
                                </CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                                >
                                    <Filter className="mr-2 h-4 w-4" />
                                    Filter
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Export
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-transparent">
                                        <TableHead className="w-[100px] text-gray-500">
                                            ID
                                        </TableHead>
                                        <TableHead className="text-gray-500">fullName</TableHead>
                                        <TableHead className="text-gray-500">Type</TableHead>
                                        <TableHead className="text-gray-500">Recipient</TableHead>
                                        <TableHead className="text-gray-500">Amount</TableHead>
                                        <TableHead className="text-gray-500">Status</TableHead>
                                        <TableHead className="text-right text-gray-500">
                                            Actions
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredTransactions.map((transaction) => (
                                        <TableRow
                                            key={transaction.transactionId}
                                            className="cursor-pointer"
                                            onClick={() => {
                                                setSelectedTransaction(transaction.transactionId);
                                                setShowTransactionDetails(true);
                                            }}
                                        >
                                            <TableCell className="font-medium">
                                                {transaction.transactionId.slice(0, 8)}...
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        <div className="font-medium">
                                                            {getUserName(transaction.userId)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    className={`
                          ${transaction?.type === "deposit" ? "bg-green-100 text-green-800" : ""}
                          ${transaction?.type === "withdrawal" ? "bg-red-100 text-red-800" : ""}
                          ${transaction?.type === "transfer" ? "bg-blue-100 text-blue-800" : ""}
                        `}
                                                >
                                                    {transaction?.type?.charAt(0).toUpperCase() +
                                                        transaction?.type?.slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell
                                                className={`font-medium ${
                                                    transaction?.type === "deposit"
                                                        ? "text-green-600"
                                                        : transaction?.type === "withdrawal"
                                                        ? "text-red-600"
                                                        : ""
                                                }`}
                                            >
                                                {transaction?.type === "deposit"
                                                    ? "+"
                                                    : transaction?.type === "withdrawal"
                                                    ? "-"
                                                    : ""}
                                                $
                                                {transaction?.amount?.toLocaleString("en-US", {
                                                    minimumFractionDigits: 2,
                                                })}
                                            </TableCell>
                                            <TableCell>{transaction?.description}</TableCell>
                                            <TableCell>
                                                <Badge
                                                    className={`
                          ${
                              transaction?.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : ""
                          }
                          ${
                              transaction?.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : ""
                          }
                          ${transaction?.status === "failed" ? "bg-red-100 text-red-800" : ""}
                        `}
                                                >
                                                    {transaction?.status?.charAt(0).toUpperCase() +
                                                        transaction?.status?.slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{transaction?.date}</TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="cursor-pointer"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedTransaction(
                                                                transaction?.transactionId
                                                            );
                                                            setShowTransactionDetails(true);
                                                        }}
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                        <span className="sr-only">View</span>
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="cursor-pointer text-blue-600"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleEditTransaction(transaction);
                                                        }}
                                                    >
                                                        <Pencil className="h-4 w-4" />
                                                        <span className="sr-only">Edit</span>
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="cursor-pointer text-red-600"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDeleteTransaction(
                                                                transaction.uid ?? ""
                                                            );
                                                        }}
                                                    >
                                                        <Trash className="h-4 w-4" />
                                                        <span className="sr-only">Delete</span>
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {filteredTransactions.length === 0 && (
                                        <TableRow>
                                            <TableCell colSpan={8} className="h-24 text-center">
                                                No transactions found.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between border-t border-gray-100 p-4">
                            <div className="text-sm text-gray-500">
                                Showing {filteredTransactions.length} of {transactions.length}{" "}
                                transactions
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    disabled
                                    className="border-gray-200"
                                >
                                    Previous
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                                >
                                    Next
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </main>

            {/* Transaction Details Dialog */}
            {selectedTransactionData && (
                <Dialog open={showTransactionDetails} onOpenChange={setShowTransactionDetails}>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle>Transaction Details</DialogTitle>
                            <DialogDescription>
                                Detailed information about transaction{" "}
                                {selectedTransactionData.transactionId}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="flex items-center gap-4">
                                <div
                                    className={`p-3 rounded-full 
                  ${selectedTransactionData.type === "deposit" ? "bg-green-100" : ""}
                  ${selectedTransactionData.type === "withdrawal" ? "bg-red-100" : ""}
                  ${selectedTransactionData.type === "transfer" ? "bg-blue-100" : ""}
                `}
                                >
                                    {selectedTransactionData.type === "deposit" ? (
                                        <ArrowUp
                                            className={`h-6 w-6 ${
                                                selectedTransactionData.type === "deposit"
                                                    ? "text-green-600"
                                                    : ""
                                            }`}
                                        />
                                    ) : selectedTransactionData.type === "withdrawal" ? (
                                        <ArrowDown className="h-6 w-6 text-red-600" />
                                    ) : (
                                        <Activity className="h-6 w-6 text-blue-600" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">
                                        {selectedTransactionData.type.charAt(0).toUpperCase() +
                                            selectedTransactionData.type.slice(1)}
                                    </h3>
                                    <p className="text-gray-500">
                                        {selectedTransactionData.description}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-100 py-4">
                                <div>
                                    <p className="text-sm text-gray-500">Transaction ID</p>
                                    <p className="font-medium">
                                        {selectedTransactionData.transactionId}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Account Type</p>
                                    <p className="font-medium">{selectedTransactionData.account}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Amount</p>
                                    <p
                                        className={`font-medium ${
                                            selectedTransactionData.type === "deposit"
                                                ? "text-green-600"
                                                : selectedTransactionData.type === "withdrawal"
                                                ? "text-red-600"
                                                : ""
                                        }`}
                                    >
                                        {selectedTransactionData.type === "deposit"
                                            ? "+"
                                            : selectedTransactionData.type === "withdrawal"
                                            ? "-"
                                            : ""}
                                        $
                                        {selectedTransactionData.amount.toLocaleString("en-US", {
                                            minimumFractionDigits: 2,
                                        })}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Status</p>
                                    <Badge
                                        className={`
                    ${
                        selectedTransactionData.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : ""
                    }
                    ${
                        selectedTransactionData.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : ""
                    }
                    ${selectedTransactionData.status === "failed" ? "bg-red-100 text-red-800" : ""}
                  `}
                                    >
                                        {selectedTransactionData.status.charAt(0).toUpperCase() +
                                            selectedTransactionData.status.slice(1)}
                                    </Badge>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">User Name</p>
                                    <p className="font-medium">
                                        {getUserName(selectedTransactionData.userId)}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Date & Time</p>
                                    <p className="font-medium">{selectedTransactionData.date}</p>
                                    <p className="text-xs text-gray-500">
                                        {new Date(
                                            selectedTransactionData.createdAt
                                        ).toLocaleTimeString()}
                                    </p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-sm text-gray-500">Description</p>
                                    <p className="font-medium">
                                        {selectedTransactionData.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button
                                className="cursor-pointer"
                                onClick={() => setShowTransactionDetails(false)}
                            >
                                Close
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}

            {/* Edit Transaction Dialog */}
            <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Edit Transaction</DialogTitle>
                        <DialogDescription>
                            Make changes to transaction details here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    {editingTransaction && (
                        <div className="grid grid-cols-2 gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="type">Transaction Type</Label>
                                <Select
                                    value={editingTransaction.type}
                                    onValueChange={(value) =>
                                        setEditingTransaction({
                                            ...editingTransaction,
                                            type: value as "deposit" | "withdrawal" | "transfer",
                                        })
                                    }
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="deposit">Deposit</SelectItem>
                                        <SelectItem value="withdrawal">Withdrawal</SelectItem>
                                        <SelectItem value="transfer">Transfer</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="amount">Amount</Label>
                                <Input
                                    id="amount"
                                    type="number"
                                    value={editingTransaction.amount}
                                    onChange={(e) =>
                                        setEditingTransaction({
                                            ...editingTransaction,
                                            amount: parseFloat(e.target.value),
                                        })
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="status">Status</Label>
                                <Select
                                    value={editingTransaction.status}
                                    onValueChange={(value) =>
                                        setEditingTransaction({
                                            ...editingTransaction,
                                            status: value as "completed" | "pending" | "failed",
                                        })
                                    }
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="completed">Completed</SelectItem>
                                        <SelectItem value="pending">Pending</SelectItem>
                                        <SelectItem value="failed">Failed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="account">Account Type</Label>
                                <Input
                                    id="account"
                                    value={editingTransaction.account}
                                    onChange={(e) =>
                                        setEditingTransaction({
                                            ...editingTransaction,
                                            account: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="col-span-2 grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <Input
                                    id="description"
                                    value={editingTransaction.description}
                                    onChange={(e) =>
                                        setEditingTransaction({
                                            ...editingTransaction,
                                            description: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="col-span-2 grid gap-2">
                                <Label htmlFor="description">Date</Label>
                                <Input
                                    id="date"
                                    value={editingTransaction.date}
                                    onChange={(e) =>
                                        setEditingTransaction({
                                            ...editingTransaction,
                                            date: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                    )}
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowEditDialog(false)}>
                            Cancel
                        </Button>
                        <Button
                            onClick={() => handleSaveTransaction(editingTransaction?.uid ?? "")}
                            disabled={!editingTransaction || isSaving}
                            className="bg-green-500 hover:bg-green-600 text-white"
                        >
                            {isSaving ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Saving changes...
                                </>
                            ) : (
                                "Save changes"
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <DialogContent className="sm:max-w-[400px]">
                    <DialogHeader>
                        <DialogTitle>Delete Transaction</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete this transaction? This action cannot be
                            undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
                            Cancel
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={handleConfirmDelete}
                            className="bg-red-500 hover:bg-red-600 text-white"
                        >
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
