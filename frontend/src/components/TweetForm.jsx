import React, { useState } from "react";
import img from "../static/twitter-icon-svg.jpg";
import { HiUser, HiOutlineSparkles } from "react-icons/hi2";
import TweetButton from "../UI/button";

// <div className="flex items-center min-h-[56px]">What's happening?</div>
//         <img src={img} className="rounded-full w-12 h-12 bg-red-400" />

const TweetForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    // data = new FormData()
    console.log(data);
    setData("");
  }
  const [data, setData] = useState("");

  return (
    <div className="flex py-[4px] px-[16px] border-b border-gray-700">
      <div className="flex items-start mr-3 pt-1">
        <HiUser className="rounded-full w-12 h-12 bg-gray-400 cursor-pointer" />
      </div>
      <div className="w-full ">
        <div>
          <form onSubmit={handleSubmit}>
            <textarea
              value={data}
              onChange={(e) => setData(e.target.value)}
              rows="2"
              placeholder="What's happening?"
              className="outline-none w-full bg-transparent tracking-wide text-lg placeholder-gray-500 resize-none"
            ></textarea>
            <div className="flex justify-between mt-3">
              <div>sdklfj</div>
              <button
                type="submit"
                className="rounded-full h-[36px] w-[75px] bg-[#4A99E9] px-[16px]
                ml-3 mr-0.5 hover:bg-[#428AD2] duration-200 shadow-md mb-3"
              >
                Tweet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TweetForm;
