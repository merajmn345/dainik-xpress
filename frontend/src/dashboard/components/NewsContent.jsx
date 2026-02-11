import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

function NewsContent() {
    return (
        <div className="">
            <div className="px-4 py-3 flex gap-x-3">
                <select
                    name=""
                    className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                    id=""
                >
                    <option value="">---select Type---</option>
                    <option value="pending">Pending</option>
                    <option value="active">Active</option>
                    <option value="deactive">Deactive</option>
                </select>
                <input
                    type="text"
                    placeholder="search news"
                    clas
                    className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                />
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
                        <tr className="bg-white border-b">
                            <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4">2</td>
                            <td className="px-6 py-4"></td>
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
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default NewsContent;
