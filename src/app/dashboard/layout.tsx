"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
    Bell,
    CreditCard,
    Home,
    LineChart,
    LogOut,
    Menu,
    Send,
    Settings,
    Users,
    FileText,
    HandCoins,
    Building2,
    // Shield,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { getSession, logout } from "@/lib/localStorage";
import { Session } from "@/lib/localStorage";
import { useApp } from "@/context/AppContext";

// Function to extract initials from a full name
const getInitials = (fullName: string) => {
    const names = fullName.split(" ");
    const initials = names.map((name) => name.charAt(0)).join("");
    return initials.toUpperCase();
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [session, setSession] = useState<Session | null>(null);
    const pathname = usePathname();
    const router = useRouter();

    // Close mobile nav when pathname changes
    useEffect(() => {
        setIsMobileNavOpen(false);
    }, [pathname]);

    // Check if we're in the admin dashboard
    const isAdminDashboard = pathname?.includes("/dashboard/admin") || false;

    useEffect(() => {
        // Check if user is logged in
        const currentSession = getSession();

        if (!currentSession) {
            router.push("/auth");
            return;
        }

        // Check if user has access to this dashboard
        if (isAdminDashboard && currentSession.role !== "admin") {
            router.push("/dashboard/user");
            return;
        }

        if (!isAdminDashboard && currentSession.role === "admin") {
            router.push("/dashboard/admin");
        }

        setSession(currentSession);
    }, [isAdminDashboard, router]);

    // Define navigation items for both admin and user dashboards
    const adminNavItems = [
        { href: "/dashboard/admin", label: "Dashboard", icon: Home },
        { href: "/dashboard/admin/users", label: "Users", icon: Users },
        { href: "/dashboard/admin/transactions", label: "Transactions", icon: FileText },
        // { href: "/dashboard/admin/transfer", label: "Transfer", icon: Send },
        { href: "/dashboard/admin/accounts", label: "Accounts", icon: CreditCard },
        // { href: "/dashboard/admin/compliance", label: "Compliance", icon: Shield },
    ];

    const userNavItems = [
        { href: "/dashboard/user", label: "Dashboard", icon: Home },
        { href: "/dashboard/user/transactions", label: "Transactions", icon: LineChart },
        { href: "/dashboard/user/accounts", label: "Accounts", icon: CreditCard },
        { href: "/dashboard/user/transfers", label: "Transfers & Payments", icon: Send },
        { href: "/dashboard/user/loan", label: "Apply For Loan", icon: HandCoins },
        { href: "/dashboard/user/card", label: "Enrol For Card", icon: CreditCard },
        { href: "/dashboard/user/settings", label: "Settings", icon: Settings },
    ];

    // Select navigation items based on dashboard type
    const navItems = isAdminDashboard ? adminNavItems : userNavItems;

    const isActive = (path: string) => pathname === path;

    const { state } = useApp();

    const handleLogout = () => {
        logout();
        router.push("/auth");
    };

    if (!session) {
        return null;
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar (desktop only) */}
            <aside className="hidden w-64 flex-col border-r bg-white md:flex md:fixed md:inset-y-0 md:z-40">
                <div className="flex h-16 border-b px-8 items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Building2 className="h-6 w-6 text-emerald-600" />
                        <span className="text-sm text-emerald-600 font-bold">Evertrust Online Bank</span>
                    </Link>
                </div>
                <nav className="flex-1 space-y-3 px-3 py-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 text-base rounded-lg px-3 py-2 transition-colors ${
                                isActive(item.href)
                                    ? "bg-green-50 text-green-700 font-medium"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="border-t p-4">
                    <Button
                        variant="ghost"
                        className="w-full cursor-pointer justify-start gap-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        onClick={handleLogout}
                    >
                        <LogOut className="h-5 w-5" />
                        Logout
                    </Button>
                </div>
            </aside>

            {/* Main content wrapper */}
            <div className="flex flex-1 flex-col md:pl-64">
                {/* Header */}
                <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white  px-4 md:px-6">
                    <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-8 w-8" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-72 pl-7 py-10">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <nav className="grid gap-6 py-6 text-lg font-medium">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <span className="font-bold text-green-600">Evertrust</span>
                                </Link>
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-2 ${
                                            isActive(item.href) ? "text-green-600" : "text-gray-600"
                                        }`}
                                    >
                                        <item.icon className="h-5 w-5" />
                                        {item.label}
                                    </Link>
                                ))}
                                <button
                                    className="flex items-center gap-2 mt-20 text-gray-600"
                                    onClick={handleLogout}
                                >
                                    <LogOut className="h-5 w-5" />
                                    Log Out
                                </button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="ml-auto flex items-center gap-4">
                        <form className="hidden md:flex">
                            <div className="relative">
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    className="w-64 rounded-lg bg-gray-50 pl-8 md:w-80 lg:w-96 border-gray-200"
                                />
                                <svg
                                    className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                            </div>
                        </form>
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5 text-gray-600" />
                            <span className="sr-only">Notifications</span>
                            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs bg-green-600">
                                0
                            </Badge>
                        </Button>
                        <div className="relative">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage
                                        src="/placeholder.svg?height=32&width=32"
                                        alt="User"
                                    />
                                    <AvatarFallback>
                                        {getInitials(state.user?.fullName || "")}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Main content */}
                <main className="flex-1 overflow-auto p-6">{children}</main>
            </div>
        </div>
    );
}
