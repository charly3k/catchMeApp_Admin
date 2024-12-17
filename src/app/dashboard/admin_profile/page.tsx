"use client";

import { getAdminProfile } from "@/networking/getAdminProfile";

import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

/* 
const header = [
  "first name",
  "last name",
  "email",
  "profile pic",
  "photos",
  "actions",
];
const usersData = [
  {
    id: 1,
    name: "John",

    email: "john@gamil.com",
    profilePic: "https://randomuser.me/api/port",
    photos: [
      { url: "https://randomuser.me/api/port" },
      { url: "https://randomuser.me/api/port" },
    ],
    actions: "Deactivate",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@gamil.com",
    profilePic: "https://randomuser.me/api/port",
    photos: [
      { url: "https://randomuser.me/api/port" },
      { url: "https://randomuser.me/api/port" },
    ],
    actions: "Deactivate",
  },
  {
    id: 3,
    name: "Smith",
    email: "john@gmail.com",
    profilePic: "https://randomuser.me/api/port",
    photos: [
      { url: "https://randomuser.me/api/port" },
      { url: "https://randomuser.me/api/port" },
    ],
    actions: "Deactivate",
  },
  {
    id: 4,
    name: "Jane",
    email: "jane@gmail.com",
    profilePic: "https://randomuser.me/api/port",
    photos: [
      { url: "https://randomuser.me/api/port" },
      { url: "https://randomuser.me/api/port" },
    ],
    actions: "Deactivate",
  },
]; */
const cookies = new Cookies();

const Admin_Profile = () => {
  const adminId = cookies.get("adminID");
  const [adminProfile, setAdminProfile] = useState<{
    firstname: string;
    lastname: string;
    email: string;
    defaultPassword: string | null;
  }>();
  const handleGetAdminProfile = async () => {
    const result = await getAdminProfile();

    if (result) {
      setAdminProfile(result.data);
    }
  };

  useEffect(() => {
    handleGetAdminProfile();
  }, [adminId]);

  return (
    <div className="py-6 pr-6">
      {" "}
      <div className="flex">
        <button className=" text-white rounded-4xl py-2.5 px-3.5 mr-3.5 bg-red-500">
          your Profile
        </button>
        <button className="bg-white text-slate-400 rounded-4xl py-2.5 px-3.5">
          Other admins
        </button>
      </div>
      {/* <div className="bg-white rounded-3xl mx-auto p-6 my-6">
        <div className="flex flex-row justify-between mb-6">
          {header.map((item) => (
            <div className="text-red-400 w-2/12" key={item}>
              {item}
            </div>
          ))}
        </div>
        {usersData.map((user) => (
          <div className="flex flex-row justify-between mb-6" key={user.id}>
            <div className="text-black w-2/12">{user.name}</div>
            <div className="text-black w-2/12">{user.name}</div>
            <div className="text-black w-2/12">{user.email}</div>
            <div className="w-2/12">
              <img
                className="text-black"
                src={user.profilePic}
                alt="profile pic"
              />
            </div>
            <div className="w-2/12 flex flex-row">
              {user.photos.map((photo, index) => (
                <img
                  className="text-black"
                  key={index}
                  src={photo.url}
                  //alt="photo"
                />
              ))}
            </div>
            <div className="text-black opacity-50 underline w-2/12">
              {user.actions}
            </div>
          </div>
        ))}
      </div> */}
      <div className="h-[190px] p-12 bg-white rounded-3xl border border-black/25 justify-start items-start gap-16 inline-flex my-6">
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            First Name
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            {adminProfile?.firstname}
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Last Name
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            {adminProfile?.lastname}
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Email
          </div>
          <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            {adminProfile?.email}
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Password
          </div>
          <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            •••••••••••••••••
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Actions
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]">
              Edit
            </div>
            <div className="text-[#979797] text-base font-bold font-['DM Sans'] underline leading-[30px]">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Profile;
