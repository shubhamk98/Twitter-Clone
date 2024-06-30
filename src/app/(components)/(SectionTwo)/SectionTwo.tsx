import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { RiShareCircleLine } from "react-icons/ri";
import { MdOutlineModeComment } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { Tweet } from "../../../../gql/graphql";
import Link from "next/link";

interface FeedCardDataProps {
  data: Tweet;
}

const SectionTwo: React.FC<FeedCardDataProps> = (props) => {
  const { data } = props;
  
  return (
    <div className="flex flex-row  gap-4 p-4 border-y-[1px]  border-gray-400 dark:border-gray-800 hover:bg-zinc-900">
      <div className="flex-shrink-0">
        {data.author?.profileImageURL && <Image
          src={data.author?.profileImageURL}
          alt="User"
          width={50}
          height={50}
          className="rounded-full"
        />}
      </div>
      <div className=" flex flex-col justify-start items-start gap-1 text-sm">
        <div className="flex flex-row gap-2">
          <Link href={`/Home/${data.author?.id}`} className="font-bold cursor-pointer">{data.author?.firstName} {data.author?.lastName}</Link>
          <p className="opacity-50">@{data.author?.firstName}</p>
          <p className="opacity-50">18 May</p>
        </div>
        <div>
          <p className="text-left ">
            {data.content}
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
