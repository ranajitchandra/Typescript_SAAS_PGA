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
        <div className="bg-background text-foreground space-y-12">

            {/* Hero */}
            <section className="bg-primary rounded-2xl py-20 text-center text-primary-foreground">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    About Our Platform
                </h1>

                <p className="mt-3 text-primary-foreground/80">
                    Modern React system built with TypeScript & scalability in mind.
                </p>
            </section>

            {/* Features */}
            <section className=" w-full xl:max-w-6xl mx-auto">
                <div className="grid gap-4 lg:gap-6 md:grid-cols-3">
                    {features.map((item) => (
                        <FeatureCard key={item.id} item={item} />
                    ))}
                </div>
            </section>

            {/* Story */}
            <section className="rounded-2xl bg-muted px-5 py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Our Story
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                    We build scalable frontend systems focusing on performance,
                    maintainability and clean architecture using React ecosystem.
                </p>
            </section>

        </div>
    );
}
