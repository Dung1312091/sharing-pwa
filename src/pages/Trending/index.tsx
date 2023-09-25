import { useQuery } from "@tanstack/react-query";
import { getTrendingAccounts } from "../../apiClients";
import { Account, Loading } from "../../components";

export function Trending() {
  const { isFetching, data } = useQuery(
    ["trending"],
    () =>
      getTrendingAccounts({
        limit: 200,
        bot: false,
        viewType: "day",
      }),
    {
      networkMode: "always",
    }
  );
  return (
    <div className="relative min-h-screen block lg:flex lg:flex-wrap lg:justify-between">
      {data?.data.map((ac) => {
        return <Account type="trending" key={ac.id} data={ac} />;
      })}
      {isFetching && <Loading />}
    </div>
  );
}
