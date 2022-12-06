import React from "react";

const TweetPostIcons = (props) => {
  return (
    <div className="flex items-center hover:bg-blue-200 hover:bg-opacity-50 rounded-full cursor-pointer transition duration-200 pl-2.5">
      {props.icon}
      <div className="items-center px-3">23</div>
    </div>
  );
};

export default TweetPostIcons;
