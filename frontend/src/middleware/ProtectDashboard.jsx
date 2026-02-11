import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectDashboard() {
    const userInfo = {
        name: "meraj",
        role: "admin",
    };

    if (userInfo.role === "admin") {
        return <Outlet />;
    } else {
        return <Navigate to="/login" />;
    }
}

export default ProtectDashboard;
