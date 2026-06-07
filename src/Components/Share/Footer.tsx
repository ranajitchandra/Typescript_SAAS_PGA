import { BookOpen, Mail, MapPin, MessageCircle, Phone, Send, Share2 } from "lucide-react";
import { Link } from "react-router";

const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
];

const sellerLinks = [
    "Sell your books",
    "Buyer safety",
    "Pricing guide",
    "Delivery support",
];

export default function Footer() {
    return (
        <footer className="mt-16 border-t bg-card text-card-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
                    <div>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 text-xl font-bold text-foreground"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/25">
                                <BookOpen className="h-5 w-5" />
                            </span>
                            BookSealer
                        </Link>

                        <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
                            A friendly marketplace for readers to buy and sell books locally with clear seller details, fair pricing, and trusted listings.
                        </p>

                        <div className="mt-5 flex gap-3">
                            {[Share2, MessageCircle, Send].map((Icon, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition hover:bg-primary hover:text-primary-foreground"
                                    aria-label="Social link"
                                >
                                    <Icon className="h-4 w-4" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Explore
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-muted-foreground transition hover:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Marketplace
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {sellerLinks.map((link) => (
                                <li key={link}>
                                    <span className="text-sm text-muted-foreground">
                                        {link}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Contact
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-accent" />
                                Dhaka, Bangladesh
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 text-accent" />
                                hello@booksealer.com
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 text-accent" />
                                +880 1700 000000
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        Copyright 2026 BookSealer. All rights reserved.
                    </p>
                    <p>
                        Built for book lovers and local sellers.
                    </p>
                </div>
            </div>
        </footer>
    );
}
