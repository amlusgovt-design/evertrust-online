import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-20 md:py-32 bg-emerald-600">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                                    Hi, {`We're`} Evertrust.
                                </h1>
                                <p className="max-w-[600px] text-white/80 md:text-xl">
                                    We are proud to be one of the most trusted banking apps in
                                    America, focused on serving everyday people.
                                </p>
                            </div>
                            <Button
                                asChild
                                className="w-fit bg-white text-emerald-700 hover:bg-gray-100"
                            >
                                <Link href="#mission">
                                    Learn more about who we are
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                        <div className="lg:order-last">
                            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                                <Image
                                    src="/images/direct.jpg"
                                    width={550}
                                    height={750}
                                    alt="Evertrust Card"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section id="mission" className="w-full py-20 bg-white">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                                Our mission
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                                Unite everyday people to unlock their financial progress.
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                                About us
                            </div>
                            <p className="text-gray-600 md:text-lg">
                                Evertrust® is a financial technology company that believes basic banking
                                services should be helpful, easy, and free. We work with national
                                banks to offer banking products and services that better meet the
                                needs of everyday people. All of our members&apos; account balances
                                are held at regulated, FDIC-insured banks: The Bancorp Bank, N.A.
                                and Stride Bank, N.A., Members FDIC. Together, we&apos;re addressing
                                the industry&apos;s fundamental misalignment between what&apos;s
                                good for banks and what&apos;s good for consumers.
                            </p>
                            <p className="text-gray-600 md:text-lg">
                                We want to profit with our members, not from them. That&apos;s why
                                Evertrust doesn&apos;t rely on overdraft fees, monthly service fees, or
                                minimum balance requirements. Our business was built with important
                                safeguards at the center, which ensure customer deposits are always
                                safe and accessible.
                            </p>
                            <p className="text-gray-600 md:text-lg">
                                We help members get paid up to two days early, provide fee-free
                                overdraft, and help them build credit, save money, and more safely
                                spend their money.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="w-full py-20 bg-gray-50">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
                            Our Values
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                            What We Stand For
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-lg max-w-3xl mx-auto">
                            Our core values guide everything we do at Evertrust, from product development
                            to customer service.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-emerald-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Member First</h3>
                            <p className="text-gray-600">
                                We prioritize our members&apos; financial well-being above all else,
                                ensuring every decision benefits them.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-emerald-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                            <p className="text-gray-600">
                                We believe in clear, honest communication with no hidden fees or
                                confusing terms.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-emerald-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                            <p className="text-gray-600">
                                We believe banking services should be accessible to everyone,
                                regardless of their financial background.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="w-full py-20 bg-white">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
                            Our Team
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                            Meet Our Leadership
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-lg max-w-3xl mx-auto">
                            The experienced team guiding Evertrust&apos;s vision and growth.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="text-center">
                            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
                                    width={200}
                                    height={200}
                                    alt="CEO"
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold">Alexandra Chen</h3>
                            <p className="text-emerald-700 mb-2">Chief Executive Officer</p>
                            <p className="text-gray-600 text-sm max-w-xs mx-auto">
                                Former fintech executive with 15+ years of experience in digital
                                banking transformation.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                                    width={200}
                                    height={200}
                                    alt="CTO"
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold">Marcus Johnson</h3>
                            <p className="text-emerald-700 mb-2">Chief Technology Officer</p>
                            <p className="text-gray-600 text-sm max-w-xs mx-auto">
                                Tech innovator with a background in cybersecurity and financial
                                systems architecture.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
                                    width={200}
                                    height={200}
                                    alt="CFO"
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold">Sophia Rodriguez</h3>
                            <p className="text-emerald-700 mb-2">Chief Financial Officer</p>
                            <p className="text-gray-600 text-sm max-w-xs mx-auto">
                                Seasoned financial strategist with experience at leading global
                                banking institutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact & Achievements */}
            <section className="w-full py-20 bg-gray-50">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
                            Our Impact
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                            Making a Difference
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-lg max-w-3xl mx-auto">
                            See how we&apos;re transforming banking for the better
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-emerald-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">$50M+ Saved</h3>
                            <p className="text-gray-600">
                                Our members have saved over $50 million in fees since our launch,
                                thanks to our fee-free banking model.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-emerald-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">1M+ Members</h3>
                            <p className="text-gray-600">
                                We&apos;ve grown to serve over 1 million members across the United
                                States, with a 98% satisfaction rate.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-emerald-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Bank-Level Security</h3>
                            <p className="text-gray-600">
                                Our platform maintains bank-level security standards with 256-bit
                                encryption and FDIC insurance up to $250,000.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-emerald-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                            <p className="text-gray-600">
                                Our dedicated support team is available 24/7 with an average
                                response time of under 2 minutes.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-emerald-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Financial Growth</h3>
                            <p className="text-gray-600">
                                Members who use our savings tools have seen an average of 15%
                                increase in their savings rate.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    className="w-6 h-6 text-emerald-700"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Job Creation</h3>
                            <p className="text-gray-600">
                                We&apos;ve created over 500 jobs across the United States,
                                contributing to local economies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-20 bg-emerald-600">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white mb-6">
                        Join Our Banking Revolution
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Be part of our story as we continue to innovate and transform the banking
                        industry.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-emerald-700 hover:bg-emerald-700 hover:text-white"
                        >
                            <Link href="/auth">Open an Account</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-none text-emerald-700 hover:bg-emerald-700 hover:text-white"
                        >
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
