"use client";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import { Data } from "@/utils/data";

import LineChart from "@/components/Chart";
import { totalUsers } from "@/networking/totalUsers";
import { useBoundStore } from "@/store/store";

Chart.register(CategoryScale);

const page = () => {
  const allTotalUsers = useBoundStore((state) => state.totalUsers);
  const setTotalUsers = useBoundStore((state) => state.setTotalUsers);

  const fetchChartData = async () => {
    const result = await totalUsers();

    console.log(result);
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",

          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <p className="text-black">Using Chart.js in React</p>
      <LineChart chartData={chartData} />
    </div>
  );
};

export default page;
