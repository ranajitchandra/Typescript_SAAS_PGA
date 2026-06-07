import type { Blog } from "@/types/BlogType";
import { Link } from "react-router";

type BlogCardProps = {
    blog: Blog;
};

export default function BlogCard({
    blog,
}: BlogCardProps) {
    return (
        <article className="overflow-hidden rounded-3xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative">
                <img
                    src={blog.featuredImage}
                    alt={blog.title}
                    className="h-60 w-full object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                    {blog.category}
                </span>
            </div>

            <div className="p-6">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span>{blog.publishedAt}</span>
                    <span>-</span>
                    <span>{blog.readingTime} min read</span>
                    <span>-</span>
                    <span>{blog.views.toLocaleString()} views</span>
                </div>

                <h2 className="line-clamp-2 text-xl font-bold text-card-foreground">
                    {blog.title}
                </h2>

                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                    {blog.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {blog.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-foreground"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src={blog.author.avatar}
                            alt={blog.author.name}
                            className="h-10 w-10 rounded-full object-cover"
                        />

                        <div>
                            <p className="text-sm font-semibold text-card-foreground">
                                {blog.author.name}
                            </p>

                            <p className="text-xs text-muted-foreground">
                                {blog.author.role}
                            </p>
                        </div>
                    </div>

                    <Link
                        to={`/blog/${blog.id}`}
                        className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/85"
                    >
                        Read More
                    </Link>
                </div>

                <div className="mt-5 flex flex-wrap gap-4 border-t pt-4 text-sm text-muted-foreground">
                    <span>Likes {blog.likes}</span>
                    <span>Dislikes {blog.dislikes}</span>
                    <span>
                        Rating {blog.rating} ({blog.totalRatings})
                    </span>
                </div>
            </div>
        </article>
    );
}
