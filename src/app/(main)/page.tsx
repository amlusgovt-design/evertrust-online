import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    BarChart3,
    Building2,
    CheckCircle2,
    CreditCard,
    Globe,
    Landmark,
    LineChart,
    ShieldCheck,
    TrendingUp,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-20 md:py-32">
                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-slate-700/25"></div>
                <div className="container mx-auto relative px-4 md:px-2">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
                                <span className="font-medium">
                                    Financial Solutions for Business Growth
                                </span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                Powering Business{" "}
                                <span className="text-emerald-600">Financial Success</span>
                            </h1>
                            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px]">
                            Evertrust delivers comprehensive financial services designed specifically
                                for businesses. From advanced banking solutions to flexible
                                financing options, we help your business thrive in today&apos;s
                                competitive landscape.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-emerald-600 hover:bg-emerald-700"
                                >
                                    <Link href="/auth?register=true">
                                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link href="/contact">Schedule a Consultation</Link>
                                </Button>
                            </div>
                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex -space-x-2">
                                    {[
                                        "/images/testimonial3.jpg",
                                        "/images/testimonial5.jpg",
                                        "/images/testimonial4.jpg",
                                        "/images/testimonial2.jpg",
                                    ].map((i) => (
                                        <div
                                            key={i}
                                            className="inline-block h-8 w-8 rounded-full border-2 border-background bg-gray-200 overflow-hidden"
                                        >
                                            <Image src={i} alt={`User`} width={32} height={32} />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm text-gray-500">
                                    Trusted by{" "}
                                    <span className="font-medium text-gray-900">50,000+</span>{" "}
                                    businesses
                                </div>
                            </div>
                        </div>
                        <div className="relative lg:ml-auto border border-red-500">
                            <div className="relative border mx-auto aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 shadow-lg md:aspect-[16/9]">
                                <Image
                                    src="/images/hero.jpg"
                                    alt="Evertrust Business Banking Dashboard"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-45 h-24 w-64 rounded-lg bg-white p-4 shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-emerald-100 p-2">
                                        <TrendingUp className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Business Growth</p>
                                        <p className="text-2xl font-bold text-emerald-600">
                                            +27.4%
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute right-20 top-2 h-24 w-64 rounded-lg bg-white p-4 shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-emerald-100 p-2">
                                        <LineChart className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Cash Flow</p>
                                        <p className="text-2xl font-bold text-emerald-600">$1.2M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Solutions Section */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                                Comprehensive Solutions
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Financial Services for Business Success
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Evertrust offers a comprehensive suite of financial services tailored to
                                meet the unique needs of businesses of all sizes, from startups to
                                established enterprises.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="border-2 border-emerald-50 transition-all hover:border-emerald-100 hover:shadow-md">
                            <CardHeader>
                                <div className="mb-2 rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center">
                                    <Building2 className="h-6 w-6 text-emerald-600" />
                                </div>
                                <CardTitle>Business Banking</CardTitle>
                                <CardDescription>Comprehensive account solutions</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    Tailored checking and savings accounts designed specifically for
                                    business needs, with features like unlimited transactions and
                                    cash management tools.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Business checking with no minimum balance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>High-yield business savings accounts</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Merchant services and payment processing</span>
                                    </li>
                                </ul>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/business-banking">Learn More</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-50 transition-all hover:border-emerald-100 hover:shadow-md">
                            <CardHeader>
                                <div className="mb-2 rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center">
                                    <CreditCard className="h-6 w-6 text-emerald-600" />
                                </div>
                                <CardTitle>Loans & Financing</CardTitle>
                                <CardDescription>Flexible funding solutions</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    Access the capital your business needs to grow, expand, or
                                    manage cash flow with our range of flexible financing options
                                    tailored to your specific requirements.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Business lines of credit with competitive rates</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Equipment financing and leasing options</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>SBA loans with preferred lender status</span>
                                    </li>
                                </ul>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/loans">Learn More</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-50 transition-all hover:border-emerald-100 hover:shadow-md">
                            <CardHeader>
                                <div className="mb-2 rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center">
                                    <Globe className="h-6 w-6 text-emerald-600" />
                                </div>
                                <CardTitle>Online Banking</CardTitle>
                                <CardDescription>Digital financial management</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    Manage your business finances anytime, anywhere with our secure
                                    and intuitive online banking platform, designed to streamline
                                    your financial operations.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Real-time account monitoring and alerts</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Secure payment processing and transfers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Cash flow forecasting and financial reporting</span>
                                    </li>
                                </ul>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/online-banking">Learn More</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-50 transition-all hover:border-emerald-100 hover:shadow-md">
                            <CardHeader>
                                <div className="mb-2 rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center">
                                    <Landmark className="h-6 w-6 text-emerald-600" />
                                </div>
                                <CardTitle>Treasury Management</CardTitle>
                                <CardDescription>Optimize cash flow</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    Maximize your company&apos;s liquidity, minimize operational
                                    costs, and manage financial risk with our comprehensive treasury
                                    management solutions.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>
                                            Automated sweep accounts and zero balance accounts
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Lockbox services and remote deposit capture</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Fraud prevention and positive pay services</span>
                                    </li>
                                </ul>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/business-banking#treasury">Learn More</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-50 transition-all hover:border-emerald-100 hover:shadow-md">
                            <CardHeader>
                                <div className="mb-2 rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center">
                                    <BarChart3 className="h-6 w-6 text-emerald-600" />
                                </div>
                                <CardTitle>International Banking</CardTitle>
                                <CardDescription>Global financial solutions</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    Expand your business globally with our comprehensive
                                    international banking services, designed to facilitate
                                    cross-border transactions and manage currency risk.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>
                                            Foreign exchange services with competitive rates
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>International wire transfers and payments</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Trade finance and letters of credit</span>
                                    </li>
                                </ul>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/business-banking#international">Learn More</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-emerald-50 transition-all hover:border-emerald-100 hover:shadow-md">
                            <CardHeader>
                                <div className="mb-2 rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center">
                                    <Users className="h-6 w-6 text-emerald-600" />
                                </div>
                                <CardTitle>Industry Solutions</CardTitle>
                                <CardDescription>Sector-specific expertise</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    Benefit from our specialized industry knowledge and tailored
                                    financial solutions designed to address the unique challenges
                                    and opportunities in your sector.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>
                                            Healthcare, manufacturing, and technology solutions
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Real estate and construction financing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0" />
                                        <span>Nonprofit and professional services banking</span>
                                    </li>
                                </ul>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/business-banking#specialized">Learn More</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-emerald-50 py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center rounded-full border border-emerald-600/20 bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                                <span className="font-medium">Why Evertrust</span>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Banking That Works as Hard as You Do
                            </h2>
                            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                At Evertrust, we understand the unique challenges businesses face. Our
                                comprehensive financial solutions are designed to support your
                                growth, streamline operations, and help you achieve your goals.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="mr-4 rounded-full bg-emerald-100 p-2">
                                        <Users className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">
                                            Dedicated Relationship Management
                                        </h3>
                                        <p className="text-gray-500">
                                            Every business client is assigned a dedicated
                                            relationship manager who understands your industry and
                                            business goals.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="mr-4 rounded-full bg-emerald-100 p-2">
                                        <ShieldCheck className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">
                                            Financial Strength & Stability
                                        </h3>
                                        <p className="text-gray-500">
                                            With strong capital ratios and a conservative risk
                                            management approach, we provide the stability your
                                            business needs.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="mr-4 rounded-full bg-emerald-100 p-2">
                                        <LineChart className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Cutting-Edge Technology</h3>
                                        <p className="text-gray-500">
                                            Our digital banking platform offers advanced features
                                            designed specifically for businesses, helping you
                                            operate more efficiently.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                                <Link href="/about">Learn More About Evertrust</Link>
                            </Button>
                        </div>

                        <div className="relative">
                            <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                                <Image
                                    src="/images/img2.jpg"
                                    alt="Evertrust Business Team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 h-32 w-64 rounded-lg bg-white p-4 shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-emerald-100 p-2">
                                        <Users className="h-6 w-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Client Satisfaction</p>
                                        <div className="flex items-center">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg
                                                    key={star}
                                                    className="h-5 w-5 fill-current text-yellow-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                            ))}
                                            <span className="ml-2 font-bold">4.9/5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Solutions Tabs */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                                Tailored Solutions
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Solutions for Every Business Stage
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Whether you&apos;re just starting out or looking to expand, Evertrust has
                                the financial tools and expertise to support your business journey.
                            </p>
                        </div>
                    </div>

                    <Tabs defaultValue="startup" className="w-full">
                        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
                            <TabsTrigger value="startup">Startups</TabsTrigger>
                            <TabsTrigger value="growth">Growth Stage</TabsTrigger>
                            <TabsTrigger value="established">Established Business</TabsTrigger>
                            <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
                        </TabsList>

                        <TabsContent value="startup" className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">
                                        Building a Strong Foundation
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Starting a business requires the right financial foundation.
                                        Our startup-focused solutions provide the essential banking
                                        services and initial capital needed to launch and establish
                                        your business.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-medium">
                                                    Startup Business Checking
                                                </span>
                                                <p className="text-sm text-gray-500">
                                                    No minimum balance requirements and low monthly
                                                    fees for new businesses.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-medium">
                                                    Seed Funding & Startup Loans
                                                </span>
                                                <p className="text-sm text-gray-500">
                                                    Financing options designed specifically for
                                                    early-stage companies.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-medium">
                                                    Business Formation Support
                                                </span>
                                                <p className="text-sm text-gray-500">
                                                    Guidance on business structure, documentation,
                                                    and financial planning.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="mt-6 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/business-banking">Startup Solutions</Link>
                                    </Button>
                                </div>
                                <div className="relative">
                                    <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                                        <Image
                                            src="/images/startup.jpg"
                                            alt="Startup Business Solutions"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="growth" className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 md:order-1 relative">
                                    <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                                        <Image
                                            src="/images/img3.jpg"
                                            alt="Growth Stage Business Solutions"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="order-1 md:order-2">
                                    <h3 className="text-2xl font-bold mb-4">
                                        Accelerating Your Growth
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        As your business expands, you need financial solutions that
                                        can scale with you. Our growth-stage offerings provide the
                                        capital, cash flow management, and operational support to
                                        fuel your expansion.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-medium">
                                                    Business Lines of Credit
                                                </span>
                                                <p className="text-sm text-gray-500">
                                                    Flexible funding to manage cash flow and seize
                                                    growth opportunities.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-medium">
                                                    Equipment Financing
                                                </span>
                                                <p className="text-sm text-gray-500">
                                                    Acquire the equipment you need to scale
                                                    operations and increase capacity.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-medium">
                                                    Cash Flow Management
                                                </span>
                                                <p className="text-sm text-gray-500">
                                                    Tools to optimize receivables, manage payables,
                                                    and improve liquidity.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="mt-6 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/loans">Growth Financing</Link>
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="established" className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">
                                        Optimizing Your Operations
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Established businesses need sophisticated financial
                                        solutions to optimize operations, manage risk, and maintain
                                        competitive advantage. Our comprehensive services help you
                                        streamline processes and maximize profitability.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-medium">
                                                    Treasury Management
                                                </span>
                                                <p className="text-sm text-gray-500">
                                                    Advanced tools to optimize cash flow, reduce
                                                    fraud, and improve efficiency.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-medium">
                                                    Commercial Real Estate
                                                </span>
                                                <p className="text-sm text-gray-500">
                                                    Financing for property acquisition, development,
                                                    and expansion.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-medium">
                                                    Business Advisory Services
                                                </span>
                                                <p className="text-sm text-gray-500">
                                                    Strategic financial guidance to improve
                                                    performance and profitability.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="mt-6 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/business-banking#treasury">
                                            Optimization Solutions
                                        </Link>
                                    </Button>
                                </div>
                                <div className="relative">
                                    <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                                        <Image
                                            src="/images/startup.jpg"
                                            alt="Established Business Solutions"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="enterprise" className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="order-2 md:order-1 relative">
                                    <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                                        <Image
                                            src="/images/solution.jpg"
                                            alt="Enterprise Business Solutions"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="order-1 md:order-2">
                                    <h3 className="text-2xl font-bold mb-4">
                                        Enterprise-Level Solutions
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Large organizations require sophisticated financial
                                        solutions to manage complex operations, mitigate risks, and
                                        drive strategic initiatives. Our enterprise services provide
                                        the tools and expertise you need.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-medium">
                                                    Global Banking Solutions
                                                </span>
                                                <p className="text-sm text-gray-500">
                                                    International payment processing, foreign
                                                    exchange, and cross-border financing.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-medium">
                                                    Capital Markets Access
                                                </span>
                                                <p className="text-sm text-gray-500">
                                                    Debt and equity capital raising, M&A advisory,
                                                    and risk management.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-medium">
                                                    Enterprise Treasury Solutions
                                                </span>
                                                <p className="text-sm text-gray-500">
                                                    Sophisticated cash management, liquidity
                                                    optimization, and financial risk mitigation.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <Button
                                        asChild
                                        className="mt-6 bg-emerald-600 hover:bg-emerald-700"
                                    >
                                        <Link href="/business-banking#international">
                                            Enterprise Solutions
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-50 py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                                Client Success Stories
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Trusted by Businesses Like Yours
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Hear from our clients about how Evertrust&apos;s financial solutions have
                                helped them achieve their business goals.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                name: "Sarah Johnson",
                                title: "CEO, TechInnovate",
                                image: "/images/testimonial3.jpg",
                                quote: "Evertrust's business banking solutions have been instrumental in our growth. Their dedicated relationship manager understands our industry and has helped us navigate complex financial challenges.",
                            },
                            {
                                name: "Michael Chen",
                                title: "CFO, Global Manufacturing",
                                image: "/images/testimonial4.jpg",
                                quote: "The international banking services at Evertrust have simplified our global operations. Their competitive exchange rates and trade finance solutions have saved us both time and money.",
                            },
                            {
                                name: "Jennifer Park",
                                title: "Founder, Healthcare Solutions",
                                image: "/images/testimonial2.jpg",
                                quote: "As a healthcare startup, we needed specialized financing. Evertrust's industry expertise and tailored loan options helped us expand our facilities and invest in cutting-edge medical technology.",
                            },
                        ].map((testimonial, i) => (
                            <div key={i} className="rounded-xl bg-white p-6 shadow-md">
                                <div className="flex items-start gap-4">
                                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                                        <Image
                                            src={testimonial.image || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex mb-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg
                                                key={star}
                                                className="h-5 w-5 fill-current text-yellow-500"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-600">&quot;{testimonial.quote}&quot;</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-emerald-600 py-20 md:py-32 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Ready to Transform Your Business Banking Experience?
                            </h2>
                            <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Join thousands of businesses that trust Evertrust for their financial
                                needs. Our comprehensive solutions are designed to help your
                                business thrive in today&apos;s competitive landscape.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-white text-emerald-600 hover:bg-gray-100"
                                >
                                    <Link href="/auth?register=true">Open an Account</Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="text-white border-white bg-emerald-700 hover:text-emerald-700"
                                >
                                    <Link href="/contact">Schedule a Consultation</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="rounded-lg bg-emerald-500 p-4">
                                    <div className="text-3xl font-bold">24/7</div>
                                    <div className="text-sm">Online Banking Access</div>
                                </div>
                                <div className="rounded-lg bg-emerald-500 p-4">
                                    <div className="text-3xl font-bold">99.9%</div>
                                    <div className="text-sm">Platform Uptime</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="rounded-lg bg-emerald-500 p-4">
                                    <div className="text-3xl font-bold">50k+</div>
                                    <div className="text-sm">Business Clients</div>
                                </div>
                                <div className="rounded-lg bg-emerald-500 p-4">
                                    <div className="text-3xl font-bold">$10B+</div>
                                    <div className="text-sm">Transactions Processed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Insights Section */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                                Latest Insights
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Financial Resources for Your Business
                            </h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Stay informed with the latest financial trends, strategies, and
                                insights to help your business succeed.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "5 Cash Flow Management Strategies for Small Businesses",
                                category: "Financial Management",
                                image: "/images/cashflow.jpg",
                                date: "June 15, 2023",
                            },
                            {
                                title: "Understanding SBA Loans: A Guide for Business Owners",
                                category: "Business Financing",
                                image: "/images/solution.jpg",
                                date: "May 28, 2023",
                            },
                            {
                                title: "International Expansion: Financial Considerations for Global Growth",
                                category: "Global Business",
                                image: "/images/startup.jpg",
                                date: "April 10, 2023",
                            },
                        ].map((article, i) => (
                            <Link
                                href="#"
                                key={i}
                                className="group rounded-xl overflow-hidden bg-white shadow-md transition-all hover:shadow-lg"
                            >
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={article.image || "/placeholder.svg"}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="mb-2 text-sm font-medium text-emerald-600">
                                        {article.category}
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold group-hover:text-emerald-600 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">{article.date}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
