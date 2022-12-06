import React, { useEffect, useState } from "react";
import axios from "axios";
import FeedHeader from "./FeedHeader";
import TweetForm from "./TweetForm";
import TweetPost from "./TweetPost";
import lg2 from "../static/2.jpg";

const Feed = (props) => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  let getPosts = async () => {
    axios
      .get("http://127.0.0.1:8000/api/posts/")
      .then((response) => {
        const allPosts = response.data;
        setPosts(allPosts);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex-none text-white border-l border-r border-gray-700 h-full w-[600px]">
      <FeedHeader />
      <TweetForm />
      {posts.map((item) => (
        <TweetPost
          idPost={item.id}
          body={item.body}
          imageUrls={item.images}
          callback={props.callback}
        />
      ))}
      <TweetPost image={lg2} />
    </div>
  );
};

export default Feed;
