import { useState } from "react";
import { Doughnut } from "react-chartjs-2";

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { useEffect } from "react";
import { Token, Transaction } from "../../Models/Model";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

interface Props {
  eachTokenPortfolio: Transaction[];
}

const PieChart = ({ eachTokenPortfolio }: Props) => {
  const [tokenCost, setTokenCost] = useState<number[]>([0]);
  const [tokenName, setTokenName] = useState<string[]>([""]);

  const mapTokenCost = () => {
    if (eachTokenPortfolio.length < 1) {
      setTokenCost([0]);
    } else
      setTokenCost(eachTokenPortfolio.map((token: Transaction) => token.cost));
  };
  const mapTokenName = () => {
    if (eachTokenPortfolio.length < 1) {
      setTokenName(["No transactions entered"]);
    } else
      setTokenName(eachTokenPortfolio.map((token: Transaction) => token.name));
  };

  useEffect(() => {
    mapTokenCost();
    mapTokenName();
  }, [eachTokenPortfolio]);

  const data = {
    labels: tokenName,
    datasets: [
      {
        label: "My First Dataset",
        data: tokenCost,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(100, 205, 86)",
          "rgb(50, 100, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <Doughnut data={data} />
    </>
  );
};

export default PieChart;
