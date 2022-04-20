import { useState } from "react";
import TokenMarketChart from "./TokenMarketChart";
import TableList from "../../Components/Table/TableList";
import { Token, HistoryData } from "../../Models/Model";

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
  return (
    <>
      <div className='grid md:grid-cols-1 max-w-screen-2xl mx-auto'>
        <TokenMarketChart
          selectedHistoryData={selectedHistoryData}
          selectedToken={selectedToken}
        />
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
