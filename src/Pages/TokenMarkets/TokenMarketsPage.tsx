import { useState } from "react";
import TableList from "../../Components/Table/TableList";
import { Token, HistoryData } from "../../Models/Model";
import Card from "../../Components/UI/Card";
import LineChart from "../../Components/Chart/LineChart";

interface Props {
  tokenData: Token[];
  selectedToken: Token;
  onSelectToken: (token: Token) => void;
  selectedHistoryData: HistoryData[];
  onPageClick: (number: number) => void;
}

const TokenMarketsPage = ({
  tokenData,
  selectedToken,
  onSelectToken,
  selectedHistoryData,
  onPageClick,
}: Props) => {
  const tokenColumns = ["Rank", "Name", "Price", "24h %", "Market Cap"];
  const pages = [1, 2, 3, 4, 5, 6, 7, 8];
  const { name, price, percent, symbol } = selectedToken;
  return (
    <>
      <div className='grid md:grid-cols-1 max-w-screen-2xl mx-auto'>
        <Card>
          <div className='w-full pr-4 flex'>
            <span className='text-white text-center inline-flex items-center justify-center w-8 h-8 shadow-lg rounded-full'>
              {symbol && (
                <img
                  src={`https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                  alt='coin-icon'
                />
              )}
            </span>
            <span className='font-semibold text-md text-blueGray-700 pl-2'>
              {name} Hourly Chart (24HR)
            </span>
            <span className='ml-auto font-semibold text-md text-blueGray-700'>
              Current Price: ${price}
            </span>
          </div>
          <div className='mt-2'>
            <LineChart selectedHistoryData={selectedHistoryData} />
          </div>
        </Card>
      </div>
      <div className='md:col-span-2 max-w-screen-2xl mx-auto'>
        <TableList
          tableItems={tokenData}
          selectedToken={selectedToken}
          onSelectToken={onSelectToken}
          tableColumns={tokenColumns}
          title='Cryptocurrencies'
          onPageClick={onPageClick}
          pages={pages}
        />
      </div>
    </>
  );
};

export default TokenMarketsPage;
