import type { BookListing } from "@/types/BookList";
import { CalendarDays, Clock3, MapPin, ShoppingBag } from "lucide-react";

type PostCardProps = {
    book: BookListing;
};

export default function PostCard({ book }: PostCardProps) {
    return (
        <article className="group overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-60 overflow-hidden">
                <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                        {book.condition}
                    </span>
                </div>
            </div>

            <div className="space-y-5 p-5">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                        <img
                            src={book.postedBy.avatar}
                            alt={book.postedBy.name}
                            className="h-11 w-11 rounded-full object-cover ring-2 ring-accent/25"
                        />

                        <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-card-foreground">
                                {book.postedBy.name}
                            </p>
                            <p className="truncate text-xs text-muted-foreground">
                                {book.postedBy.badge}
                            </p>
                        </div>
                    </div>

                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                        Posted
                    </span>
                </div>

                <div>
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                        <CalendarDays className="h-4 w-4 text-accent" />
                        {book.postedAt}
                    </div>

                    <h3 className="line-clamp-2 text-xl font-bold text-card-foreground">
                        {book.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                        {book.description}
                    </p>
                </div>

                <div className="grid gap-3 rounded-xl bg-muted p-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{book.sellerLocation}</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock3 className="h-4 w-4 text-accent" />
                        <span>{book.availableDuration}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 border-t pt-5">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Price
                        </p>
                        <p className="text-2xl font-bold text-foreground">
                            $ {book.price.toLocaleString()}
                        </p>
                    </div>

                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        <ShoppingBag className="h-4 w-4" />
                        Book
                    </button>
                </div>
            </div>
        </article>
    );
}
