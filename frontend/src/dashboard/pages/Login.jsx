import React, { useContext, useState } from "react";
import { base_url } from "../../config/config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import storeContext from "../../context/storeContext";

function Login() {
    const navigate = useNavigate();
    const { dispatch } = useContext(storeContext);
    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const inputHandle = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post(`${base_url}/api/login`, loginData);
            setLoading(false);
            localStorage.setItem("newsToken", data.token);
            toast.success(data.message);
            dispatch({
                type: "login_success",
                payload: {
                    token: data.token,
                },
            });
            navigate("/dashboard");
        } catch (error) {
            setLoading(false);
            toast.error(error.response.data.message);
        }
    };
    return (
        <div className="min-w-screen min-h-screen bg-slate-200 flex justify-center items-center">
            <div className="w-[340px] text-slate-600 shadow-md">
                <div className="bg-white h-full px-7 py-8 rounded-md">
                    <div className="w-full flex justify-center items-center">
                        <img src="logo.png" alt="Dainik-Xpress-logo" />
                    </div>
                    <form className="mt-8" onSubmit={submit}>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="email" className="text-md font-medium">
                                Eamil
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                                id="email"
                                value={loginData.email}
                                onChange={inputHandle}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="password" className="text-md font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                                id="password"
                                value={loginData.password}
                                onChange={inputHandle}
                                required
                            />
                        </div>
                        <div className="mt-6">
                            <button
                                disabled={loading}
                                className="cursor-pointer px-3 py-[6px] w-full bg-purple-500 rounded-sm text-white
"
                            >
                                {loading ? "loading..." : "Login"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
