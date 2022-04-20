import { time } from "console";
import { useState } from "react";
import { Token, Transaction } from "../../Models/Model";

interface Props {
  token: Token;
  selectedToken: Token;
  onSelectToken: (token: Token) => void;
}

const TableRow = ({ token, onSelectToken, selectedToken }: Props) => {
  const handleSelect = () => {
    onSelectToken(token);
  };
  const {
    name,
    price,
    percent,
    marketcap,
    cost,
    amount,
    time,
    rank,
    txID,
    symbol,
  } = token;
  return (
    <>
      <tr
        onClick={handleSelect}
        className={
          selectedToken
            ? selectedToken.name === name
              ? "cursor-pointer bg-blue-500"
              : "cursor-pointer"
            : ""
        }
      >
        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
          {rank ? rank : txID}
        </td>
        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
          {name}
        </td>
        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
          ${price ? price : cost}
        </td>
        <td
          className={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ${
            percent
              ? percent > 0
                ? "text-green-400 font-bold"
                : "text-red-400 font-bold"
              : ""
          }`}
        >
          {percent != null ? `${percent}%` : `${amount} ${symbol}`}
        </td>
        <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
          {time ? time : `$${marketcap}`}
        </td>
      </tr>
    </>
  );
};

export default TableRow;
