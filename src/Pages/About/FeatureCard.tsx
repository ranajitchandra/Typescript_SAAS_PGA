import type { Feature } from "@/types/ApiTypes";


type FeatureCardProps = {
    item: Feature;
};

export default function FeatureCard({ item }: FeatureCardProps) {
    return (
        <div className="rounded-2xl border bg-card p-6 text-card-foreground shadow-sm transition hover:shadow-md">
            <h3 className="text-lg font-semibold text-card-foreground">
                {item.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
            </p>
        </div>
    );
}
