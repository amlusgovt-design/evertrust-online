import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Shield, CreditCard, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DebitCardPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-20 md:py-32 bg-gradient-to-br from-green-400 to-green-500">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                                    The Evertrust Visa® Debit Card
                                </h1>
                                <p className="max-w-[600px] text-white/80 md:text-xl">
                                    A secure, fee-free debit card that puts you in control of your
                                    money.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    className="bg-white text-green-600 hover:bg-gray-100"
                                >
                                    <Link href="/auth">
                                        Get Your Card
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="lg:order-last">
                            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden p-6">
                                <Image
                                    src="/images/card.jpg"
                                    width={550}
                                    height={550}
                                    alt="Evertrust Visa Debit Card"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="w-full py-20 bg-white">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Card Features
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                            Designed to make your banking experience better
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <Shield className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Security First</CardTitle>
                                <CardDescription>Keep your money safe</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>EMV chip technology for enhanced security</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Instant transaction notifications</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Ability to lock/unlock your card in the app</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Zero liability for unauthorized charges</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <CreditCard className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Fee-Free Banking</CardTitle>
                                <CardDescription>No hidden fees, ever</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
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
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <Globe className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Worldwide Access</CardTitle>
                                <CardDescription>Use your card anywhere</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Accepted anywhere Visa is accepted worldwide</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Access to 60,000+ fee-free ATMs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>No foreign transaction fees</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>
                                            Mobile wallet compatible (Apple Pay, Google Pay)
                                        </span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Mobile Control Section */}
            <section className="w-full py-20 bg-gray-50">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="relative">
                            <Image
                                src="/images/hero.png"
                                width={550}
                                height={550}
                                alt="Mobile App Control"
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                                Mobile Control
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                                Control your card from anywhere
                            </h2>
                            <p className="text-gray-600 md:text-lg">
                                The Evertrust app gives you complete control over your debit card. Lock
                                or unlock your card with a tap, set spending limits, receive instant
                                transaction alerts, and manage your PIN - all from your smartphone.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Instantly lock/unlock your card
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Set spending limits and controls
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Receive instant transaction notifications
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">Manage your PIN securely</span>
                                </li>
                            </ul>
                            <div className="pt-4">
                                <Button
                                    asChild
                                    className="bg-green-500 hover:bg-green-600 text-white"
                                >
                                    <Link href="/mobile-banking">
                                        Learn More About Mobile Banking
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Early Pay Section */}
            <section className="w-full py-20 bg-white">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
                            <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                                Early Pay
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                                Get paid up to 2 days early
                            </h2>
                            <p className="text-gray-600 md:text-lg">
                                When you set up direct deposit with your Evertrust account, you can get
                                your paycheck up to two days early. No strings attached, no credit
                                check, no waiting.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Get paid up to 2 days early with direct deposit
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Access up to $500 of your paycheck early with MyPay
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        No interest, no credit check, no hidden fees
                                    </span>
                                </li>
                            </ul>
                            <div className="pt-4">
                                <Button
                                    asChild
                                    className="bg-green-500 hover:bg-green-600 text-white"
                                >
                                    <Link href="/auth">
                                        Get Started
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative order-1 lg:order-2">
                            <Image
                                src="/images/direct.jpg"
                                width={550}
                                height={550}
                                alt="Early Pay Feature"
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-20 bg-green-500">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white mb-6">
                        Ready for a better banking experience?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join over 15 million members who are getting ahead with the Evertrust Visa® Debit
                        Card.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-green-600 border-none hover:bg-green-600 hover:text-white"
                        >
                            <Link href="/auth">Get Your Card</Link>
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
