"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpDown, Users, DollarSign, Activity, Pencil } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
// import { getSession } from "@/lib/localStorage";
import { useApp } from "@/context/AppContext";
import { ITransaction } from "./types/type";
import { DashboardGate } from "@/components/dashboard-gate";

export default function UserDashboard() {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    const [balance, setBalance] = useState(0.0);
    const { state } = useApp();

    useEffect(() => {
        if (state.transactions) {
            setTransactions(state.transactions);
        }
        if (state.accounts) {
            const totalBalance = state.accounts?.reduce((acc, account) => acc + account.balance, 0);
            setBalance(totalBalance);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.accounts]);

    // Get recent transactions
    const recentTransactions = [...transactions]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 5);

    return (
            <DashboardGate>

        <div className="flex flex-1">
            {/* Main content */}
            <main className="flex-1 overflow-auto p-4 md:p-6">
                <div className="grid gap-6 max-w-6xl mx-auto">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                            Welcome back, {state.user?.fullName.split(" ")[0]}
                        </h1>
                        <p className="text-gray-500">
                            Here&apos;s what&apos;s happening with your account
                        </p>
                    </div>

                    {/* Overview Cards */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-green-50">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">
                                    Total Balance
                                </CardTitle>
                                <div className="p-2 rounded-full bg-green-100">
                                    <DollarSign className="h-4 w-4 text-green-600" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-gray-900">
                                    ${balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                                </div>
                                <div className="mt-6 space-y-3">
                                    <div className="flex border items-center justify-between p-2 rounded-lg bg-white/50">
                                        <span className="text-sm font-medium text-gray-600">
                                            Checkings
                                        </span>
                                        <span className="text-sm font-semibold text-gray-900">
                                            $
                                            {state.accounts[0].balance.toLocaleString("en-US", {
                                                minimumFractionDigits: 2,
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex items-center border justify-between p-2 rounded-lg bg-white/50">
                                        <span className="text-sm font-medium text-gray-600">
                                            Savings
                                        </span>
                                        <span className="text-sm font-semibold text-gray-900">
                                            $
                                            {state.accounts[1].balance.toLocaleString("en-US", {
                                                minimumFractionDigits: 2,
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">
                                    Account Number
                                </CardTitle>
                                <div className="p-2 rounded-full bg-blue-100">
                                    <Activity className="h-4 w-4 text-blue-600" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-gray-900 tracking-wider">
                                    {state?.user?.accountNumber}
                                </div>
                                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                                        Active Account
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-purple-50">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">
                                    Total Transactions
                                </CardTitle>
                                <div className="p-2 rounded-full bg-purple-100">
                                    <Activity className="h-4 w-4 text-purple-600" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold text-gray-900">
                                    {transactions.length}
                                </div>
                                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                                    <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-600">
                                        Last 30 Days
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid gap-4">
                        <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                            <CardHeader className="border-b border-gray-100 pb-3">
                                <CardTitle className="text-lg font-medium text-gray-900">
                                    Quick Actions
                                </CardTitle>
                                <CardDescription className="text-sm text-gray-500">
                                    Access your most used banking features
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <Link
                                        href="/dashboard/user/transfers"
                                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        <div className="relative">
                                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 transition-colors duration-300 group-hover:bg-blue-200">
                                                <ArrowUpDown className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                                Send Money
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Transfer funds to other accounts or pay bills
                                            </p>
                                        </div>
                                    </Link>

                                    <Link
                                        href="/dashboard/user/accounts"
                                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-green-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        <div className="relative">
                                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 transition-colors duration-300 group-hover:bg-green-200">
                                                <Users className="h-6 w-6 text-green-600" />
                                            </div>
                                            <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                                Manage Accounts
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                View and manage your bank accounts
                                            </p>
                                        </div>
                                    </Link>

                                    <Link
                                        href="/dashboard/user/settings"
                                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-amber-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        <div className="relative">
                                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 transition-colors duration-300 group-hover:bg-amber-200">
                                                <Pencil className="h-6 w-6 text-amber-600" />
                                            </div>
                                            <h3 className="mb-2 text-lg font-semibold text-gray-900">
                                                Settings
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Customize your banking preferences
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Recent Transactions */}
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                        <CardHeader className="flex flex-row items-center justify-between border-b border-gray-100 pb-3">
                            <div>
                                <CardTitle className="text-lg font-medium text-gray-900">
                                    Recent Transactions
                                </CardTitle>
                                <CardDescription className="text-sm text-gray-500">
                                    Your latest financial activities
                                </CardDescription>
                            </div>
                            <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className="border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                            >
                                <Link href="/dashboard/user/transactions">View All</Link>
                            </Button>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="rounded-lg border border-gray-100">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="hover:bg-transparent">
                                            <TableHead className="font-medium text-gray-500">
                                                S/N
                                            </TableHead>
                                            <TableHead className="font-medium text-gray-500">
                                                Transaction ID
                                            </TableHead>
                                            <TableHead className="font-medium text-gray-500">
                                                Description
                                            </TableHead>
                                            <TableHead className="font-medium text-gray-500">
                                                Type
                                            </TableHead>
                                            <TableHead className="font-medium text-gray-500">
                                                Account
                                            </TableHead>
                                            <TableHead className="font-medium text-gray-500">
                                                Amount
                                            </TableHead>
                                            <TableHead className="font-medium text-gray-500">
                                                Status
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {recentTransactions.map((transaction, index) => (
                                            <TableRow
                                                key={transaction.transactionId}
                                                className="hover:bg-gray-50/50 transition-colors"
                                            >
                                                <TableCell className="font-medium text-gray-900">
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell>
                                                    <div className="font-mono text-sm text-gray-600">
                                                        {transaction.transactionId.slice(0, 8)}...
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                                            {transaction.type === "deposit" ? (
                                                                <svg
                                                                    className="w-4 h-4 text-green-500"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    className="w-4 h-4 text-gray-500"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </div>
                                                        <div className="text-sm text-gray-600">
                                                            {transaction.description}
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-2">
                                                        <div
                                                            className={`w-2 h-2 rounded-full ${
                                                                transaction.type === "deposit"
                                                                    ? "bg-green-500"
                                                                    : "bg-red-500"
                                                            }`}
                                                        />
                                                        <span className="text-sm font-medium text-gray-700">
                                                            {transaction.type
                                                                .charAt(0)
                                                                .toUpperCase() +
                                                                transaction.type.slice(1)}
                                                        </span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="text-sm text-gray-600">
                                                        {transaction.type === "deposit"
                                                            ? "Credit"
                                                            : "Debit"}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div
                                                        className={`font-medium ${
                                                            transaction.type === "deposit"
                                                                ? "text-green-600"
                                                                : "text-red-600"
                                                        }`}
                                                    >
                                                        {transaction.type === "deposit" ? "+" : "-"}
                                                        $
                                                        {transaction.amount.toLocaleString(
                                                            "en-US",
                                                            {
                                                                minimumFractionDigits: 2,
                                                            }
                                                        )}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge
                                                        variant={
                                                            transaction.status === "completed"
                                                                ? "default"
                                                                : transaction.status === "pending"
                                                                ? "secondary"
                                                                : "destructive"
                                                        }
                                                        className={`${
                                                            transaction.status === "completed"
                                                                ? "bg-green-100 text-green-700 hover:bg-green-100"
                                                                : transaction.status === "pending"
                                                                ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                                                                : "bg-red-100 text-red-700 hover:bg-red-100"
                                                        }`}
                                                    >
                                                        {transaction.status
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            transaction.status.slice(1)}
                                                    </Badge>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
        </DashboardGate>
    );
}
