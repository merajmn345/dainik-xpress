import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoEye } from "react-icons/io5";

function AddWriter() {
    return (
        <div className="bg-white rounded-md">
            <div className="flex justify-between p-4">
                <h2 className="text-xl font-medium">Writers</h2>
                <Link
                    className="px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600"
                    to="/dashboard/writers/add"
                >
                    Add Writers
                </Link>
            </div>
            <div className="absolute overflow-x-auto p-4">
                <table className="w-full text-sm text-left text-slate-600">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px-7 py-3">No</th>
                            <th className="px-7 py-3">Name</th>
                            <th className="px-7 py-3">Category</th>
                            <th className="px-7 py-3">Role</th>
                            <th className="px-7 py-3">Image</th>
                            <th className="px-7 py-3">Email</th>
                            <th className="px-7 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3, 4, 5, 6, 7].map((items, i) => {
                            return (
                                <tr key={i} className="bg-white border-b">
                                    <td className="px-6 py-4">{i + 1}</td>
                                    <td className="px-6 py-4">Meraj Ansari</td>
                                    <td className="px-6 py-4">Education</td>
                                    <td className="px-6 py-4">Writer</td>

                                    <td className="px-6 py-4">
                                        <div className="w-12 h-8 bg-gray-200 rounded" />
                                    </td>
                                    <td className="px-6 py-4">merajmn345@gmail.com</td>

                                    <td className="px-6 py-4">
                                        <div className="flex justify-center items-center gap-4 text-gray-600">
                                            <Link className=" hover:text-blue-500 transition duration-200">
                                                <IoEye size={20} />
                                            </Link>
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

export default AddWriter;
