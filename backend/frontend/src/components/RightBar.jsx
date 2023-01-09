import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const RightBar = () => {
  return (
    <div className="flex-none text-[#D7D9DB] w-[350px] mt-3 mx-[30px]">
      <div className="bg-[#212327] bg-transparent flex rounded-full h-[42px] items-center mb-3">
        <div className="w-[44px] pl-4">
          <HiOutlineSearch size={18} />
        </div>
        <form className="m-3">
          <textarea
            rows="1"
            cols=""
            placeholder="Search"
            className="placeholder-gray-500 resize-none outline-none bg-transparent"
          ></textarea>
        </form>
      </div>
      <div className="bg-[#212327] rounded-3xl text-lg">
        <div className="text-center text-white py-2 font-bold">
          Trends 4 you
        </div>
      </div>
    </div>
  );
};

export default RightBar;
