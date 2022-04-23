import React, { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import InputBase from "./InputBase";
import { Token, Transaction } from "../../Models/Model";
import { CgArrowsExchange } from "react-icons/cg";

interface Props {
  tokenData: Token[];
  addTransaction: (transaction: Transaction) => void;
}

const TransactionForm: React.FC<Props> = ({
  tokenData,
  addTransaction,
}: Props) => {
  const [amountCrypto, setAmountCrypto] = useState<number>(0);
  const [transactionAmount, setTransactionAmount] = useState<number>(0);
  const [dropdownToken, setDropdownToken] = useState<string>("bitcoin");
  const [selectedTokenObject, setSelectedTokenObject] = useState<Token>({
    name: "",
    price: 0,
    symbol: "",
    percent: 0,
    marketcap: 0,
    rank: 0,
    id: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [errorStyle, setErrorStyle] = useState("");
  const { name, price, symbol } = selectedTokenObject;

  // Calculate exchange value from user USD input and selected crypto value
  const handleExchange = () => {
    let convert = Number((Number(amountCrypto) / price).toFixed(2));
    setTransactionAmount(convert);
  };

  useEffect(() => {
    if (tokenData.length > 0) {
      setSelectedTokenObject(tokenData[0]);
    }
  }, [tokenData]);

  useEffect(() => {
    if (tokenData.length > 0) {
      setSelectedTokenObject(
        tokenData.filter((token) => token.name === dropdownToken && token)[0]
      );
    }
  }, [dropdownToken]);

  // On inputted price or currency change run exchange function
  useEffect(() => {
    handleExchange();
  }, [amountCrypto, price]);

  // On submit add transaction
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amountConvertedNumber = Number(amountCrypto);
    const timeStamp = new Date().toUTCString();
    const id = Number((Date.now() * Math.random()).toFixed(0));
    if (amountConvertedNumber === 0 || amountConvertedNumber <= 0) {
      setErrorMessage("Please Enter Transaction Amount");
      setErrorStyle("border-2 dark:border-red-500");
    } else {
      addTransaction({
        amount: transactionAmount,
        name: name,
        symbol: symbol,
        cost: amountConvertedNumber,
        time: timeStamp,
        txID: id,
      });
      setAmountCrypto(0);
      setErrorMessage("");
      setErrorStyle("");
    }
  };
  return (
    <form
      className='flex justify-center align-center mt-2 w-full'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col'>
        <div className='text-lg font-semibold px-4'>Add Transaction</div>
        <div className='xl:flex'>
          <div className='flex flex-col xl:px-4 px-2 mt-1'>
            <label htmlFor='token' className='text-sm'>
              Select Token
            </label>
            <select
              name='token'
              id='token'
              className='mt-1 px-6 text-gray-900 text-sm py-3.5 border dark:border-gray-400 dark:placeholder-gray-400 bg-white cursor-pointer'
              value={dropdownToken}
              onChange={(e) => setDropdownToken(e.target.value)}
            >
              {tokenData.map((token) => (
                <option key={token.id} value={token.name}>
                  {token.name}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-col xl:px-4 px-2 mt-1'>
            <label htmlFor='token' className='text-sm xl:mt-0'>
              Amount
            </label>
            <div
              className={`mt-1 flex w-full border lg:w-64 dark:border-gray-400 dark:placeholder-gray-400
            ${errorStyle}`}
            >
              <InputBase
                disabled={false}
                className='text-gray-900 text-sm p-2.5 border-r-2 dark:border-gray-400 dark:placeholder-gray-400 appearance-none outline-none whitespace-nowrap'
                onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                  setAmountCrypto(e.target.valueAsNumber)
                }
                value={amountCrypto}
                selectedCoin={selectedTokenObject}
              />
            </div>
            <div className='text-sm text-red-600'>{errorMessage}</div>
          </div>
          <div className='xl:mt-5 text-gray-400 flex justify-center'>
            <CgArrowsExchange size={64} />
          </div>
          <div className='flex flex-col xl:px-4 px-2 mt-1'>
            <label htmlFor='token' className='text-sm'>
              Total
            </label>
            <div className='flex w-full border lg:w-64 dark:border-gray-300 dark:placeholder-gray-400 mt-1'>
              <InputBase
                disabled={true}
                className='text-gray-400 text-sm p-2.5 border-r-2 dark:border-gray-300 dark:placeholder-gray-400 appearance-none input-none'
                selectedCoin={selectedTokenObject}
                value={transactionAmount}
                onChange={function (e: ChangeEvent<HTMLInputElement>): void {}}
              />
            </div>
          </div>
          <div className='self-center m-2 xl:mt-7 lg:ml-2 flex'>
            <button
              className='bg-blue-600 mx-auto w-full hover:bg-blue-800 text-white font-bold py-2.5 xl:w-58 px-10 rounded uppercase'
              type='submit'
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;
