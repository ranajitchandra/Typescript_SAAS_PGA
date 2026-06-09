import type { Review } from "@/types/BlogType";
import { Star } from "lucide-react";

export default function ReviewCard({ review }: { review: Review }) {
    const starValues = [1, 2, 3, 4, 5];
    return (
        <div className="rounded-2xl border border-accent/15 bg-background p-5">
            <div className="flex items-start gap-4">
                <img
                    src={review.avatar}
                    alt={review.user}
                    className="h-12 w-12 rounded-full object-cover"
                />

                <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="font-semibold text-foreground">
                                {review.user}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                                {review.date}
                            </p>
                        </div>

                        <div className="flex items-center gap-1 text-accent">
                            {starValues.map((star) => (
                                <Star
                                    key={star}
                                    className={`h-4 w-4 ${star <= Math.round(review.rating)
                                        ? "fill-current"
                                        : ""
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {review.review}
                    </p>
                </div>
            </div>
        </div>
    );
}