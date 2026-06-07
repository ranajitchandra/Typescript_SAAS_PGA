// src/components/shared/Header.tsx

import { BookOpen, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const navLinks = [
    { to: "/", label: "Home" },
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
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4">
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

                <nav>
                    <ul className="flex items-center gap-2 rounded-full border bg-card p-1 shadow-sm">
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
                <nav>
                    <ul className="flex items-center gap-3">
                        <li>
                            <Link
                                to="/"
                                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
                            >
                                Sign In
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm shadow-accent/20 transition hover:opacity-90"
                            >
                                Sign Up
                            </Link>
                        </li>
                        <li>
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
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}
