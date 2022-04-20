import React, { useState } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect } from "react";
import { HistoryData, Token } from "../../Models/Model";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  selectedHistoryData: HistoryData[];
}

const LineChart = ({ selectedHistoryData }: Props) => {
  const [priceData, setPriceData] = useState<number[]>([]);
  const [timeData, setTimeData] = useState<string[]>([]);
  const mapPriceHistoryData = () => {
    setPriceData(selectedHistoryData.map((item) => item.price));
  };
  const mapTimeHistoryData = () => {
    setTimeData(selectedHistoryData.map((item) => item.hour));
  };

  useEffect(() => {
    mapTimeHistoryData();
    mapPriceHistoryData();
  }, [selectedHistoryData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Bitcoin",
      },
    },
  };
  const data = {
    labels: timeData,
    datasets: [
      {
        label: "Set 1",
        data: priceData,
        fill: false,
        borderColor: "rgb(74, 222, 128)",
        backgroundColor: "rgba(74, 222, 128)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
