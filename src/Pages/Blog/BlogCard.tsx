
import type { Blog } from "@/types/BlogType";
import { Link } from "react-router";

export default function BlogCard({ blog }: { blog: Blog }) {
    return (
        <div className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md my-5">

            <h2 className="text-xl font-semibold text-[#1B2E4A]">
                {blog.title}
            </h2>

            <p className="mt-2 text-sm text-gray-600">
                {blog.description.slice(0, 100)}...
            </p>

            <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-[#C4A265]">
                    By {blog.author}
                </span>

                <Link
                    to={`/blog/${blog.id}`}
                    className="text-sm font-medium text-[#1B2E4A] hover:text-[#C4A265]"
                >
                    View Details →
                </Link>
            </div>
        </div>
    );
}