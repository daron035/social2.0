import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import logo from "../static/twitter-icon-svg.jpg";
import ViewLogout from "./Modal/ViewLogout";

const AccountView = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`flex text-white ml-24 mt-auto justify-center items-center rounded-full
      duration-200 p-2.5 ${
        visible ? "hover:bg-[#000000] cursor-default" : "hover:bg-[#d9d9d9]"
      } 
         hover:bg-opacity-25 cursor-pointer`}
      onClick={() => (visible ? setVisible(false) : setVisible(true))}
    >
      <ViewLogout active={visible} setVisible={setVisible} />
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
