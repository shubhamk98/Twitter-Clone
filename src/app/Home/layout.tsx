import React from "react";
import SectionThree from "../(components)/(SectionThree)/SectionThree";
import SectionOne from "../(components)/(SectionOne)/SectionOne";

interface propsChild {
  children: React.ReactNode;
}

const Layout = ({ children }: propsChild) => {
  return (
    <div className="grid grid-cols-12 h-screen w-screen ">
      <div className="border-r-[1px] col-span-1 md:col-span-3 border-gray-400 dark:border-gray-800">
        <SectionOne />
      </div>
      <div className="col-span-6 border-r-[1px] border-gray-400 dark:border-gray-800 overflow-scroll">
        {children}
      </div>
      <div className="border-r-[1px] col-span-3 border-gray-400 dark:border-gray-800">
        <SectionThree />
      </div>
    </div>
  );
};

export default Layout;