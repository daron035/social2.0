import React, {useState} from "react";
import {
  HiOutlinePhotograph,
  HiOutlineHeart,
  HiOutlineUpload,
} from "react-icons/hi";
import { BsChat } from "react-icons/bs";

import { BiRepost } from "react-icons/bi";
import logo from "../static/twitter-icon-svg.jpg";
import lg from "../static/1.jpg";
import lg2 from "../static/2.jpg";

const TweetPost = ({ image, children, visible, setVisible }) => {
  const [view, setView] = useState(false);
  setVisible={setView};

  return (
    <div className="border-b border-gray-700">
      <div className="flex min-h-[300px] mx-[16px] mt-[12px] pb-3">
        <div className="w-[48px] pr-[12px] ">
          <img src={logo} alt=""></img>
        </div>
        <div className="flex-col w-full">
          <div className="flex ">
            <div className="min-h-[20px]">Nickname</div>
            <div className="ml-1">@nickname</div>
            <div className="mx-1"> & </div>
            <div className="my-auto text-sm text-gray-400">{14} hours</div>
          </div>
          <div>Description</div>
          <div className="my-3">
            <img src={image} alt="" className="rounded-2xl"></img>
          </div>
          <div className="flex justify-between items-center w-[425px] h-[20px]">
            <div className="flex items-center">
              <BsChat />
              <div className="items-center px-3">23</div>
            </div>
            <div className="flex items-center">
              <BiRepost size={22} />
              <div className="items-center px-3">23</div>
            </div>
            <div className="flex items-center">
              <HiOutlineHeart size={20} />
              <div className="items-center px-3">23</div>
            </div>
            <div className="flex items-center">
              <HiOutlineUpload size={20} />
              <div className="items-center px-3">23</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetPost;
