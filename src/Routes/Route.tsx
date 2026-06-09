
import AuthLayout from "@/Layouts/AuthLayout";
import MainLayout from "@/Layouts/MainLayout";
import AboutPage from "@/Pages/About/AboutPage";
import ForgotPasswordPage from "@/Pages/Auth/ForgotPasswordPage";
import ProfilePage from "@/Pages/Auth/ProfilePage";
import SignInPage from "@/Pages/Auth/SignInPage";
import SignUpPage from "@/Pages/Auth/SignUpPage";
import BlogDetailsPage from "@/Pages/Blog/BlogDetails/BlogDetailsPage";
import BlogPage from "@/Pages/Blog/BlogPage";
import CreateBlog from "@/Pages/Blog/CreateBlog/CreateBlog";
import BooksPage from "@/Pages/Books/BooksPage";
import Home from "@/Pages/Home/HomePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "sign-in",
                element: <SignInPage />,
            },
            {
                path: "sign-up",
                element: <SignUpPage />,
            },
            {
                path: "forgot-password",
                element: <ForgotPasswordPage />,
            },
        ],
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            // {
            //     path: "projects",
            //     element: <ProjectsPage />,
            // },
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
            {
                path: "profile",
                element: <ProfilePage />,
            },
        ]
    }
])


