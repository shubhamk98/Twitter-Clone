"use client";

import React, { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import SectionTwo from "@/app/(components)/(SectionTwo)/SectionTwo";
import { Tweet, User } from "../../../../gql/graphql";
import { useParams } from "next/navigation";
import { graphqlClient } from "../../../../gClient/api";
import { UserResponse, getUserByIdQuery } from "../../../../graphql/query/user";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "../../../../hooks/user";
import { Loader2 } from "lucide-react";
import { followUserMutation, unfollowUserMutation } from "../../../../graphql/query/mutation/user";
import { useQueryClient } from "@tanstack/react-query";

const page = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const { user: currentUser } = useCurrentUser();
  const queryClient = useQueryClient();

  const getUserDetails = async (id: string) => {
    try {
      const userInfo = await graphqlClient.request<UserResponse>(
        getUserByIdQuery,
        { id }
      );
      setUser(userInfo.getUserById);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleFollowUser = useCallback(async () => {
    if (!user || !user.id) return;
  
    try {
      await graphqlClient.request(followUserMutation, { to: id });
      await queryClient.invalidateQueries({ queryKey: ["current-user"] });
      getUserDetails(id);
    } catch (error) {
      console.error("Error following user:", error);
    }
  }, [user, queryClient]);

  const handleunFollowUser = useCallback(async () => {
    if (!user || !user.id) return;
  
    try {
      await graphqlClient.request(unfollowUserMutation, { to: id });
      await queryClient.invalidateQueries({ queryKey: ["current-user"] });
      getUserDetails(id);
    } catch (error) {
      console.error("Error following user:", error);
    }
  }, [user, queryClient]);

  useEffect(() => {
    if (id) {
      getUserDetails(id);
    }
  }, [id]);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 size={36} color="orange" className="animate-spin" />
      </div>
    );
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
        <div className="flex flex-row justify-between">
          <div>
            <p className="font-semibold">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-gray-700">@shubhamK</p>
          </div>
          <div className="flex gap-2 my-4">
            <p className="text-gray-700 font-semibold">
              {user.followers?.length} follower
            </p>
            <p className="text-gray-700 font-semibold">
              {user.following?.length} following
            </p>
          </div>
        </div>
        {currentUser?.id != user.id && (
          <div className="w-12">
            {currentUser?.following?.some((data) => data?.id === id) ? (
              <Button onClick={handleunFollowUser}>Unfollow</Button>
            ) : (
              <Button onClick={handleFollowUser}>Follow</Button>
            )}
          </div>
        )}
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
