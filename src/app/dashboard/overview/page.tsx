"use client";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { lazy, useEffect, useState, Suspense } from "react";

/* import LineChart from "@/components/Chart"; */
import {
  totalUsers,
  totalUsersSixMonths,
  totalUsersThreeMonths,
} from "@/networking/totalUsers";

import {
  activeUsersOneYear,
  activeUsersSixMonths,
  activeUsersThreeMonths,
} from "@/networking/activeUsers";
const BarChart = lazy(() => import("@/components/BarChart"));

Chart.register(CategoryScale);

const Page = () => {
  const [usersCategories, setUsersCategories] = useState<
    "totalUsers" | "activeUsers"
  >("totalUsers");

  const [usersTimeline, setUsersTimeline] = useState<"3M" | "6M" | "1YR">(
    "1YR"
  );

  const fetchChartData = async () => {
    const result =
      usersCategories == "totalUsers" && usersTimeline == "1YR"
        ? await totalUsers()
        : usersCategories == "totalUsers" && usersTimeline == "6M"
        ? await totalUsersSixMonths()
        : usersCategories == "totalUsers" && usersTimeline == "3M"
        ? await totalUsersThreeMonths()
        : usersCategories == "activeUsers" && usersTimeline == "1YR"
        ? await activeUsersOneYear()
        : usersCategories == "activeUsers" && usersTimeline == "6M"
        ? await activeUsersSixMonths()
        : await activeUsersThreeMonths();

    let userDetails =
      usersTimeline == "1YR"
        ? result.data.lastYearDetails
        : usersTimeline == "6M"
        ? result.data.last6MonthsDetails
        : result.data.last3MonthsDetails;

    if (userDetails) {
      // to arrange the chart
      const monthOrder = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      userDetails = userDetails.sort(
        (a: { month: string }, b: { month: string }) => {
          const monthA = a.month.split(" ")[0]; // Extract the month name (e.g., "March")
          const monthB = b.month.split(" ")[0]; // Extract the month name (e.g., "February")
          return monthOrder.indexOf(monthA) - monthOrder.indexOf(monthB); // Compare based on predefined order
        }
      );
    }
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

  const [chartData, setChartData] = useState<{
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
      setChartData(data);
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };

  useEffect(() => {
    refreshChartData();
  }, [usersCategories, usersTimeline]);

  return (
    <div className="pr-6">
      <div className="bg-white mt-10 rounded-3xl p-6">
        <div className="flex text-black justify-between items-center">
          <div className="flex items-center gap-10 ">
            <h1 className="text-black text-2xl">Number of users</h1>

            <div className="flex gap-5">
              <button
                onClick={() => setUsersTimeline("3M")}
                className={`w-14 h-6 rounded-xl ${
                  usersTimeline == "3M"
                    ? "border border-folly text-folly "
                    : " text-grey"
                }`}
              >
                3M
              </button>
              <button
                onClick={() => setUsersTimeline("6M")}
                className={`w-14 h-6 rounded-xl ${
                  usersTimeline == "6M"
                    ? "border border-folly text-folly "
                    : " text-grey"
                }`}
              >
                6M
              </button>
              <button
                onClick={() => setUsersTimeline("1YR")}
                className={`w-14 h-6 rounded-xl ${
                  usersTimeline == "1YR"
                    ? "border border-folly text-folly "
                    : " text-grey"
                }`}
              >
                1YR
              </button>
            </div>
          </div>

          <div className="gap-5 flex">
            <button
              onClick={() => setUsersCategories("totalUsers")}
              className={`${
                usersCategories == "totalUsers"
                  ? "bg-folly text-white"
                  : "text-grey border border-grey"
              } rounded-3xl w-[8.625rem] h-[1.9375rem]`}
            >
              Total number
            </button>
            <button
              onClick={() => setUsersCategories("activeUsers")}
              className={`${
                usersCategories == "activeUsers"
                  ? "bg-folly text-white"
                  : "text-grey border border-grey "
              } w-[5.4375rem] h-[1.9375rem] rounded-3xl `}
            >
              Active
            </button>
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <BarChart chartData={chartData} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
