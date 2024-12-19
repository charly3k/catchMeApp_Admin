"use client";

import { getAdminProfile } from "@/networking/getAdminProfile";
import { useBoundStore } from "@/store/store";
import Link from "next/link";

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
  const setDisplayModal = useBoundStore((state) => state.setDisplayDeleteModal);
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
    <>
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
            <Link
              href={"/dashboard/admin/edit"}
              className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]"
            >
              Edit
            </Link>
            <button
              onClick={() => setDisplayModal(true)}
              className="text-[#979797] text-base font-bold font-['DM Sans'] underline leading-[30px]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin_Profile;
