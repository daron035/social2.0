import React, { useState } from "react";
import img from "../../static/twitter-icon-svg.jpg";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import styles from "../../static/css/App.module.css";
import rimg from "../../static/twitter-icon-svg.jpg";

import Avatar from "../Avatar";

const ViewPage = ({ children, visible, setVisible }) => {
  var display = "hidden";

  if (visible) {
    display = "";
  } else {
    display = "hidden";
  }


  return (
    <div className={`flex justify-end ${display} fixed ${styles.viewPage}`}>
      {/* <div className="flex justify-end display"> */}
      <div className="w-full bg-red-700 bg-opacity-50 text-white">
        <div onClick={() => setVisible(false)}>exit</div>
        <img src={rimg} className="w-12 h-12" />
      </div>
      <div className="w-[350px] px-4 pt-3 mb-1">
        <div className="flex w-full ">
          <Avatar />
          <div className="flex justify-between w-full">
            <div className="block items-center ">
              <div>name</div>
              <div>@username</div>
            </div>
            <HiEllipsisHorizontal className="w-7 h-7 on-hover-sm" />
          </div>
        </div>
        <div>text</div>
      </div>
    </div>
  );
};

export default ViewPage;
