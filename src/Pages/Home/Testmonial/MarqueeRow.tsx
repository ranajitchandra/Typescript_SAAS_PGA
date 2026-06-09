import type { Testimonial } from "@/types/Testmonial";
import TestimonialCard from "./TestimonialCard";

export default function MarqueeRow({ items, reverse = false }: {
    items: Testimonial[];
    reverse?: boolean;
}) {
    const repeatedItems = [...items, ...items];

    return (
        <div className="testimonial-marquee overflow-hidden">
            <div className={`testimonial-marquee-track ${reverse ? "testimonial-marquee-reverse" : ""}`}>
                {repeatedItems.map((testimonial, index) => (
                    <TestimonialCard
                        key={`${testimonial.name}-${index}`}
                        testimonial={testimonial}
                    />
                ))}
            </div>
        </div>
    );
}
