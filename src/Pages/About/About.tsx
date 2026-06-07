import type { Feature } from "@/types/ApiTypes";
import FeatureCard from "./FeatureCard";

const features: Feature[] = [
    {
        id: 1,
        title: "Clean Architecture",
        description:
            "Scalable folder structure with reusable components, hooks and API layer.",
    },
    {
        id: 2,
        title: "Type Safety",
        description:
            "Fully TypeScript powered system with strict typing for API and UI.",
    },
    {
        id: 3,
        title: "Performance First",
        description:
            "Optimized rendering with React Query caching and minimal re-renders.",
    },
];

export default function About() {
    return (
        <div className="min-h-screen bg-background text-foreground">

            {/* Hero */}
            <section className="bg-[#1B2E4A] py-20 text-center text-white">
                <h1 className="text-4xl font-bold">
                    About Our Platform
                </h1>

                <p className="mt-3 text-white/80">
                    Modern React system built with TypeScript & scalability in mind.
                </p>
            </section>

            {/* Features */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid gap-6 md:grid-cols-3">
                    {features.map((item) => (
                        <FeatureCard key={item.id} item={item} />
                    ))}
                </div>
            </section>

            {/* Story */}
            <section className="bg-[#F8F8F8] py-16 text-center">
                <h2 className="text-3xl font-bold text-[#1B2E4A]">
                    Our Story
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-gray-600">
                    We build scalable frontend systems focusing on performance,
                    maintainability and clean architecture using React ecosystem.
                </p>
            </section>

        </div>
    );
}