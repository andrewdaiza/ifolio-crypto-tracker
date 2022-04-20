import React from "react";

import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const datainfo = [
  "59791",
  "60118",
  "62159",
  "63410",
  "62879",
  "61716",
  "61301",
  "56067",
  "56352",
  "55494",
  "55393",
  "53799",
  "49888",
  "50207",
  "49811",
  "53120",
  "54698",
  "54873",
  "53955",
  "55355",
  "57859",
  "56976",
  "58017",
  "55421",
  "55952",
  "57084",
  "56950",
  "58637",
  "58055",
];
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};
export const data = {
  labels: [
    "3/10",
    "3/11",
    "3/12",
    "3/13",
    "3/14",
    "3/15",
    "3/16",
    "3/17",
    "3/18",
    "3/19",
    "3/20",
    "3/21",
    "3/22",
    "3/23",
    "3/24",
    "3/25",
  ],
  datasets: [
    {
      label: "Set 1",
      data: datainfo,
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
