"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import SectionTwo from "@/app/(components)/(SectionTwo)/SectionTwo";
import { Tweet, User } from "../../../../gql/graphql";
import { useParams } from "next/navigation";
import { graphqlClient } from "../../../../gClient/api";
import { UserResponse, getUserByIdQuery } from "../../../../graphql/query/user";

const page = () => {
  const { id } = useParams<{ id: string }>();
  const [user,setUser] = useState<User | null>(null)

  const getUserDetails = async (id: string) => {
    try {
      const userInfo = await graphqlClient.request<UserResponse>(getUserByIdQuery, { id });
      setUser(userInfo.getUserById);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    if (id) {
      getUserDetails(id);
    }
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  

  return (
    <div>
      <div className="w-full flex flex-row items-center bg-zinc-800 h-12">
        <div className="flex px-4 hover:cursor-pointer">
          <IoIosArrowBack size={24} />
        </div>
        <div>
          <p className="font-semibold">
            {user?.firstName} {user?.lastName}
          </p>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-4 border-b-[1px] border-gray-400 dark:border-gray-800">
        {user?.profileImageURL && (
          <Image
            src={user?.profileImageURL}
            width={100}
            height={100}
            alt="Profile image"
            className="rounded-md"
          />
        )}
        <div>
          <p className="font-semibold">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="text-gray-700">@shubhamK</p>
        </div>
      </div>
      <div className="border-r-[1px] col-span-6 border-gray-400 dark:border-gray-800 overflow-scroll">
        {user?.tweets?.map((tweet) =>
          tweet ? <SectionTwo key={tweet?.id} data={tweet as Tweet} /> : null
        )}
      </div>
    </div>
  );
};

export default page;
