import React, { useReducer } from "react";
import storeReducer from "./storeReducer";
import storeContext from "./storeContext";
import decodeToken from "../utils/index";

function StoreProvider({ children }) {
    const [store, dispatch] = useReducer(storeReducer, {
        userInfo: decodeToken(localStorage.getItem("newsToken")),
        token: localStorage.getItem("newsToken") || "",
    });
    return <storeContext.Provider value={{ store, dispatch }}>{children}</storeContext.Provider>;
}

export default StoreProvider;
