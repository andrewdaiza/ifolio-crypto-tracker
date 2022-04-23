import React from "react";
import { Token } from "../../Models/Model";

interface Props {
  selectedCoin: Token;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  disabled: boolean;
}

const InputBase = ({ selectedCoin, ...props }: Props) => (
  <>
    <input type='number' {...props} />
    <span className='buy-currency-type self-center p-2.5 text-gray-400'>
      {selectedCoin ? selectedCoin.symbol : "USD"}
    </span>
  </>
);

export default InputBase;
