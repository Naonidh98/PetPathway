import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const DashboardChart = ({ details, currentChart }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const randomColor = (num) => {
    const colors = [];
    for (let i = 0; i < num; i++) {
      colors.push(
        `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)})`
      );
    }
    return colors;
  };

  const StoreData = {
    labels: details?.map((data) => data?.title),
    datasets: [
      {
        label: "Items",
        data: details?.map((data) => data?.items.length),
        backgroundColor: randomColor(details?.length),
        borderColor: randomColor(details?.length),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="mt-8 ">
        <Pie
          data={StoreData}
          options={{
            plugins: {
              legend: {
                position: "right",
                labels: {
                  boxWidth: 10,
                  boxHeight: 10,
                  padding: 20,
                  font: {
                    size: 12,
                  },
                },
              },
            },
            aspectRatio: 2,
          }}
        />
      </div>
    </div>
  );
};

export default DashboardChart;
