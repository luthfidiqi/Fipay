import React from "react";
import { Line } from "react-chartjs-2";
import chart from "chart.js/auto";

export default function HandleChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "# on Income",
        fill: false,
        backgroundColor: "#1EC15F",
        borderColor: "#1EC15F",
        data: [65, 59, 80, 81, 56, 55, 40],
        // yAxisID: "y-axis-1",
      },
      {
        label: "# of Expense",
        fill: false,
        backgroundColor: "#FF5B37",
        borderColor: "#FF5B37",
        data: [40, 59, 80, 81, 56, 55, 40],
        // yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      yAxis: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
          ticks: {
            beginAtZero: true,
          },
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h1>HandleChart</h1>
      <hr />
      <Line data={data} options={options} />
    </div>
  );
}
