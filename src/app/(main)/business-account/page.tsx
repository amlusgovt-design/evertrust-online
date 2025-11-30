import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Building2, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "Business Banking | Evertrust",
    description: "Comprehensive business banking solutions for companies of all sizes",
};

export default function BusinessBankingPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-20 md:py-32">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-slate-700/25"></div>
                <div className="container relative px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
                                <span className="font-medium">Comprehensive Banking Solutions</span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                Business Banking{" "}
                                <span className="text-emerald-600">Reimagined</span>
                            </h1>
                            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px]">
                                Tailored financial services to help your business grow, scale, and
                                succeed in today&apos;s competitive marketplace.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-emerald-600 hover:bg-emerald-700"
                                >
                                    <Link href="/auth">
                                        Open an Account <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link href="/contact">Speak to a Business Advisor</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative lg:ml-auto">
                            <div className="relative mx-auto aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 shadow-lg md:aspect-[16/9]">
                                <Image
                                    src="/placeholder.svg?height=720&width=1280"
                                    alt="Evertrust Business Banking"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 h-24 w-64 rounded-lg bg-white p-4 shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-emerald-100 p-2">
                                        <Users className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Business Clients</p>
                                        <p className="text-2xl font-bold text-emerald-600">
                                            50,000+
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -right-6 -top-6 h-24 w-64 rounded-lg bg-white p-4 shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-emerald-100 p-2">
                                        <Building2 className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Industries Served</p>
                                        <p className="text-2xl font-bold text-emerald-600">25+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold mb-6">
                        Banking That Works as Hard as You Do
                    </h2>
                    <p className="text-lg mb-6">
                        At Evertrust, we understand that businesses have unique financial needs. Our
                        comprehensive suite of business banking solutions is designed to support
                        companies at every stage of growth—from startups to established enterprises.
                    </p>
                    <p className="text-lg mb-6">
                        With dedicated relationship managers, specialized industry expertise, and
                        cutting-edge digital tools, we provide the financial foundation your
                        business needs to thrive in today&apos;s competitive landscape.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                            <Link href="/auth">Open an Account</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/contact">Speak to a Business Advisor</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
                    <Image
                        src="/images/solution.jpg"
                        alt="Evertrust Business Banking"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Business Banking Solutions</h2>

                <Tabs defaultValue="accounts" className="w-full">
                    <TabsList className="grid w-full grid-cols-1 md:grid-cols-5">
                        <TabsTrigger value="accounts">Accounts</TabsTrigger>
                        <TabsTrigger value="lending">Lending</TabsTrigger>
                        <TabsTrigger value="treasury">Treasury Management</TabsTrigger>
                        <TabsTrigger value="international">International Banking</TabsTrigger>
                        <TabsTrigger value="specialized">Specialized Services</TabsTrigger>
                    </TabsList>

                    <TabsContent value="accounts" className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Business Checking</CardTitle>
                                    <CardDescription>
                                        Flexible accounts for daily operations
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>No minimum balance requirements</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Unlimited transactions</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Free online and mobile banking</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Business debit cards with rewards</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/auth">Apply Now</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Business Savings</CardTitle>
                                    <CardDescription>Maximize your idle cash</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Competitive interest rates</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Automatic sweep options</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>FDIC insurance coverage</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Liquidity management tools</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/auth">Apply Now</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Merchant Services</CardTitle>
                                    <CardDescription>Payment processing solutions</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Credit and debit card processing</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Mobile payment solutions</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>E-commerce integration</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Next-day funding available</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/contact">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="lending" className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Business Lines of Credit</CardTitle>
                                    <CardDescription>
                                        Flexible funding when you need it
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Access funds as needed</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Pay interest only on what you use</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Revolving credit structure</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Online access to funds</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/contact">Apply Now</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Term Loans</CardTitle>
                                    <CardDescription>Long-term financing solutions</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Fixed or variable rate options</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Customizable repayment terms</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Equipment and real estate financing</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Competitive interest rates</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/contact">Apply Now</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>SBA Loans</CardTitle>
                                    <CardDescription>Government-backed financing</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>SBA 7(a) and 504 loans</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Lower down payments</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Longer repayment terms</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Preferred SBA lender status</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/contact">Apply Now</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="treasury" className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Cash Management</CardTitle>
                                    <CardDescription>Optimize your cash flow</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Automated sweep accounts</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Zero balance accounts</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Liquidity management tools</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Cash flow forecasting</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/contact">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Receivables Management</CardTitle>
                                    <CardDescription>Accelerate your cash flow</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Remote deposit capture</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Lockbox services</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>ACH and wire transfers</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Electronic invoicing</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/contact">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Payables Management</CardTitle>
                                    <CardDescription>Streamline your payments</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Automated bill payments</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Commercial credit cards</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Positive pay fraud protection</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Vendor payment solutions</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/contact">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="international" className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Foreign Exchange</CardTitle>
                                    <CardDescription>Manage currency risk</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Competitive exchange rates</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Forward contracts</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Currency risk management</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Multi-currency accounts</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/contact">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>International Payments</CardTitle>
                                    <CardDescription>Global payment solutions</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>International wire transfers</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>SWIFT network access</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Cross-border ACH</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Real-time payment tracking</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/contact">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Trade Finance</CardTitle>
                                    <CardDescription>Support for global trade</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Letters of credit</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Documentary collections</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Export financing</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Import financing</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/contact">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="specialized" className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Industry Solutions</CardTitle>
                                    <CardDescription>Tailored for your sector</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Healthcare banking</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Manufacturing solutions</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Technology company services</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Nonprofit organization banking</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/contact">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Business Advisory</CardTitle>
                                    <CardDescription>Expert guidance for growth</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Financial planning</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Business succession planning</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>M&A advisory services</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Capital raising strategies</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/contact">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Wealth Management</CardTitle>
                                    <CardDescription>Grow and protect your assets</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Investment management</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Retirement planning</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Estate planning</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg
                                                className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5"
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
                                            <span>Private banking services</span>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/contact">Learn More</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Choose Evertrust for Your Business?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="/images/startup.jpg"
                            alt="Evertrust Business Banking Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-lg font-semibold">
                                    Dedicated Relationship Management
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="mb-4">
                                        Every business client is assigned a dedicated relationship
                                        manager who understands your industry and business goals.
                                        Your relationship manager serves as your primary point of
                                        contact and works with you to develop customized financial
                                        solutions.
                                    </p>
                                    <p>
                                        Our relationship managers have an average of 15+ years of
                                        experience in business banking and undergo continuous
                                        training to stay current with industry trends and best
                                        practices.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-lg font-semibold">
                                    Industry Expertise
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="mb-4">
                                        Evertrust has specialized teams dedicated to key industries
                                        including healthcare, manufacturing, technology, real
                                        estate, professional services, and nonprofit organizations.
                                    </p>
                                    <p>
                                        Our industry specialists understand the unique challenges
                                        and opportunities in your sector and can provide tailored
                                        solutions that address your specific needs.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-lg font-semibold">
                                    Cutting-Edge Technology
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="mb-4">
                                        Our digital banking platform offers advanced features
                                        designed specifically for businesses, including cash flow
                                        forecasting, integrated accounting, customizable reporting,
                                        and robust security controls.
                                    </p>
                                    <p>
                                        We continuously invest in technology to ensure our clients
                                        have access to the latest innovations in financial services,
                                        helping you operate more efficiently and make
                                        better-informed decisions.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-lg font-semibold">
                                    Financial Strength & Stability
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="mb-4">
                                        With over $50 billion in assets and consistently strong
                                        capital ratios, Evertrust provides the financial stability and
                                        resources your business needs for long-term growth and
                                        success.
                                    </p>
                                    <p>
                                        Our conservative risk management approach and diversified
                                        business model have enabled us to maintain our strength
                                        through multiple economic cycles, ensuring we&apos;ll be
                                        here to support your business for years to come.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-lg font-semibold">
                                    Community Commitment
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="mb-4">
                                        Evertrust is deeply committed to the communities we serve. We
                                        invest in local economic development initiatives, provide
                                        financing for community projects, and encourage employee
                                        volunteerism.
                                    </p>
                                    <p>
                                        Our community focus means we understand the local business
                                        environment and can connect you with resources, partners,
                                        and opportunities to help your business thrive.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader>
                            <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                                <Image
                                    src="/images/img3.jpg"
                                    alt="Manufacturing Company"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardTitle>Global Manufacturing Company</CardTitle>
                            <CardDescription>Streamlined international operations</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">
                                Evertrust&apos;s international banking solutions helped us expand into
                                new markets with minimal friction. Their trade finance expertise and
                                foreign exchange services saved us both time and money.
                            </p>
                            <p className="text-sm text-muted-foreground">— Michael Chen, CFO</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                                <Image
                                    src="/images/solution.jpg"
                                    alt="Healthcare Provider"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardTitle>Regional Healthcare Provider</CardTitle>
                            <CardDescription>Financed expansion and innovation</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">
                                The specialized healthcare banking team at Evertrust understood our
                                unique challenges. Their tailored financing solutions helped us
                                expand our facilities and invest in cutting-edge medical technology.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                — Dr. Sarah Johnson, CEO
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                                <Image
                                    src="/images/startup.jpg"
                                    alt="Tech Startup"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardTitle>Tech Startup</CardTitle>
                            <CardDescription>
                                Scaled operations with flexible banking
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">
                                From our seed round to Series B, Evertrust has been an invaluable
                                partner. Their scalable treasury management solutions and
                                growth-focused approach to lending helped us navigate rapid
                                expansion.
                            </p>
                            <p className="text-sm text-muted-foreground">— Alex Rivera, Founder</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8 mb-20">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Take Your Business to the Next Level?
                    </h2>
                    <p className="text-lg mb-8">
                        Partner with Evertrust for comprehensive business banking solutions tailored to
                        your unique needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                            <Link href="/auth">Open an Account</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/contact">Schedule a Consultation</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
