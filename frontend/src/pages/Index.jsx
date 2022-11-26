import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Feed from "../components/Feed";
import ViewPage from "../components/Modal/ViewPage";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";

function Index() {
  return (
    <div className="min-h-screen ">
      <ViewPage />
      <div className="container mx-auto max-w-[1500px]">
        <div className="flex">
          <SideBar />
          <div className="flex max-w-[990px]">
            {/* <Feed /> */}
            <Outlet/>
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
