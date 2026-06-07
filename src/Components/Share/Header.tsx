// src/components/shared/Header.tsx

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

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
        <header className="sticky top-0 z-50 border-b bg-background/95 text-foreground backdrop-blur">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link
                    to="/"
                    className="text-xl font-bold text-foreground"
                >
                    Type Project
                </Link>

                <nav>
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link
                                to="/"
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/blog"
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link
                                to="/"
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                Sign In
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => setIsDarkMode((current) => !current)}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-background text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
