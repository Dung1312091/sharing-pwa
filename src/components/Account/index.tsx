import { IAccount } from "../../types";
import { shortAddress } from "../../utils";

export const Account = ({
  data,
  type,
}: {
  data: IAccount;
  type?: "account" | "trending" | "fee";
}) => {
  return (
    <div className="bg-slate-100 rounded-lg mt-2 py-2 px-3 basis-80">
      <div className="flex py-3  items-center border-b-[1px]">
        <img
          src={data?.twitterPfpUrl ? data?.twitterPfpUrl : "/man.png"}
          width={32}
          height={32}
          alt="user avatar"
          className="rounded-full mr-1"
        />
        <div>
          <p>{data?.twitterUsername}</p>
          <p className="text-gray-400 text-xs">100 followers</p>
        </div>
        <div className="text-right ml-auto">
          <img
            src={"/twitter.png"}
            width={24}
            height={24}
            alt="twitter"
            className="rounded-full mr-1"
          />
        </div>
      </div>
      <div className="flex justify-between border-b-[1px] border-dashed py-2">
        <div>
          <p className="text-gray-400 text-xs">Holder</p>
          <p className="text-sm">{data.holders}</p>
        </div>
        {type === "fee" && (
          <div>
            <p className="text-gray-400 text-xs">Fee earner</p>
            <p className="text-sm">{data.fee} ETH</p>
          </div>
        )}
        {type === "trending" && (
          <div>
            <p className="text-gray-400 text-xs">Volume</p>
            <p className="text-sm">{data.volume} ETH</p>
          </div>
        )}
        <div>
          <p className="text-gray-400 text-xs">Price</p>
          <p className="text-sm">{data.price} ETH</p>
        </div>
      </div>
      <div className="flex justify-between  py-2">
        <p className="text-gray-400 text-xs">Address</p>
        <p className="flex items-center">
          <img
            className="mr-2"
            src="/base-icon.svg"
            width={16}
            height={16}
            alt=""
          />
          <span className="text-sm">{shortAddress(data.address, 6, 6)}</span>
        </p>
      </div>
    </div>
  );
};
