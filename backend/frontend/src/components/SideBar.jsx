import React from "react";
import logo from "../static/twitter-icon-svg.jpg";
import styles from "../static/css/App.module.css";
import SideBarLink from "./SideBarLink";
import { HiOutlineHashtag, HiInbox, HiOutlineUser } from "react-icons/hi";
import TweetButton from "../UI/button";
import AccountView from "./AccountView";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const SideBar = () => {
  let activeClassName = "font-bold";

  const username = useSelector((state) => state.auth?.user?.username);

  let to_conversation = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ user: username }); // body || params
    console.log(username);
    await axios
      .get(
        "http://127.0.0.1:8000/to_conversation/",
        {
          params: {
            user: username,
          },
        },
        config
      )
      .then((response) => {
        window.location.assign("http://127.0.0.1:8000/conversation/");
      })
      // .catch((error) => console.log(error));
      .catch((error) => alert(error));
  };

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

        <div className="mt-4 mb-2.5 xl:ml-24">
          <NavLink
            to={`/home`}
            className={({ isActive }) => (isActive ? activeClassName : "")}
          >
            <SideBarLink text="Explore" Icon={HiOutlineHashtag} />
          </NavLink>

          {/* ВРЕМЕННОЕ */}
          <div
            className="flex text-[#D7D9DB] items-center xl:justify-start space-x-3 text-xl hover:bg-[#d9d9d9] 
         hover:bg-opacity-25 rounded-full cursor-pointer transition duration-200 xl:py-2 xl:px-2"
            onClick={to_conversation}
          >
            <HiInbox />
            <span> Conversation</span>
          </div>
          {/* ВРЕМЕННОЕ */}

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

          <NavLink
            to={`/messages`}
            className={({ isActive }) => (isActive ? activeClassName : "")}
            onClick={to_conversation}
          >
            <SideBarLink text="Messages" Icon={HiInbox} />
          </NavLink>

          <div className="mt-3">
            <TweetButton>Tweet</TweetButton>
          </div>
        </div>

        <AccountView />
      </div>
    </div>
  );
};

export default SideBar;
