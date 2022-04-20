export interface Token {
  name: string;
  symbol: string;
  id: string;
  price: number;
  percent: number;
  marketcap: number;
  rank: number;
  [propName: string]: any;
}
export interface Transaction {
  amount: number;
  name: string;
  cost: number;
  symbol: string;
  time: string;
  txID: number;
  [propName: string]: any;
}
export interface HistoryData {
  price: number;
  hour: string;
}
