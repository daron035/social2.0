import React from "react";
import { Avatar } from "@mui/material";
import { MdSend } from "react-icons/md";
import classes from "../../static/css/App.module.css";

const Messages = () => {
  return (
    <div className="flex-none overflow-hidden hover:overflow-y-scroll text-white border-r border-gray-700 max-h-screen w-[600px]">
      <div className="flex sticky top-0 backdrop-blur-md pl-4 h-14 items-center">
        <Avatar
          sx={{ width: 32, height: 32 }}
          style={{ marginRight: "1rem" }}
        />
        Username - test
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
      <div className="pb-6">
        <div className="inline-block rounded-full rounded-bl-lg bg-gray-600 border-gray-600 py-1 px-4 mx-3">
          messages
        </div>
        <div className="px-4 text-[#72767A]">time</div>
      </div>

      <div className="sticky py-2 w-[599px] bottom-0 border-t border-gray-700 bg-black">
        <form className="mx-3 p-1 bg-[#212327] rounded-xl flex justify-between items-center">
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
