import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { GiHanger } from "react-icons/gi";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";

import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
// import { GiLinkedRings } from "react-icons/gi";
// import { SiTrendmicro } from "react-icons/si";
// import { SiYoutubegaming } from "react-icons/si";
// import { SiStylelint } from "react-icons/si";

function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <PiUserSquareThin />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <CgPlayList />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <AiOutlineLike />,
    },
  ];
  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <BsFire />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <IoGameControllerOutline />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <PiLightbulbLight />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <GiHanger />,
    },
    {
      id: 11,
      name: "Podcasts",
      icon: <MdPodcasts />,
    },
  ];
  const sidebarItems4 = [
    {
      id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    },
  ];
  return (
    <div className="px-3 w-[280px] h-[90vh] overflow-y-hidden hover:overflow-y-scroll overflow-x-hidden hidden xl:block ">
      {/* Home */}
      <div className="flex flex-col  pb-2">
        {sidebarItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center gap-6 hover:bg-blue-100 duration-300 rounded-xl px-5 py-2"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <hr />
      {/* You */}
      <div className="flex flex-col  py-2 ">
        <div className="flex items-center px-5 py-2 gap-2 hover:bg-blue-100 duration-300 rounded-xl">
          <h1 className="text-lg font-semibold">You</h1>
          <FaChevronRight />
        </div>
        {sidebarItems2.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center gap-6 hover:bg-blue-100 duration-300 rounded-xl px-5 py-2"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <hr />
      {/* Explore */}
      <div className="flex flex-col  py-2 ">
        <div className="flex items-center px-5 py-2 gap-2">
          <h1 className="text-lg font-semibold">Explore</h1>
        </div>
        {sidebarItems3.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center gap-6 hover:bg-blue-100 duration-300 rounded-xl px-5 py-2"
            >
              <div className="text-xl cursor-pointer">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <hr />
      {/* More section */}
      <div className="flex flex-col  py-2 ">
        <div className="flex items-center px-5 py-2 gap-2">
          <h1 className="text-lg font-semibold">More from YouTube</h1>
        </div>
        {sidebarItems4.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center gap-6 hover:bg-blue-100 duration-300 rounded-xl px-5 py-2"
            >
              <div className="text-xl cursor-pointer text-red-600">
                {item.icon}
              </div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <hr />
      <br />
      <span className=" flex flex-col gap-3 text-gray-500 text-sm font-semibold">
        About Press Copyright Contact  <br />us Creators Advertise Developers
        <p>Terms Privacy Policy & Safety <br /> How YouTube works Test new features</p>
        <p className="text-xs text-gray-500">© 2024 Goku</p>
      </span>
    </div>
  );
}

export default Sidebar;
