import React from "react";
import DatePicker from "react-datepicker";
import ViewTrxSubsServices from "../../viewModel/TransactionVM/ViewTrxSubsServices";
import {
  subscriptionTableHead,
  subscriptionTableData,
} from "../../utils/InvoicesUtils";

const ViewTrxSubscription = () => {
  const { startDate, setStartDate } = ViewTrxSubsServices();
  return (
    <div className="global_text p-[50px]">
      {/* =========== tables ================== */}

      <div className="w-full bg-[#f8f9fa] bg-[!important] p-[20px] rounded-md">
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <h2 className="text-[#2db388] text-[16px] font-semibold">
              All Subscription under OneID
            </h2>
          </div>
          <div>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full border border-gray-300 rounded-md p-1"
            />
          </div>
        </div>

        <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border  mt-7 overflow-x-auto">
          <table className="w-full text-justify table-auto min-w-max">
            <thead>
              <tr className="font-semibold">
                {subscriptionTableHead.map((head, index) => {
                  return (
                    <th
                      className="p-4 border-b border-slate-300 bg-slate-50"
                      key={index}
                    >
                      <p className="block text-sm  leading-none text-slate-500">
                        {head}
                      </p>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {subscriptionTableData.map((data, index) => {
                return (
                  <tr className="text-justify hover:bg-slate-50" key={index}>
                    
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                       {/* Coming Soon */}
                      </p>
                    </td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="text-center mb-4">
            <p>Coming Soon</p>
          </div>
        </div>
      </div>

      {/* =========== tables ends ================== */}
    </div>
  );
};

export default ViewTrxSubscription;
