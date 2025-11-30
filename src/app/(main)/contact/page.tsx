"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, Clock, Send, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export default function ContactPage() {
    const [formSubmitting, setFormSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setFormSubmitting(false);
            toast.success("Message Sent", {
                description: "We've received your message and will get back to you soon.",
            });
            // Reset form
            e.currentTarget.reset();
        }, 1500);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Toaster />
            {/* Hero Section */}
            <section className="w-full py-20 md:py-32 bg-gradient-to-br from-emerald-500 to-emerald-700">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="space-y-6 max-w-3xl">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                                We&apos;re here to help
                            </h1>
                            <p className="text-white/80 md:text-xl">
                                Have questions about our services? Our team is ready to assist you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Help Center */}
            <section className="w-full py-20 bg-white">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800 mb-4">
                            Help Center
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                            Find answers quickly
                        </h2>
                        <p className="mt-4 text-gray-600 md:text-lg max-w-3xl mx-auto">
                            Browse our help articles or contact our support team for assistance.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="border-0 shadow-sm">
                            <CardHeader className="text-center">
                                <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                    <svg
                                        className="w-6 h-6 text-emerald-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                </div>
                                <CardTitle>Chat with us</CardTitle>
                                <CardDescription>
                                    Chat with our support team directly from the mobile app.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <Button
                                    asChild
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white"
                                >
                                    <Link href="/auth">Open in App</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-sm">
                            <CardHeader className="text-center">
                                <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                    <svg
                                        className="w-6 h-6 text-emerald-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <CardTitle>Email us</CardTitle>
                                <CardDescription>
                                    Send us an email and we&apos;ll get back to you within 24 hours.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <Button
                                    asChild
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white"
                                >
                                    <Link href="mailto:support@evertrust.com">Email Support</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-sm">
                            <CardHeader className="text-center">
                                <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                    <svg
                                        className="w-6 h-6 text-emerald-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        />
                                    </svg>
                                </div>
                                <CardTitle>Help Articles</CardTitle>
                                <CardDescription>
                                    Browse our knowledge base for answers to common questions.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <Button
                                    asChild
                                    className="bg-emerald-500 hover:bg-emerald-600 text-white"
                                >
                                    <Link href="#">Browse Articles</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="w-full py-20 bg-gray-50">
                <div className="container px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800 mb-4">
                                    Contact Us
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                                    Get in touch
                                </h2>
                                <p className="mt-4 text-gray-600 md:text-lg">
                                    Have a question or need help? Fill out the form and we&apos;ll
                                    get back to you as soon as possible.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                                        <Phone className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Phone Support</h3>
                                        <p className="text-gray-600">(800) 123-4567</p>
                                        <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                                        <Mail className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-gray-600">support@evertrust.com</p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            We&apos;ll respond within 24 hours
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                                        <Clock className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Hours</h3>
                                        <p className="text-gray-600">24/7 Support</p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            We&apos;re always here to help
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-semibold mb-4">Common Questions</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-600">
                                            How do I set up direct deposit?
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-600">
                                            How do I qualify for SpotMe?
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-600">
                                            How do I apply for Credit Builder?
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <Check className="mr-2 h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-600">
                                            How do I report a lost or stolen card?
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Link
                                        href="#"
                                        className="text-emerald-600 hover:text-emerald-700 font-medium"
                                    >
                                        View all FAQs →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6 bg-white p-8 rounded-xl shadow-sm"
                            >
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="first-name">First name</Label>
                                        <Input
                                            id="first-name"
                                            placeholder="John"
                                            required
                                            className="border-gray-200"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last-name">Last name</Label>
                                        <Input
                                            id="last-name"
                                            placeholder="Doe"
                                            required
                                            className="border-gray-200"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        placeholder="john.doe@example.com"
                                        type="email"
                                        required
                                        className="border-gray-200"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone (optional)</Label>
                                    <Input
                                        id="phone"
                                        placeholder="(123) 456-7890"
                                        type="tel"
                                        className="border-gray-200"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>I am a:</Label>
                                    <RadioGroup
                                        defaultValue="customer"
                                        className="flex flex-col space-y-1"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="customer" id="customer" />
                                            <Label htmlFor="customer" className="font-normal">
                                                Existing Customer
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="prospect" id="prospect" />
                                            <Label htmlFor="prospect" className="font-normal">
                                                Prospective Customer
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="other" id="other" />
                                            <Label htmlFor="other" className="font-normal">
                                                Other
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                                    <Select required>
                                        <SelectTrigger className="border-gray-200">
                                            <SelectValue placeholder="Select an inquiry type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="account">
                                                Account Information
                                            </SelectItem>
                                            <SelectItem value="services">
                                                Banking Services
                                            </SelectItem>
                                            <SelectItem value="credit">Credit Builder</SelectItem>
                                            <SelectItem value="spotme">SpotMe</SelectItem>
                                            <SelectItem value="technical">
                                                Technical Support
                                            </SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Please describe how we can help you..."
                                        className="min-h-[120px] border-gray-200"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
                                    disabled={formSubmitting}
                                >
                                    {formSubmitting ? (
                                        <span className="flex items-center">
                                            <svg
                                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </span>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
