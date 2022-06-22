import React from "react";
import { Token } from "../../Models/Model";

interface Props {
  selectedCoin: Token;
  className: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  disabled: boolean;
  name: string;
}

const InputBase = ({ selectedCoin, name, ...props }: Props) => {
  console.log(selectedCoin);
  return (
    <>
      <input type='number' {...props} />
      <span className='buy-currency-type self-center p-2.5 text-gray-400'>
        {name}
      </span>
    </>
  );
};

export default InputBase;
