import React from "react";
import { Link } from "react-router-dom";

function AddWriter() {
    return (
        <div className="bg-white rounded-md">
            <div className="flex justify-between p-4">
                <h2 className="text-xl font-medium">Add Writers</h2>
                <Link
                    className="px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600"
                    to="/dashboard/writers"
                >
                    Writers
                </Link>
            </div>
            <div className="p-4">
                <form action="">
                    <div className="grid grid-cols-2 gap-x-8 mb-3">
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="name" className="text-md font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                                id="name"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label htmlFor="name" className="text-md font-medium">
                                Category
                            </label>
                            <select
                                name="category"
                                id="category"
                                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                            >
                                <option value="">--select category--</option>
                                <option value="Education">Education</option>
                                <option value="Travel">Travel</option>
                                <option value="Health">Health</option>
                                <option value="International">International</option>
                                <option value="Sports">Sports</option>
                                <option value="Technology">Technology</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 mb-3">
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
                            />
                        </div>
                    </div>
                    <div className="mt-2">
                        <button
                            className="px-3 py-[6px] bg-purple-500 rounded-sm text-white
"
                        >
                            Add Writers
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddWriter;
