import type { Post } from "@/types/ApiTypes";

type PostCardProps = {
    post: Post;
};

export default function PostCard({ post }: PostCardProps) {
    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
            <h2 className="mb-2 text-lg font-semibold text-[#1B2E4A]">
                {post.title}
            </h2>

            <p className="text-sm text-gray-600">
                {post.body}
            </p>

            <div className="mt-4 text-xs text-[#C4A265]">
                User ID: {post.userId}
            </div>
        </div>
    );
}