import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";
import JoditEditor from "jodit-react";
import Gallery from "../components/Gallery";

function CreateNews() {
    const [show, setShow] = useState(false);
    return (
        <div className="bg-white rounded-md">
            <div className="flex justify-between p-4">
                <h2 className="text-xl font-medium">Add News</h2>

                <Link
                    to="/dashboard/news"
                    className="px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600"
                >
                    News
                </Link>
            </div>
            <div className="p-4">
                <form action="">
                    <div className="flex flex-col gap-y-2 mb-6">
                        <label htmlFor="title" className="text-md font-medium">
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                            id="title"
                        />
                    </div>
                    <div className="mb-6">
                        <div>
                            <label
                                htmlFor="img"
                                className="w-full h-32 flex justify-center items-center rounded text-[#404040] gap-2  cursor-pointer border-2 border-dotted"
                            >
                                <div className="flex justify-center items-center flex-col gap-y-2">
                                    <span className="text-xl">
                                        <MdCloudUpload />
                                    </span>
                                    <span>Select Image</span>
                                </div>
                            </label>
                            <input type="file" id="img" className="hidden" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2 mb-6">
                        <div className="flex justify-start items-center gap-x-2 gap-y-2 mt-4">
                            <h2>Description</h2>
                            <div onClick={() => setShow(true)}>
                                <span className="text-2xl cursor-pointer">
                                    <MdCloudUpload />
                                </span>
                            </div>
                        </div>
                        <div>
                            <JoditEditor />
                        </div>
                    </div>
                    <div className="mt-2">
                        <button
                            className="px-3 py-[6px] bg-purple-500 rounded-sm text-white
"
                        >
                            Add News
                        </button>
                    </div>
                </form>
            </div>
            {show && <Gallery setShow={setShow} images={[]} />}
        </div>
    );
}

export default CreateNews;
