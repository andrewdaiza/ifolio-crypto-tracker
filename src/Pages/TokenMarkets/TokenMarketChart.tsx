import LineChart from "../../Components/Chart/LineChart";
import { HistoryData, Token } from "../../Models/Model";
import Card from "../../Components/UI/Card";

interface Props {
  selectedHistoryData: HistoryData[];
  selectedToken: Token;
}

const TokenMarketChart = ({ selectedHistoryData, selectedToken }: Props) => {
  const { name, price, percent, symbol } = selectedToken;
  return (
    <>
      <Card>
        <div className='w-full pr-4 flex'>
          <span className='text-white text-center inline-flex items-center justify-center w-8 h-8 shadow-lg rounded-full'>
            <img
              src={`https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
              alt='coin-icon'
            />
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
    </>
  );
};

export default TokenMarketChart;
