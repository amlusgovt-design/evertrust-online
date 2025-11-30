import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Smartphone, Bell, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function MobileBankingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-20 md:py-32 bg-gradient-to-br from-green-400 to-green-500">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                                    Banking in the palm of your hand
                                </h1>
                                <p className="max-w-[600px] text-white/80 md:text-xl">
                                    Manage your money anytime, anywhere with the Evertrust mobile app.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    className="bg-white text-green-600 hover:bg-gray-100"
                                >
                                    <Link href="/auth">
                                        Get Started
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="lg:order-last">
                            <div className="relative">
                                <Image
                                    src="/images/hero.png"
                                    width={550}
                                    height={550}
                                    alt="Evertrust Mobile App"
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
                            Mobile App Features
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                            Everything you need to manage your money on the go
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <Smartphone className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Easy Account Management</CardTitle>
                                <CardDescription>Manage your money with ease</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Check balances and transaction history</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Transfer money between accounts</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Pay bills and schedule payments</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Deposit checks with mobile check deposit</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <Bell className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Real-time Notifications</CardTitle>
                                <CardDescription>Stay informed about your money</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Instant transaction alerts</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Low balance notifications</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Bill payment reminders</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Suspicious activity alerts</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <Lock className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Security Controls</CardTitle>
                                <CardDescription>Keep your money safe</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Lock and unlock your debit card</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Set spending limits</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Biometric authentication (Face ID, Touch ID)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Two-factor authentication</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Mobile Check Deposit Section */}
            <section className="w-full py-20 bg-gray-50">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="relative">
                            <Image
                                src="/images/hero.png"
                                width={550}
                                height={550}
                                alt="Mobile Check Deposit"
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                                Mobile Check Deposit
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                                Deposit checks from anywhere
                            </h2>
                            <p className="text-gray-600 md:text-lg">
                                Skip the trip to the bank. With mobile check deposit, you can
                                deposit checks right from your smartphone. Just snap a photo of your
                                check and submit it through the app – it&apos;s that simple.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Deposit checks anytime, anywhere
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">Fast processing times</span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Secure and encrypted transmission
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        No more waiting in line at the bank
                                    </span>
                                </li>
                            </ul>
                            <div className="pt-4">
                                <Button
                                    asChild
                                    className="bg-green-500 hover:bg-green-600 text-white"
                                >
                                    <Link href="/auth">
                                        Try Mobile Banking
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Card Controls Section */}
            <section className="w-full py-20 bg-white">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
                            <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                                Card Controls
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                                Take control of your debit card
                            </h2>
                            <p className="text-gray-600 md:text-lg">
                                Our mobile app gives you complete control over your debit card. Lock
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
                                    <Link href="/debit-card">
                                        Learn More About Our Debit Card
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative order-1 lg:order-2">
                            <Image
                                src="/images/card.jpg"
                                width={550}
                                height={550}
                                alt="Card Controls Feature"
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
                        Ready to bank on the go?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join over 15 million members who are managing their money with the Evertrust
                        mobile app.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <Button
                            asChild
                            size="lg"
                            className="border-none bg-white text-green-600 hover:bg-green-600 hover:text-white"
                        >
                            <Link href="/auth">Get Started</Link>
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
