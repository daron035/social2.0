import SimpleImageSlider from "react-simple-image-slider";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import styles from "../../static/css/App.module.css";

import Avatar from "../Avatar";
import ViewPagePosts from "./ViewPagePosts";

const ViewPage = ({ viewM, callbackCloseModal, i }) => {
  if (viewM) {
    var display = "";
  } else {
    var display = "hidden";
  }

  let images = [];
  i.map((it) => images.push({ url: it.image }));

  return (
    <div
      className={`-left-0 -top-0 z-10 ${display} fixed flex ${styles.viewPage}`}
    >
      <div className="w-full bg-red-700 bg-opacity-50 text-white">
        <div onClick={() => callbackCloseModal()}>exit</div>
        <div className="max-w-full h-full flex items-center">
          <SimpleImageSlider
            height="80%"
            width="80%"
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
      </div>
      <div className="w-[350px] px-4 pt-3 mb-1">
        <div className="flex w-full ">
          <Avatar />
          <div className="flex justify-between w-full">
            <div className="block items-center ">
              <div>name</div>
              <div>@username</div>
            </div>
            <HiEllipsisHorizontal className="w-7 h-7 on-hover-sm" />
          </div>
        </div>
        <div className="divide-y">
          <ViewPagePosts />
          <ViewPagePosts />
          <ViewPagePosts />
          <ViewPagePosts />
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
