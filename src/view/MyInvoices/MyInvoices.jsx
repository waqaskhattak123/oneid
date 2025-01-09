import React from "react";
import DatePicker from "react-datepicker";
import MySubscriptionServices from "../../viewModel/MySubcriptIionViewModel/MySubscriptionServices";
import {
  MySubscriptionTableData,
  MySubscriptionTableHeads,
  payInvoiceTableData,
  payInvoiceTableHead,
} from "../../utils/InvoicesUtils";
import { DashboardIcons } from "../../assets/Icons";
import { InvoicesUtils, subscriptionCards } from "../../utils/InvoicesUtils";
import MyInvoiceServices from "../../viewModel/MyInvoiceViewModel/MyInvoiceServices";
import { Tooltip } from "@material-tailwind/react";
import { CustomCenteredModal } from "../../components/CenteredModal";
import ViewIndividuualInoice from "./ViewIndividuualInoice";
import PayInvoice from "../PayInvoice/PayInvoice";

const MyInvoices = () => {
  const { startDate, setStartDate, setOpenEditPackage, setAutoRenew } =
    MySubscriptionServices();

  // =========================================================================
  const {
    navigation,
    setNavigation,
    showIndividualInvoice,
    setShowIndividualInvoice,
    cancelOrder,
    setCancelOrder,
    payInvoice,
    setPayInvoice,
  } = MyInvoiceServices();
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
          <span>Billing/Subscription</span>
        </h3>
        <div className="w-full flex flex-col md:flex-row md:items-center md: gap-4">
          {InvoicesUtils.map((item, index) => {
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
      {navigation === 0 ? (
        <>
          {/* ============= subscription card ================= */}
          <div className="w-full flex flex-col md:flex-row gap-10 mt-10">
            {/* First card */}
            {subscriptionCards.map((item, index) => {
              return (
                <div
                  className="w-[200px] rounded-md p-[20px] flex flex-col gap-2 bg-[#153947]"
                  key={index}
                >
                  <div>
                    <h2 className="text-[#2db388] text-5xl font-semibold">
                      {item.value}
                    </h2>
                  </div>
                  <div>
                    <h2 className="text-white">{item.title}</h2>
                  </div>
                </div>
              );
            })}
          </div>
          {/* ============= subscription card ================= */}
          {/* =========== tables ================== */}

          <div className="w-full mt-10 bg-[#f8f9fa] bg-[!important] p-[20px] rounded-md">
            <div className="w-full flex flex-row justify-between items-center">
              <div>
                <h2 className="text-[#2db388] text-[16px] font-semibold">
                  Pending Orders / Invoices
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
                      <tr
                        className="text-justify hover:bg-slate-50"
                        key={index}
                      >
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800">
                            {data.orderNo}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800">
                            {data.product}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800 cursor-pointer">
                            <span
                              className="flex gap-1 items-center"
                              onClick={() => setShowIndividualInvoice(true)}
                            >
                              <span>
                                <DashboardIcons.eye />
                              </span>
                              <span>{data.items}</span>
                            </span>
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800">
                            {data.gDate}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800">
                            {data.dueDate}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800">
                            {data.charges}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-blue-800 font-medium cursor-pointer">
                            {data.viewInvoice}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200 ">
                          <span className="flex gap-2 items-center cursor-pointer">
                            <p
                              className="block text-center  text-sm text-slate-800 bg-[#2db388] p-[2px] rounded-md
                           text-white w-[37px]"
                              onClick={() => setPayInvoice(true)}
                            >
                              {data.action}
                            </p>
                            <Tooltip content="Cancel your order">
                              <p
                                className="block text-center text-sm text-slate-800 bg-red-500 p-[5px] cursor-pointer rounded-md
                           text-white w-[37px]"
                                onClick={() => setCancelOrder(true)}
                              >
                                <DashboardIcons.cross className="w-full text-center" />
                              </p>
                            </Tooltip>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* =========== tables ends ================== */}
        </>
      ) : navigation === 1 ? (
        <>
          {/* =========== tables ================== */}

          <div className="w-full mt-10 bg-[#f8f9fa] bg-[!important] p-[20px] rounded-md">
            <div className="w-full flex flex-row justify-between items-center">
              <div>
                <h2 className="text-[#2db388] text-[16px] font-semibold">
                  Paid Invoices
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
                    {payInvoiceTableHead.map((head, index) => {
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
                  {payInvoiceTableData.map((data, index) => {
                    return (
                      <tr
                        className="text-justify hover:bg-slate-50"
                        key={index}
                      >
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800">
                            {data.orderNo}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800">
                            {data.productName}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800 cursor-pointer">
                            <span
                              className="flex gap-1 items-center"
                              onClick={() => setShowIndividualInvoice(true)}
                            >
                              <span>
                                <DashboardIcons.eye />
                              </span>
                              <span>{data.items}</span>
                            </span>
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800">
                            {data.gDate}
                          </p>
                        </td>

                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800">
                            {data.amount}
                          </p>
                        </td>
                        <td className="p-4 border-b border-slate-200">
                          <p className="block text-sm text-slate-800 text-blue-400 cursor-pointer">
                            {data.viewInvoice}
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
        </>
      ) : (
        ""
      )}
      {showIndividualInvoice && (
        <CustomCenteredModal
          open={showIndividualInvoice}
          onClose={() => setShowIndividualInvoice(false)}
          size="xl"
          title="Invoice Details"
          bodyContent={<ViewIndividuualInoice />}
        />
      )}

      {/* ===================== */}
      {cancelOrder && (
        <CustomCenteredModal
          open={cancelOrder}
          onClose={() => setCancelOrder(false)}
          size="md"
          title="Cancel Order"
          bodyContent={
            <div className="w-full flex flex-col gap-4 justify-center items-center">
              <p>Are you sure to cancel this order?</p>
              <div className="flex gap-4">
                <button className="p-2 bg-[#ecf0f1] font-semibold rounded-md">
                  CONFIRM
                </button>
                <button className="p-2 bg-[#ecf0f1] font-semibold rounded-md">
                  CANCEL
                </button>
              </div>
            </div>
          }
        />
      )}

      {/* ============================== */}
      {payInvoice && (
        <CustomCenteredModal
          open={payInvoice}
          onClose={() => setPayInvoice(false)}
          size="xl"
          title="Pay Invoice"
          bodyContent={<PayInvoice onClose={() => setPayInvoice(false)} />}
        />
      )}

      {/* ============================== */}
    </div>
  );
};

export default MyInvoices;
