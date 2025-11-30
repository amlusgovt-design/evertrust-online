import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BarChart3, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Online Banking | Evertrust",
    description: "Powerful online banking solutions for businesses of all sizes",
};

export default function OnlineBankingPage() {
    return (
        <div className="container mx-auto px-4 py-5 pb-8 lg:px-10">
            {/* Replace the existing hero section with this more engaging one */}
            <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-20 md:py-32">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-slate-700/25"></div>
                <div className="container mx-auto relative px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
                                <span className="font-medium">Digital Banking Solutions</span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                Powerful <span className="text-emerald-600">Online Banking</span>{" "}
                                for Your Business
                            </h1>
                            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px]">
                                Manage your business finances anytime, anywhere with our secure,
                                feature-rich digital banking platform designed specifically for
                                business needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-emerald-600 hover:bg-emerald-700"
                                >
                                    <Link href="/auth">
                                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link href="/contact">Schedule a Demo</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative lg:ml-auto">
                            <div className="relative mx-auto aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 shadow-lg md:aspect-[16/9]">
                                <Image
                                    src="/images/dashboard.jpg"
                                    alt="Evertrust Online Banking Dashboard"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-0 -left-40 h-24 w-64 rounded-lg bg-white p-4 shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-emerald-100 p-2">
                                        <ShieldCheck className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Security Rating</p>
                                        <p className="text-2xl font-bold text-emerald-600">A+</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute right-10 -top-2 h-24 w-64 rounded-lg bg-white p-4 shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-emerald-100 p-2">
                                        <BarChart3 className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Platform Uptime</p>
                                        <p className="text-2xl font-bold text-emerald-600">99.9%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                    <h2 className="text-3xl font-bold mb-6">
                        Manage Your Business Finances Anytime, Anywhere
                    </h2>
                    <p className="text-lg mb-6">
                        Evertrust&apos;s online banking platform provides businesses with secure, 24/7
                        access to accounts, transactions, and financial tools designed to streamline
                        your operations and help your business thrive.
                    </p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                            <svg
                                className="h-6 w-6 mr-2 text-emerald-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>Real-time account monitoring and alerts</span>
                        </li>
                        <li className="flex items-start">
                            <svg
                                className="h-6 w-6 mr-2 text-emerald-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>Secure payment processing and wire transfers</span>
                        </li>
                        <li className="flex items-start">
                            <svg
                                className="h-6 w-6 mr-2 text-emerald-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>Integrated payroll and tax management</span>
                        </li>
                        <li className="flex items-start">
                            <svg
                                className="h-6 w-6 mr-2 text-emerald-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>Cash flow forecasting and financial reporting</span>
                        </li>
                    </ul>
                    <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                        <Link href="/auth">Get Started</Link>
                    </Button>
                </div>
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src="/images/dashboard.jpg"
                        alt="Evertrust Online Banking Dashboard"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Online Banking Features</h2>

                <Tabs defaultValue="accounts" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="accounts">Account Management</TabsTrigger>
                        <TabsTrigger value="payments">Payments & Transfers</TabsTrigger>
                        <TabsTrigger value="reporting">Financial Reporting</TabsTrigger>
                        <TabsTrigger value="security">Security & Controls</TabsTrigger>
                    </TabsList>
                    <TabsContent value="accounts" className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Multi-Account Dashboard</CardTitle>
                                    <CardDescription>
                                        Centralized view of all your business accounts
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Monitor balances, transactions, and account activity across
                                        checking, savings, credit lines, and investment accounts
                                        from a single dashboard.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Transaction Management</CardTitle>
                                    <CardDescription>
                                        Detailed transaction history and categorization
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        View, search, filter, and export transaction data with
                                        automatic categorization for simplified expense tracking and
                                        reconciliation.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Account Alerts</CardTitle>
                                    <CardDescription>
                                        Customizable notifications for account activity
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Set up alerts for balance thresholds, large transactions,
                                        payment due dates, and suspicious activity to stay informed
                                        about your accounts.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Statement Management</CardTitle>
                                    <CardDescription>
                                        Digital access to account statements
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Access, download, and print up to 7 years of account
                                        statements in multiple formats for record-keeping and tax
                                        purposes.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="payments" className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>ACH Transfers</CardTitle>
                                    <CardDescription>
                                        Automated Clearing House payment processing
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Process direct deposits, vendor payments, and recurring
                                        transfers with our secure ACH system designed for business
                                        efficiency.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Wire Transfers</CardTitle>
                                    <CardDescription>
                                        Domestic and international wire services
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Send and receive domestic and international wire transfers
                                        with competitive exchange rates and transparent fee
                                        structures.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Bill Pay</CardTitle>
                                    <CardDescription>
                                        Centralized bill payment system
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Schedule one-time or recurring payments to vendors,
                                        utilities, and service providers with automatic payment
                                        confirmations.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Payroll Processing</CardTitle>
                                    <CardDescription>Integrated payroll management</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Process payroll, manage tax withholdings, and distribute
                                        employee payments efficiently through our secure platform.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="reporting" className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Financial Dashboards</CardTitle>
                                    <CardDescription>
                                        Visual representation of financial data
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Access customizable dashboards with charts and graphs that
                                        visualize cash flow, revenue, expenses, and other key
                                        financial metrics.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Cash Flow Analysis</CardTitle>
                                    <CardDescription>
                                        Predictive cash flow management
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Forecast future cash positions based on scheduled payments,
                                        receivables, and historical patterns to optimize working
                                        capital.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Expense Tracking</CardTitle>
                                    <CardDescription>
                                        Categorized expense monitoring
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Track and categorize business expenses with custom tags and
                                        categories for simplified tax preparation and financial
                                        analysis.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Export Capabilities</CardTitle>
                                    <CardDescription>
                                        Data export for accounting integration
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Export financial data in multiple formats (CSV, QFX, PDF)
                                        for seamless integration with accounting software like
                                        QuickBooks, Xero, and Sage.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                    <TabsContent value="security" className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Multi-Factor Authentication</CardTitle>
                                    <CardDescription>Enhanced login security</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Protect your accounts with multi-factor authentication
                                        options including SMS, email, authenticator apps, and
                                        biometric verification.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>User Permissions</CardTitle>
                                    <CardDescription>Role-based access controls</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Assign specific permissions to employees based on their
                                        roles, with customizable approval workflows for transactions
                                        above set thresholds.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Fraud Monitoring</CardTitle>
                                    <CardDescription>
                                        Advanced fraud detection systems
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Our AI-powered fraud detection system monitors account
                                        activity 24/7 to identify and prevent unauthorized
                                        transactions.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Audit Logs</CardTitle>
                                    <CardDescription>
                                        Comprehensive activity tracking
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Access detailed logs of all account activities, including
                                        logins, transactions, and setting changes for security and
                                        compliance purposes.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Integration Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader className="text-center">
                            <div className="mx-auto bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    className="h-8 w-8 text-emerald-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <CardTitle>Accounting Software</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="mb-4">
                                Seamlessly integrate with popular accounting platforms including
                                QuickBooks, Xero, FreshBooks, and Sage.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Automate data synchronization to eliminate manual entry and reduce
                                errors.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="text-center">
                            <div className="mx-auto bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    className="h-8 w-8 text-emerald-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <CardTitle>ERP Systems</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="mb-4">
                                Connect with enterprise resource planning systems like SAP, Oracle
                                NetSuite, and Microsoft Dynamics.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Centralize financial data across your entire business operations.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="text-center">
                            <div className="mx-auto bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <svg
                                    className="h-8 w-8 text-emerald-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                    />
                                </svg>
                            </div>
                            <CardTitle>Payment Processors</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="mb-4">
                                Integrate with payment gateways and processors including Stripe,
                                PayPal, Square, and Authorize.net.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Streamline payment reconciliation and provide a unified view of all
                                transactions.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8 mb-20">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Transform Your Business Banking?
                    </h2>
                    <p className="text-lg mb-8">
                        Join thousands of businesses that trust Evertrust for their online banking needs.
                        Our platform is designed to grow with your business, from startup to
                        enterprise.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                            <Link href="/auth">Open an Account</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/contact">Schedule a Demo</Link>
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <div className="text-4xl font-bold text-emerald-600 mb-2">99.9%</div>
                        <p className="text-sm text-muted-foreground">Platform Uptime</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
                        <p className="text-sm text-muted-foreground">Customer Support</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-emerald-600 mb-2">50k+</div>
                        <p className="text-sm text-muted-foreground">Business Customers</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-emerald-600 mb-2">$10B+</div>
                        <p className="text-sm text-muted-foreground">Transactions Processed</p>
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            How secure is Evertrust&apos;s online banking platform?
                        </h3>
                        <p className="text-muted-foreground">
                            Our platform employs bank-grade security including 256-bit encryption,
                            multi-factor authentication, and continuous monitoring. We also conduct
                            regular security audits and penetration testing to ensure your data
                            remains protected.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            Can I set up different access levels for my employees?
                        </h3>
                        <p className="text-muted-foreground">
                            Yes, our platform offers customizable role-based access controls. You
                            can assign specific permissions to different users, set transaction
                            approval thresholds, and maintain detailed audit logs of all activities.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            What accounting software integrations are available?
                        </h3>
                        <p className="text-muted-foreground">
                            Evertrust integrates with all major accounting platforms including
                            QuickBooks, Xero, FreshBooks, Sage, and many others. Our API also allows
                            for custom integrations with proprietary systems.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            Is there a mobile app for banking on the go?
                        </h3>
                        <p className="text-muted-foreground">
                            Yes, our mobile banking app is available for both iOS and Android
                            devices. It offers the same robust features as our web platform,
                            allowing you to manage your business finances from anywhere.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            What support options are available if I need assistance?
                        </h3>
                        <p className="text-muted-foreground">
                            We offer 24/7 customer support via phone, email, and live chat. Business
                            accounts also receive a dedicated relationship manager who can provide
                            personalized assistance with your banking needs.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">
                            How quickly can I get set up with online banking?
                        </h3>
                        <p className="text-muted-foreground">
                            Most businesses can be fully onboarded within 1-2 business days. Our
                            streamlined digital application process minimizes paperwork and gets you
                            up and running quickly.
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Experience Evertrust Online Banking Today</h2>
                <p className="max-w-2xl mx-auto mb-8 text-lg">
                    Join the thousands of businesses that trust Evertrust for their financial needs. Our
                    online banking platform is designed to help your business thrive.
                </p>
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href="/auth">Get Started Now</Link>
                </Button>
            </div>
        </div>
    );
}
