import { useQuery } from "@tanstack/react-query";
import { getAccounts } from "../../apiClients";
import { Account, Loading } from "../../components";

export function Accounts() {
  const { isFetching, data } = useQuery(
    ["accounts"],
    () =>
      getAccounts({
        limit: 200,
        bot: false,
      }),
    {
      networkMode: "always",
    }
  );
  return (
    <div className="relative min-h-screen block lg:flex lg:flex-wrap lg:justify-between">
      {data?.data.map((ac) => {
        return <Account key={ac.id} data={ac} />;
      })}
      {isFetching && <Loading />}
    </div>
  );
}
