import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowItWorksPage() {
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
                                    Evertrust helps you get ahead with fee-free banking services designed
                                    to help you save money and manage your finances.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    className="bg-white text-green-600 hover:bg-gray-100"
                                >
                                    <Link href="/auth">
                                        Open an Account
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="lg:order-last">
                            <div className="relative">
                                <Image
                                    src="/images/img1.jpg"
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

            {/* How It Works Steps */}
            <section className="w-full py-20 bg-white">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            How Evertrust Works
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                            Banking made simple in three easy steps
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-green-600 text-2xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Open an Account</h3>
                            <p className="text-gray-600">
                                Sign up in just a few minutes with no credit check and no minimum
                                deposit required.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-green-600 text-2xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Set Up Direct Deposit</h3>
                            <p className="text-gray-600">
                                Set up direct deposit to get paid up to 2 days early and unlock more
                                features.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-green-600 text-2xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Start Banking Better</h3>
                            <p className="text-gray-600">
                                Use your Evertrust Visa® Debit Card, manage your money in the app, and
                                enjoy fee-free banking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="w-full py-20 bg-gray-50">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Banking Features You&apos;ll Love
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                            Designed to help you manage your money with confidence
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Fee-free Checking</CardTitle>
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
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>Get Paid Early</CardTitle>
                                <CardDescription>Access your money sooner</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Get paid up to 2 days early with direct deposit</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Access up to $500 of your paycheck early</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>No interest or credit check</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <CardTitle>High-Yield Savings</CardTitle>
                                <CardDescription>Grow your money automatically</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Competitive APY on your savings</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Automatic savings features</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>No minimum balance requirements</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="w-full py-20 bg-white">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            What Our Members Say
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                            Join over 15 million members who are getting ahead with Evertrust
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                &quot;I love that I get paid early with Evertrust. The app is super easy
                                to use and I&apos;ve saved so much money by not paying fees.&quot;
                            </p>
                            <p className="font-semibold">- Sarah T.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                &quot;The savings account has helped me save more than I ever have
                                before. The automatic savings features are a game-changer.&quot;
                            </p>
                            <p className="font-semibold">- Michael R.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">
                                &quot;Switching to Evertrust was the best financial decision I&apos;ve
                                made. No fees, great app, and amazing customer service.&quot;
                            </p>
                            <p className="font-semibold">- Jessica L.</p>
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
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join over 15 million members who are getting ahead with fee-free banking.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-green-600 border-none hover:bg-green-600 hover:text-white"
                        >
                            <Link href="/auth">Open an Account</Link>
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
