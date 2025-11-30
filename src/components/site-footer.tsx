import Link from "next/link";
import { Building2 } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="border-t bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
                    <div className="flex flex-col gap-2 md:w-1/4">
                        <div className="flex items-center gap-2">
                            <Building2 className="h-6 w-6 text-emerald-600" />
                            <span className="text-xl font-bold">Evertrust Online Bank</span>
                        </div>
                        <p className="text-sm text-gray-500">
                            Comprehensive financial solutions for businesses of all sizes.
                            Empowering growth through innovative banking services.
                        </p>
                        <div className="mt-4 flex space-x-4">
                            <Link href="#" className="text-gray-500 hover:text-emerald-600">
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
                                    className="h-5 w-5"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-emerald-600">
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
                                    className="h-5 w-5"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-emerald-600">
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
                                    className="h-5 w-5"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>
                    <nav className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium">Banking</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link
                                        href="/online-banking"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        Online Banking
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/business-banking"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        Business Banking
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/business-banking#treasury"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        Treasury Management
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/business-banking#international"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        International Banking
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium">Financing</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link
                                        href="/loans"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        Business Loans
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/loans#lines-of-credit"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        Lines of Credit
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/loans#equipment"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        Equipment Financing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/loans#sba"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        SBA Loans
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link
                                        href="/about"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about#leadership"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        Leadership
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about#careers"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-sm font-medium">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link
                                        href="/privacy"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/terms"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/security"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        Security
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/accessibility"
                                        className="text-gray-500 hover:text-emerald-600"
                                    >
                                        Accessibility
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="border-t py-6">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} Evertrust Financial Services. All rights
                            reserved.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="/privacy"
                                className="text-xs text-gray-500 hover:text-emerald-600"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-xs text-gray-500 hover:text-emerald-600"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="/cookies"
                                className="text-xs text-gray-500 hover:text-emerald-600"
                            >
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
