import type { Post } from "@/types/ApiTypes";

type PostCardProps = {
    post: Post;
};

export default function PostCard({ post }: PostCardProps) {
    return (
        <div className="rounded-xl border bg-card p-5 text-card-foreground shadow-sm transition hover:shadow-md">
            <h2 className="mb-2 text-lg font-semibold text-card-foreground">
                {post.title}
            </h2>

            <p className="text-sm text-muted-foreground">
                {post.body}
            </p>

            <div className="mt-4 text-xs text-accent">
                User ID: {post.userId}
            </div>
        </div>
    );
}
