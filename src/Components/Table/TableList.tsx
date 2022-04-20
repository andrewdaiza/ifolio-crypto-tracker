import { useState } from "react";
import { Token, Transaction } from "../../Models/Model";

import TableRow from "./TableRow";

interface Props {
  selectedToken: Token;
  onSelectToken: (token: Token) => void;
  onPageClick: (number: number) => void;
  tableColumns: string[];
  title: string;
  pages: number[];
  tableItems: Token[];
}

const TableList = ({
  tableItems,
  onSelectToken,
  selectedToken,
  tableColumns,
  title,
  onPageClick,
  pages,
}: Props) => {
  const [pageSelected, setPageSelected] = useState<number>(1);

  const handlePageClick = (page: number) => {
    onPageClick(page - 1);
    setPageSelected(page);
  };
  return (
    <>
      <div className='flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded sm:m-4 mx-0'>
        <div className='mb-0 px-4 py-3 border-0'>
          <div className='w-full px-4 max-w-full flex-grow flex-1'>
            <h3 className='font-semibold text-base text-blueGray-700'>
              {title}
            </h3>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          <table className='items-center w-full bg-transparent border-collapse'>
            <thead className='thead-light'>
              <tr>
                {tableColumns.map((columnText) => (
                  <th
                    key={columnText}
                    className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'
                  >
                    {columnText}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableItems.slice(0, 5).map((token) => (
                <TableRow
                  key={token.id}
                  token={token}
                  onSelectToken={onSelectToken}
                  selectedToken={selectedToken}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className='mb-0 px-4 py-3 border-0'>
          <div className='flex justify-center px-4 max-w-full flex-grow flex-1'>
            {pages.map((page) => (
              <div
                key={page}
                onClick={() => handlePageClick(page)}
                className={
                  pageSelected === page
                    ? "bg-blue-900 rounded-full px-3 py-1 text-center lg:mx-2 align-center justify-center text-white cursor-pointer"
                    : "rounded-full  px-4 pt-1 pb-2 align-center text-black cursor-pointer"
                }
              >
                {page}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TableList;
