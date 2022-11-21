import React from "react";
import { HiStar } from "react-icons/hi";
import { HiUser, HiOutlineSparkles } from "react-icons/hi2";

const FeedHeader = () => {
  return (
    <div className="flex justify-between h-[53px] mx-[16px] py-2.5 items-center">
      <div className="font-bold text-lg cursor-pointer">Home</div>
      <div className="flex w-[56px] justify-end ">
        <div className="hover:bg-[#d9d9d9] hover:bg-opacity-25 rounded-full w-[34px] h-[34px] items-center justify-center flex">
          <HiOutlineSparkles size={22} />
        </div>
      </div>
    </div>
  );
};

export default FeedHeader;
