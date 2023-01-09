import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  HiOutlineEmojiHappy,
  HiOutlinePhotograph,
  HiOutlineCalendar,
} from "react-icons/hi";
import { HiUser } from "react-icons/hi2";

import axios from "axios";

const TweetForm = () => {
  const { register, handleSubmit } = useForm();

  const refreshPage = () => {
    window.location.reload();
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("body", data.body);
    if (data.image[0]) {
      for (const element of data.image) {
        formData.append("uploaded_images", element);
      }
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        // Authorization: `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwNzY5MDQzLCJqdGkiOiI3OGYwNTQ3ZjQ2MDc0NTEzYjQ1ZjUwOWQzNDY0YTcxMyIsInVzZXJfaWQiOjJ9.GCNkwaYiVaG80Uuf2TG-HLnKnuD1RW57PxpZVusdB9A`,
      },
    };
    const body = formData;
    await axios
      .post(
        // `/api/upload-file/`,
        `${process.env.REACT_APP_API_URL}/api/upload-file/`,
        body,
        config
      )
      .then(refreshPage);
  };

  return (
    <div className="flex py-[4px] px-[16px] border-b border-gray-700">
      <div className="flex items-start mr-3 pt-1">
        <HiUser className="rounded-full w-12 h-12 bg-gray-400 cursor-pointer" />
      </div>
      <div className="w-full ">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              {...register("body", { required: true })}
              rows="2"
              placeholder="What's happening?"
              className="outline-none w-full bg-transparent tracking-wide text-lg placeholder-gray-500 resize-none"
            ></textarea>
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="mr-2 hover:bg-blue-200 hover:bg-opacity-50 rounded-full cursor-pointer transition duration-200 my-auto">
                  <input
                    name="image"
                    accept="image/*"
                    type="file"
                    id="icon-button-file"
                    style={{ display: "none" }}
                    {...register("image")}
                    multiple
                  />
                  <label for="icon-button-file">
                    <HiOutlinePhotograph size={22} className="m-1" />
                  </label>
                </div>
                <div className="mr-2 hover:bg-blue-200 hover:bg-opacity-50 rounded-full cursor-pointer transition duration-200 my-auto">
                  <HiOutlineEmojiHappy size={22} className="m-1" />
                </div>
                <div className="mr-2 hover:bg-blue-200 hover:bg-opacity-50 rounded-full cursor-pointer transition duration-200 my-auto">
                  <HiOutlineCalendar size={22} className="m-1" />
                </div>
              </div>
              <button
                className="my-3 rounded-full h-[36px] w-[75px] hover:bg-[#428AD2] bg-[#4A99E9] px-[16px]
                ml-3 duration-200 shadow-md mb-3"
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
