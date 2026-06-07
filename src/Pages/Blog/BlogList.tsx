
import type { Blog } from "@/types/BlogType";
import { Link } from "react-router";
import BlogCard from "./BlogCard";


export const blogs: Blog[] = [
    {
        id: 1,
        title: "Modern React Architecture",
        description:
            "Learn scalable frontend architecture using React, TypeScript and modern tools.",
        images: [
            "https://picsum.photos/800/400",
            "https://picsum.photos/801/400",
            "https://picsum.photos/802/400",
        ],
        author: "Rono",
        date: "2026-06-07",
        likes: 12,
        dislikes: 1,
        rating: 4.5,
        comments: [
            {
                id: 1,
                user: "John",
                message: "Great article!",
                date: "2026-06-07",
            },
        ],
    },
];

export default function BlogList() {
    return (
        <div className="mx-auto max-w-6xl p-6">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold text-[#1B2E4A]">
                    Blogs
                </h1>

                <Link
                    to="/blog/create"
                    className="rounded-xl bg-[#C4A265] px-4 py-2 text-[#1B2E4A] font-medium"
                >
                    + Create Post
                </Link>
            </div>

            {/* List */}
            <div className="w-full">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>

        </div>
    );
}