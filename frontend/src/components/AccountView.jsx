import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import logo from "../static/twitter-icon-svg.jpg";

const AccountView = () => {
  return (
    <div
      className="flex text-white ml-24 mt-auto justify-center items-center rounded-full
      duration-200 p-2.5 hover:bg-[#d9d9d9] 
         hover:bg-opacity-25"
    >
      <img src={logo} className="w-10 h-10 mx-2 bg-white rounded-full" />
      <div className="leading-5 ">
        <h4 className="font-bold">Камил Кусяков</h4>
        <p>@mail.com</p>
      </div>
      <div className="ml-8">
        <HiOutlineDotsHorizontal size={18} />
      </div>
    </div>
  );
};

export default AccountView;
