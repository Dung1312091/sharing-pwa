import { Assets, Historical, IAccount, TViewType } from "../types";

const BaseURL = "https://api.friendscan.tech";
const RequestURL = {
  transactions: `${BaseURL}/transactions`,
  accounts: `${BaseURL}/accounts`,
  newJoiners: `${BaseURL}/accounts/new-joiners`,
  trendingAccounts: `${BaseURL}/accounts/trending`,
  topFeeEarners: `${BaseURL}/accounts/fee`,
  historical: `${BaseURL}/accounts`,
  portfolio: `${BaseURL}/accounts`,
  assets: `${BaseURL}/accounts`,
  accountDetail: `${BaseURL}/accounts`,
};
type QueryParams = {
  limit?: number;
  q?: string;
  viewType?: TViewType;
  fromAddress?: string;
  subjectAddress?: string;
  interval?: "hour" | "minute" | "day";
  bot?: boolean;
  startTime?: string;
  endTime?: string;
};

type ResponseData<T> = {
  data: T;
};

function getUrl(url: string, params?: QueryParams) {
  if (!params) return url;
  const queryParams = new URLSearchParams(params as Record<string, string>);
  return `${url}?${queryParams}`;
}

export async function getAccounts(
  queryParams?: QueryParams
): Promise<ResponseData<IAccount[]>> {
  const response = await fetch(getUrl(RequestURL.accounts, queryParams));
  return await response.json();
}

export async function getNewJoiners(
  queryParams?: QueryParams
): Promise<ResponseData<IAccount[]>> {
  const response = await fetch(getUrl(RequestURL.newJoiners, queryParams));
  return await response.json();
}
export async function getTrendingAccounts(
  queryParams?: QueryParams
): Promise<ResponseData<IAccount[]>> {
  const response = await fetch(
    getUrl(RequestURL.trendingAccounts, queryParams)
  );
  return await response.json();
}

export async function getHolderByAccount(
  address: string,
  queryParams?: QueryParams
): Promise<ResponseData<IAccount[]>> {
  const response = await fetch(
    getUrl(`${RequestURL.accounts}/${address}/holders`, queryParams)
  );
  return await response.json();
}

export async function getTopFeeEarners(
  queryParams?: QueryParams
): Promise<ResponseData<IAccount[]>> {
  const response = await fetch(getUrl(RequestURL.topFeeEarners, queryParams));
  return await response.json();
}
export async function getHistoricalData(
  address: string,
  queryParams?: QueryParams
): Promise<ResponseData<Historical[]>> {
  const response = await fetch(
    getUrl(`${RequestURL.historical}/${address}/historical`, queryParams)
  );
  return await response.json();
}

export async function getAccountPortfolio(
  address: string,
  queryParams?: QueryParams
): Promise<ResponseData<IAccount[]>> {
  const response = await fetch(
    getUrl(`${RequestURL.portfolio}/${address}/portfolio`, queryParams)
  );
  return await response.json();
}

export async function updateTwitterImage(
  address: string
): Promise<ResponseData<IAccount[]>> {
  const response = await fetch(
    getUrl(`${RequestURL.accounts}/${address}/pulling-avatar`),
    {
      method: "POST",
    }
  );
  return await response.json();
}

export async function getAssets(
  address: string
): Promise<ResponseData<Assets[]>> {
  const response = await fetch(
    getUrl(`${RequestURL.assets}/${address}/assets-sum`)
  );
  return await response.json();
}

export async function getAccountDetail(
  address: string
): Promise<ResponseData<IAccount>> {
  const response = await fetch(
    getUrl(`${RequestURL.accountDetail}/${address}`)
  );
  return await response.json();
}
