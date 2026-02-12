import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

function AdminIndex() {
    return (
        <div className="mt-2">
            <div className="grid grid-cols-5 gap-x-4">
                <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700">
                    <span className="text-xl font-bold">50</span>
                    <span className="text-md">Total News</span>
                </div>
                <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700">
                    <span className="text-xl font-bold">50</span>
                    <span className="text-md">Pending News</span>
                </div>
                <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700">
                    <span className="text-xl font-bold">50</span>
                    <span className="text-md">Active News</span>
                </div>
                <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700">
                    <span className="text-xl font-bold">50</span>
                    <span className="text-md">Deactive News</span>
                </div>
                <div className="w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-white text-slate-700">
                    <span className="text-xl font-bold">50</span>
                    <span className="text-md">Writers</span>
                </div>
            </div>
            <div className="bg-white p-4 mt-5">
                <div className="flex justify-between items-center pb-4">
                    <h2>Recent News</h2>
                    <Link>View all</Link>
                </div>
            </div>
            <div className="absolute overflow-x-auto p-4">
                <table className="w-full text-sm text-left text-slate-600">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px-7 py-3">No</th>
                            <th className="px-7 py-3">Title</th>
                            <th className="px-7 py-3">Image</th>
                            <th className="px-7 py-3">Category</th>
                            <th className="px-7 py-3">Description</th>
                            <th className="px-7 py-3">Date</th>
                            <th className="px-7 py-3">Status</th>
                            <th className="px-7 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3, 4, 5, 6, 7].map((items, i) => {
                            return (
                                <tr key={i} className="bg-white border-b">
                                    <td className="px-6 py-4">1</td>
                                    <td className="px-6 py-4">2</td>
                                    <td className="px-6 py-4">
                                        <div className="w-12 h-8 bg-gray-200 rounded" />
                                    </td>
                                    <td className="px-6 py-4">Travel</td>
                                    <td className="px-6 py-4">You all must have wa...</td>
                                    <td className="px-6 py-4">October 10, 2023</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer">
                                            Active
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4 text-gray-600">
                                            <Link className="hover:text-blue-500 transition duration-200">
                                                <IoEye size={20} />
                                            </Link>

                                            <Link className="hover:text-green-500 transition duration-200">
                                                <MdEdit size={20} />
                                            </Link>

                                            <button className="hover:text-red-500 transition duration-200">
                                                <FaTrashAlt size={20} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminIndex;
