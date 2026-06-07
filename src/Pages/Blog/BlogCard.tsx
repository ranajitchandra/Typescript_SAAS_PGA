import type { Blog } from "@/types/BlogType";
import { Link } from "react-router";

type BlogCardProps = {
    blog: Blog;
};

export default function BlogCard({
    blog,
}: BlogCardProps) {
    return (
        <article className="overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* Image */}
            <div className="relative">
                <img
                    src={blog.featuredImage}
                    alt={blog.title}
                    className="h-60 w-full object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-[#C4A265] px-3 py-1 text-xs font-medium text-[#1B2E4A]">
                    {blog.category}
                </span>
            </div>

            <div className="p-6">
                {/* Meta */}
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span>{blog.publishedAt}</span>
                    <span>•</span>
                    <span>{blog.readingTime} min read</span>
                    <span>•</span>
                    <span>{blog.views.toLocaleString()} views</span>
                </div>

                {/* Title */}
                <h2 className="line-clamp-2 text-xl font-bold text-[#1B2E4A]">
                    {blog.title}
                </h2>

                {/* Excerpt */}
                <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                    {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {blog.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-[#C4A265]/30 bg-[#C4A265]/10 px-3 py-1 text-xs text-[#1B2E4A]"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                        <img
                            src={blog.author.avatar}
                            alt={blog.author.name}
                            className="h-10 w-10 rounded-full object-cover"
                        />

                        <div>
                            <p className="text-sm font-semibold text-[#1B2E4A]">
                                {blog.author.name}
                            </p>

                            <p className="text-xs text-gray-500">
                                {blog.author.role}
                            </p>
                        </div>
                    </div>

                    <Link
                        to={`/blog/${blog.id}`}
                        className="rounded-xl bg-[#1B2E4A] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#243c60]"
                    >
                        Read More
                    </Link>
                </div>

                {/* Stats */}
                <div className="mt-5 flex flex-wrap gap-4 border-t pt-4 text-sm text-gray-500">
                    <span>❤️ {blog.likes}</span>
                    <span>👎 {blog.dislikes}</span>
                    <span>
                        ⭐ {blog.rating} ({blog.totalRatings})
                    </span>
                </div>
            </div>
        </article>
    );
}