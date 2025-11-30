import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, PiggyBank, TrendingUp, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SavingsAccountPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-20 md:py-32 bg-gradient-to-br from-green-400 to-green-500">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                                    High-Yield Savings Account
                                </h1>
                                <p className="max-w-[600px] text-white/80 md:text-xl">
                                    Earn more on your savings with a competitive APY and no hidden
                                    fees.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    className="bg-white text-green-600 hover:bg-gray-100"
                                >
                                    <Link href="/auth">
                                        Open a Savings Account
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="lg:order-last">
                            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden p-6">
                                <Image
                                    src="/images/savings.jpg"
                                    width={550}
                                    height={550}
                                    alt="High-Yield Savings Account"
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
                            Savings Account Features
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                            Designed to help you save more, automatically
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <TrendingUp className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Competitive APY</CardTitle>
                                <CardDescription>Earn more on your savings</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>
                                            Earn a competitive Annual Percentage Yield (APY)
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Interest compounds daily</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>No minimum balance required to earn interest</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <PiggyBank className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Automatic Savings</CardTitle>
                                <CardDescription>Save without thinking about it</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Round-up your purchases to save spare change</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>
                                            Set up automatic transfers from your checking account
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Save when you get paid with direct deposit</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <Lock className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>No Fees or Minimums</CardTitle>
                                <CardDescription>Keep more of your money</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>No monthly maintenance fees</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>No minimum balance requirements</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>No hidden fees</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Automatic Savings Section */}
            <section className="w-full py-20 bg-gray-50">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="relative">
                            <Image
                                src="/images/savings.jpg"
                                width={550}
                                height={550}
                                alt="Automatic Savings Features"
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                                Automatic Savings
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                                Save money without even thinking about it
                            </h2>
                            <p className="text-gray-600 md:text-lg">
                                Our automatic savings features make it easy to build your savings
                                without having to think about it. Round up your purchases, set up
                                automatic transfers, and watch your savings grow.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Round-Up: Automatically save your spare change
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Save When You Get Paid: Set aside a portion of your paycheck
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Automatic Transfers: Schedule regular transfers to savings
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Savings Goals: Track progress toward specific goals
                                    </span>
                                </li>
                            </ul>
                            <div className="pt-4">
                                <Button
                                    asChild
                                    className="bg-green-500 hover:bg-green-600 text-white"
                                >
                                    <Link href="/auth">
                                        Start Saving Today
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Savings Goals Section */}
            <section className="w-full py-20 bg-white">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
                            <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                                Savings Goals
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                                Set goals and track your progress
                            </h2>
                            <p className="text-gray-600 md:text-lg">
                                Whether you&apos;re saving for a vacation, a new car, or an
                                emergency fund, our savings goals feature helps you stay on track.
                                Set a target amount, create a timeline, and watch your progress in
                                real-time.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Create multiple savings goals
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Track your progress with visual indicators
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Automatically allocate funds to different goals
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Celebrate your achievements when you reach your goals
                                    </span>
                                </li>
                            </ul>
                            <div className="pt-4">
                                <Button
                                    asChild
                                    className="bg-green-500 hover:bg-green-600 text-white"
                                >
                                    <Link href="/auth">
                                        Set Your First Goal
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative order-1 lg:order-2">
                            <Image
                                src="/images/img1.jpg"
                                width={550}
                                height={550}
                                alt="Savings Goals Feature"
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
                        Ready to start saving more?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join over 15 million members who are growing their savings with Evertrust.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <Button
                            asChild
                            size="lg"
                            className="border-none bg-white text-green-600 hover:bg-green-600 hover:text-white"
                        >
                            <Link href="/auth">Open a Savings Account</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-none bg-white text-green-600 hover:bg-green-600 hover:text-white"
                        >
                            <Link href="/contact">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
