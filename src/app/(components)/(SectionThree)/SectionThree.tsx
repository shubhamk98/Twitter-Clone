"use client";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React, { useCallback } from "react";
import toast from "react-hot-toast";
import { graphqlClient } from "../../../../gClient/api";
import { verifyGoogleTokenQuery } from "../../../../graphql/query/user";
import { useCurrentUser } from "../../../../hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SectionThree = () => {
  const { user, isLoading } = useCurrentUser();

  const queryClient = useQueryClient();

  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;

      if (!googleToken) {
        return toast.error("Google token not found");
      }

      const { verifyGoogleToken } = await graphqlClient.request(
        verifyGoogleTokenQuery,
        {
          token: googleToken,
        }
      );

      toast.success("verified Success");

      if (verifyGoogleToken) {
        window.localStorage.setItem("twitter_token", verifyGoogleToken);
      }
      await queryClient.invalidateQueries({ queryKey: ["current-user"] });
    },
    [queryClient]
  );
  if (isLoading) {
    return <p></p>;
  }

  const handleLogout = async () => {
    window.localStorage.removeItem("twitter_token");
    await queryClient.invalidateQueries({ queryKey: ["current-user"] });
    toast.success("Logged out successfully");
  };
  

  return (
    <div>
      <div className="m-5 flex flex-col gap-4">
        {!user && (
          <div className="flex gap-3 flex-col">
            <p className="text-left font-semibold">New to Twitter?</p>
            <GoogleLogin
              onSuccess={handleLoginWithGoogle}
              shape="square"
              theme="outline"
              text="continue_with"
              size="medium"
            />
            
            <p className="text-left font-semibold">Login to share your words with Everyone!!!</p>
          </div>
          
        )}
        {user?.recommendedUsers?.map((el) => (
          <div
            key={el?.id}
            className="p-4 shadow-lg rounded-lg bg-white border-[2px] dark:border-[0px] dark:bg-zinc-900 "
          >
            <p className="font-semibold text-lg mb-2 ">People you may know</p>
            <Link  href={`/Home/${el?.id}`} className="flex items-center gap-4 hover:rounded-full p-2 cursor-pointer hover:bg-zinc-200  dark:hover:bg-zinc-800">
              {el?.profileImageURL && (
                <Image
                  src={el.profileImageURL}
                  width={35}
                  height={35}
                  className="rounded-full border-2 border-orange-400"
                  alt="Profile image"
                />
              )}
              <div className="flex flex-col">
                <p >
                  {el?.firstName} {el?.lastName}
                </p>
              </div>
            </Link>
          </div>
        ))}
        {
          user &&
            <Button onClick={handleLogout}>Logout</Button>
        }
      </div>
    </div>
  );
};

export default SectionThree;
