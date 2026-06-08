import BookBanner from "./BookBanner";
import BookPostList from "./BookPostList";


export default function BooksPage() {
    return (
        <div className="space-y-12">
            <BookBanner />
            <BookPostList />
        </div>
    )
}
