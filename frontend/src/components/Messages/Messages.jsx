import React from "react";
import { Avatar } from "@mui/material";
import { MdSend } from "react-icons/md";
import classes from "../../static/css/App.module.css";

const Messages = () => {
  return (
    <div className="min-h-screen flex-none text-white border-r border-gray-700 h-full w-[600px]">
      <div className="flex pl-4 h-14 items-center">
        <Avatar
          sx={{ width: 32, height: 32 }}
          style={{ marginRight: "1rem" }}
        />
        Username
      </div>

      <div className="pb-6">
        <div className="inline-block rounded-full rounded-bl-lg bg-gray-600 border-gray-600 py-1 px-4 mx-3">
          messages
        </div>
        <div className="px-4 text-[#72767A]">time</div>
      </div>

      <div className="pb-6">
        <div className="inline-block rounded-full rounded-bl-lg bg-gray-600 border-gray-600 py-1 px-4 mx-3">
          messages
        </div>
        <div className="px-4 text-[#72767A]">time</div>
      </div>

      <div className="fixed w-[599px] bottom-0 border-t border-gray-700 pt-0.5">
        <form className="my-2 mx-3 p-1 bg-[#212327] rounded-xl flex justify-between items-center">
          <textarea
            rows="1"
            placeholder="Start a new message"
            className="px-3 outline-none w-full bg-transparent tracking-wide text-lg placeholder-gray-500 resize-none"
          ></textarea>
          <button className={classes.smHoverIcon}>
            <MdSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Messages;
