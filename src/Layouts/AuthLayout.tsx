import { Outlet } from "react-router";

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center py-12 px-4">
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    );
}