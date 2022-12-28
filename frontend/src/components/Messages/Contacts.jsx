import React from "react";
import { Avatar } from "@mui/material";
import { Outlet } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="flex">
      <div className="flex-none text-white border-l border-r border-gray-700 h-full w-[400px]">
        <div className="flex justify-between h-[53px] mx-[16px] py-2.5 items-center">
          <span className="text-xl font-bold">Messages</span>
        </div>
        <div className="p-3">
          <div className="py-1 border border-gray-600 rounded-full">
            <form className="flex justify-center items-center">
              <textarea
                rows="1"
                cols=""
                placeholder="Search for people"
                className="bg-transparent placeholder:text-center placeholder-gray-500 resize-none outline-none w-full px-4"
              ></textarea>
            </form>
          </div>
        </div>
        <div className="p-4">
          <div className="flex">
            <Avatar
              sx={{ width: 48, height: 48 }}
              style={{ marginRight: "1rem" }}
            />
            <div>Username</div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Contacts;
