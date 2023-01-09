import React from "react";
import { Outlet } from "react-router-dom";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";

function Conversation() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-[1500px]">
        <div className="flex">
          <SideBar />
          <div className="flex max-w-[990px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;