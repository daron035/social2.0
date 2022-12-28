import React from "react";
import { Avatar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
// import styles from "../static/css/index.css";
import styles from "../index.module.css";
import FeedHeader from "../components/FeedHeader";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";
import TweetForm from "../components/TweetForm";
import TweetPost from "../components/TweetPost";

// <div className="w-14">HiArrowLeftback</div>
const Profile = () => {
  return (
    <div className="flex-none text-white border-l border-r border-gray-700 h-full w-[600px]">
      <div className="flex items-center h-14 px-4">
        <div className="w-14">
          <HiArrowLeft size={20} />
        </div>
        <div>
          <span className="text-xl font-bold">Username</span>
          <p className="text-sm text-[#969799] w-16">0 Tweets</p>
        </div>
      </div>
      <div className="w-full pt-3 px-4 mb-4">
        <div className="flex justify-between">
          <div className="mt-[-12px]">
            <Avatar sx={{ width: 64, height: 64 }} />
          </div>
          <div>
            <div className="rounded-full border px-3 py-1">Edit profile</div>
          </div>
        </div>
        <span className="text-xl font-bold">Username</span>
        <div className="text-sm w-16">
          <span className="font-bold mr-1">152</span>
          <span className="text-[#969799]">Following</span>
          <span className="ml-5 font-bold mr-1">2</span>
          <span className="text-[#969799]">Followers</span>
        </div>
      </div>
      <div className="flex h-12 text-center">
        <div className={styles.ony}>Tweets</div>
        <div className={styles.ony}>Likes</div>
      </div>
      <div>Posts</div>
    </div>
  );
};
export default Profile;
