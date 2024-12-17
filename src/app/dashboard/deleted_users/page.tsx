"use client";
import { getDeletedUsers } from "@/networking/getDeletedUsers";
import React, { useEffect } from "react";

const page = () => {
  const handleGetDeletedUsers = async () => {
    getDeletedUsers();
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
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Henry
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Henry
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Henry
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Henry
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Henry
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Henry
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Henry
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Henry
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Henry
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Henry
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Henry
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Last Name
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Richard
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Richard
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Richard
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Richard
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Richard
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Richard
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Richard
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Richard
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Richard
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Richard
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
            Richard
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Email
          </div>
          <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            henrich@gmail.com
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            henrich@gmail.com
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            henrich@gmail.com
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            henrich@gmail.com
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            henrich@gmail.com
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            henrich@gmail.com
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            henrich@gmail.com
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            henrich@gmail.com
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            henrich@gmail.com
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            henrich@gmail.com
          </div>
          <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            henrich@gmail.com
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[33px] inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Profile picture
          </div>
          <div className="flex-col justify-start items-start gap-[25px] flex">
            <img
              className="w-6 h-6 rounded-full"
              src="https://via.placeholder.com/24x24"
            />
            <img
              className="w-6 h-6 rounded-full"
              src="https://via.placeholder.com/24x24"
            />
            <img
              className="w-6 h-6 rounded-full"
              src="https://via.placeholder.com/24x24"
            />
            <img
              className="w-6 h-6 rounded-full"
              src="https://via.placeholder.com/24x24"
            />
            <img
              className="w-6 h-6 rounded-full"
              src="https://via.placeholder.com/24x24"
            />
            <img
              className="w-6 h-6 rounded-full"
              src="https://via.placeholder.com/24x24"
            />
            <img
              className="w-6 h-6 rounded-full"
              src="https://via.placeholder.com/24x24"
            />
            <img
              className="w-6 h-6 rounded-full"
              src="https://via.placeholder.com/24x24"
            />
            <img
              className="w-6 h-6 rounded-full"
              src="https://via.placeholder.com/24x24"
            />
            <img
              className="w-6 h-6 rounded-full"
              src="https://via.placeholder.com/24x24"
            />
            <img
              className="w-6 h-6 rounded-full"
              src="https://via.placeholder.com/24x24"
            />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[33px] inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Photos
          </div>
          <div className="flex-col justify-start items-start gap-[25px] flex">
            <div className="flex-col justify-start items-start gap-[25px] flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[25px] flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[25px] flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[25px] flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[25px] flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[25px] flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[25px] flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[25px] flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[25px] flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[25px] flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[25px] flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/24x24"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Actions
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]">
              Delete
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]">
              Delete
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]">
              Delete
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]">
              Delete
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]">
              Delete
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]">
              Delete
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]">
              Delete
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]">
              Delete
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]">
              Delete
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]">
              Delete
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
