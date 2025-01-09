import React from "react";
import { ViewTrxNavigation, keyPerformance, quickStatement, quickStatementData } from "../../utils/InvoicesUtils";
import ViewTrxServices from "../../viewModel/TransactionVM/ViewTrxSubsServices";
import ViewTrxDashboard from "./ViewTrxDashboard";
import ViewTrxSubscription from "./ViewTrxSubscription";

const ViewTransation = () => {
  const { navigation, setNavigation, startDate, setStartDate } =
    ViewTrxServices();

  return (
    <div className="global_text p-[50px]">
      {/*============= navigation============ */}
      <div className="w-full flex flex-col items-center md:flex-row  gap-[60px]">
        <h3 className="text-xl font-bold flex gap-4 items-center">
          <span className="w-[40px]">
            <img
              src="https://oneid.veevotech.com/frontend_assets/images/subscription_page.png"
              alt=""
            />
          </span>
          <span className="whitespace-nowrap">1Wallet</span>
        </h3>
        <div className="w-full flex flex-col md:flex-row md:items-center md: gap-4">
          {ViewTrxNavigation.map((item, index) => {
            return (
              <h4
                className="text-lg flex gap-4 items-center mt-3 cursor-pointer"
                key={index}
                onClick={() => {
                  setNavigation(index);
                }}
              >
                <span>
                  <img src={item.url} alt="" className="w-[20px]" />
                </span>
                <span
                  className={`border-b-[2px] ${
                    index === navigation
                      ? " border-b-[#2db388] duration-1000"
                      : ""
                  }`}
                >
                  {item.title}
                </span>
              </h4>
            );
          })}
        </div>
      </div>
      {/* ==================== navigation============ */}
      <div className="mt-4 p-2">
        {navigation === 0 ? (
          <ViewTrxDashboard
            keyPerformance={keyPerformance}
            startDate={startDate}
            setStartDate={setStartDate}
            quickStatement= {quickStatement}
            quickStatementData= {quickStatementData}
          />
        ) : (
          <ViewTrxSubscription />
        )}
      </div>
    </div>
  );
};

export default ViewTransation;
