import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import ProfileServices from "../../viewModel/ProfileServices/ProfileServices";
import { DashboardIcons } from "../../assets/Icons";
import { profileData } from "../../utils/InvoicesUtils";
const Settings = () => {
  const { open, handleOpen } = ProfileServices();
  return (
    <div className="global_text">
      {profileData.map((data, index) => {
        return (
          <div
            className="flex flex-col w-full  md:flex-row gap-7 mt-7 md:mt-0 p-5 md:p-20"
            key={index}
          >
            {/* profile */}
            <div className="w-full h-[400px] md:w-[700px] bg-gray-50 rounded-xl flex flex-col justify-center items-center">
              <div className="relative text-center p-7">
                <img
                  src={
                    "https://oneid.veevotech.com/dp/files/4f5441324f4467774e413d3d-4d7a45314d54513d.jpeg"
                  }
                  alt=""
                  className="w-[120px] h-auto rounded-full mb-4"
                />
                <span className="absolute bg-blue-400 rounded-xl left-[90px] bottom-[60px]">
                  <DashboardIcons.cameraIcon className=" w-8 h-7 p-[6px] rounded-xl cursor-pointer bg-blue-400 text-white" />
                </span>

                <label htmlFor="" className="font-semibold text-[15px]">
                  {data.name}
                </label>
              </div>
              <div className="border-t-[1px] py-4  w-full flex justify-between text-[15px] px-10">
                <div className="font-semibold">
                  <p>Member Since</p>
                </div>
                <div>{data.memberSince}</div>
              </div>
              <div className="border-t-[1px] py-4  w-full flex justify-between text-[15px] px-10">
                <div className="font-semibold">
                  <p>Country</p>
                </div>
                <div>{data.country}</div>
              </div>
              <div className="border-t-[1px] py-4  w-full flex justify-between text-[15px] px-10">
                <div className="font-semibold">
                  <p>Billing ID</p>
                </div>
                <div>{data.billingID}</div>
              </div>
            </div>
            {/* toggleing */}
            <div className="w-full border-[1px] rounded-xl md:border-none md:rounded-none">
              <div>
                <Accordion open={open === 1} className="  shadow-xl rounded-md">
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="bg-[#1aafd0] text-white p-2 rounded-md hover:text-white"
                  >
                    <div className="flex font-poppins text-[17px] justify-between w-full items-center">
                      <div>Account</div>
                      <div className="relative w-7 h-7">
                        <div
                          className={`absolute inset-0 transition-all duration-300 ease-in-out transform
                        ${
                          open === 1
                            ? "opacity-100 rotate-0"
                            : "opacity-0 rotate-90"
                        }`}
                        >
                          <DashboardIcons.minus className="w-7 h-7 text-white" />
                        </div>
                        <div
                          className={`absolute inset-0 transition-all duration-300 ease-in-out transform
                        ${
                          open === 1
                            ? "opacity-0 -rotate-90"
                            : "opacity-100 rotate-0"
                        }`}
                        >
                          <DashboardIcons.plus className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className=" p-4 global_text">
                      <div className="flex flex-col gap-4 justify-between px-3 items-center">
                        <div className=" pb-4 flex flex-row gap-2  justify-between w-full">
                          <div>
                            <h1 className="font-semibold text-[15px]">
                              Full Name
                            </h1>
                          </div>
                          <div>
                            <label>{data.name}</label>
                          </div>
                          <div>
                            <h1>
                              <DashboardIcons.edit className="w-5 h-5 cursor-pointer text-blue-400" />
                            </h1>
                          </div>
                        </div>
                        <div className="border-b-[1px] pb-4 flex  gap-2 flex-row justify-between w-full">
                          <div>
                            <h1 className="font-semibold text-[15px]">
                              Country
                            </h1>
                          </div>
                          <div>
                            <label>{data.country}</label>
                          </div>
                          <div>
                            <h1>
                              <DashboardIcons.edit className="w-5 h-5 cursor-pointer text-blue-400" />
                            </h1>
                          </div>
                        </div>
                        {/* ======= */}
                        <div className="flex gap-2 items-center text-start w-full">
                          <h1 className="font-semibold text-[15px]">
                            Access Credentials:
                          </h1>
                          <h1 className="font-semibold text-[15px]">
                            <button className="flex gap-1 items-center">
                              <span className="bg-blue-400 p-1 text-white rounded-md">
                                <DashboardIcons.plus className="text-[17px] font-extralight text-white" />
                              </span>
                              <span className="text-blue-400">
                                Add Credentials
                              </span>
                            </button>
                          </h1>
                        </div>
                        <div className="flex flex-row gap-2 md:flex-row  justify-between w-full">
                          <div>
                            <h1 className="font-semibold text-[15px]">Email</h1>
                          </div>
                          <div className=" xl:w-10">
                            <div className="flex gap-2 flex-col">
                              <label>{data.email}</label>
                              <label>{data.email}</label>
                              <label className="flex gap-1 w-ful">
                                <input
                                  type="text"
                                  placeholder="Enter email"
                                  className="p-1 bg-[#E8F0FE] w-ful focus:outline-none rounded-md placeholder:pl-1"
                                />
                              </label>
                            </div>
                            <div className="flex gap-1 mt-3">
                              <button className="bg-[#1aafd0] text-white text-[13px]  p-1 rounded-md">
                                Add
                              </button>
                              <button className="bg-[#1aafd0] text-white text-[13px] w- p-1 rounded-md">
                                Cancel
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <h1>
                              <DashboardIcons.delete className="w-5 h-5 cursor-pointer text-red-400" />
                            </h1>
                            <h1>
                              <DashboardIcons.delete className="w-5 h-5 cursor-pointer text-red-400" />
                            </h1>
                          </div>
                        </div>
                        <div className="flex gap-2 items-center text-start w-full">
                          <h1 className="font-semibold text-[15px]">
                            Access Credentials:
                          </h1>
                          <h1 className="font-semibold text-[15px]">
                            <button className="flex gap-1 items-center">
                              <span className="bg-blue-400 p-1 text-white rounded-md">
                                <DashboardIcons.plus className="text-[17px] font-extralight text-white" />
                              </span>
                              <span className="text-blue-400">
                                Add Credentials
                              </span>
                            </button>
                          </h1>
                        </div>
                        <div className="flex flex-row gap-2 md:flex-row  justify-between w-full">
                          <div>
                            <h1 className="font-semibold text-[15px]">Phone</h1>
                          </div>
                          <div className=" xl:w-10">
                            <div className="flex flex-col gap-2">
                              <label>{data.phoneOne}</label>
                              <label>{data.phoneTwo}</label>
                              <label className="flex gap-1 w-ful">
                                <input
                                  type="number"
                                  placeholder="Enter Phone No"
                                  className="p-1 bg-[#E8F0FE] w-ful focus:outline-none rounded-md placeholder:pl-1"
                                />
                              </label>
                            </div>
                            <div className="flex gap-1 mt-3">
                              <button className="bg-[#1aafd0] text-white text-[13px]  p-1 rounded-md">
                                Add
                              </button>
                              <button className="bg-[#1aafd0] text-white text-[13px] w- p-1 rounded-md">
                                Cancel
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <h1>
                              <DashboardIcons.delete className="w-5 h-5 cursor-pointer text-red-400" />
                            </h1>
                            <h1>
                              <DashboardIcons.delete className="w-5 h-5 cursor-pointer text-red-400" />
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
              </div>
              {/* 2nd toggleer */}
              <div className="mt-7">
                <Accordion open={open === 2} className="  shadow-xl rounded-md">
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="bg-[#1aafd0] text-white p-2 rounded-md hover:text-white"
                  >
                    <div className="flex font-poppins text-[17px] justify-between w-full items-center">
                      <div>Security</div>
                      <div className="relative w-7 h-7">
                        <div
                          className={`absolute inset-0 transition-all duration-300 ease-in-out transform
                        ${
                          open === 2
                            ? "opacity-100 rotate-0"
                            : "opacity-0 rotate-90"
                        }`}
                        >
                          <DashboardIcons.minus className="w-7 h-7 text-white" />
                        </div>
                        <div
                          className={`absolute inset-0 transition-all duration-300 ease-in-out transform
                        ${
                          open === 2
                            ? "opacity-0 -rotate-90"
                            : "opacity-100 rotate-0"
                        }`}
                        >
                          <DashboardIcons.plus className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="p-4 global_text">
                      <div className="flex flex-col gap-4 justify-center px-3 items-center">
                        {/* User Name and Login Via OTP */}
                        <div className="pb-4 flex flex-row items-center gap-4 justify-between w-full">
                          <div>
                            <h1 className="font-semibold text-[15px]">
                              User Name
                            </h1>
                          </div>
                          <div>
                            <h1 className="flex gap-1">
                              <p className="text-[15px] font-semibold">
                                Login Via OTP
                              </p>
                            </h1>
                          </div>
                        </div>

                        {/* Email and Checkbox */}
                        <div className="pb-4 flex flex-wrap items-center gap-4 justify-between w-full">
                          <div className="flex-shrink-0">
                            <h1 className="font-semibold text-[15px]">
                              {data.email}
                            </h1>
                          </div>
                          <div className="flex-shrink-0">
                            <h1 className="flex items-center gap-2">
                              <label className="text-[15px] font-semibold">
                                <input type="checkbox" className="mr-2" />
                              </label>
                            </h1>
                          </div>
                        </div>
                        {/* Email and Checkbox */}
                        <div className="pb-4 flex flex-wrap items-center gap-4 justify-between w-full">
                          <div className="flex-shrink-0">
                            <h1 className="font-semibold text-[15px]">
                              {data.phoneOne}
                            </h1>
                          </div>
                          <div className="flex-shrink-0">
                            <h1 className="flex items-center gap-2">
                              <button className="bg-[#1aafd0] text-white rounded-md w-[80px] ">
                                Save
                              </button>
                              <label className="text-[15px] font-semibold">
                                <input type="checkbox" className="mr-2" />
                              </label>
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-center text-white text-[13px] ">
                        <button className="bg-[#1aafd0] p-1 rounded-md w-[160px] ">
                          Change Password
                        </button>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
              </div>
              {/* =========== */}

              {/* 3rd toggleer */}
              <div className="mt-7">
                <Accordion open={open === 3} className="  shadow-xl rounded-md">
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className="bg-[#1aafd0] text-white p-2 rounded-md hover:text-white"
                  >
                    <div className="flex font-poppins text-[17px] justify-between w-full items-center">
                      <div>Billing Notification Emails</div>
                      <div className="relative w-7 h-7">
                        <div
                          className={`absolute inset-0 transition-all duration-300 ease-in-out transform
                        ${
                          open === 3
                            ? "opacity-100 rotate-0"
                            : "opacity-0 rotate-90"
                        }`}
                        >
                          <DashboardIcons.minus className="w-7 h-7 text-white" />
                        </div>
                        <div
                          className={`absolute inset-0 transition-all duration-300 ease-in-out transform
                        ${
                          open === 3
                            ? "opacity-0 -rotate-90"
                            : "opacity-100 rotate-0"
                        }`}
                        >
                          <DashboardIcons.plus className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="p-4 global_text">
                      <div className="flex flex-col gap-4 px-3 w-full">
                        <div className="flex flex-col items-center w-full md:px-10">
                          <input
                            type="email"
                            className="w-full bg-[#F0F8FF] focus:outline-none p-2 rounded-md "
                            placeholder="Enter Email"
                          />
                        </div>
                        <div className="flex flex-col items-center px-10">
                          <label htmlFor="">
                            Emails for billing Notification
                          </label>
                        </div>
                        <div className="text-center text-white text-[13px] ">
                          <button className="bg-[#1aafd0] p-1 rounded-md w-[160px] ">
                            Submit
                          </button>
                        </div>
                      </div>

                      {/* =========== tables ================== */}

                      <div className="w-full mt-2 bg-[#f8f9fa] rounded-md">
                        <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg overflow-x-auto">
                          <table className="w-full text-left table-auto border-collapse">
                            <thead className="bg-slate-50">
                              <tr className="font-semibold border-b border-slate-300">
                                <th className="p-4 text-sm text-slate-500">
                                  Emails
                                </th>
                                <th className="pr-6 p-4 text-sm text-slate-500 text-right">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="hover:bg-slate-50 ">
                                <td className="p-3 border-b border-slate-200 text-sm text-slate-800">
                                  {data.email}
                                </td>
                                <td className="p-4 border-b border-slate-200  text-sm text-slate-800 text-right">
                                  <p className="flex gap-1 justify-end items-end w-full px-2 py-1 text-white">
                                    <DashboardIcons.edit className="w-5 h-5 cursor-pointer text-blue-400 " />
                                    <DashboardIcons.delete className="w-5 h-5 cursor-pointer text-red-400 " />
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* =========== tables ends ================== */}
                    </div>
                  </AccordionBody>
                </Accordion>
              </div>
              {/* =========== */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Settings;
