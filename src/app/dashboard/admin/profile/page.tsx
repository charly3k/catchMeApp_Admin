"use client";

import { getAdminProfile } from "@/networking/getAdminProfile";
import { getSuperAdminProfile } from "@/networking/getSuperAdminProfile";
import { useBoundStore } from "@/store/store";
import { AdminProfileType } from "@/types/types";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";


const cookies = new Cookies();

const Admin_Profile = () => {




  const adminId = cookies.get("adminID");
  const adminRole = cookies.get("adminRole");
  const [adminProfile, setAdminProfile] = useState<AdminProfileType>();
  const handleGetAdminProfile = async () => {
    const result =
      adminRole == "SUPER_ADMIN"
        ? await getSuperAdminProfile(adminId)
        : await getAdminProfile(adminId);

    if (result) {
      setAdminProfile(result.data);
    }
  };


  useEffect(() => {
    handleGetAdminProfile();
  }, [adminId]);

  console.log({adminRole})

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
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin_Profile;
