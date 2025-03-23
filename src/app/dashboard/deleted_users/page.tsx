"use client";
import { deleteUser } from "@/networking/deleteUser";
import { getDeletedUsers } from "@/networking/getDeletedUsers";
import { UserProfile } from "@/types/types";
import React, { useEffect, useState } from "react";

import Link from "next/link";

const Page = () => {
  const [deletedUsers, setDeletedUsers] = useState<UserProfile[]>();
  const handleGetDeletedUsers = async () => {
    const result = await getDeletedUsers();
    if (result) {
      if (result.status) {
        setDeletedUsers(result.data);
      }
    }
  };

  const handleDeleteUser = async (id: string) => {
    const result = await deleteUser(id);

    if (result.status) {
      handleGetDeletedUsers();
    }
  };

  useEffect(() => {
    handleGetDeletedUsers();
  }, []);
  return (
    <div className="py-6">
      <div className="w-[1179px] h-[685px] p-12 bg-white rounded-3xl border border-black/25 justify-start items-start gap-16 inline-flex  overflow-y-auto">
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            First Name
          </div>

          {deletedUsers &&
            deletedUsers.map((item) => {
              return (
                <Link
                  href={`/dashboard/users/${item.id}`}
                  key={item.id}
                  className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]"
                >
                  {item.firstName ? item.firstName : "firstname"}
                </Link>
              );
            })}
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Last Name
          </div>

          {deletedUsers &&
            deletedUsers.map((item) => {
              return (
                <Link
                  href={`/dashboard/users/${item.id}`}
                  key={item.id}
                  className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]"
                >
                  {item.lastName ? item.lastName : "lastname"}
                </Link>
              );
            })}
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Email
          </div>
          {deletedUsers &&
            deletedUsers.map((item) => {
              return (
                <Link
                  href={`/dashboard/users/${item.id}`}
                  key={item.id}
                  className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]"
                >
                  {item.email}
                </Link>
              );
            })}
        </div>
        <div className="flex-col justify-start items-start gap-[33px] inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Profile picture
          </div>
          <div className="flex-col justify-start items-start gap-[25px] flex">
            {deletedUsers &&
              deletedUsers.map((item) => {
                return (
                  <img
                    key={item.id}
                    className="w-6 h-6 rounded-full"
                    src={item?.userPhoto ? item?.userPhoto[0]?.imageUrl : ""}
                    alt="image"
                  />
                );
              })}
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[33px] inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Photos
          </div>
          <div className="flex-col justify-start items-start gap-[25px] flex">
            {deletedUsers &&
              deletedUsers.map((user) => (
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
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Actions
          </div>

          {deletedUsers &&
            deletedUsers.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => handleDeleteUser(item.id.toString())}
                  className="justify-start items-start gap-6 inline-flex text-black text-base font-bold font-['DM Sans'] underline leading-[30px]"
                >
                  Delete
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Page;
