import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectRole({ role }) {
    const userInfo = {
        name: "meraj",
        role: "admin",
    };

    if (userInfo.role === role) {
        return <Outlet />;
    } else {
        return <Navigate to="/dashboard/unable-access" />;
    }
}

export default ProtectRole;
