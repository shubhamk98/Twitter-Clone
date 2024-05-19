import { PiXLogoBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineNotifications } from "react-icons/md";
import { LuHome } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { TbMessageCircle } from "react-icons/tb";
import { ModeToggle } from "../ToggleBtn";
import { Button } from "@/components/ui/button";

const SectionOne = () => {
  const list = [
    {
      icon: LuHome,
      val: "Home",
    },
    {
      icon: IoSearch,
      val: "Explore",
    },
    {
      icon: MdOutlineNotifications,
      val: "Notification",
    },
    {
      icon: TbMessageCircle,
      val: "Message",
    },
    {
      icon: FaRegUser,
      val: "Profile",
    },
  ];

  return (
    <div className="mx-12 mt-3">
      <div className="hover:bg-zinc-200  dark:hover:bg-zinc-800 w-fit h-fit p-2 rounded-full">
        <PiXLogoBold className="text-zinc-950 dark:text-white" size={35} />
      </div>
      <div className="flex flex-col justify-between gap-16">
        <div className="mt-4">
          {list.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 mt-3 hover:bg-zinc-200  dark:hover:bg-zinc-800 
            hover:rounded-full w-fit h-fit p-3 pr-6 cursor-pointer gap-2"
            >
              <item.icon className="text-zinc-950 dark:text-white" size={28} />
              <p className="text-zinc-950 dark:text-white text-xl font-semibold">
                {item.val}
              </p>
            </div>
          ))}
        </div>
        <Button className="ml-3">Tweet</Button>
        <div className="flex justify-start ml-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
