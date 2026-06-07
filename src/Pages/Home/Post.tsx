import PostList from "./PostList";

export default function Post() {
    return (
        <div className="mx-auto max-w-6xl p-6">
            <h1 className="mb-6 text-2xl font-bold text-foreground">
                Posts
            </h1>

            <PostList />
        </div>
    );
}
