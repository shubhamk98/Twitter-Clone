"use client";

import React from "react";
import SectionOne from "./(components)/(SectionOne)/SectionOne";
import SectionTwo from "./(components)/(SectionTwo)/SectionTwo";
import SectionThree from "./(components)/(SectionThree)/SectionThree";
import CreateTweet from "./(components)/(SectionTwo)/CreateTweet";
import { useGetAllTweets } from "../../hooks/tweet";
import { Tweet } from "../../gql/graphql";
import { useCurrentUser } from "../../hooks/user";

const page = () => {
  const { tweets = [] } = useGetAllTweets();
  const { user } = useCurrentUser();

  if (!tweets) {
    return new Error("No tweet Found");
  }
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen text-center">
        <div className="border-r-[1px] col-span-1 md:col-span-3 border-gray-400 dark:border-gray-800">
          <SectionOne />
        </div>
        <div className="border-r-[1px] col-span-6 border-gray-400 dark:border-gray-800 overflow-scroll">
          {user && <CreateTweet />}
          {tweets.map((tweet) =>
            tweet ? <SectionTwo key={tweet?.id} data={tweet as Tweet} /> : null
          )}
        </div>
        <div className="border-r-[1px] col-span-3 border-gray-400 dark:border-gray-800">
          <SectionThree />
        </div>
      </div>
    </div>
  );
};

export default page;