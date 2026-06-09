import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { bookListings } from "@/Mock_Data/Blogs";
import PostCard from "../Home/PostCard";

const PAGE_SIZE = 9;

const getBookListings = async ({ pageParam = 0 }: { pageParam?: number }) => {
    return bookListings.slice(pageParam, pageParam + PAGE_SIZE);
};

export default function BookPostList() {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ["book-listings"],
        queryFn: getBookListings,
        initialPageParam: 0,
        getNextPageParam: (_lastPage, allPages) => {
            const nextOffset = allPages.length * PAGE_SIZE;

            return nextOffset < bookListings.length ? nextOffset : undefined;
        },
    });

    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasNextPage) {
                fetchNextPage();
            }
        });

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => observer.disconnect();
    }, [fetchNextPage, hasNextPage]);

    if (status === "pending") {
        return (
            <div className="rounded-2xl border bg-card p-8 text-center text-muted-foreground">
                Loading book listings...
            </div>
        );
    }

    return (
        <section className="space-y-6">
            <div className="w-full">
                <div>
                    <h2 className="text-3xl font-bold text-foreground">
                        Selling books now
                    </h2>
                </div>

                <p className="max-w-2xl text-sm text-muted-foreground">
                    Fresh local listings with seller info, pricing, location, and availability so buyers can decide quickly.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {data?.pages.map((page) =>
                    page.map((book) => (
                        <PostCard key={book.id} book={book} />
                    ))
                )}
            </div>

            <div
                ref={loadMoreRef}
                className="flex min-h-12 items-center justify-center"
            >
                {isFetchingNextPage && (
                    <p className="rounded-full border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
                        Loading more books...
                    </p>
                )}
            </div>
        </section>
    );
}
