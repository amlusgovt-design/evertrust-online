import Link from "next/link";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Building2 className="h-6 w-6 text-emerald-600" />
                        <span className="text-xl font-bold">Evertrust Online Bank</span>
                    </Link>
                </div>
                <nav className="hidden md:flex gap-6">
                    <Link
                        href="/online-business"
                        className="text-sm font-medium hover:text-emerald-600 transition-colors"
                    >
                        Online Business
                    </Link>
                    <Link
                        href="/business-account"
                        className="text-sm font-medium hover:text-emerald-600 transition-colors"
                    >
                        Business Accounts
                    </Link>
                    <Link
                        href="/loans"
                        className="text-sm font-medium hover:text-emerald-600 transition-colors"
                    >
                        Loans & Financing
                    </Link>

                    <Link
                        href="/about"
                        className="text-sm font-medium hover:text-emerald-600 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-medium hover:text-emerald-600 transition-colors"
                    >
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/auth">
                        <Button
                            variant="outline"
                            size="sm"
                            className="hidden md:flex cursor-pointer"
                        >
                            Log In
                        </Button>
                    </Link>
                    <Link href="/auth?register=true">
                        <Button
                            size="sm"
                            className="bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
                        >
                            Get Started
                        </Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
