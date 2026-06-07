// src/components/shared/Header.tsx

import { Link } from "react-router";

export default function Header() {
    return (
        <header className="border-b">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link
                    to="/"
                    className="text-xl font-bold"
                >
                    Type Project
                </Link>

                <nav>
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-primary transition-colors"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="hover:text-primary transition-colors"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                className="hover:text-primary transition-colors"
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-primary transition-colors"
                            >
                                Sign In
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="hover:text-primary transition-colors"
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}