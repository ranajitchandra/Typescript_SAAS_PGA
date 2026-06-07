export default function CreateBlog() {
    return (
        <div className="mx-auto max-w-2xl p-6">

            <h1 className="text-2xl font-bold text-[#1B2E4A]">
                Create Blog
            </h1>

            <form className="mt-6 space-y-4">

                <input
                    placeholder="Title"
                    className="w-full rounded-xl border p-3"
                />

                <textarea
                    placeholder="Description"
                    className="w-full rounded-xl border p-3"
                />

                <button
                    type="submit"
                    className="rounded-xl bg-[#C4A265] px-6 py-3 text-[#1B2E4A]"
                >
                    Publish
                </button>

            </form>

        </div>
    );
}