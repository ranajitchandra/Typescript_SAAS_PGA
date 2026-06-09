import type { Testimonial } from "@/types/Testmonial";
import { Star } from "lucide-react";


export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <article className="mx-3 flex w-75 shrink-0 flex-col gap-2 md:gap-4 rounded-2xl border bg-card p-3 md:p-5 text-card-foreground shadow-sm sm:w-90">
            <div className="flex items-center gap-3">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/30"
                    loading="lazy"
                />
                <div className="min-w-0">
                    <h3 className="truncate text-sm font-bold text-foreground">
                        {testimonial.name}
                    </h3>
                    <p className="truncate text-xs text-muted-foreground">
                        {testimonial.role}
                    </p>
                </div>
            </div>
            <p className="text-sm leading-5 lg:leading-6 text-muted-foreground">
                {testimonial.text}
            </p>
            <div className="flex text-accent" aria-label="5 star review">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                ))}
            </div>
        </article>
    );
}

