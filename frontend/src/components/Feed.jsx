import React, { useState } from "react";
import ViewPage from "./Modal/ViewPage";
import FeedHeader from "./FeedHeader";
import TweetForm from "./TweetForm";
import TweetPost from "./TweetPost";
import lg from "../static/1.jpg";
import lg2 from "../static/2.jpg";


const Feed = () => {
  return (
    <div className="flex-none text-white border-l border-r border-gray-700 h-full w-[600px]">
      <FeedHeader />
      <TweetForm />
      <TweetPost image={lg} />
      <TweetPost image={lg2} />
    </div>
  );
};

export default Feed;
