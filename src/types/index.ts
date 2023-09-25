export interface ITransaction {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  hash: string;
  timestamp: number;
  blockNumber: number;
  fromAddress: string;
  subjectAddress: string;
  isBuy: boolean;
  amount: number;
  cost: number;
  fromAccount: IAccount;
  subjectAccount: IAccount;
}
export interface IAccount {
  id: number;
  createdAt: string;
  updatedAt: string;
  address: string;
  twitterUsername: string;
  twitterPfpUrl: string;
  profileChecked: boolean;
  supply: number;
  price: number;
  volume?: number;
  amount?: number;
  fee?: number;
  holders?: number;
  cost?: number;
  rank?: string;
  ath?: number;
  marketCap?: number;
}

export interface Historical {
  time: string;
  supply: number;
  price: number;
}
export interface ToggleBots {
  showBots?: boolean;
}
export interface Assets {
  time: string;
  value: number;
}

export type TPriceUnit = "eth" | "usd";

export type TViewType = "day" | "week" | "all";
