"use client";
import { usePathname } from "next/navigation";
import React from "react";

const UserDetails = () => {
  return (
    <div className="w-[1179px]  p-12 bg-white rounded-3xl border border-black/25 flex-col justify-start items-start gap-12 inline-flex">
      <div className="justify-start items-start gap-[40.50px] inline-flex w-full">
        <div className="w-[119px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            First Name
          </div>
          <div className="text-black text-base font-normal font-['DM Sans']">
            Henry
          </div>
        </div>
        <div className="w-[119px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Last Name
          </div>
          <div className="text-black text-base font-normal font-['DM Sans']">
            Richard
          </div>
        </div>
        <div className="w-[147px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Email
          </div>
          <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            henrich@gmail.com
          </div>
        </div>
        <div className="w-[147px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            School email
          </div>
          <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
            fred@oxford.co.uk
          </div>
        </div>
      </div>
      <div className="justify-start items-start gap-[41px] inline-flex">
        <div className="w-[119px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Creation date
          </div>
          <div className="text-black text-base font-normal font-['DM Sans']">
            20-Oct-24
          </div>
        </div>
        <div className="w-[186px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Course of study
          </div>
          <div className="text-black text-base font-normal font-['DM Sans']">
            Medical Biochemistry
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            School
          </div>
          <div className="text-black text-base font-normal font-['DM Sans']">
            Oxford University
          </div>
        </div>
        <div className=" flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Age (Date of birth)
          </div>
          <div className="text-black text-base font-normal font-['DM Sans']">
            23 (10-June-2001)
          </div>
        </div>
      </div>
      <div className="justify-start items-start gap-[44.20px] inline-flex">
        <div className="w-[275px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Bio
          </div>
          <div className="self-stretch text-black/75 text-base font-normal font-['DM Sans']">
            I’m a chef and a professioinal cook. I’m here to meet someone
            serious for a passionate and lasting romantic relationship
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            My perfect first date idea
          </div>
          <div className="w-[275px] text-black/75 text-base font-normal font-['DM Sans']">
            A walk in the park, holding hands and talking about our favorite
            things
          </div>
        </div>
        <div className="w-[198px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Fun fact about me...
          </div>
          <div className="w-[275px] text-black/75 text-base font-normal font-['DM Sans']">
            I’ve read all the books of the Bible
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[319px]  h-[115px] flex-col justify-start items-start gap-6 ">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Interests
          </div>
          <div className="self-stretch h-20 justify-start items-start gap-2 flex flex-wrap">
            <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
              <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                Anime
              </div>
            </div>
            <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
              <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                Astronomy
              </div>
            </div>
            <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
              <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                History
              </div>
            </div>
            <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
              <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                Naruto
              </div>
            </div>
            <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
              <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                Movies
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col justify-start items-start gap-6 ">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Basics
          </div>
          <div className="self-stretch h-20 justify-start items-start gap-2 flex flex-wrap">
            <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
              <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                Anime
              </div>
            </div>
            <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
              <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                Astronomy
              </div>
            </div>
            <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
              <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                History
              </div>
            </div>
            <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
              <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                Naruto
              </div>
            </div>
            <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
              <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                Movies
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
