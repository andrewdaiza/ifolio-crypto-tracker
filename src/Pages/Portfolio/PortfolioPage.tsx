import { useState, useEffect } from "react";
import TableList from "../../Components/Table/TableList";
import Card from "../../Components/UI/Card";
import { Token, Transaction } from "../../Models/Model";
import Portfolio from "./Portfolio";
import TransactionForm from "./TransactionForm";

interface Props {
  totalPortfolio: number;
  eachTokenPortfolio: Transaction[];
  tokenData: Token[];
  onTransaction: (param: Transaction[]) => void;
}

const PortfolioPage = ({
  totalPortfolio,
  eachTokenPortfolio,
  tokenData,
  onTransaction,
}: Props) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionPage, setTransactionPage] = useState<Transaction[]>([]);
  const [pageCount, setPageCount] = useState<number[]>([]);
  const [pageRange, setPageRange] = useState(5);
  const transactionColumns = ["ID", "Name", "Cost", "Amount", "Time"];
  useEffect(() => {
    let pageLength = Math.ceil(transactions.length / 5);
    let pageArray: number[] = [];
    for (let i = 1; i <= pageLength; i++) {
      pageArray.push(i);
    }
    setPageCount(pageArray);
  }, [transactions]);
  const handleTransaction = (transaction: Transaction) => {
    if (transactions.length > 0) {
      setTransactions([...transactions, transaction]);
      setTransactionPage(
        [...transactions, transaction].slice(pageRange - 5, pageRange)
      );
      onTransaction([...transactions, transaction]);
    } else {
      setTransactions([transaction]);
      setTransactionPage([transaction]);
      onTransaction([transaction]);
    }
  };
  const handlePageClick = (page: number) => {
    let range = (page + 1) * 5;
    setPageRange(range);
    setTransactionPage(transactions.slice(range - 5, range));
  };
  return (
    <div className='md:col-span-2'>
      <Card>
        <div className='grid mx-auto max-w-sm lg:max-w-lg'>
          <Portfolio
            totalPortfolio={totalPortfolio}
            eachTokenPortfolio={eachTokenPortfolio}
          />
        </div>
        <TransactionForm
          tokenData={tokenData}
          addTransaction={handleTransaction}
        />
      </Card>
      <div className='mx-auto max-w-screen-2xl'>
        <TableList
          // @ts-expect-error
          tableItems={transactionPage}
          tableColumns={transactionColumns}
          title='Transactions'
          pages={pageCount}
          onPageClick={handlePageClick}
          selectedToken={{
            name: "",
            price: 0,
            symbol: "",
            percent: 0,
            marketcap: 0,
            rank: 0,
            id: "",
          }}
        />
      </div>
    </div>
  );
};

export default PortfolioPage;
