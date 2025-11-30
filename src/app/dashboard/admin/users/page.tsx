"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Label } from "@/components/ui/label";
import { Download, Eye, EyeOff, Pencil, Plus, RefreshCw, Search } from "lucide-react";
import { useAdmin } from "@/context/AdminContext";
import { IUser } from "../../user/types/type";
import { useApp } from "@/context/AppContext";
import { toast } from "react-hot-toast";

type UserStatus = "active" | "pending" | "suspended";
type KYCStatus = "completed" | "pending" | "rejected";

const countries = [
    "United States",
    "Canada",
    "Mexico", // North America
    "Brazil",
    "Argentina",
    "Colombia", // South America
    "United Kingdom",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Netherlands", // Europe
    "Belgium",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Ireland",
    "Switzerland",
    "Austria",
    "Portugal",
    "Greece",
    "Poland",
    "Czech Republic",
    "Hungary",
    "Romania",
    "Bulgaria",
    "Croatia",
    "Slovakia",
    "Slovenia",
    "Estonia",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Cyprus",
    "Iceland",
    "Liechtenstein",
    "Monaco",
    "San Marino",
    "Andorra",
    "Vatican City", // More Europe
    "Australia",
    "Japan",
    "China",
    "India", // Asia
    // Add more countries as needed
];

export default function UsersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [kycFilter, setKycFilter] = useState<string>("all");
    const [selectedUser, setSelectedUser] = useState<string | null>(null);
    const [showUserProfile, setShowUserProfile] = useState(false);
    const [editingUser, setEditingUser] = useState<IUser | null>(null);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [userList, setUserList] = useState<IUser[]>([]);
    const [isSaving, setIsSaving] = useState(false);
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

    //New Users State
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState('');
    const [country, setCountry] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { adminState, getAllBankData } = useAdmin();
    const { updateUserData, register } = useApp();

    useEffect(() => {
        getAllBankData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Load users from localStorage
    useEffect(() => {
        // Load users from localStorage
        const allUsers = adminState.users;
        setUserList(allUsers as unknown as IUser[]);
    }, [adminState.users]);

    const handleEditUser = (user: IUser) => {
        setEditingUser(user);
        setShowEditDialog(true);
    };

    const handleSaveUser = async (uid: string) => {
        if (!editingUser) return;
        setIsSaving(true);

        try {
            await updateUserData(uid, {
                fullName: editingUser.fullName,
                gender: editingUser.gender,
                phoneNumber: editingUser.phoneNumber,
                dateOfBirth: editingUser.dateOfBirth,
                username: editingUser.username,
                country: editingUser.country,
                occupation: editingUser.occupation,
                sortcode: editingUser.sortcode,
                role: editingUser.role,
                status: editingUser.status,
                kycStatus: editingUser.kycStatus,
            });

            await getAllBankData();
            setShowEditDialog(false);
            setEditingUser(null);
            toast.success("User information updated successfully", {
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
            toast.error("Failed to update user information");
            console.error(error);
        } finally {
            setIsSaving(false);
        }
    };

    // Filter users based on search and filters
    const filteredUsers = userList.filter((user) => {
        // Search filter
        const matchesSearch =
            searchTerm === "" ||
            user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.uid.toLowerCase().includes(searchTerm.toLowerCase());

        // Status filter
        const matchesStatus = statusFilter === "all" || user.status === statusFilter;

        // KYC filter
        const matchesKyc = kycFilter === "all" || user.kycStatus === kycFilter;

        return matchesSearch && matchesStatus && matchesKyc;
    });

    const selectedUserData = userList.find((user) => user.uid === selectedUser);

    const getUserTotalBalance = (userId: string) => {
        const account = adminState.accounts.find((account) => account.id === userId);
        const totalBalance = account?.accounts.reduce((sum, account) => {
            return sum + (account.balance || 0);
        }, 0);
        return totalBalance;
    };

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Validate passwords match
        if (password !== confirmPassword) {
            toast.error("Passwords Don't Match");
            setIsLoading(false);

            return;
        }

        try {
            const user = await register(email, password, firstName, lastName, userName, country);

            if (user?.accountNumber) {
                toast.success("User Created Successfully", {
                    duration: 3000,
                    style: {
                        fontSize: "14px",
                    },
                });
            }

            // Reset form
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setCountry("");
            setUserName("")
        } catch (error) {
            console.log(error);
            toast.error(`User Registration Failed`);
        } finally {
            setIsLoading(false);
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
                                User Management
                            </h1>
                            <p className="text-gray-500">View and manage user accounts</p>
                        </div>
                        <Button
                            onClick={() => setIsAddUserModalOpen(true)}
                            className="bg-green-500 hover:bg-green-600 text-white"
                        >
                            <Plus className="mr-2 h-4 w-4" />
                            Add User
                        </Button>
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
                                            placeholder="Search by name, email, or ID..."
                                            className="pl-8 border-gray-200"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
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
                                            <SelectItem value="active">Active</SelectItem>
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="suspended">Suspended</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="kyc" className="text-sm font-medium">
                                        KYC Status
                                    </label>
                                    <Select value={kycFilter} onValueChange={setKycFilter}>
                                        <SelectTrigger id="kyc" className="border-gray-200 w-full">
                                            <SelectValue placeholder="All KYC Statuses" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All KYC Statuses</SelectItem>
                                            <SelectItem value="completed">Completed</SelectItem>
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="rejected">Rejected</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="date" className="text-sm font-medium">
                                        Registration Date
                                    </label>
                                    <Select>
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

                    {/* Users Table */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between border-b border-gray-100 pb-3">
                            <div>
                                <CardTitle className="text-lg font-medium">User Accounts</CardTitle>
                                <CardDescription>
                                    Showing {filteredUsers.length} users
                                </CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Export
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                                >
                                    <RefreshCw className="mr-2 h-4 w-4" />
                                    Refresh
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-transparent">
                                        <TableHead className="text-gray-500">S/N</TableHead>
                                        <TableHead className="text-gray-500">
                                            Account Number
                                        </TableHead>
                                        <TableHead className="text-gray-500">Full Name</TableHead>
                                        <TableHead className="text-gray-500">Email</TableHead>
                                        <TableHead className="text-gray-500">Gender</TableHead>
                                        <TableHead className="text-gray-500">Country</TableHead>
                                        <TableHead className="text-gray-500">Balance</TableHead>
                                        <TableHead className="text-gray-500">Role</TableHead>
                                        <TableHead className="text-gray-500">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredUsers.map((user, index) => (
                                        <TableRow key={user.uid}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell className="font-medium">
                                                {user.accountNumber}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <span>{user.fullName}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>{user.email.slice(0, 15)}...</TableCell>
                                            <TableCell>{user.gender || "N/A"}</TableCell>
                                            <TableCell>{user.country || "N/A"}</TableCell>
                                            <TableCell>
                                                $
                                                {(
                                                    getUserTotalBalance(user?.uid ?? "") || 0
                                                ).toLocaleString("en-US", {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2,
                                                })}
                                            </TableCell>
                                            <TableCell>
                                                <Badge>
                                                    {user.role.charAt(0).toUpperCase() +
                                                        user.role.slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => handleEditUser(user)}
                                                        className="h-8 w-8 cursor-pointer"
                                                    >
                                                        <Pencil className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => {
                                                            setSelectedUser(user.uid);
                                                            setShowUserProfile(true);
                                                        }}
                                                        className="h-8 w-8 cursor-pointer"
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>

            {/* User Profile Dialog */}
            {selectedUserData && (
                <Dialog open={showUserProfile} onOpenChange={setShowUserProfile}>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader className="mb-0">
                            <DialogTitle>User Profile</DialogTitle>
                            <DialogDescription>
                                Detailed information about {selectedUserData.fullName}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-2">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-16 w-16">
                                    <AvatarImage
                                        src="/placeholder.svg?height=64&width=64"
                                        alt={selectedUserData.fullName}
                                    />
                                    <AvatarFallback className="text-base">
                                        {selectedUserData.fullName
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="text-lg font-bold">
                                        {selectedUserData.fullName}
                                    </h3>
                                    <p className="text-gray-500 text-sm">
                                        {selectedUserData.email}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-100 py-4">
                                <div>
                                    <p className="text-xs text-gray-500">Account Number</p>
                                    <p className="font-medium text-sm ">
                                        {selectedUserData.accountNumber}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 ">Full Name</p>
                                    <p className="font-medium text-sm">
                                        {selectedUserData.fullName}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Role</p>
                                    <p className="font-medium text-sm">{selectedUserData.role}</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-xs text-gray-500">Email</p>
                                    <p className="font-medium text-sm">{selectedUserData.email}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Gender</p>
                                    <p className="font-medium text-sm">
                                        {selectedUserData.gender || "N/A"}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Phone Number</p>
                                    <p className="font-medium text-sm">
                                        {selectedUserData.phoneNumber || "N/A"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">Date of Birth</p>
                                    <p className="font-medium text-sm">
                                        {selectedUserData.dateOfBirth || "N/A"}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Country</p>
                                    <p className="font-medium text-sm">
                                        {selectedUserData.country}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Occupation</p>
                                    <p className="font-medium text-sm">
                                        {selectedUserData.occupation || "N/A"}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Sort Code</p>
                                    <p className="font-medium text-sm">
                                        {selectedUserData.sortcode || "N/A"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">Status</p>
                                    <Badge
                                        className={`
                    ${selectedUserData.status === "active" ? "bg-green-100 text-green-800" : ""}
                    ${selectedUserData.status === "pending" ? "bg-yellow-100 text-yellow-800" : ""}
                    ${selectedUserData.status === "suspended" ? "bg-red-100 text-red-800" : ""}
                  `}
                                    >
                                        {selectedUserData.status.charAt(0).toUpperCase() +
                                            selectedUserData.status.slice(1)}
                                    </Badge>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">KYC Status</p>
                                    <Badge
                                        className={`
                    ${
                        selectedUserData.kycStatus === "completed"
                            ? "bg-green-100 text-green-800"
                            : ""
                    }
                    ${
                        selectedUserData.kycStatus === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : ""
                    }
                    ${selectedUserData.kycStatus === "rejected" ? "bg-red-100 text-red-800" : ""}
                  `}
                                    >
                                        {selectedUserData.kycStatus.charAt(0).toUpperCase() +
                                            selectedUserData.kycStatus.slice(1)}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button
                                className="cursor-pointer"
                                onClick={() => setShowUserProfile(false)}
                            >
                                Close
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}

            {/* Edit User Dialog */}
            <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Edit User</DialogTitle>
                        <DialogDescription>
                            Make changes to user details here. Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    {editingUser && (
                        <div className="grid grid-cols-2 gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input
                                    id="fullName"
                                    value={editingUser.fullName}
                                    onChange={(e) =>
                                        setEditingUser({ ...editingUser, fullName: e.target.value })
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="gender">Gender</Label>
                                <Select
                                    value={editingUser.gender}
                                    onValueChange={(value) =>
                                        setEditingUser({ ...editingUser, gender: value })
                                    }
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phoneNumber">Phone Number</Label>
                                <Input
                                    id="phoneNumber"
                                    value={editingUser.phoneNumber}
                                    onChange={(e) =>
                                        setEditingUser({
                                            ...editingUser,
                                            phoneNumber: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                                <Input
                                    id="dateOfBirth"
                                    type="date"
                                    value={editingUser.dateOfBirth}
                                    onChange={(e) =>
                                        setEditingUser({
                                            ...editingUser,
                                            dateOfBirth: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="country">Country</Label>
                                <Input
                                    id="country"
                                    value={editingUser.country}
                                    onChange={(e) =>
                                        setEditingUser({ ...editingUser, country: e.target.value })
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="occupation">Occupation</Label>
                                <Input
                                    id="occupation"
                                    value={editingUser.occupation}
                                    onChange={(e) =>
                                        setEditingUser({
                                            ...editingUser,
                                            occupation: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="sortcode">Sort Code</Label>
                                <Input
                                    id="sortcode"
                                    value={editingUser.sortcode}
                                    onChange={(e) =>
                                        setEditingUser({ ...editingUser, sortcode: e.target.value })
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="role">Role</Label>
                                <Select
                                    value={editingUser.role}
                                    onValueChange={(value) =>
                                        setEditingUser({ ...editingUser, role: value as "user" })
                                    }
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="user">User</SelectItem>
                                        <SelectItem value="admin">Admin</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="status">Status</Label>
                                <Select
                                    value={editingUser.status}
                                    onValueChange={(value: UserStatus) =>
                                        setEditingUser({ ...editingUser, status: value })
                                    }
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="active">Active</SelectItem>
                                        <SelectItem value="pending">Pending</SelectItem>
                                        <SelectItem value="suspended">Suspended</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="kycStatus">KYC Status</Label>
                                <Select
                                    value={editingUser.kycStatus}
                                    onValueChange={(value: KYCStatus) =>
                                        setEditingUser({ ...editingUser, kycStatus: value })
                                    }
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select KYC status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="completed">Completed</SelectItem>
                                        <SelectItem value="pending">Pending</SelectItem>
                                        <SelectItem value="rejected">Rejected</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    )}
                    <DialogFooter>
                        <Button
                            variant="outline"
                            className="cursor-pointer"
                            onClick={() => setShowEditDialog(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={() => handleSaveUser(editingUser?.uid ?? "")}
                            disabled={!editingUser || isSaving}
                            className="bg-green-500 hover:bg-green-600 text-white cursor-pointer"
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

            {/* Add User Dialog */}
            <Dialog open={isAddUserModalOpen} onOpenChange={setIsAddUserModalOpen}>
                <DialogContent className="">
                    <DialogHeader>
                        <DialogTitle>Create an account</DialogTitle>
                        <DialogDescription>
                            Enter your details to create your account
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSignup}>
                        <div className="grid xl:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    type="text"
                                    required
                                    className="border-gray-200"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    id="lastName"
                                    type="text"
                                    required
                                    className="border-gray-200"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid xl:grid-cols-2 gap-4 my-3">
                            <div className="space-y-2">
                                <Label htmlFor="signup-email">Email</Label>
                                <Input
                                    id="signup-email"
                                    type="email"
                                    required
                                    className="border-gray-200"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="country">Country</Label>
                                <Select value={country} onValueChange={setCountry}>
                                    <SelectTrigger className="border-gray-200 w-full h-11">
                                        <SelectValue placeholder="Select your country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {countries.map((country) => (
                                            <SelectItem key={country} value={country}>
                                                {country}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid xl:grid-cols-2 gap-4 space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="signup-password">Password</Label>
                                <div className="relative">
                                    <Input
                                        id="signup-password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className="border-gray-200 pr-10"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute cursor-pointer right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                        <span className="sr-only">Toggle password visibility</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <Input
                                    id="confirm-password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="border-gray-200"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <DialogFooter>
                            <Button
                                type="submit"
                                className="w-full h-[40px] cursor-pointer my-5 bg-green-500 hover:bg-green-600"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span className="flex items-center">
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
                                        Creating account...
                                    </span>
                                ) : (
                                    "Create account"
                                )}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
