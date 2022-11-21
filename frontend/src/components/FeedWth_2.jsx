import React, { useState } from "react";
import img from "../static/twitter-icon-svg.jpg";

const FeedWth = () => {
  function handleSubmit(e) {
    e.preventDefault();
    // data = new FormData()
    console.log(data);
  }
  const [data, setData] = useState("jfsdk");

  return (
    <div className="flex py-[4px] px-[16px]">
      <div className="flex items-start mr-3 pt-1">
        <img src={img} className="w-12 h-12" />
      </div>
      <div className="w-full divide-y divide-gray-700">
        <div>
          <form onSubmit={handleSubmit}>
            <textarea
              value={data}
              onChange={(e) => setData(e.target.value)}
              rows="2"
              placeholder="What's happening?"
              className="outline-none w-full bg-transparent tracking-wide text-lg placeholder-gray-500"
            ></textarea>
            <input type="submit" value="Отправить" />
          </form>
        </div>
        <div>hello</div>
      </div>
    </div>
  );
};

export default FeedWth;
