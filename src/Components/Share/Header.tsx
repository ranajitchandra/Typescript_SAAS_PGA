// src/components/shared/Header.tsx

import { BookOpen, Menu, Moon, Sun, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/books", label: "Book Market" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
];

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
        "rounded-full px-4 py-2 text-sm font-medium transition-all",
        isActive
            ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
    ].join(" ");

const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
        "flex items-center rounded-xl px-4 py-3 text-base font-semibold transition",
        isActive
            ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
            : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground",
    ].join(" ");

export default function Header() {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window === "undefined") {
            return false;
        }

        const savedTheme = window.localStorage.getItem("theme");

        if (savedTheme) {
            return savedTheme === "dark";
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <header className="sticky top-0 z-50 border-b bg-background/90 text-foreground shadow-sm backdrop-blur-xl">
            <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
                <Link
                    to="/"
                    className="inline-flex items-center gap-3 text-xl font-bold text-foreground"
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/25">
                        <BookOpen className="h-5 w-5" />
                    </span>
                    <span>
                        BookSealer
                    </span>
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-2 rounded-full border bg-card py-1 shadow-sm">
                        {navLinks.map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    end={item.to === "/"}
                                    className={getNavLinkClass}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-3">
                        <li>
                            <Link
                                to="/sign-in"
                                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
                            >
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/sign-up"
                                className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-sm shadow-accent/20 transition hover:bg-accent/90"
                            >
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/profile"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-card text-foreground shadow-sm transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                aria-label="Open profile"
                                title="Profile"
                            >
                                <UserRound className="h-4 w-4" />
                            </Link>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => setIsDarkMode((current) => !current)}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-card text-foreground shadow-sm transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
                                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                                title={isDarkMode ? "Light mode" : "Dark mode"}
                            >
                                {isDarkMode ? (
                                    <Sun className="h-4 w-4" />
                                ) : (
                                    <Moon className="h-4 w-4" />
                                )}
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-2 md:hidden">
                    <button
                        type="button"
                        onClick={() => setIsDarkMode((current) => !current)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-card text-foreground shadow-sm transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                        title={isDarkMode ? "Light mode" : "Dark mode"}
                    >
                        {isDarkMode ? (
                            <Sun className="h-4 w-4" />
                        ) : (
                            <Moon className="h-4 w-4" />
                        )}
                    </button>

                    <Sheet>
                        <SheetTrigger asChild>
                            <button
                                type="button"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-card text-foreground shadow-sm transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                aria-label="Open navigation menu"
                            >
                                <Menu className="h-5 w-5" />
                            </button>
                        </SheetTrigger>

                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>
                                    BookSealer
                                </SheetTitle>
                                <SheetDescription>
                                    Browse books, read articles, and manage your marketplace account.
                                </SheetDescription>
                            </SheetHeader>

                            <div className="mt-8 flex flex-col gap-6">
                                <nav>
                                    <ul className="space-y-3 ">
                                        {navLinks.map((item) => (
                                            <li key={item.to} className="w-full">
                                                <SheetClose asChild>
                                                    <NavLink
                                                        to={item.to}
                                                        end={item.to === "/"}
                                                        className={({ isActive }) =>
                                                            `${getMobileNavLinkClass({ isActive })} w-full block`
                                                        }
                                                    >
                                                        {item.label}
                                                    </NavLink>
                                                </SheetClose>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>

                                <div className="rounded-2xl border bg-card p-4">
                                    <p className="text-sm font-semibold text-foreground">
                                        Ready to sell a book?
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Create a trusted listing and reach nearby readers faster.
                                    </p>
                                </div>

                                <div className="grid gap-3">
                                    <SheetClose asChild>
                                        <Link
                                            to="/sign-in"
                                            className="inline-flex items-center justify-center rounded-xl border bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                                        >
                                            Sign In
                                        </Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link
                                            to="/sign-up"
                                            className="inline-flex items-center justify-center rounded-xl bg-accent px-4 py-3 text-sm font-bold text-accent-foreground transition hover:bg-accent/90"
                                        >
                                            Sign Up
                                        </Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link
                                            to="/profile"
                                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
                                        >
                                            <UserRound className="h-4 w-4" />
                                            Profile
                                        </Link>
                                    </SheetClose>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </header>
    );
}
