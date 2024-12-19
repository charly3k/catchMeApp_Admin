"use client";
import { ArrowBack } from "@/assets/ArrowBack";
import React from "react";
import { useForm } from "react-hook-form";

import Loader from "@/components/Loader";
import { toast } from "react-toastify";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    (async () => {
      console.log(data);
    })();
  };
  return (
    <div className="py-6 px-6">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="w-12 h-12 p-3 bg-white rounded-3xl border border-black/25 justify-center items-center flex overflow-hidden">
          <ArrowBack />
        </div>
        <button className="px-[52px] py-5 bg-[#ff0a54] rounded-[32px] justify-center items-center gap-2.5 flex text-white text-base font-normal font-['DM Sans']">
          Save
        </button>
      </div>

      <div className="w-[73.6875em] p-12 bg-white rounded-3xl border border-black/25 flex-col justify-start items-start gap-12 inline-flex mt-6 px-6">
        <div className="h-[103px] flex-col justify-start items-start gap-[38px] flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            First Name
          </div>

          <input
            className="rounded-3xl bg-lightWhite py-2.5 px-3.5 mb-10 text-black h-[54px] pl-4 pr-[274px] bg-white rounded-3xl border border-black/25 justify-start items-center inline-flex overflow-hidden"
            // defaultValue="test"
            placeholder="first name"
            {...register("firstname")}
          />
        </div>
        <div className="h-[103px] flex-col justify-start items-start gap-[38px] flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Last Name
          </div>

          <input
            className="rounded-3xl bg-lightWhite py-2.5 px-3.5 mb-10 text-black h-[54px] pl-4 pr-[274px] bg-white rounded-3xl border border-black/25 justify-start items-center inline-flex overflow-hidden"
            // defaultValue="test"
            placeholder="last name"
            {...register("lastname")}
          />
        </div>
        <div className="h-[103px] flex-col justify-start items-start gap-[38px] flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Email
          </div>
          <input
            className="rounded-3xl bg-lightWhite py-2.5 px-3.5 mb-10 text-black h-[54px] pl-4 pr-[274px] bg-white rounded-3xl border border-black/25 justify-start items-center inline-flex overflow-hidden"
            // defaultValue="test"
            placeholder="email"
            {...register("email")}
          />
        </div>
        <div className="h-[103px] flex-col justify-start items-start gap-[38px] flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Password
          </div>
          <input
            className="rounded-3xl bg-lightWhite py-2.5 px-3.5 mb-10 text-black h-[54px] pl-4 pr-[274px] bg-white rounded-3xl border border-black/25 justify-start items-center inline-flex overflow-hidden"
            // defaultValue="test"
            placeholder="password"
            {...register("password")}
          />
        </div>
        <div className="h-[103px] flex-col justify-start items-start gap-[38px] flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Confirm Password
          </div>
          <input
            className="rounded-3xl bg-lightWhite py-2.5 px-3.5 mb-10 text-black h-[54px] pl-4 pr-[274px] bg-white rounded-3xl border border-black/25 justify-start items-center inline-flex overflow-hidden"
            // defaultValue="test"
            placeholder="password"
            {...register("password")}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
