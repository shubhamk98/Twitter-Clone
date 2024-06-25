import React from "react";
import SectionOne from "./(components)/(SectionOne)/SectionOne";
import SectionTwo from "./(components)/(SectionTwo)/SectionTwo";
import SectionThree from "./(components)/(SectionThree)/SectionThree";
import CreateTweet from "./(components)/(SectionTwo)/CreateTweet";

const page = () => {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen text-center">
        <div className="border-r-[1px] col-span-3 border-gray-400 dark:border-gray-800">
          <SectionOne />
        </div>
        <div className="border-r-[1px] col-span-6 border-gray-400 dark:border-gray-800 overflow-scroll">
          <CreateTweet/>
          <SectionTwo />
          <SectionTwo />
          <SectionTwo />
          <SectionTwo />
          <SectionTwo />
          <SectionTwo />
          <SectionTwo />
        </div>
        <div className="border-r-[1px] col-span-3 border-gray-400 dark:border-gray-800">
          <SectionThree/>
        </div>
      </div>
    </div>
  );
};

export default page;
