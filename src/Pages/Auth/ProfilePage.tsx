import { BookMarked, Mail, MapPin, Phone, ShieldCheck, UserRound } from "lucide-react";
import type { ReactNode } from "react";

const profileStats = [
    { label: "Active listings", value: "12" },
    { label: "Saved books", value: "34" },
    { label: "Seller rating", value: "4.8" },
];

export default function ProfilePage() {
    return (
        <section className="max-w-4xl mx-auto space-y-8 py-8">
            <div className="rounded-3xl border bg-primary p-6 text-primary-foreground shadow-2xl shadow-primary/15 md:p-8">
                <div className="flex flex-col gap-2 md:flex-row items-center md:justify-between">
                    <div className="flex flex-col sm:flex-row items-center sm:gap-5">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground/12">
                            <UserRound className="h-10 w-10 text-accent" />
                        </div>
                        <div className="text-center sm:text-left sm:py-4">
                            <p className="text-sm font-semibold text-primary-foreground/75">Marketplace profile</p>
                            <h1 className="mt-1 text-3xl font-bold md:text-4xl">Jhon Book Seller</h1>
                            <p className="mt-2 text-sm text-primary-foreground/75">Reader, seller, and trusted local book collector.</p>
                        </div>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground">
                        <ShieldCheck className="h-4 w-4" />
                        Verified profile
                    </span>
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
                {profileStats.map((item) => (
                    <div key={item.label} className="rounded-2xl border bg-card p-5 text-card-foreground shadow-sm">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="mt-2 text-3xl font-bold">{item.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_0.8fr]">
                <div className="rounded-2xl border bg-card p-6 text-card-foreground shadow-sm">
                    <h2 className="text-2xl font-bold">Account details</h2>
                    <div className="mt-5 grid gap-4">
                        <ProfileInfo icon={<Mail className="h-4 w-4" />} label="Email" value="ranajit@example.com" />
                        <ProfileInfo icon={<Phone className="h-4 w-4" />} label="Phone" value="01712345678" />
                        <ProfileInfo icon={<MapPin className="h-4 w-4" />} label="Location" value="Dhaka, Bangladesh" />
                    </div>
                </div>

                <div className="rounded-2xl border bg-secondary p-6 text-secondary-foreground shadow-sm">
                    <BookMarked className="h-8 w-8 text-accent" />
                    <h2 className="mt-4 text-2xl font-bold">Profile ready</h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        This page can be connected to real user data after sign-in. It already follows the app theme and layout.
                    </p>
                </div>
            </div>
        </section>
    );
}

function ProfileInfo({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
    return (
        <div className="flex items-center gap-3 rounded-xl border bg-background px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                {icon}
            </span>
            <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground">{label}</p>
                <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
        </div>
    );
}
