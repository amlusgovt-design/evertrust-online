import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Search, CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ATM() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-20 md:py-32 bg-gradient-to-br from-green-400 to-green-500">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                                    60,000+ Fee-Free ATMs
                                </h1>
                                <p className="max-w-[600px] text-white/80 md:text-xl">
                                    Access your money fee-free at ATMs nationwide, including at
                                    popular retailers.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    className="bg-white text-green-600 hover:bg-gray-100"
                                >
                                    <Link href="#find-atm">
                                        Find an ATM
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="lg:order-last">
                            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden p-6">
                                <Image
                                    src="/images/map.webp"
                                    width={550}
                                    height={550}
                                    alt="ATM Map"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ATM Network Section */}
            <section className="w-full py-20 bg-white">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Our ATM Network
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                            Access your money fee-free at over 60,000 ATMs nationwide
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <MapPin className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Nationwide Coverage</CardTitle>
                                <CardDescription>ATMs where you need them</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>60,000+ fee-free ATMs nationwide</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>
                                            Located at popular retailers like Walgreens, CVS, and
                                            7-Eleven
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Find ATMs in all 50 states</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <CreditCard className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Fee-Free Withdrawals</CardTitle>
                                <CardDescription>Keep more of your money</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>No ATM fees at in-network ATMs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>No hidden fees or surcharges</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Withdraw cash without worrying about fees</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-sm">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <Search className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Easy to Find</CardTitle>
                                <CardDescription>Locate ATMs quickly</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Find ATMs in the Evertrust mobile app</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Search by ZIP code or current location</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>Get directions to the nearest ATM</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Find an ATM Section */}
            <section id="find-atm" className="w-full py-20 bg-gray-50">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Find an ATM Near You
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                            Enter your ZIP code to find fee-free ATMs in your area
                        </p>
                    </div>

                    <div className="max-w-md mx-auto">
                        <div className="flex gap-2">
                            <Input
                                type="text"
                                placeholder="Enter ZIP code"
                                className="border-gray-200"
                            />
                            <Button className="bg-green-500 hover:bg-green-600 text-white">
                                Search
                            </Button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2 text-center">
                            Or use the Evertrust mobile app to find ATMs near your current location
                        </p>
                    </div>

                    <div className="mt-12 bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="h-[400px] w-full bg-gray-100 flex items-center justify-center">
                            <Image
                                src="/images/map.webp"
                                width={800}
                                height={400}
                                alt="ATM Map"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Locations Section */}
            <section className="w-full py-20 bg-white">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Popular ATM Locations
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                            Find fee-free ATMs at these popular retailers nationwide
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="bg-gray-50 p-6 rounded-lg text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <span className="text-green-600 font-bold text-xl">W</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Walgreens</h3>
                            <p className="text-gray-600">
                                Find ATMs at 8,000+ Walgreens locations nationwide
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <span className="text-green-600 font-bold text-xl">C</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">CVS</h3>
                            <p className="text-gray-600">
                                Access your money at thousands of CVS Pharmacy locations
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <span className="text-green-600 font-bold text-xl">7</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">7-Eleven</h3>
                            <p className="text-gray-600">
                                Convenient ATM access at 7-Eleven stores across the country
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                <span className="text-green-600 font-bold text-xl">T</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Target</h3>
                            <p className="text-gray-600">
                                Fee-free ATMs available at select Target store locations
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile App Section */}
            <section className="w-full py-20 bg-gray-50">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="relative">
                            <Image
                                src="/images/hero.png"
                                width={550}
                                height={550}
                                alt="Mobile App ATM Finder"
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                                Mobile App
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                                Find ATMs on the go
                            </h2>
                            <p className="text-gray-600 md:text-lg">
                                The Evertrust mobile app makes it easy to find fee-free ATMs wherever you
                                are. Use your current location to find nearby ATMs, get directions,
                                and even see which ATMs allow cash deposits.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Find ATMs based on your current location
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Get turn-by-turn directions to the nearest ATM
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Filter ATMs by features like cash deposits
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-3 flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">
                                        Save favorite ATM locations for quick access
                                    </span>
                                </li>
                            </ul>
                            <div className="pt-4">
                                <Button
                                    asChild
                                    className="border-none bg-green-500 hover:bg-green-600 text-white"
                                >
                                    <Link href="/mobile-banking">
                                        Learn More About Our Mobile App
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-20 bg-green-500">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white mb-6">
                        Ready for fee-free ATM access?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join over 15 million members who are accessing their money fee-free at
                        60,000+ ATMs nationwide.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <Button
                            asChild
                            size="lg"
                            className="border-none bg-white text-green-600 hover:bg-green-600 hover:text-white"
                        >
                            <Link href="/auth">Open an Account</Link>
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
