import React from "react";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { HiMiniMicrophone } from "react-icons/hi2";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="flex justify-between px-5 py-2">
      <div className=" flex items-center  gap-2">
        <div className="cursor-pointer rounded-full  p-2  hover:bg-gray-200">
          <IoMdMenu className="text-2xl  " />
        </div>
        <NavLink to="/" className="cursor-pointer">
          <img src={logo} alt="..." className="w-[120px]" />
          
        </NavLink>
      </div>
      <div className="flex justify-center ml-36 sm:ml-0 w-2/5 ">
        <input
          type="text"
          placeholder="Search"
          className="hidden sm:block outline-none border border-gray-300 rounded-l-full px-3 w-full "
        />
        <div className=" sm:border sm:border-gray-300 flex justify-center items-center sm:w-[65px] sm:rounded-r-full sm:bg-gray-200 cursor-pointer p-2 sm:p-0  ">
          <CiSearch className="text-xl " />
        </div>
        <div className="flex items-center   rounded-full sm:border px-[10px] py-1 sm:ml-3 sm:bg-gray-200  mr-4 sm:mr-0 cursor-pointer ml-5 hover:bg-gray-200 ">
          <HiMiniMicrophone className="text-lg " />
        </div>
      </div>
      <div className=" flex items-center gap-5">
        <div className="cursor-pointer rounded-full  p-2  hover:bg-gray-200">
          <MdOutlineVideoCall className="text-2xl  " />
        </div>
        <div className="cursor-pointer mr-5 rounded-full  p-2 hover:bg-gray-200">
          <IoMdNotificationsOutline className="text-2xl" />
        </div>
        <div className=" mr-2 p-2 border rounded-full bg-gray-200  cursor-pointer">
          <FaUser />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
