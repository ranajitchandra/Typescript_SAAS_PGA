import type { Blog } from "@/types/BlogType";

type BlogSeed = Omit<Blog, "reviews" | "comments">;

const blogSeeds: BlogSeed[] = [
    {
        id: 1,
        slug: "modern-react-architecture",
        category: "React",
        title: "Modern React Architecture",
        excerpt:
            "Learn how to structure large React applications for scalability and maintainability.",
        content:
            "Modern React architecture focuses on separation of concerns, reusable components, feature-based folder structures, and efficient state management. By organizing your application properly from the beginning, you can reduce technical debt and make future development much easier.",
        featuredImage: "https://picsum.photos/id/1015/1200/700",
        images: [
            "https://picsum.photos/id/1015/1200/700",
            "https://picsum.photos/id/1016/1200/700",
            "https://picsum.photos/id/1018/1200/700",
        ],
        author: {
            name: "Rono",
            avatar: "https://i.pravatar.cc/150?img=1",
            role: "Senior Frontend Engineer",
        },
        tags: ["React", "Architecture", "Frontend"],
        likes: 145,
        dislikes: 4,
        rating: 4.9,
        totalRatings: 87,
        views: 12540,
        readingTime: 8,
        publishedAt: "2026-06-07",
    },

    {
        id: 2,
        slug: "typescript-best-practices",
        category: "TypeScript",
        title: "TypeScript Best Practices",
        excerpt:
            "Write cleaner and safer code with modern TypeScript techniques.",
        content:
            "TypeScript helps developers catch errors early and improve maintainability. Understanding interfaces, types, generics, utility types, and strict mode can greatly improve your codebase quality.",
        featuredImage: "https://picsum.photos/id/1025/1200/700",
        images: [
            "https://picsum.photos/id/1025/1200/700",
            "https://picsum.photos/id/1027/1200/700",
            "https://picsum.photos/id/1028/1200/700",
        ],
        author: {
            name: "Sarah Johnson",
            avatar: "https://i.pravatar.cc/150?img=2",
            role: "TypeScript Expert",
        },
        tags: ["TypeScript", "JavaScript", "Coding"],
        likes: 223,
        dislikes: 7,
        rating: 4.8,
        totalRatings: 112,
        views: 18820,
        readingTime: 6,
        publishedAt: "2026-06-05",
    },

    {
        id: 3,
        slug: "react-query-guide",
        category: "React Query",
        title: "Complete React Query Guide",
        excerpt:
            "Master server state management using TanStack Query.",
        content:
            "React Query simplifies data fetching, caching, synchronization and background updates. It improves UX while reducing boilerplate code.",
        featuredImage: "https://picsum.photos/id/1035/1200/700",
        images: [
            "https://picsum.photos/id/1035/1200/700",
            "https://picsum.photos/id/1036/1200/700",
            "https://picsum.photos/id/1037/1200/700",
        ],
        author: {
            name: "Alex Smith",
            avatar: "https://i.pravatar.cc/150?img=3",
            role: "React Specialist",
        },
        tags: ["React Query", "API", "Frontend"],
        likes: 332,
        dislikes: 9,
        rating: 5,
        totalRatings: 148,
        views: 24110,
        readingTime: 10,
        publishedAt: "2026-06-04",
    },

    {
        id: 4,
        slug: "responsive-ui-design",
        category: "UI Design",
        title: "Responsive UI Design Principles",
        excerpt:
            "Build beautiful interfaces that work across all devices.",
        content:
            "Responsive design focuses on flexible layouts, scalable typography and adaptive user experiences.",
        featuredImage: "https://picsum.photos/id/1040/1200/700",
        images: [
            "https://picsum.photos/id/1040/1200/700",
            "https://picsum.photos/id/1041/1200/700",
            "https://picsum.photos/id/1042/1200/700",
        ],
        author: {
            name: "Emily Clark",
            avatar: "https://i.pravatar.cc/150?img=4",
            role: "UI Designer",
        },
        tags: ["Design", "UI", "UX"],
        likes: 198,
        dislikes: 3,
        rating: 4.7,
        totalRatings: 91,
        views: 14700,
        readingTime: 7,
        publishedAt: "2026-06-03",
    },

    {
        id: 5,
        slug: "jwt-authentication-guide",
        category: "Security",
        title: "JWT Authentication Guide",
        excerpt:
            "Implement secure authentication in React applications.",
        content:
            "JWT authentication is widely used in modern web applications for secure user sessions and API authorization.",
        featuredImage: "https://picsum.photos/id/1050/1200/700",
        images: [
            "https://picsum.photos/id/1050/1200/700",
            "https://picsum.photos/id/1051/1200/700",
            "https://picsum.photos/id/1052/1200/700",
        ],
        author: {
            name: "Michael Brown",
            avatar: "https://i.pravatar.cc/150?img=5",
            role: "Security Engineer",
        },
        tags: ["JWT", "Security", "Authentication"],
        likes: 176,
        dislikes: 5,
        rating: 4.6,
        totalRatings: 79,
        views: 13800,
        readingTime: 9,
        publishedAt: "2026-06-02",
    },

    {
        id: 6,
        slug: "zustand-vs-redux",
        category: "State Management",
        title: "Zustand vs Redux",
        excerpt:
            "Compare two popular state management solutions for React.",
        content:
            "Redux offers predictability while Zustand provides simplicity. Choosing the right tool depends on your project requirements.",
        featuredImage: "https://picsum.photos/id/1060/1200/700",
        images: [
            "https://picsum.photos/id/1060/1200/700",
            "https://picsum.photos/id/1061/1200/700",
            "https://picsum.photos/id/1062/1200/700",
        ],
        author: {
            name: "David Lee",
            avatar: "https://i.pravatar.cc/150?img=6",
            role: "Frontend Architect",
        },
        tags: ["Redux", "Zustand", "React"],
        likes: 120,
        dislikes: 2,
        rating: 4.5,
        totalRatings: 61,
        views: 9800,
        readingTime: 5,
        publishedAt: "2026-06-01",
    },

    {
        id: 7,
        slug: "nextjs-seo-guide",
        category: "Next.js",
        title: "Next.js SEO Guide",
        excerpt:
            "Improve search rankings with proper SEO implementation.",
        content:
            "Next.js provides powerful SEO capabilities through server rendering, metadata APIs and optimized performance.",
        featuredImage: "https://picsum.photos/id/1070/1200/700",
        images: [
            "https://picsum.photos/id/1070/1200/700",
            "https://picsum.photos/id/1071/1200/700",
            "https://picsum.photos/id/1072/1200/700",
        ],
        author: {
            name: "Sophia Wilson",
            avatar: "https://i.pravatar.cc/150?img=7",
            role: "SEO Consultant",
        },
        tags: ["Next.js", "SEO", "Performance"],
        likes: 260,
        dislikes: 8,
        rating: 4.8,
        totalRatings: 133,
        views: 21400,
        readingTime: 11,
        publishedAt: "2026-05-30",
    },

    {
        id: 8,
        slug: "frontend-performance",
        category: "Performance",
        title: "Frontend Performance Optimization",
        excerpt:
            "Reduce load times and improve Core Web Vitals.",
        content:
            "Performance optimization involves lazy loading, code splitting, image optimization and efficient rendering.",
        featuredImage: "https://picsum.photos/id/1080/1200/700",
        images: [
            "https://picsum.photos/id/1080/1200/700",
            "https://picsum.photos/id/1081/1200/700",
            "https://picsum.photos/id/1082/1200/700",
        ],
        author: {
            name: "Daniel Green",
            avatar: "https://i.pravatar.cc/150?img=8",
            role: "Performance Engineer",
        },
        tags: ["Performance", "Optimization", "React"],
        likes: 310,
        dislikes: 6,
        rating: 4.9,
        totalRatings: 156,
        views: 27500,
        readingTime: 12,
        publishedAt: "2026-05-28",
    },

    {
        id: 9,
        slug: "tailwind-css-tips",
        category: "Tailwind",
        title: "Tailwind CSS Pro Tips",
        excerpt:
            "Build beautiful user interfaces faster using Tailwind CSS.",
        content:
            "Tailwind CSS enables rapid UI development with utility-first classes and consistent design systems.",
        featuredImage: "https://picsum.photos/id/1090/1200/700",
        images: [
            "https://picsum.photos/id/1090/1200/700",
            "https://picsum.photos/id/1091/1200/700",
            "https://picsum.photos/id/1092/1200/700",
        ],
        author: {
            name: "Olivia Martin",
            avatar: "https://i.pravatar.cc/150?img=9",
            role: "UI Engineer",
        },
        tags: ["Tailwind", "CSS", "Design"],
        likes: 204,
        dislikes: 4,
        rating: 4.7,
        totalRatings: 94,
        views: 16300,
        readingTime: 6,
        publishedAt: "2026-05-27",
    },

    {
        id: 10,
        slug: "deploy-react-apps",
        category: "Deployment",
        title: "Deploy React Applications",
        excerpt:
            "Learn deployment workflows using Vercel, Netlify and Docker.",
        content:
            "Modern deployment platforms make it easy to host, scale and maintain React applications.",
        featuredImage: "https://picsum.photos/id/1100/1200/700",
        images: [
            "https://picsum.photos/id/1100/1200/700",
            "https://picsum.photos/id/1101/1200/700",
            "https://picsum.photos/id/1102/1200/700",
        ],
        author: {
            name: "James Carter",
            avatar: "https://i.pravatar.cc/150?img=10",
            role: "DevOps Engineer",
        },
        tags: ["Deployment", "Docker", "Vercel"],
        likes: 189,
        dislikes: 5,
        rating: 4.6,
        totalRatings: 88,
        views: 14200,
        readingTime: 8,
        publishedAt: "2026-05-25",
    },
];

const reviewTemplates = [
    {
        user: "Maya Rahman",
        avatar: "https://i.pravatar.cc/150?img=32",
        review:
            "Clear, practical, and easy to apply. The examples make the topic feel much more approachable.",
    },
    {
        user: "Arif Hossain",
        avatar: "https://i.pravatar.cc/150?img=52",
        review:
            "Loved the structure and the real-world perspective. I would happily share this with my team.",
    },
    {
        user: "Nadia Islam",
        avatar: "https://i.pravatar.cc/150?img=47",
        review:
            "A polished guide with useful takeaways. The writing stays focused without feeling too short.",
    },
];

const commentTemplates = [
    {
        user: "Tanvir Ahmed",
        avatar: "https://i.pravatar.cc/150?img=18",
        comment:
            "This helped me connect a few concepts I was struggling with. Great read.",
    },
    {
        user: "Priya Sen",
        avatar: "https://i.pravatar.cc/150?img=29",
        comment:
            "The checklist-style ideas are especially useful for planning a new project.",
    },
    {
        user: "Hasan Ali",
        avatar: "https://i.pravatar.cc/150?img=41",
        comment:
            "Would love a deeper follow-up with implementation examples and tradeoffs.",
    },
];

export const blogs: Blog[] = blogSeeds.map((blog, index) => ({
    ...blog,
    reviews: reviewTemplates.slice(0, 2).map((review, reviewIndex) => ({
        ...review,
        id: blog.id * 100 + reviewIndex + 1,
        rating: Math.max(4, Math.min(5, blog.rating - reviewIndex * 0.2)),
        date: `2026-06-${String(Math.max(1, 7 - index - reviewIndex)).padStart(2, "0")}`,
    })),
    comments: commentTemplates.slice(0, 3).map((comment, commentIndex) => ({
        ...comment,
        id: blog.id * 1000 + commentIndex + 1,
        date: `2026-06-${String(Math.max(1, 6 - index - commentIndex)).padStart(2, "0")}`,
    })),
}));


