import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdCloudUpload } from "react-icons/md";
function Gallery({ setShow }) {
    return (
        <div className="w-screen h-screen fixed left-0 top-0 z-[9999]">
            <div className="w-full h-full relative">
                <div className="bg-gray-400 opacity-80 w-full h-full absolute top-0 left-0 z-[998]"></div>
                <div className="absolute bg-white w-[50%] p-3 rounded-sm h-[85vh] overflow-y-auto left-[50%] top-[50%] z-[999] -translate-x-[50%] -translate-y-[50%]">
                    <div className="pb-3 flex justify-between items-center">
                        <h2>Gallery</h2>
                        <div className="text-xl cursor-pointer" onClick={() => setShow(false)}>
                            <AiOutlineClose />
                        </div>
                    </div>
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
                    <div className="grid grid-cols-4 gap-4"></div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
