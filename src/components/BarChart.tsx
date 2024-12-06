// components/LineChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
function BarChart({ chartData }: any) {
  return (
    <div className="chart-container w-full">
      <h2 className="text-black" style={{ textAlign: "center" }}>
        Line Chart
      </h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              //   text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default BarChart;
