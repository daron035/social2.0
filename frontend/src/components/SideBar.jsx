import React from "react";
import logo from "../static/twitter-icon-svg.jpg";
import styles from "../static/css/App.module.css";
import SideBarLink from "./SideBarLink";
import {
  HiHome,
  HiOutlineHashtag,
  HiOutlineBell,
  HiInbox,
  HiOutlineBookmark,
  HiOutlineClipboardList,
  HiOutlineUser,
  HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";
import TweetButton from "../UI/button";
import AccountView from "./AccountView";

const SideBar = () => {
  return (
    <div className="border-gray-50">
      <div
        className="flex sm:flex flex-col items-center xl:items-start
    xl:w-[390px] p-2 h-screen"
      >
        <div className={styles.hoverIcon}>
          <img src={logo} alt="Logo" />
        </div>
        <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
          <SideBarLink text="Home" Icon={HiHome} active />
          <SideBarLink text="Explore" Icon={HiOutlineHashtag} />
          <SideBarLink text="Notifications" Icon={HiOutlineBell} />
          <SideBarLink text="Messages" Icon={HiInbox} />
          <SideBarLink text="Bookmarks" Icon={HiOutlineBookmark} />
          <SideBarLink text="Lists" Icon={HiOutlineClipboardList} />
          <SideBarLink text="Profile" Icon={HiOutlineUser} />
          <SideBarLink text="More" Icon={HiOutlineDotsCircleHorizontal} />
          <TweetButton>Tweet</TweetButton>
        </div>
        <AccountView />
      </div>
    </div>
  );
};

export default SideBar;
