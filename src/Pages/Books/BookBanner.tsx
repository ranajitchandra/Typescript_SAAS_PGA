
import { BookOpenCheck, MapPin, Sparkles } from "lucide-react";

export default function BookBanner() {
    return (
        <div className="space-y-12">
            <section className="relative overflow-hidden rounded-3xl border bg-primary text-primary-foreground shadow-2xl shadow-primary/15">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80"
                        alt="Bookshelves in a warm book shop"
                        className="h-full w-full object-cover opacity-35"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/85 to-primary/45" />
                </div>

                <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] px-5 py-12 md:px-10 md:py-16">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                            <Sparkles className="h-4 w-4" />
                            Buy and sell books nearby
                        </div>

                        <h1 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                            Find your next favorite book from trusted local sellers.
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/82 md:text-lg">
                            Browse affordable second-hand and new books, compare seller locations, and grab the best deal before the listing expires.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/12 px-4 py-2 text-sm font-medium">
                                <BookOpenCheck className="h-4 w-4 text-accent" />
                                5 fresh listings
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/12 px-4 py-2 text-sm font-medium">
                                <MapPin className="h-4 w-4 text-accent" />
                                Dhaka sellers
                            </span>
                        </div>
                    </div>

                    <div className="flex items-end justify-start md:justify-end">
                        <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-5 backdrop-blur">
                            <p className="text-sm font-medium text-primary-foreground/70">
                                Marketplace vision
                            </p>
                            <p className="mt-2 max-w-sm text-lg md:text-xl lg:text-2xl font-bold">
                                A friendly book sealer platform for students, readers, and collectors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
