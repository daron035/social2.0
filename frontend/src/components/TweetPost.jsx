import React, { useEffect, useState } from "react";
import { HiOutlineHeart, HiOutlineUpload } from "react-icons/hi";
import { BsChat } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import logo from "../static/twitter-icon-svg.jpg";
import axios from "axios";
import ViewPage from "./Modal/ViewPage";
import TweetPostIcons from "./TweetPostIcons";

const TweetPost = ({ idPost, username, body, time, props }) => {
  // console.log(d);
  // console.log(props.time);
  console.log(time);
  const [viewModal, setModal] = useState(false);

  // Открытие модального окна <ViewPage viewModal={viewModal} ... />
  let id;
  function smap(item) {
    setModal(true);
    id = item.id;
  }

  // Открытие модального окна
  function callbackCloseModal(a) {
    setModal(false);
  }

  let [images, setImages] = useState([]);

  useEffect(() => {
    getImages(idPost);
  }, []);

  let getImages = async (pk) => {
    await axios
      // .get(`http://127.0.0.1:8000/api/post-images/${pk}`)
      .get(`/api/post-images/${pk}`)
      // .get(`${process.env.REACT_APP_API_URL}/api/post-images/${pk}`)
      .then((response) => {
        const image = response.data;
        setImages(image);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative border-b border-gray-700">
      <ViewPage
        viewModal={viewModal}
        id={id}
        i={images}
        callbackCloseModal={callbackCloseModal}
      />
      <div className="flex min-h-[300px] mx-[16px] mt-[12px] pb-3">
        <div className="w-[48px] pr-[12px] ">
          <img src={logo} alt=""></img>
        </div>
        <div className="flex-col w-full">
          <div className="flex ">
            <div className="min-h-[20px]">{username}</div>
            <div className="mx-1"> & </div>
            <div className="my-auto text-sm text-gray-400">{time} hours</div>
          </div>
          <div>{body}</div>
          <div className="my-3 grid grid-cols-2">
            {images.map((item) => (
              <img
                src={item.image}
                alt=""
                className="rounded-2xl"
                onClick={() => smap(item)}
              ></img>
            ))}
          </div>

          <div className="flex justify-between items-center w-[425px] h-[20px]">
            <TweetPostIcons icon=<BsChat /> />
            <TweetPostIcons icon=<BiRepost size={22} /> />
            <TweetPostIcons icon=<HiOutlineHeart size={20} /> />
            <TweetPostIcons icon=<HiOutlineUpload size={20} /> />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetPost;
