// src/layouts/MainLayout.tsx

import Header from "@/Components/Share/Header";
import { Outlet } from "react-router";


export default function MainLayout() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <Outlet />
            </main>
        </div>
    );
}
