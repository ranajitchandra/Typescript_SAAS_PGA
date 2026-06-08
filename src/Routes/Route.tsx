
import MainLayout from "@/Layouts/MainLayout";
import AboutPage from "@/Pages/About/AboutPage";
import BlogDetailsPage from "@/Pages/Blog/BlogDetails/BlogDetailsPage";
import BlogPage from "@/Pages/Blog/BlogPage";
import CreateBlog from "@/Pages/Blog/CreateBlog/CreateBlog";
import BooksPage from "@/Pages/Books/BooksPage";
import Home from "@/Pages/Home/HomePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "books",
                element: <BooksPage />,
            },
            {
                path: "blog",
                element: <BlogPage />,
            },
            {
                path: "/blog/:id",
                element: <BlogDetailsPage />,
            },
            {
                path: "/blog/create",
                element: <CreateBlog />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
        ]
    }
])


