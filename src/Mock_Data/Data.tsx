import type { Blog } from "@/types/BlogType";
import type { BookListing } from "@/types/BookList";



export const bookListings: BookListing[] = [
    {
        id: 1,
        postedBy: {
            name: "Maya Rahman",
            avatar: "https://i.pravatar.cc/150?img=32",
            badge: "Verified seller",
        },
        postedAt: "2026-06-07",
        title: "Atomic Habits",
        description:
            "A clean paperback copy with light underlines in the first two chapters. Great for building practical daily systems.",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Dhanmondi, Dhaka",
        price: 620,
        availableDuration: "Available for 12 days",
        condition: "Like new",
    },
    {
        id: 2,
        postedBy: {
            name: "Arif Hossain",
            avatar: "https://i.pravatar.cc/150?img=52",
            badge: "Fast response",
        },
        postedAt: "2026-06-06",
        title: "Clean Code",
        description:
            "Developer favorite in excellent condition. Perfect for anyone serious about readable, maintainable software.",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Uttara, Dhaka",
        price: 980,
        availableDuration: "Available for 8 days",
        condition: "Excellent",
    },
    {
        id: 3,
        postedBy: {
            name: "Nadia Islam",
            avatar: "https://i.pravatar.cc/150?img=47",
            badge: "Top rated",
        },
        postedAt: "2026-06-05",
        title: "The Psychology of Money",
        description:
            "Hardcover edition with crisp pages and no markings.",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Banani, Dhaka",
        price: 740,
        availableDuration: "Available for 15 days",
        condition: "New",
    },
    {
        id: 4,
        postedBy: {
            name: "Tanvir Ahmed",
            avatar: "https://i.pravatar.cc/150?img=18",
            badge: "Campus seller",
        },
        postedAt: "2026-06-04",
        title: "Designing Data-Intensive Applications",
        description:
            "Well-kept technical book for backend and distributed systems learners.",
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Mirpur, Dhaka",
        price: 1350,
        availableDuration: "Available for 6 days",
        condition: "Good",
    },
    {
        id: 5,
        postedBy: {
            name: "Priya Sen",
            avatar: "https://i.pravatar.cc/150?img=29",
            badge: "Book lover",
        },
        postedAt: "2026-06-03",
        title: "Deep Work",
        description:
            "Minimal wear, smooth pages, and a beautiful cover.",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Bashundhara R/A, Dhaka",
        price: 560,
        availableDuration: "Available for 10 days",
        condition: "Very good",
    },
    {
        id: 6,
        postedBy: {
            name: "Sabbir Khan",
            avatar: "https://i.pravatar.cc/150?img=11",
            badge: "Verified seller",
        },
        postedAt: "2026-06-02",
        title: "Rich Dad Poor Dad",
        description:
            "Popular finance book with clean pages and sturdy binding.",
        image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Mohammadpur, Dhaka",
        price: 450,
        availableDuration: "Available for 7 days",
        condition: "Good",
    },
    {
        id: 7,
        postedBy: {
            name: "Farhana Akter",
            avatar: "https://i.pravatar.cc/150?img=24",
            badge: "Top rated",
        },
        postedAt: "2026-06-01",
        title: "Think and Grow Rich",
        description:
            "Classic personal development book in great condition.",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Gulshan, Dhaka",
        price: 390,
        availableDuration: "Available for 14 days",
        condition: "Excellent",
    },
    {
        id: 8,
        postedBy: {
            name: "Rakib Hasan",
            avatar: "https://i.pravatar.cc/150?img=60",
            badge: "Fast response",
        },
        postedAt: "2026-05-31",
        title: "The Pragmatic Programmer",
        description:
            "A must-read for software developers. Minor cover wear.",
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Rampura, Dhaka",
        price: 1150,
        availableDuration: "Available for 5 days",
        condition: "Very good",
    },
    {
        id: 9,
        postedBy: {
            name: "Jannat Ara",
            avatar: "https://i.pravatar.cc/150?img=44",
            badge: "Book lover",
        },
        postedAt: "2026-05-30",
        title: "Ikigai",
        description:
            "Motivational bestseller with no highlights or notes.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Malibagh, Dhaka",
        price: 520,
        availableDuration: "Available for 11 days",
        condition: "Like new",
    },
    {
        id: 10,
        postedBy: {
            name: "Mehedi Hasan",
            avatar: "https://i.pravatar.cc/150?img=67",
            badge: "Campus seller",
        },
        postedAt: "2026-05-29",
        title: "Eloquent JavaScript",
        description:
            "Perfect resource for learning modern JavaScript.",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Farmgate, Dhaka",
        price: 880,
        availableDuration: "Available for 9 days",
        condition: "Excellent",
    },
    {
        id: 11,
        postedBy: {
            name: "Ritu Das",
            avatar: "https://i.pravatar.cc/150?img=21",
            badge: "Verified seller",
        },
        postedAt: "2026-05-28",
        title: "Start With Why",
        description:
            "Leadership and motivation book in excellent shape.",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Shyamoli, Dhaka",
        price: 480,
        availableDuration: "Available for 13 days",
        condition: "Very good",
    },
    {
        id: 12,
        postedBy: {
            name: "Nafis Chowdhury",
            avatar: "https://i.pravatar.cc/150?img=36",
            badge: "Top rated",
        },
        postedAt: "2026-05-27",
        title: "Refactoring",
        description:
            "Essential guide for improving existing codebases.",
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Badda, Dhaka",
        price: 1290,
        availableDuration: "Available for 4 days",
        condition: "Good",
    },
    {
        id: 13,
        postedBy: {
            name: "Sadia Noor",
            avatar: "https://i.pravatar.cc/150?img=49",
            badge: "Book lover",
        },
        postedAt: "2026-05-26",
        title: "Sapiens",
        description:
            "Engaging history book with clean pages.",
        image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Tejgaon, Dhaka",
        price: 690,
        availableDuration: "Available for 16 days",
        condition: "Like new",
    },
    {
        id: 14,
        postedBy: {
            name: "Ashikur Rahman",
            avatar: "https://i.pravatar.cc/150?img=15",
            badge: "Fast response",
        },
        postedAt: "2026-05-25",
        title: "Zero to One",
        description:
            "Startup and entrepreneurship classic with minimal wear.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Khilgaon, Dhaka",
        price: 540,
        availableDuration: "Available for 12 days",
        condition: "Excellent",
    },
    {
        id: 15,
        postedBy: {
            name: "Tania Sultana",
            avatar: "https://i.pravatar.cc/150?img=40",
            badge: "Verified seller",
        },
        postedAt: "2026-05-24",
        title: "The Lean Startup",
        description:
            "Great condition, ideal for entrepreneurs and product builders.",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
        sellerLocation: "Wari, Dhaka",
        price: 610,
        availableDuration: "Available for 7 days",
        condition: "Very good",
    },
];
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
        featuredImage: "https://picsum.photos/id/1000/1200/700",
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
        featuredImage: "https://picsum.photos/id/100/1200/700",
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


