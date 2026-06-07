
import MainLayout from "@/Layouts/MainLayout";
import AboutPage from "@/Pages/About/AboutPage";
import BlogDetails from "@/Pages/Blog/BlogDetails/BlogDetails";
import BlogPage from "@/Pages/Blog/BlogPage";
import CreateBlog from "@/Pages/Blog/CreateBlog/CreateBlog";
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
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "blog",
                element: <BlogPage />,
            },
            {
                path: "/blog/:id",
                element: <BlogDetails />,
            },
            {
                path: "/blog/create",
                element: <CreateBlog />,
            },
        ]
    }
])


