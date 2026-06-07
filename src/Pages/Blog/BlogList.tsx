
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
            "https://picsum.photos/id/1015/1200/600",
            "https://picsum.photos/id/1016/1200/600",
            "https://picsum.photos/id/1018/1200/600",
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
    {
        id: 2,
        title: "TypeScript Best Practices",
        description:
            "Improve maintainability and scalability with proper TypeScript patterns.",
        images: [
            "https://picsum.photos/id/1020/1200/600",
            "https://picsum.photos/id/1024/1200/600",
            "https://picsum.photos/id/1025/1200/600",
        ],
        author: "Sarah",
        date: "2026-06-06",
        likes: 24,
        dislikes: 2,
        rating: 4.8,
        comments: [],
    },
    {
        id: 3,
        title: "Mastering React Query",
        description:
            "Learn caching, pagination, mutations and data synchronization.",
        images: [
            "https://picsum.photos/id/1035/1200/600",
            "https://picsum.photos/id/1037/1200/600",
            "https://picsum.photos/id/1038/1200/600",
        ],
        author: "Alex",
        date: "2026-06-05",
        likes: 36,
        dislikes: 3,
        rating: 4.9,
        comments: [],
    },
    {
        id: 4,
        title: "Building Responsive UI",
        description:
            "Create beautiful responsive interfaces using Tailwind CSS.",
        images: [
            "https://picsum.photos/id/1040/1200/600",
            "https://picsum.photos/id/1041/1200/600",
            "https://picsum.photos/id/1042/1200/600",
        ],
        author: "Emily",
        date: "2026-06-04",
        likes: 18,
        dislikes: 1,
        rating: 4.4,
        comments: [],
    },
    {
        id: 5,
        title: "React Router Complete Guide",
        description:
            "Understand nested routes, layouts and protected routes.",
        images: [
            "https://picsum.photos/id/1050/1200/600",
            "https://picsum.photos/id/1051/1200/600",
            "https://picsum.photos/id/1052/1200/600",
        ],
        author: "Michael",
        date: "2026-06-03",
        likes: 41,
        dislikes: 4,
        rating: 4.7,
        comments: [],
    },
    {
        id: 6,
        title: "Frontend Project Structure",
        description:
            "Organize your React applications for long-term scalability.",
        images: [
            "https://picsum.photos/id/1060/1200/600",
            "https://picsum.photos/id/1061/1200/600",
            "https://picsum.photos/id/1062/1200/600",
        ],
        author: "David",
        date: "2026-06-02",
        likes: 22,
        dislikes: 2,
        rating: 4.3,
        comments: [],
    },
    {
        id: 7,
        title: "Authentication with JWT",
        description:
            "Implement secure authentication using JWT and refresh tokens.",
        images: [
            "https://picsum.photos/id/1070/1200/600",
            "https://picsum.photos/id/1071/1200/600",
            "https://picsum.photos/id/1072/1200/600",
        ],
        author: "Sophia",
        date: "2026-06-01",
        likes: 55,
        dislikes: 5,
        rating: 4.9,
        comments: [],
    },
    {
        id: 8,
        title: "Performance Optimization",
        description:
            "Reduce bundle size and improve rendering performance.",
        images: [
            "https://picsum.photos/id/1080/1200/600",
            "https://picsum.photos/id/1081/1200/600",
            "https://picsum.photos/id/1082/1200/600",
        ],
        author: "Daniel",
        date: "2026-05-31",
        likes: 31,
        dislikes: 2,
        rating: 4.6,
        comments: [],
    },
    {
        id: 9,
        title: "State Management in React",
        description:
            "Compare Context API, Zustand and Redux for different use cases.",
        images: [
            "https://picsum.photos/id/1090/1200/600",
            "https://picsum.photos/id/1091/1200/600",
            "https://picsum.photos/id/1092/1200/600",
        ],
        author: "Olivia",
        date: "2026-05-30",
        likes: 27,
        dislikes: 3,
        rating: 4.5,
        comments: [],
    },
    {
        id: 10,
        title: "Deploying React Applications",
        description:
            "Learn deployment strategies using Vercel, Netlify and Docker.",
        images: [
            "https://picsum.photos/id/1100/1200/600",
            "https://picsum.photos/id/1101/1200/600",
            "https://picsum.photos/id/1102/1200/600",
        ],
        author: "James",
        date: "2026-05-29",
        likes: 48,
        dislikes: 4,
        rating: 4.8,
        comments: [],
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