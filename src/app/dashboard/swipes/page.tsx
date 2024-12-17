"use client";
import React from "react";

const Swipes = () => {
  const [swipeCategories, setSwipeCategories] = React.useState<
    "likes" | "dislikes"
  >("likes");
  return (
    <div className="pt-6">
      <div className="gap-5 flex w-full justify-end">
        <button
          //   onClick={() => setUsersCategories("totalUsers")}
          className={`${
            swipeCategories == "likes"
              ? "bg-folly text-white"
              : "text-grey border border-grey"
          } rounded-3xl w-[8.625rem] h-[1.9375rem]`}
        >
          Likes
        </button>
        <button
          // onClick={() => setUsersCategories("activeUsers")}
          className={`${
            swipeCategories == "dislikes"
              ? "bg-folly text-white"
              : "text-grey border border-grey "
          } w-[5.4375rem] h-[1.9375rem] rounded-3xl `}
        >
          Active
        </button>
      </div>

      <div className="w-[1179px] h-[685px] p-12 bg-white rounded-3xl border border-black/25 justify-start items-start gap-28 inline-flex my-6">
        <div className="w-full h-full overflow-y-auto flex justify-start items-start gap-28">
          <div className="flex-col justify-start items-start gap-[38px] inline-flex">
            <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Name
            </div>
            <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Henry Richard
            </div>
            <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Henry Richard
            </div>
            <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Henry Richard
            </div>
            <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Henry Richard
            </div>
            <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Henry Richard
            </div>
            <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Henry Richard
            </div>
            <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Henry Richard
            </div>
            <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Henry Richard
            </div>
            <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Henry Richard
            </div>
            <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Henry Richard
            </div>
            <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Henry Richard
            </div>
            <div className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Henry Richard
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[38px] inline-flex">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Type
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Like
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Dislike
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Dislike
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Dislike
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Chat
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Like
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Like
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Like
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Dislike
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Like
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Like
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Like
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[38px] inline-flex">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Date
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              20-Aug-24
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              20-Aug-24
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              20-Aug-24
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              20-Aug-24
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              20-Aug-24
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              20-Aug-24
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              20-Aug-24
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              20-Aug-24
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              20-Aug-24
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              20-Aug-24
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              20-Aug-24
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              20-Aug-24
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[38px] inline-flex">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Profile swiped
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Temilade Mariam
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Temilade Mariam
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Temilade Mariam
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Temilade Mariam
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Temilade Mariam
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Temilade Mariam
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Temilade Mariam
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Temilade Mariam
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Temilade Mariam
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Temilade Mariam
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Temilade Mariam
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              Temilade Mariam
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[38px] inline-flex">
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swipes;
