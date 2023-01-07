import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import logo from "../static/twitter-icon-svg.jpg";
import ViewLogout from "./Modal/ViewLogout";
import { useSelector } from "react-redux";

const AccountView = () => {
  const [visible, setVisible] = useState(false);

  const username = useSelector((state) => state.auth?.user?.username);
  const email = useSelector((state) => state.auth?.user?.email);

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
      <div className="leading-5 w-36">
        <h4 className="font-bold">{username}</h4>
        <p>{email}</p>
      </div>
      <div className="ml-8">
        <HiOutlineDotsHorizontal size={18} />
      </div>
    </div>
  );
};

export default AccountView;
