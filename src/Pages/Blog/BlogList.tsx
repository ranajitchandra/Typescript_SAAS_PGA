
import { blogs } from "@/Mock_Data/Data";
import { Link } from "react-router";
import BlogCard from "./BlogCard";

export default function BlogList() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[#1B2E4A]">
            Blog Articles
          </h1>

          <p className="mt-2 text-gray-600">
            Insights, tutorials, best practices and modern
            frontend development guides.
          </p>
        </div>

        <Link
          to="/blog/create"
          className="inline-flex items-center justify-center rounded-2xl bg-[#C4A265] px-6 py-3 font-medium text-[#1B2E4A] transition hover:opacity-90"
        >
          Create Blog
        </Link>
      </div>

      {/* Featured Section */}
      <div className="mb-10 rounded-3xl bg-[#1B2E4A] p-8 text-white">
        <h2 className="text-2xl font-bold">
          Featured Articles
        </h2>

        <p className="mt-2 text-white/80">
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