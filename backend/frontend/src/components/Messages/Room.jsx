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
        <div className="text-[#FF0000]">
          Это <span className="line-through">бесполезная</span> демонстрационная
          страница
          <p>Пожалуйста, по ссылке "Сonversation"</p>
        </div>
      </div>
    </div>
  );
};

export default Room;
