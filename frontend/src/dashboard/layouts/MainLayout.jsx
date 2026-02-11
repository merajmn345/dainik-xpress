import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div className="flex min-h-[100vh] bg-slate-100">
            <aside className="w-[250px]">
                <Sidebar />
            </aside>
            <main className="flex-1">
                <Header />
                <div className="p-4">
                    <div className="pt-[85px]">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MainLayout;
