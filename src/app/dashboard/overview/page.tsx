"use client";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect } from "react";

/* import LineChart from "@/components/Chart"; */
import { totalUsers } from "@/networking/totalUsers";

Chart.register(CategoryScale);

const Page = () => {
  const fetchChartData = async () => {
    const result = await totalUsers();

    console.log(result);
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  /*   const [chartData] = useState({
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
  }); */

  return (
    <div className="App">
      <p className="text-black">Using Chart.js in React</p>
      {/* <LineChart chartData={chartData} /> */}
    </div>
  );
};

export default Page;
