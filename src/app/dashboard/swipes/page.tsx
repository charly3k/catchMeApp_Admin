"use client";
import BarChart from "@/components/BarChart";
import { getTotalDislikesOneYear } from "@/networking/swipes/totalDislikesOneYear";
import { getTotalDislikesSixMonths } from "@/networking/swipes/totalDislikesSixMonths";
import { getTotalDislikesThreeMonths } from "@/networking/swipes/totalDislikesThreeMonths";
import { getTotalLikesOneYear } from "@/networking/swipes/totalLikesOneYear";
import { getTotalLikesSixMonths } from "@/networking/swipes/totalLikesSixMonths";
import { getTotalLikesThreeMonths } from "@/networking/swipes/totalLikesThreeMonths";
import React, { Suspense, useEffect, useState } from "react";

const Swipes = () => {
  const [swipeCategories, setSwipeCategories] = React.useState<
    "likes" | "dislikes"
  >("likes");

  const [swipesTimeline, setSwipesTimeline] = useState<"3M" | "6M" | "1YR">(
    "1YR"
  );

  /*     const [swipesDetails, setSwipesDetails] = useState<{month:string,usersStats:string}[]>([]); */

  const fetchChartData = async () => {
    const result =
      swipeCategories == "likes" && swipesTimeline == "1YR"
        ? await getTotalLikesOneYear()
        : swipeCategories == "likes" && swipesTimeline == "6M"
        ? await getTotalLikesSixMonths()
        : swipeCategories == "likes" && swipesTimeline == "3M"
        ? await getTotalLikesThreeMonths()
        : swipeCategories == "dislikes" && swipesTimeline == "1YR"
        ? await getTotalDislikesOneYear()
        : swipeCategories == "dislikes" && swipesTimeline == "6M"
        ? await getTotalDislikesSixMonths()
        : await getTotalDislikesThreeMonths();

    const userDetails =
      swipesTimeline == "1YR"
        ? result.data.lastYearDetails
        : swipesTimeline == "6M"
        ? result.data.last6MonthsDetails
        : result.data.last3MonthsDetails;

    // return userDetails

    // remove the comment statement below

    return {
      labels:
        userDetails &&
        userDetails.map(
          (item: { month: string; usersStats: number }) =>
            item.month.split(" ")[0]
        ),
      datasets: [
        {
          label: "Users Gained",
          data:
            userDetails &&
            userDetails.map(
              (item: { month: string; usersStats: number }) => item.usersStats
            ),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };
  };
  const [swipesDetails, setSwipesDetails] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string;
      borderWidth: number;
    }[];
  }>({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: [],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const refreshChartData = async () => {
    try {
      const data = await fetchChartData();
      console.log({ data });

      setSwipesDetails(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    refreshChartData();
  }, [swipeCategories, swipesTimeline]);

  return (
    <div className="pt-6 px-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <button
            onClick={() => setSwipesTimeline("3M")}
            className={`w-14 h-6 rounded-xl ${
              swipesTimeline == "3M"
                ? "border border-folly text-folly "
                : " text-grey"
            }`}
          >
            3M
          </button>
          <button
            onClick={() => setSwipesTimeline("6M")}
            className={`w-14 h-6 rounded-xl ${
              swipesTimeline == "6M"
                ? "border border-folly text-folly "
                : " text-grey"
            }`}
          >
            6M
          </button>
          <button
            onClick={() => setSwipesTimeline("1YR")}
            className={`w-14 h-6 rounded-xl ${
              swipesTimeline == "1YR"
                ? "border border-folly text-folly "
                : " text-grey"
            }`}
          >
            1YR
          </button>
        </div>

        <div className="gap-5 flex w-full justify-end">
          <button
            onClick={() => setSwipeCategories("likes")}
            className={`${
              swipeCategories == "likes"
                ? "bg-folly text-white"
                : "text-grey border border-grey"
            } rounded-3xl w-[8.625rem] h-[1.9375rem]`}
          >
            Likes
          </button>
          <button
            onClick={() => setSwipeCategories("dislikes")}
            className={`${
              swipeCategories == "dislikes"
                ? "bg-folly text-white"
                : "text-grey border border-grey "
            } w-[5.4375rem] h-[1.9375rem] rounded-3xl `}
          >
            Dislikes
          </button>
        </div>
      </div>

      {/*  <div className="w-11/12 h-[685px] p-12 bg-white rounded-3xl border border-black/25 justify-start items-start gap-28 inline-flex my-6">
        <div className="w-full h-full overflow-y-auto flex justify-start items-start gap-28">
          <div className="flex-col justify-start items-start gap-[38px] inline-flex">
            <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Date
            </div>
        
           
              {
                swipesDetails.map((item,index) => (
                  <div key={index} className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
                    {item.month}
                  </div>
                  
                ))

              }
       
        
          </div>
          <div className="flex-col justify-start items-start gap-[38px] inline-flex">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              No of swipes
            </div>
           

            {
              swipesDetails.map((item,index) => (
                <div key={index} className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
                  {item.usersStats}
                </div>
              ))
            }
            
          </div>

          
          <div className="flex-col justify-start items-start gap-[38px] inline-flex">
            <div />
          </div>
        </div>
      </div> */}

      <Suspense fallback={<div>Loading...</div>}>
        <BarChart chartData={swipesDetails} />
      </Suspense>
    </div>
  );
};

export default Swipes;
