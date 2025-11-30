import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    BarChart3,
    Building2,
    Calculator,
    CheckCircle2,
    CreditCard,
    FileText,
    Landmark,
    LineChart,
    ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "Business Loans & Financing | Evertrust Financial Services",
    description:
        "Flexible business financing solutions including lines of credit, term loans, equipment financing, and SBA loans to help your business grow.",
};

export default function LoansPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-20 md:py-32">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-slate-700/25"></div>
                <div className="container mx-auto relative px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
                                <span className="font-medium">Business Financing Solutions</span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                Flexible Financing for{" "}
                                <span className="text-emerald-600">Business Growth</span>
                            </h1>
                            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px]">
                                Access the capital your business needs with our comprehensive range
                                of financing solutions designed to support your growth, expansion,
                                and operational needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-emerald-600 hover:bg-emerald-700"
                                >
                                    <Link href="/contact">
                                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link href="#loan-calculator">
                                        <Calculator className="mr-2 h-4 w-4" /> Loan Calculator
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative lg:ml-auto">
                            <div className="relative mx-auto aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 shadow-lg md:aspect-[16/9]">
                                <Image
                                    src="/images/img3.jpg"
                                    alt="Business Financing"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 h-24 w-64 rounded-lg bg-white p-4 shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-emerald-100 p-2">
                                        <LineChart className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Approval Rate</p>
                                        <p className="text-2xl font-bold text-emerald-600">92%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -right-6 -top-6 h-24 w-64 rounded-lg bg-white p-4 shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-emerald-100 p-2">
                                        <BarChart3 className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Funding Time</p>
                                        <p className="text-2xl font-bold text-emerald-600">
                                            24-48 hrs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Loan Types Section */}
            <section className="py-20 md:py-32" id="lines-of-credit">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                                Financing Options
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Business Loan Solutions
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                We offer a variety of loan options tailored to meet your specific
                                business needs, whether you&apos;re looking to manage cash flow,
                                purchase equipment, or expand your operations.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="border-2 border-emerald-50 transition-all hover:border-emerald-100 hover:shadow-md">
                            <CardHeader>
                                <div className="mb-2 rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center">
                                    <LineChart className="h-6 w-6 text-emerald-600" />
                                </div>
                                <CardTitle>Business Lines of Credit</CardTitle>
                                <CardDescription>Flexible funding when you need it</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    Access revolving funds to manage cash flow, handle unexpected
                                    expenses, or take advantage of growth opportunities with our
                                    flexible business lines of credit.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Borrow only what you need, when you need it</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Pay interest only on the amount you use</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Credit limits from $10,000 to $500,000</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Competitive variable interest rates</span>
                                    </li>
                                </ul>
                                <Button
                                    asChild
                                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                                >
                                    <Link href="/contact">Apply Now</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card
                            className="border-2 border-emerald-50 transition-all hover:border-emerald-100 hover:shadow-md"
                            id="equipment"
                        >
                            <CardHeader>
                                <div className="mb-2 rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center">
                                    <Building2 className="h-6 w-6 text-emerald-600" />
                                </div>
                                <CardTitle>Equipment Financing</CardTitle>
                                <CardDescription>
                                    Acquire essential business equipment
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    Purchase the equipment your business needs to operate
                                    efficiently and grow with our equipment financing solutions that
                                    preserve your working capital.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Finance up to 100% of equipment cost</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Fixed interest rates and predictable payments</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Terms up to 7 years based on equipment type</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>
                                            Potential tax benefits (consult your tax advisor)
                                        </span>
                                    </li>
                                </ul>
                                <Button
                                    asChild
                                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                                >
                                    <Link href="/contact">Apply Now</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card
                            className="border-2 border-emerald-50 transition-all hover:border-emerald-100 hover:shadow-md"
                            id="commercial"
                        >
                            <CardHeader>
                                <div className="mb-2 rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center">
                                    <Landmark className="h-6 w-6 text-emerald-600" />
                                </div>
                                <CardTitle>Commercial Real Estate</CardTitle>
                                <CardDescription>
                                    Property acquisition and development
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    Secure financing for purchasing, refinancing, or developing
                                    commercial properties with our flexible commercial real estate
                                    loan options.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Competitive fixed and variable rate options</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Loan amounts from $250,000 to $10 million</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Terms up to 25 years with amortization options</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>
                                            Financing for owner-occupied and investment properties
                                        </span>
                                    </li>
                                </ul>
                                <Button
                                    asChild
                                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                                >
                                    <Link href="/contact">Apply Now</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-50 transition-all hover:border-emerald-100 hover:shadow-md">
                            <CardHeader>
                                <div className="mb-2 rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center">
                                    <CreditCard className="h-6 w-6 text-emerald-600" />
                                </div>
                                <CardTitle>Term Loans</CardTitle>
                                <CardDescription>Long-term financing solutions</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    Fund major investments, expansion projects, or business
                                    acquisitions with our term loans that provide a lump sum with
                                    structured repayment schedules.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Loan amounts from $25,000 to $5 million</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Fixed or variable interest rate options</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Terms from 1 to 10 years based on purpose</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>
                                            Predictable monthly payments for easier budgeting
                                        </span>
                                    </li>
                                </ul>
                                <Button
                                    asChild
                                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                                >
                                    <Link href="/contact">Apply Now</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card
                            className="border-2 border-emerald-50 transition-all hover:border-emerald-100 hover:shadow-md"
                            id="sba"
                        >
                            <CardHeader>
                                <div className="mb-2 rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center">
                                    <ShieldCheck className="h-6 w-6 text-emerald-600" />
                                </div>
                                <CardTitle>SBA Loans</CardTitle>
                                <CardDescription>Government-backed financing</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    Take advantage of Small Business Administration (SBA) loan
                                    programs with our preferred SBA lender status, offering
                                    favorable terms for qualified businesses.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>SBA 7(a), 504, and Express loan options</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Lower down payments than conventional loans</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Longer repayment terms up to 25 years</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Competitive interest rates with SBA guarantees</span>
                                    </li>
                                </ul>
                                <Button
                                    asChild
                                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                                >
                                    <Link href="/contact">Apply Now</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-50 transition-all hover:border-emerald-100 hover:shadow-md">
                            <CardHeader>
                                <div className="mb-2 rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center">
                                    <FileText className="h-6 w-6 text-emerald-600" />
                                </div>
                                <CardTitle>Invoice Financing</CardTitle>
                                <CardDescription>
                                    Improve cash flow from receivables
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    Convert your outstanding invoices into immediate working capital
                                    with our invoice financing solutions, helping you bridge cash
                                    flow gaps while waiting for customer payments.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Advance rates up to 90% of invoice value</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Quick funding, often within 24-48 hours</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>No additional debt on your balance sheet</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Flexible financing that grows with your sales</span>
                                    </li>
                                </ul>
                                <Button
                                    asChild
                                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                                >
                                    <Link href="/contact">Apply Now</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Loan Process Section */}
            <section className="bg-emerald-50 py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                                Simple Application Process
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                How to Apply for Business Financing
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our streamlined application process makes it easy to get the
                                financing your business needs with minimal paperwork and quick
                                decisions.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-4">
                        {[
                            {
                                step: 1,
                                title: "Consultation",
                                description:
                                    "Speak with a business financing specialist to discuss your needs and explore the best options for your business.",
                                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                            },
                            {
                                step: 2,
                                title: "Application",
                                description:
                                    "Complete our simple application form and provide the required documentation for your selected financing option.",
                                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                            },
                            {
                                step: 3,
                                title: "Review",
                                description:
                                    "Our team will review your application and documentation, typically providing a decision within 2-3 business days.",
                                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                            },
                            {
                                step: 4,
                                title: "Funding",
                                description:
                                    "Once approved, we'll finalize the paperwork and disburse the funds to your business account, often within 24-48 hours.",
                                icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z",
                            },
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="relative mb-4">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
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
                                                d={step.icon}
                                            />
                                        </svg>
                                    </div>
                                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
                                        {step.step}
                                    </div>
                                </div>
                                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                                <p className="text-gray-500">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                            <Link href="/contact">Start Your Application</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Loan Calculator Section */}
            <section className="py-20 md:py-32" id="loan-calculator">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
                                <span className="font-medium">Financial Planning Tool</span>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Business Loan Calculator
                            </h2>
                            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Use our loan calculator to estimate monthly payments, total interest
                                costs, and see amortization schedules for different loan scenarios.
                            </p>

                            <div className="space-y-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Loan Amount</label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                                                $
                                            </span>
                                            <input
                                                type="text"
                                                className="w-full rounded-md border border-gray-300 py-2 pl-8 pr-3"
                                                placeholder="100,000"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">
                                            Interest Rate (%)
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full rounded-md border border-gray-300 py-2 px-3"
                                            placeholder="5.5"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">
                                            Loan Term (Years)
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full rounded-md border border-gray-300 py-2 px-3"
                                            placeholder="5"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">
                                            Payment Frequency
                                        </label>
                                        <select className="w-full rounded-md border border-gray-300 py-2 px-3">
                                            <option>Monthly</option>
                                            <option>Bi-weekly</option>
                                            <option>Weekly</option>
                                        </select>
                                    </div>
                                </div>
                                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                    Calculate
                                </Button>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-4">Loan Summary</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Monthly Payment</p>
                                        <p className="text-xl font-bold text-emerald-600">
                                            $1,887.12
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Total Interest</p>
                                        <p className="text-xl font-bold text-emerald-600">
                                            $13,227.20
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Total Payments</p>
                                        <p className="text-xl font-bold text-emerald-600">
                                            $113,227.20
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Effective Interest Rate
                                        </p>
                                        <p className="text-xl font-bold text-emerald-600">5.5%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                                <Image
                                    src="/images/solution.jpg"
                                    alt="Business Loan Planning"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 h-32 w-64 rounded-lg bg-white p-4 shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-emerald-100 p-2">
                                        <Calculator className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Need Help?</p>
                                        <p className="text-sm text-gray-500">
                                            Our financing specialists can help you find the right
                                            loan solution.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-50 py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                                Common Questions
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Frequently Asked Questions
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Find answers to common questions about our business financing
                                options and application process.
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto max-w-3xl">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-semibold">
                                    What documents do I need to apply for a business loan?
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="mb-4">
                                        The specific documentation required varies by loan type and
                                        amount, but generally includes:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 mb-4">
                                        <li>
                                            Business financial statements (balance sheet, income
                                            statement, cash flow statement) for the past 2-3 years
                                        </li>
                                        <li>
                                            Personal and business tax returns for the past 2-3 years
                                        </li>
                                        <li>
                                            Business plan or project proposal (for new businesses or
                                            specific projects)
                                        </li>
                                        <li>Business licenses and registrations</li>
                                        <li>
                                            Personal financial statements for all owners with 20% or
                                            greater ownership
                                        </li>
                                        <li>Bank statements for the past 3-6 months</li>
                                        <li>Collateral documentation (for secured loans)</li>
                                    </ul>
                                    <p>
                                        Our business financing specialists will provide you with a
                                        specific checklist based on your loan type and business
                                        situation.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg font-semibold">
                                    How long does the loan approval process take?
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="mb-4">
                                        Our approval timeline varies based on the loan type and
                                        amount:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 mb-4">
                                        <li>
                                            Lines of credit and invoice financing: Typically 1-3
                                            business days
                                        </li>
                                        <li>
                                            Term loans and equipment financing: Usually 3-5 business
                                            days
                                        </li>
                                        <li>Commercial real estate loans: Generally 2-4 weeks</li>
                                        <li>
                                            SBA loans: Typically 3-6 weeks due to additional
                                            government requirements
                                        </li>
                                    </ul>
                                    <p>
                                        We prioritize efficiency in our approval process while
                                        ensuring thorough evaluation of each application. Our team
                                        will keep you updated on your application status throughout
                                        the process.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg font-semibold">
                                    What factors affect my business loan interest rate?
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="mb-4">
                                        Several factors influence the interest rate on your business
                                        loan:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 mb-4">
                                        <li>Business credit score and history</li>
                                        <li>Personal credit scores of business owners</li>
                                        <li>
                                            Time in business (startups typically face higher rates)
                                        </li>
                                        <li>Annual revenue and cash flow stability</li>
                                        <li>Industry risk factors</li>
                                        <li>Loan type, amount, and term length</li>
                                        <li>
                                            Collateral provided (secured loans typically offer lower
                                            rates)
                                        </li>
                                        <li>Current market conditions and benchmark rates</li>
                                    </ul>
                                    <p>
                                        Our business financing specialists can provide personalized
                                        rate estimates based on your specific business profile and
                                        financing needs.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-lg font-semibold">
                                    Can I apply for a business loan with less-than-perfect credit?
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="mb-4">
                                        Yes, we consider applications from businesses and owners
                                        with less-than-perfect credit. While credit scores are
                                        important factors in loan decisions, we take a holistic
                                        approach to evaluating applications.
                                    </p>
                                    <p className="mb-4">We also consider:</p>
                                    <ul className="list-disc pl-5 space-y-2 mb-4">
                                        <li>Business cash flow and revenue trends</li>
                                        <li>Time in business and industry experience</li>
                                        <li>Collateral availability</li>
                                        <li>Business plan and growth potential</li>
                                        <li>
                                            Explanation of past credit issues and steps taken to
                                            address them
                                        </li>
                                    </ul>
                                    <p>
                                        Businesses with lower credit scores may qualify for certain
                                        loan types with adjusted terms or may benefit from our
                                        credit-building financial products. We recommend scheduling
                                        a consultation with our financing specialists to discuss
                                        your specific situation.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-lg font-semibold">
                                    Is collateral required for all business loans?
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="mb-4">
                                        No, collateral requirements vary by loan type and amount:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 mb-4">
                                        <li>
                                            <strong>Secured loans</strong> (like commercial real
                                            estate loans) require specific collateral
                                        </li>
                                        <li>
                                            <strong>Equipment financing</strong> typically uses the
                                            purchased equipment as collateral
                                        </li>
                                        <li>
                                            <strong>SBA loans</strong> generally require collateral
                                            when available, but may be approved with limited
                                            collateral
                                        </li>
                                        <li>
                                            <strong>Business lines of credit</strong> may be secured
                                            or unsecured depending on the credit limit and business
                                            qualifications
                                        </li>
                                        <li>
                                            <strong>Invoice financing</strong> uses your outstanding
                                            invoices as collateral
                                        </li>
                                        <li>
                                            <strong>Unsecured term loans</strong> are available for
                                            qualified businesses with strong credit and financial
                                            performance
                                        </li>
                                    </ul>
                                    <p>
                                        For loans without specific collateral requirements, we may
                                        request a personal guarantee from business owners with
                                        significant ownership stakes.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger className="text-lg font-semibold">
                                    Can I pay off my business loan early?
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="mb-4">
                                        Yes, all of our business loans can be paid off early. Our
                                        approach to prepayment varies by loan type:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 mb-4">
                                        <li>
                                            <strong>Lines of credit</strong> can be paid down at any
                                            time with no penalties, reducing your interest costs
                                        </li>
                                        <li>
                                            <strong>Term loans</strong> typically allow early payoff
                                            with minimal or no prepayment penalties after the first
                                            year
                                        </li>
                                        <li>
                                            <strong>Equipment financing</strong> and{" "}
                                            <strong>commercial real estate loans</strong> may have
                                            prepayment penalties that decline over time
                                        </li>
                                        <li>
                                            <strong>SBA loans</strong> with terms over 15 years may
                                            have prepayment penalties during the first three years
                                        </li>
                                    </ul>
                                    <p>
                                        The specific prepayment terms will be clearly outlined in
                                        your loan agreement. Our goal is to provide flexible
                                        financing that adapts to your business needs, including the
                                        ability to reduce debt when your cash flow allows.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="mb-4 text-gray-500">
                            Still have questions about our business financing options?
                        </p>
                        <Button asChild variant="outline">
                            <Link href="/contact">Contact Our Financing Team</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-emerald-600 py-20 md:py-32 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Ready to Fuel Your Business Growth?
                            </h2>
                            <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Whether you&apos;re looking to expand operations, purchase
                                equipment, or manage cash flow, our business financing solutions can
                                help you achieve your goals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white text-emerald-600 hover:bg-gray-100"
                                >
                                    <Link href="/contact">Apply Now</Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="text-white border-white hover:bg-emerald-700"
                                >
                                    <Link href="/contact">Schedule a Consultation</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="rounded-lg bg-emerald-500 p-4">
                                    <div className="text-3xl font-bold">$500M+</div>
                                    <div className="text-sm">Business Loans Funded</div>
                                </div>
                                <div className="rounded-lg bg-emerald-500 p-4">
                                    <div className="text-3xl font-bold">92%</div>
                                    <div className="text-sm">Approval Rate</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="rounded-lg bg-emerald-500 p-4">
                                    <div className="text-3xl font-bold">24-48</div>
                                    <div className="text-sm">Hour Funding Time</div>
                                </div>
                                <div className="rounded-lg bg-emerald-500 p-4">
                                    <div className="text-3xl font-bold">5,000+</div>
                                    <div className="text-sm">Businesses Financed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
