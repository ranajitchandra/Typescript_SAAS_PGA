import { useEffect, useRef } from "react";
import PostCard from "./PostCard";
import { getPosts } from "@/Apis/Post";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function PostList() {

    const usePosts = () => {
        return useInfiniteQuery({
            queryKey: ["posts"],
            queryFn: getPosts,

            initialPageParam: 0,

            getNextPageParam: (lastPage, allPages) => {
                if (lastPage.length < 9) return undefined;
                return allPages.length * 9;
            },
        });
    };

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = usePosts();

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
        return <p className="text-muted-foreground">Loading...</p>;
    }

    return (
        <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Posts */}
                {data?.pages.map((page) =>
                    page.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))
                )}
            </div>

            {/* Loader Trigger */}
            <div
                ref={loadMoreRef}
                className="h-10 flex items-center justify-center"
            >
                {isFetchingNextPage && (
                    <p className="text-muted-foreground">
                        Loading more...
                    </p>
                )}
            </div>
        </div>
    );
}






