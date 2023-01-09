import React from "react";
import { Avatar } from "@mui/material";

const Room = () => {
  return (
    <div className="p-4 hover:bg-[#d9d9d9] hover:bg-opacity-25 cursor-pointer mt-4 rounded-full">
      <div className="flex">
        <Avatar
          sx={{ width: 48, height: 48 }}
          style={{ marginRight: "1rem" }}
        />
        <div>friend's private chat room name</div>
      </div>
    </div>
  );
};

export default Room;
