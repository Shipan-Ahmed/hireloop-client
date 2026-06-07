"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Avatar } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { signOut, useSession } from "@/lib/auth-client";


const navLinks = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Company", href: "/companies" },
    { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { data, isPending } = useSession();
    const user = data?.user;
    console.log("user in navbar: ", user);
    return (
        <header className="fixed top-0 left-0 z-50 w-full px-4 py-4">
            <div className="mx-auto max-w-7xl">
                <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-xl">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-3xl font-bold">
                            <span className="text-blue-500">hire</span>
                            <span className="text-orange-500">loop</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden items-center gap-10 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm text-gray-300 transition hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-5 md:flex">
                        {user ? (
                            <div className='flex items-center gap-3'>
                                <span className="mr-2 ">{user.name}</span>
                                <button onClick={() => signOut()} className='btn  bg-red-500 hover:bg-red-600 text-white border-none'>
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className='flex gap-2'>
                                <Link href="/signin" className='btn   bg-yellow-500 hover:bg-yellow-600 text-white border-none'>Sign In</Link>
                                <Link href="/signup" className='btn  bg-green-500 hover:bg-green-600 text-white border-none'>Sign Up</Link>
                            </div>
                        )}

                        <Button
                            color="primary"
                            radius="lg"
                            className="bg-indigo-600 px-6 text-white hover:bg-indigo-500"
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white md:hidden"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mt-3 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl md:hidden">
                        <div className="flex flex-col p-5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="py-3 text-gray-300 transition hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="mt-4 flex flex-col gap-3">
                                {user ? (
                                    <div className='flex items-center gap-3'>
                                        <span className="mr-2 ">{user.name}</span>
                                        <button onClick={() => signOut()} className='btn  bg-red-500 hover:bg-red-600 text-white border-none'>
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <div className='flex gap-2'>
                                        <Link href="/signin" className='btn   bg-yellow-500 hover:bg-yellow-600 text-white border-none'>Sign In</Link>
                                        <Link href="/signup" className='btn  bg-green-500 hover:bg-green-600 text-white border-none'>Sign Up</Link>
                                    </div>
                                )}

                                <Button
                                    color="primary"
                                    radius="lg"
                                    className="w-full bg-indigo-600"
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}