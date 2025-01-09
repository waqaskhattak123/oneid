import React from "react";
import { storageSubscription } from "../../utils/DashboardUtils";

const StorageSubscription = () => {
  return (
    <div className="global_text p-[50px]">
      {/* ================ navigation============ */}
      <div className="w-full flex flex-col items-center md:flex-row gap-[60px]">
        <h3 className="text-xl font-bold flex gap-4 items-center">
          <span className="w-[40px]">
            <img
              src="https://oneid.veevotech.com/frontend_assets/images/subscription_page.png"
              alt=""
            />
          </span>
          <span>Storage Plans</span>
        </h3>
        <div />
      </div>
      {/* =============== */}

      <div className="flex flex-col justify-center items-center md:flex-row gap-3 p-10">
        {storageSubscription.map((data, index) => {
          return (
            <div
              className="text-center h-[170px] w-[250px] border-[1px] border-darkgray-400 rounded-xl"
              key={index}
            >
              <div className="p-3 bg-[#1aafd0] w-full rounded-t-xl text-white text-[20px]">
                <h1>{data.title}</h1>
              </div>
              <div className="mt-3 border-b-[1px] w-full text-center p-3">
                <h1 className="">
                  <span className="text-[#1aafd0] text-[20px] font-semibold">
                    {" "}
                    {data.ammount}
                  </span>{" "}
                  {data.currency} / {data.duration}
                </h1>
              </div>
              <div className="mt-3 ">
                <button className="border-[1px] border-[#1aafd0] rounded-xl text-[#1aafd0] w-[100px]">
                  {data.subscribe}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StorageSubscription;
