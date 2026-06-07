"use client";

import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const productLinks = [
    { label: "Job Discovery", href: "/jobs" },
    { label: "Worker AI", href: "/worker-ai" },
    { label: "Companies", href: "/companies" },
    { label: "Salary Data", href: "/salary-data" },
];

const navigationLinks = [
    { label: "Help Center", href: "/help-center" },
    { label: "Career Library", href: "/career-library" },
    { label: "Contact", href: "/contact" },
];

const resourceLinks = [
    { label: "Brand Guideline", href: "/brand-guideline" },
    { label: "Newsroom", href: "/newsroom" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-black ">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.15),transparent_60%)]" />

            <div className="relative mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo Section */}
                    <div>
                        <Link href="/">
                            <h2 className="text-4xl font-bold">
                                <span className="text-blue-500">hire</span>
                                <span className="text-orange-500">loop</span>
                            </h2>
                        </Link>

                        <p className="mt-6 max-w-xs text-sm leading-7 text-gray-400">
                            The AI-native career platform. Built for people who
                            take their work seriously.
                        </p>

                        <div className="mt-10 flex gap-3">
                            <Link
                                href="#"
                                className="rounded-lg bg-white/5 p-3 text-gray-400 transition-all hover:bg-indigo-600 hover:text-white"
                            >
                                <FaFacebook size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-lg bg-indigo-600 p-3 text-white"
                            >
                                <FaGithub size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="rounded-lg bg-white/5 p-3 text-gray-400 transition-all hover:bg-indigo-600 hover:text-white"
                            >
                                <FaLinkedin size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-indigo-400">
                            Product
                        </h3>

                        <div className="space-y-4">
                            {productLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block text-gray-400 transition hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-indigo-400">
                            Navigations
                        </h3>

                        <div className="space-y-4">
                            {navigationLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block text-gray-400 transition hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-indigo-400">
                            Resources
                        </h3>

                        <div className="space-y-4">
                            {resourceLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block text-gray-400 transition hover:text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
                    <p>Copyright © 2026 — HireLoop</p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/terms" className="hover:text-white">
                            Terms & Policy
                        </Link>

                        <span className="hidden md:block">•</span>

                        <Link href="/privacy" className="hover:text-white">
                            Privacy Guideline
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}