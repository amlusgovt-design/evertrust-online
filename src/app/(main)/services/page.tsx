import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-20 md:py-32 bg-gradient-to-br from-green-400 to-green-500">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                                    Banking that has your back
                                </h1>
                                <p className="max-w-[600px] text-white/80 md:text-xl">
                                    No hidden fees. No minimum balance requirements. Just financial
                                    peace of mind.
                                </p>
                            </div>
                        </div>
                        <div className="lg:order-last">
                            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                                <Image
                                    src="/images/card.jpg"
                                    width={550}
                                    height={550}
                                    alt="Evertrust Card"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Tabs */}
            <section className="w-full py-20 bg-white">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
                            Services
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                            Banking designed for you
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-lg max-w-3xl mx-auto">
                            Explore our range of services designed to help you manage, grow, and
                            protect your finances.
                        </p>
                    </div>

                    <Tabs defaultValue="checking" className="w-full max-w-4xl mx-auto">
                        <TabsList className="grid w-full grid-cols-4 bg-gray-100">
                            <TabsTrigger value="checking" className="data-[state=active]:bg-white">
                                Checking
                            </TabsTrigger>
                            <TabsTrigger value="credit" className="data-[state=active]:bg-white">
                                Credit Builder
                            </TabsTrigger>
                            <TabsTrigger value="early" className="data-[state=active]:bg-white">
                                Early Pay
                            </TabsTrigger>
                            <TabsTrigger value="spotme" className="data-[state=active]:bg-white">
                                SpotMe®
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="checking" className="mt-8">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>Fee-free Checking Account</CardTitle>
                                    <CardDescription>
                                        Banking that has your back, not your wallet
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <Image
                                                src="/images/card.jpg"
                                                width={400}
                                                height={300}
                                                alt="Evertrust Checking"
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold">
                                                No hidden fees. Ever.
                                            </h3>
                                            <ul className="space-y-2">
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>No monthly fees</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>No minimum balance requirements</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>No overdraft fees</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>No foreign transaction fees</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>55,000+ fee-free ATMs</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Get paid up to 2 days early with direct
                                                        deposit
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        asChild
                                        className="border-none bg-green-500 hover:bg-green-600 text-white"
                                    >
                                        <Link href="/auth">Open an Account</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>

                        <TabsContent value="credit" className="mt-8">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>Credit Builder</CardTitle>
                                    <CardDescription>
                                        Build credit, with no fees or interest
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <Image
                                                src="/images/hero.png"
                                                width={400}
                                                height={300}
                                                alt="Credit Builder Card"
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold">
                                                Build credit with no credit check
                                            </h3>
                                            <ul className="space-y-2">
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>No credit check to apply</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>No annual fees</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>No interest charges</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Reports to all 3 major credit bureaus
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>Secured with your own money</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Move your secured funds to your Spending
                                                        account anytime
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        asChild
                                        className="border-none bg-green-500 hover:bg-green-600 text-white"
                                    >
                                        <Link href="/auth">Apply Now</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>

                        <TabsContent value="early" className="mt-8">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>Early Pay</CardTitle>
                                    <CardDescription>
                                        Get paid up to 2 days early with direct deposit
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <Image
                                                src="/images/img1.jpg"
                                                width={400}
                                                height={300}
                                                alt="Early Pay Feature"
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold">
                                                Get your money faster
                                            </h3>
                                            <ul className="space-y-2">
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Get paid up to 2 days early with direct
                                                        deposit
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Access up to $500 of your paycheck early
                                                        with MyPay
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>No interest or credit check</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Automatic repayment from your next direct
                                                        deposit
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>No waiting for payday to pay bills</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        asChild
                                        className="border-none bg-green-500 hover:bg-green-600 text-white"
                                    >
                                        <Link href="/auth">Get Started</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>

                        <TabsContent value="spotme" className="mt-8">
                            <Card className="border-0 shadow-sm">
                                <CardHeader>
                                    <CardTitle>SpotMe®</CardTitle>
                                    <CardDescription>Fee-free overdraft up to $200</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <Image
                                                src="/images/direct.jpg"
                                                width={400}
                                                height={300}
                                                alt="SpotMe Feature"
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold">
                                                We&apos;ve got you covered
                                            </h3>
                                            <ul className="space-y-2">
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>Fee-free overdraft up to $200</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>No overdraft fees</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Eligibility based on account activity
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>
                                                        Automatic repayment from your next deposit
                                                    </span>
                                                </li>
                                                <li className="flex items-start">
                                                    <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>Optional tips (not required)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        asChild
                                        className="border-none bg-green-500 hover:bg-green-600 text-white"
                                    >
                                        <Link href="/auth">Learn More</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* How It Works */}
            <section className="w-full py-20 bg-gray-50">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
                            How It Works
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                            Getting started is easy
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-lg max-w-3xl mx-auto">
                            Open an account in minutes with no credit check and no minimum deposit.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-green-600 font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Apply in minutes</h3>
                            <p className="text-gray-600">
                                Sign up in just a few minutes with no credit check and no minimum
                                deposit required.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-green-600 font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Set up direct deposit</h3>
                            <p className="text-gray-600">
                                Set up direct deposit to get paid up to 2 days early and unlock more
                                features.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-green-600 font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Start banking better</h3>
                            <p className="text-gray-600">
                                Use your Evertrust debit card, manage your money in the app, and enjoy
                                fee-free banking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-20 bg-green-500">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white mb-6">
                        Ready to experience better banking?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Join over 15 million members who are getting ahead with fee-free banking.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <Button
                            asChild
                            size="lg"
                            className="border-none bg-white text-green-600 hover:bg-green-600 hover:text-white"
                        >
                            <Link href="/auth">Sign Up</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-none bg-white text-green-600 hover:bg-green-600 hover:text-white"
                        >
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
