import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import storeContext from "../context/storeContext";

function ProtectDashboard() {
    const { store } = useContext(storeContext);
    console.log(store);
    const userInfo = {
        name: "meraj",
        role: "admin",
    };

    if (store.userInfo.role === "admin") {
        return <Outlet />;
    } else {
        return <Navigate to="/login" />;
    }
}

export default ProtectDashboard;
