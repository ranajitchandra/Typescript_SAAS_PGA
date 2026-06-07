import { useMemo, useState } from "react";
import { Link, useParams } from "react-router";
import {
    CalendarDays,
    Clock,
    Copy,
    Eye,
    Heart,
    MessageCircle,
    Send,
    Share2,
    Sparkles,
    Star,
    ThumbsDown,
} from "lucide-react";
import { blogs } from "@/Mock_Data/Data";
import type { Comment as BlogComment, Review } from "@/types/BlogType";
import ImageSlider from "./ImageSlider";

const starValues = [1, 2, 3, 4, 5];

export default function BlogDetails() {
    const { id } = useParams();

    const blog = blogs.find((item) => item.id === Number(id));

    const [selectedRating, setSelectedRating] = useState(5);
    const [reviewText, setReviewText] = useState("");
    const [commentText, setCommentText] = useState("");
    const [localReviews, setLocalReviews] = useState<Review[]>([]);
    const [localComments, setLocalComments] = useState<BlogComment[]>([]);

    if (!blog) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-3xl font-bold text-[#1B2E4A]">
                    Blog Not Found
                </h2>
            </div>
        );
    }

    const reviews = [...localReviews, ...blog.reviews];
    const comments = [...localComments, ...blog.comments];

    const averageRating = useMemo(() => {
        const totalScore =
            blog.rating * blog.totalRatings +
            localReviews.reduce((total, review) => total + review.rating, 0);
        const totalCount = blog.totalRatings + localReviews.length;

        return totalCount ? (totalScore / totalCount).toFixed(1) : "0.0";
    }, [blog.rating, blog.totalRatings, localReviews]);

    const relatedBlogs = blogs
        .filter((item) => item.id !== blog.id)
        .slice(0, 3);

    const currentIndex = blogs.findIndex((item) => item.id === blog.id);
    const previousBlog = blogs[currentIndex - 1];
    const nextBlog = blogs[currentIndex + 1];

    const handleReviewSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!reviewText.trim()) {
            return;
        }

        setLocalReviews((currentReviews) => [
            {
                id: Date.now(),
                user: "Guest Reader",
                avatar: "https://i.pravatar.cc/150?img=64",
                rating: selectedRating,
                review: reviewText.trim(),
                date: "Just now",
            },
            ...currentReviews,
        ]);
        setReviewText("");
        setSelectedRating(5);
    };

    const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!commentText.trim()) {
            return;
        }

        setLocalComments((currentComments) => [
            {
                id: Date.now(),
                user: "Guest Reader",
                avatar: "https://i.pravatar.cc/150?img=64",
                comment: commentText.trim(),
                date: "Just now",
            },
            ...currentComments,
        ]);
        setCommentText("");
    };

    return (
        <section className="bg-gradient-to-b from-[#F7F2E8]/70 via-white to-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
                <div className="overflow-hidden rounded-[2rem] bg-[#1B2E4A] shadow-2xl shadow-[#1B2E4A]/20">
                    <div className="relative">
                        <img
                            src={blog.featuredImage}
                            alt={blog.title}
                            className="h-[300px] w-full object-cover opacity-80 md:h-[520px]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2E4A] via-[#1B2E4A]/45 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                            <span className="inline-flex items-center gap-2 rounded-full bg-[#C4A265] px-4 py-2 text-sm font-semibold text-[#1B2E4A]">
                                <Sparkles className="h-4 w-4" />
                                {blog.category}
                            </span>

                            <h1 className="mt-5 max-w-4xl text-3xl font-bold text-white md:text-5xl">
                                {blog.title}
                            </h1>

                            <p className="mt-4 max-w-3xl text-base leading-7 text-white/85 md:text-lg">
                                {blog.excerpt}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-[#C4A265]/20 bg-white p-5 shadow-lg shadow-[#1B2E4A]/5 md:flex-row md:items-center">
                    <div className="flex items-center gap-4">
                        <img
                            src={blog.author.avatar}
                            alt={blog.author.name}
                            className="h-14 w-14 rounded-full object-cover ring-4 ring-[#C4A265]/20"
                        />

                        <div>
                            <h3 className="font-semibold text-[#1B2E4A]">
                                {blog.author.name}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {blog.author.role}
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-3 text-sm text-gray-600 sm:grid-cols-3 md:ml-auto">
                        <span className="inline-flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-[#C4A265]" />
                            {blog.publishedAt}
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <Eye className="h-4 w-4 text-[#C4A265]" />
                            {blog.views.toLocaleString()} views
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <Clock className="h-4 w-4 text-[#C4A265]" />
                            {blog.readingTime} min read
                        </span>
                    </div>
                </div>

                <div className="mt-10">
                    <ImageSlider images={blog.images} />
                </div>

                <article className="mx-auto mt-12 max-w-4xl">
                    <div className="space-y-6 text-lg leading-9 text-gray-700">
                        <p>{blog.content}</p>
                        <p>
                            This article explores modern techniques, best
                            practices, and scalable approaches that can help
                            developers build better applications and maintain
                            clean codebases.
                        </p>
                        <p>
                            By following structured architecture and reusable
                            component patterns, teams can improve productivity
                            and application quality significantly.
                        </p>
                    </div>
                </article>

                <div className="mt-12 grid gap-4 md:grid-cols-4">
                    <StatCard
                        icon={<Heart className="h-7 w-7" />}
                        label="Likes"
                        value={blog.likes.toString()}
                    />
                    <StatCard
                        icon={<ThumbsDown className="h-7 w-7" />}
                        label="Dislikes"
                        value={blog.dislikes.toString()}
                    />
                    <StatCard
                        icon={<Star className="h-7 w-7 fill-[#C4A265]" />}
                        label={`${blog.totalRatings + localReviews.length} Ratings`}
                        value={averageRating}
                    />
                    <StatCard
                        icon={<MessageCircle className="h-7 w-7" />}
                        label="Comments"
                        value={comments.length.toString()}
                    />
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <section className="rounded-3xl border border-[#C4A265]/20 bg-white p-6 shadow-lg shadow-[#1B2E4A]/5">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-[#C4A265]">
                                    Reader Reviews
                                </p>
                                <h2 className="text-3xl font-bold text-[#1B2E4A]">
                                    {averageRating} average rating
                                </h2>
                            </div>

                            <div className="flex items-center gap-1 text-[#C4A265]">
                                {starValues.map((star) => (
                                    <Star
                                        key={star}
                                        className="h-5 w-5 fill-current"
                                    />
                                ))}
                            </div>
                        </div>

                        <form
                            onSubmit={handleReviewSubmit}
                            className="mt-6 rounded-2xl bg-[#F7F2E8] p-5"
                        >
                            <label className="text-sm font-semibold text-[#1B2E4A]">
                                Your rating
                            </label>
                            <div className="mt-3 flex gap-2">
                                {starValues.map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setSelectedRating(star)}
                                        className="rounded-full p-1 text-[#C4A265] transition hover:scale-110"
                                        aria-label={`${star} star rating`}
                                    >
                                        <Star
                                            className={`h-7 w-7 ${
                                                star <= selectedRating
                                                    ? "fill-current"
                                                    : ""
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>

                            <textarea
                                value={reviewText}
                                onChange={(event) =>
                                    setReviewText(event.target.value)
                                }
                                placeholder="Write a review for this article..."
                                className="mt-4 min-h-28 w-full rounded-2xl border border-[#C4A265]/30 bg-white px-4 py-3 text-sm text-[#1B2E4A] outline-none transition focus:border-[#C4A265] focus:ring-4 focus:ring-[#C4A265]/20"
                            />

                            <button
                                type="submit"
                                className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-[#1B2E4A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#243c60]"
                            >
                                <Send className="h-4 w-4" />
                                Submit Review
                            </button>
                        </form>

                        <div className="mt-6 space-y-4">
                            {reviews.map((review) => (
                                <ReviewCard
                                    key={review.id}
                                    review={review}
                                />
                            ))}
                        </div>
                    </section>

                    <section className="rounded-3xl bg-[#1B2E4A] p-6 text-white shadow-2xl shadow-[#1B2E4A]/20">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-[#C4A265]">
                                    Discussion
                                </p>
                                <h2 className="text-3xl font-bold">
                                    {comments.length} comments
                                </h2>
                            </div>

                            <MessageCircle className="h-10 w-10 text-[#C4A265]" />
                        </div>

                        <form
                            onSubmit={handleCommentSubmit}
                            className="mt-6 rounded-2xl bg-white/10 p-4"
                        >
                            <textarea
                                value={commentText}
                                onChange={(event) =>
                                    setCommentText(event.target.value)
                                }
                                placeholder="Join the conversation..."
                                className="min-h-28 w-full rounded-2xl border border-white/15 bg-white px-4 py-3 text-sm text-[#1B2E4A] outline-none transition focus:border-[#C4A265] focus:ring-4 focus:ring-[#C4A265]/20"
                            />

                            <button
                                type="submit"
                                className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-[#C4A265] px-5 py-3 text-sm font-semibold text-[#1B2E4A] transition hover:bg-[#d2b77d]"
                            >
                                <Send className="h-4 w-4" />
                                Add Comment
                            </button>
                        </form>

                        <div className="mt-6 space-y-4">
                            {comments.map((comment) => (
                                <CommentCard
                                    key={comment.id}
                                    comment={comment}
                                />
                            ))}
                        </div>
                    </section>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <h3 className="mb-4 text-xl font-semibold text-[#1B2E4A]">
                            Tags
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {blog.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-[#C4A265]/20 bg-[#C4A265]/10 px-4 py-2 text-sm font-medium text-[#1B2E4A]"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-xl font-semibold text-[#1B2E4A]">
                            Share Article
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {["Facebook", "LinkedIn"].map((label) => (
                                <button
                                    key={label}
                                    className="inline-flex items-center gap-2 rounded-2xl bg-[#1B2E4A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#243c60]"
                                >
                                    <Share2 className="h-4 w-4" />
                                    {label}
                                </button>
                            ))}

                            <button className="inline-flex items-center gap-2 rounded-2xl border border-[#C4A265]/30 bg-white px-5 py-3 text-sm font-semibold text-[#1B2E4A] transition hover:bg-[#F7F2E8]">
                                <Copy className="h-4 w-4" />
                                Copy Link
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-14 rounded-3xl bg-[#1B2E4A] p-8 text-white">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center">
                        <img
                            src={blog.author.avatar}
                            alt={blog.author.name}
                            className="h-24 w-24 rounded-full object-cover ring-4 ring-[#C4A265]/40"
                        />

                        <div>
                            <h3 className="text-2xl font-bold">
                                {blog.author.name}
                            </h3>

                            <p className="text-[#C4A265]">
                                {blog.author.role}
                            </p>

                            <p className="mt-3 text-white/80">
                                Passionate about frontend architecture,
                                scalable React applications, and creating
                                exceptional user experiences.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="mb-6 text-3xl font-bold text-[#1B2E4A]">
                        Related Articles
                    </h2>

                    <div className="grid gap-6 md:grid-cols-3">
                        {relatedBlogs.map((item) => (
                            <Link
                                key={item.id}
                                to={`/blog/${item.id}`}
                                className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <img
                                    src={item.featuredImage}
                                    alt={item.title}
                                    className="h-52 w-full object-cover"
                                />

                                <div className="p-4">
                                    <h3 className="font-semibold text-[#1B2E4A]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-500">
                                        {item.readingTime} min read
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flex justify-between gap-4">
                    {previousBlog ? (
                        <Link
                            to={`/blog/${previousBlog.id}`}
                            className="rounded-2xl border border-[#C4A265]/30 bg-white px-5 py-3 font-semibold text-[#1B2E4A] transition hover:bg-[#F7F2E8]"
                        >
                            Previous
                        </Link>
                    ) : (
                        <div />
                    )}

                    {nextBlog && (
                        <Link
                            to={`/blog/${nextBlog.id}`}
                            className="rounded-2xl bg-[#1B2E4A] px-5 py-3 font-semibold text-white transition hover:bg-[#243c60]"
                        >
                            Next
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}

function StatCard({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-3xl border border-[#C4A265]/20 bg-white p-6 text-center shadow-lg shadow-[#1B2E4A]/5">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C4A265]/15 text-[#C4A265]">
                {icon}
            </div>
            <p className="mt-4 text-3xl font-bold text-[#1B2E4A]">{value}</p>
            <p className="mt-1 text-sm text-gray-500">{label}</p>
        </div>
    );
}

function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="rounded-2xl border border-[#C4A265]/15 bg-white p-5">
            <div className="flex items-start gap-4">
                <img
                    src={review.avatar}
                    alt={review.user}
                    className="h-12 w-12 rounded-full object-cover"
                />

                <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="font-semibold text-[#1B2E4A]">
                                {review.user}
                            </h3>
                            <p className="text-xs text-gray-500">
                                {review.date}
                            </p>
                        </div>

                        <div className="flex items-center gap-1 text-[#C4A265]">
                            {starValues.map((star) => (
                                <Star
                                    key={star}
                                    className={`h-4 w-4 ${
                                        star <= Math.round(review.rating)
                                            ? "fill-current"
                                            : ""
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                        {review.review}
                    </p>
                </div>
            </div>
        </div>
    );
}

function CommentCard({ comment }: { comment: BlogComment }) {
    return (
        <div className="rounded-2xl bg-white/10 p-4">
            <div className="flex gap-4">
                <img
                    src={comment.avatar}
                    alt={comment.user}
                    className="h-11 w-11 rounded-full object-cover"
                />

                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-semibold">{comment.user}</h3>
                        <span className="text-xs text-white/55">
                            {comment.date}
                        </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/80">
                        {comment.comment}
                    </p>
                </div>
            </div>
        </div>
    );
}
