import React from "react";
import PieChart from "../../Components/Chart/PieChart";
import Card from "../../Components/UI/Card";
import { Transaction } from "../../Models/Model";

interface Props {
  totalPortfolio: number;
  eachTokenPortfolio: Transaction[];
}

const Portfolio = ({ totalPortfolio, eachTokenPortfolio }: Props) => {
  return (
    <>
      <div className='font-semibold text-lg text-blueGray-700 text-center'>
        Portfolio Total
      </div>
      <div className='font-bold text-3xl text-blueGray-700 text-center mb-1'>
        ${totalPortfolio}
      </div>
      <PieChart eachTokenPortfolio={eachTokenPortfolio} />
    </>
  );
};

export default Portfolio;
