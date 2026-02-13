import React from "react";
import { FaImage } from "react-icons/fa";
function Profile() {
    return (
        <div className="md:w-full grid grid-cols-1 gap-x-6 mt-5 md:grid-cols-2 gap-y-3">
            <div className="bg-white p-6 rounded flex justify-center items-center gap-3">
                <div className="flex justify-center items-center flex-col">
                    <label
                        htmlFor="img"
                        className="w-[100px] h-[100px] flex justify-center items-center rounded text-[#404040] gap-2  cursor-pointer border-2 border-dashed"
                    >
                        <div className="flex justify-center items-center flex-col gap-y-2">
                            <span className="text-xl">
                                <FaImage />
                            </span>
                            <span>Select Image</span>
                        </div>
                    </label>
                    <input type="file" id="" className="hidden" />
                </div>
                <div className="text-[#404040] flex flex-col gap-y-1 justify-around items-left ">
                    <span>Name: Meraj Ansari</span>
                    <span>Email: meraj@gmail.com</span>
                    <span>Category: Education</span>
                </div>
            </div>

            <div className="bg-white gap-y-5 px-6 py-4 text-[#404040]">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="old password" className="text-md font-medium">
                        Old Password
                    </label>
                    <input
                        type="password"
                        placeholder="Old Password"
                        name="old_password"
                        className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                        id="old_password"
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="new password" className="text-md font-medium">
                        New Password
                    </label>
                    <input
                        type="password"
                        placeholder="New Password"
                        name="new_password"
                        className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                        id="new_password"
                    />
                </div>
                <div className="mt-2">
                    <button className="px-3 py-[6px] bg-purple-500 rounded-sm text-white">Change password</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
