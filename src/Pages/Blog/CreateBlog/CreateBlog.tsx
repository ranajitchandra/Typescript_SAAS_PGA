export default function CreateBlog() {
    return (
        <div className="mx-auto max-w-2xl p-6">

            <h1 className="text-2xl font-bold text-foreground">
                Create Blog
            </h1>

            <form className="mt-6 space-y-4">

                <input
                    placeholder="Title"
                    className="w-full rounded-xl border bg-background p-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-4 focus:ring-ring/20"
                />

                <textarea
                    placeholder="Description"
                    className="w-full rounded-xl border bg-background p-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-ring focus:ring-4 focus:ring-ring/20"
                />

                <button
                    type="submit"
                    className="rounded-xl bg-accent px-6 py-3 font-medium text-accent-foreground transition hover:opacity-90"
                >
                    Publish
                </button>

            </form>

        </div>
    );
}
