"use client";
import { PiXLogoBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineNotifications } from "react-icons/md";
import { LuHome } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { TbMessageCircle } from "react-icons/tb";
import { ModeToggle } from "../ToggleBtn";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "../../../../hooks/user";
import Image from "next/image";
import { LuTwitter } from "react-icons/lu";
import Link from "next/link";


const SectionOne = () => {
  const { user,isLoading } = useCurrentUser();
  
  const list = [
    {
      icon: LuHome,
      val: "Home",
      link: '/',

    },
    {
      icon: IoSearch,
      val: "Explore",
      link: '/',
    },
    {
      icon: MdOutlineNotifications,
      val: "Notification",
      link: '/',
    },
    {
      icon: TbMessageCircle,
      val: "Message",
      link: '/',
    },
    {
      icon: FaRegUser,
      val: "Profile",
      link: `/Home/${user?.id}`,
    },
  ];
  if (isLoading) {
    return <p></p>;
  }


  return (
    <div className="mx-12 mt-3">
      <div className="w-fit h-fit p-2 rounded-full">
        <PiXLogoBold className="text-zinc-950 dark:text-white" size={35} />
      </div>
      <div className="flex flex-col justify-between gap-4 ">
        <div className="mt-4">
          {list.map((item, index) => (
            <Link href={item.link}
              key={index}
              className="flex items-center space-x-2 mt-3 hover:bg-zinc-200  dark:hover:bg-zinc-800 
            hover:rounded-full w-fit h-fit p-3 pr-6 cursor-pointer gap-2"
            >
              <item.icon className="text-zinc-950 dark:text-white" size={26} />
              <p className="hidden md:block text-zinc-950 dark:text-white text-lg font-semibold">
                {item.val}
              </p>
            </Link>
          ))}
        </div>
        <Button className="hidden md:block ml-2">Tweet</Button>
        <Button className="block md:hidden ml-2"><LuTwitter size={22}/></Button>
        <div className="hover:bg-zinc-200  dark:hover:bg-zinc-800 p-2 rounded-full cursor-pointer">
          {user && user.profileImageURL && 
          <div className="flex flex-row items-center gap-4">
             <Image src={user?.profileImageURL} alt="image"  width={35} height={35} className="rounded-full"/>
             <p className="hidden md:block font-semibold">{user.firstName}{" "}{user.lastName}</p>
             </div>
          }
        </div>
        <div className="flex justify-start ml-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
