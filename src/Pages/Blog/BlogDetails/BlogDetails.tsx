import { useParams } from "react-router";
import { blogs } from "../../data/blogs";
import ImageSlider from "../../components/blog/ImageSlider";

export default function BlogDetails() {
    const { id } = useParams();

    const blog = blogs.find(
        (b) => b.id === Number(id)
    );

    if (!blog) return <p>Not Found</p>;

    return (
        <div className="mx-auto max-w-4xl p-6">

            {/* Title */}
            <h1 className="text-3xl font-bold text-[#1B2E4A]">
                {blog.title}
            </h1>

            {/* Meta */}
            <div className="mt-2 text-sm text-gray-500">
                By {blog.author} • {blog.date}
            </div>

            {/* Slider */}
            <div className="mt-6">
                <ImageSlider images={blog.images} />
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-700">
                {blog.description}
            </p>

            {/* Actions */}
            <div className="mt-6 flex gap-4">
                <button className="text-[#1B2E4A]">
                    👍 {blog.likes}
                </button>

                <button className="text-red-500">
                    👎 {blog.dislikes}
                </button>

                <span className="text-[#C4A265]">
                    ⭐ {blog.rating}
                </span>
            </div>

        </div>
    );
}