import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { RiShareCircleLine } from "react-icons/ri";
import { MdOutlineModeComment } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";

const SectionTwo = () => {
  return (
    <div className="flex flex-row justify-between gap-2 p-4 border-y-[1px]  border-gray-400 dark:border-gray-800 hover:bg-zinc-900">
      <div className="w-[150px]">
        <Image
          src="https://image.tensorartassets.com/users/common/avatar/614336531561314196/a1db0375-ecf7-f36e-83c1-fc2fa746a97f.png"
          alt="User"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className=" flex flex-col justify-start items-start gap-1 text-sm">
        <div className="flex flex-row gap-2">
          <p className="font-bold">Shubham Kamboj</p>
          <p className="opacity-50">@shubhamZ98</p>
          <p className="opacity-50">18 May</p>
        </div>
        <div>
          <p className="text-left ">
            While rendering your application, 
            
            there was a difference between the


            React tree that was 
            
            pre-rendered from the server and the React tree
            that was rendered during the first render in the browser
            (hydration).
          </p>
        </div>
        <div className="flex flex-row gap-24 mt-4 cursor-pointer">
          <div className="flex flex-row gap-2 hover:text-blue-500">

            <MdOutlineModeComment size={20} />
            <span>255</span>
          </div>
          <p className="flex flex-row gap-2 hover:text-green-500">
            <RiShareCircleLine size={20} /> 553
          </p>
          <p className="flex flex-row gap-2 hover:text-red-500">
            <FaRegHeart size={20} /> 553
          </p>
          <p className="flex flex-row gap-2 hover:text-blue-500">
            <IoAnalyticsSharp size={20} /> 78
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
