
import { blogs } from "@/Mock_Data/Blogs";
import { Link } from "react-router";
import BlogCard from "./BlogCard";

export default function BlogList() {
    return (
        <div className="w-full">
            {/* Header */}
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                        Blog Articles
                    </h1>

                    <p className="mt-2 text-muted-foreground">
                        Insights, tutorials, best practices and modern
                        frontend development guides.
                    </p>
                </div>

                <Link
                    to="/blog/create"
                    className="inline-flex items-center justify-center rounded-2xl bg-accent px-6 py-3 font-medium text-accent-foreground transition hover:opacity-90"
                >
                    Create
                </Link>
            </div>

            {/* Featured Section */}
            <div className="hidden lg:block mb-10 rounded-3xl bg-primary p-8 text-primary-foreground">
                <h2 className="text-2xl font-bold">
                    Featured Articles
                </h2>

                <p className="mt-2 text-primary-foreground/80">
                    Discover our most popular and highly rated content.
                </p>
            </div>

            {/* Grid */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {blogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        blog={blog}
                    />
                ))}
            </div>
        </div>
    );
}
