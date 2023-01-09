import React from "react";
import logo from "../static/twitter-icon-svg.jpg";
import styles from "../static/css/App.module.css";
import SideBarLink from "./SideBarLink";
import { HiOutlineHashtag, HiInbox, HiOutlineUser } from "react-icons/hi";
import TweetButton from "../UI/button";
import AccountView from "./AccountView";
import { NavLink, Link } from "react-router-dom";

const SideBar = () => {
  let activeClassName = "font-bold";

  return (
    <div className="border-gray-50">
      <div
        className="flex sm:flex flex-col items-center xl:items-start
    xl:w-[390px] p-2 h-screen"
      >
        <Link to={`/home`}>
          <div className={styles.hoverIcon}>
            <img src={logo} alt="Logo" />
          </div>
        </Link>

        <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
          <NavLink
            to={`/home`}
            className={({ isActive }) => (isActive ? activeClassName : "")}
          >
            <SideBarLink text="Explore" Icon={HiOutlineHashtag} />
          </NavLink>

          <NavLink
            to={`/messages`}
            className={({ isActive }) => (isActive ? activeClassName : "")}
          >
            <SideBarLink text="Messages" Icon={HiInbox} />
          </NavLink>

          <NavLink
            to={`/profile`}
            className={({ isActive }) => (isActive ? activeClassName : "")}
          >
            <SideBarLink text="Profile" Icon={HiOutlineUser} />
          </NavLink>

          <NavLink
            to={`/friends-list`}
            className={({ isActive }) => (isActive ? activeClassName : "")}
          >
            <SideBarLink text="Friends" Icon={HiOutlineUser} />
          </NavLink>

          <TweetButton>Tweet</TweetButton>
        </div>
        <AccountView />
      </div>
    </div>
  );
};

export default SideBar;
