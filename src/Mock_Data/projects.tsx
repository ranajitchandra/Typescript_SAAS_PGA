import type { Project } from "@/types/ProjectType";

export const projects: Project[] = [
    {
        id: 1,
        title: "BookSealer Marketplace",
        slug: "booksealer-marketplace",
        description:
            "A full-stack MERN marketplace where readers can list, discover, and negotiate second-hand books with verified sellers across the city.",
        image:
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80",
        category: "Full Stack",
        status: "Completed",
        featured: true,
        stack: [
            { name: "React", icon: "Code2", color: "text-cyan-500" },
            { name: "Node.js", icon: "Server", color: "text-green-500" },
            { name: "MongoDB", icon: "Database", color: "text-emerald-500" },
            { name: "Express", icon: "Layers", color: "text-gray-500" },
            { name: "Tailwind", icon: "Palette", color: "text-sky-500" },
        ],
        links: {
            live: "https://booksealer.example.com",
            client: "https://github.com/ranajit/booksealer-client",
            server: "https://github.com/ranajit/booksealer-server",
        },
    },
    {
        id: 2,
        title: "DevPulse Dashboard",
        slug: "devpulse-dashboard",
        description:
            "An analytics dashboard that visualises GitHub activity, sprint velocity, and code review health for engineering teams in real time.",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        category: "Frontend",
        status: "Completed",
        stack: [
            { name: "Next.js", icon: "Triangle", color: "text-black dark:text-white" },
            { name: "TypeScript", icon: "FileCode", color: "text-blue-500" },
            { name: "Tailwind", icon: "Palette", color: "text-sky-500" },
            { name: "Recharts", icon: "BarChart3", color: "text-purple-500" },
        ],
        links: {
            live: "https://devpulse.example.com",
            client: "https://github.com/ranajit/devpulse",
        },
    },
    {
        id: 3,
        title: "CloudBite Food Delivery",
        slug: "cloudbite-food-delivery",
        description:
            "A lightning-fast food delivery platform with live order tracking, smart restaurant recommendations, and Stripe-powered checkout.",
        image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
        category: "Full Stack",
        status: "Completed",
        featured: true,
        stack: [
            { name: "React Native", icon: "Smartphone", color: "text-cyan-500" },
            { name: "Node.js", icon: "Server", color: "text-green-500" },
            { name: "PostgreSQL", icon: "Database", color: "text-blue-600" },
            { name: "Stripe", icon: "CreditCard", color: "text-indigo-500" },
        ],
        links: {
            live: "https://cloudbite.example.com",
            client: "https://github.com/ranajit/cloudbite-app",
            server: "https://github.com/ranajit/cloudbite-api",
        },
    },
    {
        id: 4,
        title: "TaskFlow SaaS",
        slug: "taskflow-saas",
        description:
            "A collaborative project management tool with kanban boards, time tracking, and AI-assisted standup summaries for remote teams.",
        image:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
        category: "Full Stack",
        status: "In Progress",
        stack: [
            { name: "Vue 3", icon: "Triangle", color: "text-emerald-500" },
            { name: "Firebase", icon: "Flame", color: "text-orange-500" },
            { name: "Pinia", icon: "Boxes", color: "text-yellow-500" },
        ],
        links: {
            live: "https://taskflow.example.com",
            client: "https://github.com/ranajit/taskflow-client",
            server: "https://github.com/ranajit/taskflow-functions",
        },
    },
    {
        id: 5,
        title: "FinTrack Wallet",
        slug: "fintrack-wallet",
        description:
            "A personal finance app that categorises expenses, forecasts cash flow, and helps users reach savings goals with smart nudges.",
        image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
        category: "Mobile",
        status: "Maintenance",
        stack: [
            { name: "Flutter", icon: "Smartphone", color: "text-blue-500" },
            { name: "Dart", icon: "FileCode", color: "text-cyan-600" },
            { name: "Firebase", icon: "Flame", color: "text-orange-500" },
        ],
        links: {
            live: "https://fintrack.example.com",
            client: "https://github.com/ranajit/fintrack-app",
        },
    },
    {
        id: 6,
        title: "PixelCraft Studio",
        slug: "pixelcraft-studio",
        description:
            "A design agency portfolio with smooth scroll animations, case study templates, and a built-in CMS for non-technical editors.",
        image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1200&q=80",
        category: "Frontend",
        status: "Completed",
        stack: [
            { name: "Astro", icon: "Sparkles", color: "text-orange-500" },
            { name: "React", icon: "Code2", color: "text-cyan-500" },
            { name: "Sanity CMS", icon: "FileText", color: "text-red-500" },
            { name: "Tailwind", icon: "Palette", color: "text-sky-500" },
        ],
        links: {
            live: "https://pixelcraft.example.com",
            client: "https://github.com/ranajit/pixelcraft-studio",
        },
    },
];
