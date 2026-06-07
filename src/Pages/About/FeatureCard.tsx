import type { Feature } from "@/types/ApiTypes";


type FeatureCardProps = {
    item: Feature;
};

export default function FeatureCard({ item }: FeatureCardProps) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
            <h3 className="text-lg font-semibold text-[#1B2E4A]">
                {item.title}
            </h3>

            <p className="mt-2 text-sm text-gray-600">
                {item.description}
            </p>
        </div>
    );
}