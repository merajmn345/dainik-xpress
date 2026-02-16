import React, { useState } from "react";
import { base_url } from "../../config/config";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
    const [loader, setLoader] = useState(false);
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
            const { data } = await axios.post(`${base_url}/api/login`, loginData);
            console.log(data);
        } catch (error) {}
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
                        <div className="mt-2">
                            <button
                                className="px-3 py-[6px] w-full bg-purple-500 rounded-sm text-white
"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
