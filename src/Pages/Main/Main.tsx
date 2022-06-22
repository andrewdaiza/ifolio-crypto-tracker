import { useEffect, useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

import {
  fetchTokenData,
  fetchHistoryData,
} from "../../Components/API/TokenData";
import { HistoryData, Token, Transaction } from "../../Models/Model";
import PortfolioPage from "../Portfolio/PortfolioPage";
import TokenMarketsPage from "../TokenMarkets/TokenMarketsPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loading from "../../Components/UI/Loading";
import { GiConsoleController } from "react-icons/gi";

interface APIData {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  rank: string;
  marketCapUsd: string;
  changePercent24Hr: string;
}
interface APIHistoryData {
  priceUsd: string;
  date: number;
  time?: number;
  [key: string]: any;
}
interface APIHistory {
  data: APIHistoryData[];
}

const Main = () => {
  const [tokenData, setTokenData] = useState<Token[]>([]);
  const [showHideSidebar, setShowHideSidebar] = useState<boolean>(false);
  const [selectedToken, setSelectedToken] = useState<Token>({
    name: "",
    price: 0,
    symbol: "",
    percent: 0,
    marketcap: 0,
    rank: 0,
    id: "",
  });
  const [selectedHistoryData, setSelectedHistoryData] = useState<HistoryData[]>(
    []
  );

  const [isLoading, setIsLoading] = useState(true);

  const getFromAPI = async (limit: number, offset: number) => {
    try {
      let apiData = await fetchTokenData(limit, offset);

      let unformattedData = await apiData.data;

      let formattedData = unformattedData.map((data: APIData): Token => {
        const {
          id,
          name,
          symbol,
          priceUsd,
          rank,
          marketCapUsd,
          changePercent24Hr,
        } = data;
        return {
          id,
          name,
          symbol,
          price: Number(Number(priceUsd).toFixed(2)),
          rank: Number(rank),
          marketcap: Number(Number(marketCapUsd).toFixed(2)),
          percent: Number(Number(changePercent24Hr).toFixed(2)),
        };
      });
      setTokenData(formattedData);
      setSelectedToken(formattedData[0]);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const formatHistoryData = (apiData: APIHistory) => {
    const range = apiData.data.length - 1;
    return apiData.data
      .slice(range - 24, range)
      .map((item: APIHistoryData): HistoryData => {
        let date = new Date(item.date);
        let hour = date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });

        let price = Number(Number(item.priceUsd).toFixed(2));
        return { price, hour };
      });
  };

  const fetchPriceHistoryAPIData = async (selectedTokenName: string) => {
    try {
      let selectedFetch: APIHistory;
      selectedFetch = await fetchHistoryData(selectedTokenName);

      setSelectedHistoryData(formatHistoryData(selectedFetch));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getFromAPI(10, 0);
  }, []);

  useEffect(() => {
    if (selectedToken.id) {
      fetchPriceHistoryAPIData(selectedToken.id);
    }
  }, [selectedToken]);

  const handleSelectToken = (selectedToken: Token) => {
    setSelectedToken(selectedToken);
  };

  const handlePageClick = (clickPage: number) => {
    let offset = clickPage * 5;
    getFromAPI(5, offset);
  };
  const handleShowHideSidebar = () => {
    setShowHideSidebar(!showHideSidebar);
  };
  return (
    <div className='grid md:grid-cols-8 w-screen lg:w-full'>
      <div className='sm:col-span-8 w-screen lg:w-full'>
        <Header onShowHideSidebar={handleShowHideSidebar} />
      </div>
      <div className='lg:col-span-1 col-span-8'>
        <Sidebar showHideSidebar={showHideSidebar} />
      </div>
      <div className='lg:col-span-7 col-span-8 w-screen lg:w-full'>
        {isLoading && <Loading />}
        <Router>
          <Routes>
            <Route
              path='/'
              element={
                <TokenMarketsPage
                  selectedHistoryData={selectedHistoryData}
                  selectedToken={selectedToken}
                  onSelectToken={handleSelectToken}
                  tokenData={tokenData}
                  onPageClick={handlePageClick}
                />
              }
            />
            <Route
              path='/portfolio'
              element={<PortfolioPage tokenData={tokenData} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Main;
