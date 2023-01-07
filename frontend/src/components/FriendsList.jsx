import React, { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Avatar } from "@mui/material";
import axios from "axios";
import FLButton from "./FriendsListButton";
import { useSelector } from "react-redux";

const Profile = () => {
  let [contacts, setContacts] = useState();

  const username = useSelector((state) => state.auth?.user?.username);
  const email = useSelector((state) => state.auth?.user?.email);

  useEffect(() => {
    // api request for friends
    getContacts();
  }, []);

  let getContacts = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        // Authorization: `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwNzY5MDQzLCJqdGkiOiI3OGYwNTQ3ZjQ2MDc0NTEzYjQ1ZjUwOWQzNDY0YTcxMyIsInVzZXJfaWQiOjJ9.GCNkwaYiVaG80Uuf2TG-HLnKnuD1RW57PxpZVusdB9A`,
      },
    };
    await axios
      // .get(`http://127.0.0.1:8000/api/post-images/${pk}`)
      .get(`/api/profiles/`, config)
      // .get(`/api/profiles/3/`)
      // .get(`${process.env.REACT_APP_API_URL}/api/post-images/${pk}`)
      .then((response) => {
        setContacts(response.data[0]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex-none text-white border-l border-r border-gray-700 h-full w-[600px]">
      <div className="flex items-center h-14 px-4">
        <div className="w-14">
          <HiArrowLeft size={20} />
        </div>
        <div>
          <span className="text-xl font-bold">{username}</span>
          <p className="text-sm text-[#969799] w-16">{email}</p>
        </div>
      </div>

      <div className="flex h-12 text-center border-b border-gray-700">
        <FLButton name="friends" />
      </div>
      {contacts &&
        contacts.friends.map((item) => (
          <div className="p-4 hover:bg-[#d9d9d9] hover:bg-opacity-25 cursor-pointer">
            <div className="flex">
              <Avatar
                sx={{ width: 48, height: 48 }}
                style={{ marginRight: "1rem" }}
              />
              <div>{item.username}</div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Profile;
