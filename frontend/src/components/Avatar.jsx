import React from "react";
import img from "../static/twitter-icon-svg.jpg";

function Avatar() {
  return (
    <div className="items-start mr-3 ">
      <img src={img} className="w-16 h-12 bg-gray-300 rounded-full" />
    </div>
  );
}

export default Avatar;
