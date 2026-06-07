
import MainLayout from "@/Layouts/MainLayout";
import AboutPage from "@/Pages/About/AboutPage";
import Home from "@/Pages/Home/HomePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element:<Home />,
            },
            {
                path: "about",
                element: <AboutPage />,
            }
        ]
    }
])


