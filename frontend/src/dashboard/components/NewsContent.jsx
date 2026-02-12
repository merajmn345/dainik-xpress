import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

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
            <div className="relative overflow-x-auto p-4">
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
            <div className="flex items-center justify-end gap-x-3 px-10 text-slate-600">
                <div className="flex gap-x-3 justify-center items-center">
                    <p className="px-4 py-3 font-semibold text-sm">News Per Page</p>
                    <select
                        name="category"
                        id="category"
                        className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <p className="px-6 px-3 font-semibold text-sm">6/22 - of 5</p>
                <div className="flex items-center gap-x-3">
                    <IoIosArrowBack className="w-5 h-5 cursor-pointer" />
                    <IoIosArrowForward className="w-5 h-5 cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default NewsContent;
