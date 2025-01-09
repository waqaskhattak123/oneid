import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import MySubscriptionServices from "../../viewModel/MySubcriptIionViewModel/MySubscriptionServices";
import {
  MySubscriptionTableData,
  MySubscriptionTableHeads,
} from "../../utils/MySubscription";
import { DashboardIcons } from "../../assets/Icons";
import { CustomCenteredModal } from "../../components/CenteredModal";
import EditExistingPlan from "../EditExistingPlan/EditExistingPlan";

const MySubscription = () => {
  const {
    startDate,
    setStartDate,
    openEditPackage,
    setOpenEditPackage,
    autoRenew,
    setAutoRenew,
  } = MySubscriptionServices();
  // console.log("startDate", startDate);
  // Add an empty dependency array
  return (
    <div className="w-full global_text p-[50px]">
      {/*============= navigation============ */}
      <div className="w-full flex flex-col md:flex-row  gap-[60px]">
        <h3 className="text-xl font-bold flex gap-4 items-center">
          <span>
            <img
              src="https://oneid.veevotech.com/frontend_assets/images/subscription_page.png"
              alt=""
            />
          </span>
          <span>Billing/Subscription</span>
        </h3>
        <div>
          <h4 className="text-lg flex gap-1 items-center mt-3">
            <span>
              <img
                src="https://oneid.veevotech.com/frontend_assets/images/1w-subscription.png"
                alt=""
              />
            </span>
            <span className=" border-b-[2px] border-b-[#2db388] ">
              Manage Subscription
            </span>
          </h4>
        </div>
      </div>
      {/* ==================== navigation============ */}

      {/* ============= subscription card ================= */}
      <div className="w-full flex flex-col md:flex-row gap-10 mt-10">
        {/* First card */}
        <div className="w-[200px] rounded-md p-[20px] flex flex-col gap-2 bg-[#153947]">
          <div>
            <h2 className="text-[#2db388] text-5xl font-semibold">14</h2>
          </div>
          <div>
            <h2 className="text-white">Total Subscription</h2>
          </div>
        </div>
        {/* Second card */}
        <div className="w-[200px] rounded-md p-[20px] flex flex-col gap-2 bg-[#153947]">
          <div>
            <h2 className="text-[#2db388] text-5xl font-semibold">14</h2>
          </div>
          <div>
            <h2 className="text-white">Total Subscription</h2>
          </div>
        </div>
      </div>
      {/* ============= subscription card ================= */}
      {/* =========== tables ================== */}

      <div className="w-full mt-10 bg-[#f8f9fa] bg-[!important] p-[20px] rounded-md">
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <h2 className="text-[#2db388] text-[16px] font-semibold">
              Manage Resources
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
                {MySubscriptionTableHeads.map((head, index) => {
                  return (
                    <th
                      className="p-4 border-b border-slate-300 bg-slate-50"
                      key={index}
                    >
                      <p className="block text-sm  leading-none text-slate-500">
                        {head.title}
                      </p>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {MySubscriptionTableData.map((data, index) => {
                return (
                  <tr className="text-justify hover:bg-slate-50" key={index}>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">{data.SNo}</p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.orgName}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.product}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.planName}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.TotalServices}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.availableServices}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.amount}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.expiry}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.renewal}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {data.packageSubscribed}
                      </p>
                    </td>
                    <td
                      className="p-4 border-b border-slate-200 mx-auto text-end cursor-pointer"
                      onClick={() => setOpenEditPackage(true)}
                    >
                      <p className=" text-sm text-white bg-green-500 p-1 rounded-md text-slate-800 flex items-center justify-center">
                        <DashboardIcons.pincil />
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200 flex items-center justify-center">
                      <p className="block text-sm text-slate-800">
                        <div className="relative inline-block w-11 h-5">
                          <input
                            //    checked
                            id="switch-component-blue"
                            type="checkbox"
                            name="switch-component-blue"
                            onChange={(e) => setAutoRenew(e.target.checked)}
                            className="peer appearance-none w-11 h-5 bg-gray-700 rounded-full checked:bg-blue-600 cursor-pointer transition-colors duration-300"
                          />
                          <label
                            htmlFor="switch-component-blue"
                            className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-blue-600 cursor-pointer"
                          ></label>
                        </div>
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* =========== tables ends ================== */}

      {/* =========== editing package ================== */}

      <CustomCenteredModal
        open={openEditPackage}
        size="md"
        onClose={() => setOpenEditPackage(false)}
        title="Subscription Reference No: 123456"
        bodyContent={<EditExistingPlan />}
      />
      {/* ======================== */}

      {/* ===========auto renewal ================== */}
      <CustomCenteredModal
        open={autoRenew}
        size="md"
        onClose={() => setAutoRenew(false)}
        title="Auto Renewal"
        bodyContent={
          <div className="global_text">
            <h3>
              Subscription Auto Renwal is {autoRenew ? "Activated" : "Disabled"}
            </h3>
          </div>
        }
      />
      {/* ===========auto renewal ================== */}
    </div>
  );
};

export default MySubscription;
