"use client";

import { deactivateUser } from "@/networking/deactivateUser";
import { getDeactivatedUsers } from "@/networking/getDeactivatedUsers";
import { useBoundStore } from "@/store/store";
import Link from "next/link";
import React, { useEffect } from "react";
import { toast } from "react-toastify";


const Deactivated_Users = () => {
  const deactivtedUsers = useBoundStore((state) => state.deactivatedUsers);
  const setDeactivatedUsers = useBoundStore(
    (state) => state.setDeactivatedUsers
  );

  const handleGetDeativatedUsers = async () => {
    const result = await getDeactivatedUsers();
    setDeactivatedUsers(result.data);
    console.log(result);
  };


    const setDisplayDeleteModal = useBoundStore(
      (state) => state.setDisplayDeleteModal
    );
  
    const setDeleteUserId = useBoundStore((state) => state.setDeleteUserId);

  useEffect(() => {
    handleGetDeativatedUsers();
  }, []);

  const handleDeactivateUser = async (id: number, type: boolean) => {
    const result = await deactivateUser(id, type);
    if (result.status == 200) {
      console.log(result);

      handleGetDeativatedUsers(); // Reload data after deactivation
    } else {
      toast(result.message, {
        autoClose: 5000,
      });
    }
  };

    const openModal = (userId:string) => {
    setDeleteUserId(userId);
    setDisplayDeleteModal(true);
  };

  return (
    <div className="py-6 pr-6">
      <div className="w-[1179px] h-[685px] p-12 bg-white rounded-3xl border border-black/25 justify-start items-start gap-16 inline-flex overflow-y-auto">
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            First Name
          </div>

          {deactivtedUsers.map((user) => (
            <Link
              href={`/dashboard/users/${user.id}`}
              key={user.id}
              className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]"
            >
              {user.firstName}
            </Link>
          ))}
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Last Name
          </div>
          {deactivtedUsers.map((user) => (
            <Link
              href={`/dashboard/users/${user.id}`}
              key={user.id}
              className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]"
            >
              {user.lastName}
            </Link>
          ))}
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Email
          </div>
          {deactivtedUsers.map((user) => (
            <Link
              href={`/dashboard/users/${user.id}`}
              key={user.id}
              className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]"
            >
              {user.email}
            </Link>
          ))}
        </div>
        <div className="flex-col justify-start items-start gap-[33px] inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Profile picture
          </div>
          <div className="flex-col justify-start items-start gap-[25px] flex">
            {deactivtedUsers.map((user) => (
              <img
                key={user.id}
                className="w-6 h-6 rounded-full"
                src={user.userPhoto ? user.userPhoto[0]?.imageUrl : ""}
              />
            ))}
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[33px] inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Photos
          </div>
          <div className="flex-col justify-start items-start gap-[25px] flex">
            {deactivtedUsers.map((user) => (
              <div key={user.id} className="flex items-center gap-2">
                {user.userPhoto &&
                  user.userPhoto.map((photo, index) => (
                    <div
                      key={user.id}
                      className="flex-col justify-start items-start gap-[25px] flex"
                    >
                      <div className="justify-start items-start gap-2 inline-flex">
                        <img
                          key={index}
                          className="w-6 h-6 rounded-full"
                          src={photo.imageUrl}
                          alt={`Photo ${index}`}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Actions
          </div>

          {deactivtedUsers.map((user) => (
            <div key={user.id} className="flex items-center gap-6">
         
              <button
                onClick={async () => {
                  await handleDeactivateUser(
                    user.id,
                    user.isUserDeactivated ? false : true
                  );
                }}
                className="text-[#979797] text-base font-normal font-['DM Sans'] underline leading-[30px]"
              >
                {user.isUserDeactivated ? "Reactivate" : "Deactivate"}
              </button>

                  <button
                onClick={async () => {
                  openModal(user.id.toString());
                }}
                className="text-black text-base font-normal font-['DM Sans'] underline leading-[30px]"
              >
               Delete
              </button>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deactivated_Users;
