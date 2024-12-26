"use client";
import { getAllAdmins } from "@/networking/getAllAdmins";
import { AdminProfileType } from "@/types/types";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBoundStore } from "@/store/store";

const Page = () => {
  const [allAdmins, setAllAdmins] = useState<AdminProfileType[]>();

  const handleGetAllAdmins = async () => {
    const result = await getAllAdmins();

    console.log(result);

    setAllAdmins(result.data);
  };


const setDisplayDeleteModal = useBoundStore((state) => state.setIsDeleteAdminModalVisible);

  const setDeleteUserId = useBoundStore((state) => state.setDeleteAdminId);

    const openModal = (userId:string) => {
    setDeleteUserId(userId);
    setDisplayDeleteModal(true);
  };

  useEffect(() => {
    handleGetAllAdmins();
  }, []);

  const router = useRouter();
  return (
    <div className="h-[352px] p-12 bg-white rounded-3xl border border-black/25 justify-start items-start gap-16 inline-flex overflow-y-auto mt-6">
      <div className="flex-col justify-start items-start gap-[38px] inline-flex">
        <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
          First Name
        </div>

        {allAdmins?.map((item) => {
          return (
            <div
              key={item.id}
              className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]"
            >
              {item.firstname}
            </div>
          );
        })}
      </div>
      <div className="flex-col justify-start items-start gap-[38px] inline-flex">
        <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
          Last Name
        </div>

        {allAdmins?.map((item) => {
          return (
            <div
              key={item.id}
              className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]"
            >
              {item.lastname}
            </div>
          );
        })}
      </div>
      <div className="flex-col justify-start items-start gap-[38px] inline-flex">
        <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
          Email
        </div>

        {allAdmins?.map((item) => {
          return (
            <div
              key={item.id}
              className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]"
            >
              {item.email}
            </div>
          );
        })}
      </div>
      <div className="flex-col justify-start items-start gap-[38px] inline-flex">
        <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
          Password
        </div>

        {allAdmins?.map((item) => {
          return (
            <div key={item.id} className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              •••••••••••••••••
            </div>
          );
        })}
      </div>
      <div className="flex-col justify-start items-start gap-[38px] inline-flex">
        <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
          Actions
        </div>

        {allAdmins?.map((item) => {
          return (
            <div key={item.id} className="justify-start items-start gap-6 inline-flex">
              <button onClick={()=>router.push(`/dashboard/admin/edit/${item.id}`)} className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]">
                Edit
              </button>
              <button onClick={()=>openModal(item.id)} className="text-[#979797] text-base font-bold font-['DM Sans'] underline leading-[30px]">
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
