import { useState } from "react";
import {
  forMeApps,
  HomeNavigationUils,
  organizationData,
  vtMarketApps,
  vtMarketAppsButtons,
} from "../../utils/DashboardUtils";
import "./Dashboard.css";
import { DashboardIcons } from "../../assets/Icons";
import CreateOrgServices from "../../viewModel/CreateOrgViewModal/CreateOrgServices";
import { CustomCenteredModal } from "../../components/CenteredModal";
import CreateOrganization from "../CreateOrganization/CreateOrganization";
import DashboardServices from "../../viewModel/DashboardViewModel/DashboardServices";
import ManageApp from "./ManageApp";
import SubscribeApp from "../SubscribeApp/SubscribeApp";

const Home = () => {
  const {
    activeNavigation,
    setActiveNavigation,
    manageSubscriptions,
    setManageSubscriptions,
    subscribeApp,
    setSubscribeApp,
  } = DashboardServices();
  const { openCreateOrg, setOpenCreateOrg } = CreateOrgServices();

  // console.log("activeNavigation", activeNavigation);
  return (
    <div className=" w-full global_text p-[50px]">
      <div className=" flex gap-[20px] w-full xl:w-[36%] mt-4">
        {HomeNavigationUils.map((item, index) => (
          <div
            key={index}
            className={`${
              index === activeNavigation ? "navigationActive" : ""
            } pt-1 ml-2 rounded-md font-poppins w-[150px]  duration-1000 hover:ease-in-out hover:text-white hover:bg-[#1aafd0] cursor-pointer border-[1px] border-[lightgray] text-center`}
            onClick={() => setActiveNavigation(index)}
          >
            <span className="text-[14px] font-poppins cursor-pointer ">
              {item.title}
            </span>
          </div>
        ))}
      </div>
      {/* filtration for vt market apps */}
      {activeNavigation === 2 && (
        <div className="flex flex-col gap-4 relative flex-wrap top-[20px]">
          <div className="flex gap-4 absolute">
            {vtMarketAppsButtons.map((item, index) => {
              return (
                <div key={index}>
                  <button className="text-[12px] font-poppins text-[#6f6f6f] bg-[#ffffff] pt-[2px] pr-[12px] pb-[0px] pl-[17px] rounded-md mt-2 w-max focus:outline-none hover:bg-[#999999] hover:text-[white] border-[1px] border-[#e5e5e5]">
                    {item.title}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* =========================== */}

      {/* conditional Render  &&  mapping on begins here*/}
      <div className="flex flex-wrap w-full gap-4 mt-8 ">
        {activeNavigation === 0 && (
          <div onClick={() => setOpenCreateOrg(true)}>
            <div className="cursor-pointer  flex justify-center w-[176px] items-center border-[1px] border-[lightgray]  h-[141px] border-dashed rounded-md hover:bg-[#777373] ease-in duration-200">
              <div className="flex flex-col items-center justify-center">
                <span className="text-[41px] font-poppins">
                  {<DashboardIcons.plus />}
                </span>
              </div>
            </div>
            <span className="text-[14px] font-poppins text-[#6f6f6f] text-center mt-2">
              Add New Organization
            </span>
          </div>
        )}
        {activeNavigation === 0 ? (
          organizationData?.map((item, index) => {
            return (
              <>
                <div
                  className="w-[176px] hover:scale-110 ease-in duration-200"
                  key={index}
                  onClick={() => setActiveNavigation(3)}
                >
                  <div className="cursor-pointer  flex justify-center items-center border-[1px] border-[lightgray]  h-[141px] border-dashed rounded-md">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[41px] font-poppins">
                        <img
                          src={item.icon}
                          alt=""
                          className="h-[88px] rounded-full"
                        />
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-poppins text-[#6f6f6f] text-center mt-2">
                    <p className="font-semibold">{item.name}</p>
                    <p>{item.type}</p>
                  </span>
                </div>
              </>
            );
          })
        ) : activeNavigation === 1 ? (
          forMeApps.map((item, index) => {
            return (
              <>
                <div
                  className="w-[176px] hover:scale-110 ease-in duration-200"
                  key={index}
                >
                  <div className="cursor-pointer border-[1px] border-[lightgray] h-[180px] border-dashed rounded-md p-[14px] overflow-hidden flex flex-col gap-x-0 items-center justify-center">
                    {/* Centered Content */}
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[41px] font-poppins">
                        <img
                          src={item.icon}
                          alt=""
                          className="h-[44px] w-[44px] rounded-full object-cover"
                        />
                      </span>
                    </div>

                    {/* Text Content */}
                    <span className="text-[11px] font-poppins text-[#6f6f6f] text-center mt-2 block overflow-hidden">
                      <p className="font-semibold truncate">{item.name}</p>
                      <p className="truncate">{item.type}</p>
                      <p className="truncate">{item.description}</p>
                      <p className="truncate">{item.role}</p>
                    </span>

                    {/* Button */}
                    <button className="text-[12px] font-poppins text-[#6f6f6f] bg-[#ffffff] pt-[2px] pr-[12px] pb-[0px] pl-[17px] rounded-md mt-2 w-max focus:outline-none hover:bg-[#999999] hover:text-[white] border-[1px] border-[#e5e5e5] self-end">
                      Launch
                    </button>
                  </div>
                </div>
              </>
            );
          })
        ) : activeNavigation === 2 ? (
          vtMarketApps.map((item, index) => {
            return (
              <div key={index} className="">
                <div
                  className="w-[176px] mt-[70px] mb-[-70px] hover:scale-110 ease-in duration-200"
                  key={index}
                >
                  <div className="cursor-pointer border-[1px] border-[lightgray] h-[180px] border-dashed rounded-md p-[14px] overflow-hidden flex flex-col items-center justify-center">
                    {/* Centered Content */}
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[41px] font-poppins">
                        <img
                          src={item.icon}
                          alt=""
                          className="h-[44px] w-[44px] rounded-full object-cover"
                        />
                      </span>
                    </div>

                    {/* Text Content */}
                    <span className="text-[11px] font-poppins text-[#6f6f6f] text-center mt-2 block overflow-hidden">
                      <p className="font-semibold truncate">{item.name}</p>
                      <p className="truncate">{item.description}</p>
                    </span>

                    {/* Button */}
                    <button
                      className="text-[12px] font-poppins text-[#6f6f6f] bg-[#ffffff] pt-[2px] pr-[12px] pb-[0px] pl-[17px] rounded-md mt-2 w-max focus:outline-none hover:bg-[#999999] hover:text-[white] border-[1px] border-[#e5e5e5] self-end"
                      onClick={() => setSubscribeApp(true)}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : activeNavigation === 3 ? (
          <div className=" flex flex-col  md:flex-row md:gap-[100px] w-full justify-around global_text">
            {/* 1sst div */}
            <div className="border-[1px] border-[lightgray] h-[300px] w-full  md:w-[50%] p-[20px] bg-[#F8F9FF] rounded-xl">
              <div className="flex justify-center gap-4 items-center">
                <img
                  src="https://oneid.veevotech.com/org_dp/files/10467752-default.jpeg"
                  alt=""
                  className="h-[100px] w-[100px] bg-white p-[10px] rounded-full"
                />
                <p className="flex flex-col items-start mb-7">
                  <span className="text-[20px] font-semibold">XYZ Badar</span>
                  <span>IT/Sotware Services</span>
                </p>
              </div>
              <div className="w-[300px] text-start flex flex-col gap-2 mt-4">
                <div className="flex justify-between gap-2">
                  <span className="text-[14px] font-semibold">Location :</span>
                  <span className="w-[150px] truncate">
                    Islamabaddsdsdsdsds
                  </span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-[14px] font-semibold">Address :</span>
                  <span className="w-[150px] truncate">Islamabad</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-[14px] font-semibold">Contact# :</span>
                  <span className="w-[150px] truncate">223232323232</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-[14px] font-semibold">Email :</span>
                  <span className="w-[150px] truncate">2323</span>
                </div>
              </div>

              <div className="flex w-full justify-end gap-4 mt-4">
                <button
                  className="w-[80px] rounded-xl bg-white border-[1px] border-[#e5e5e5]"
                  onClick={() => setOpenCreateOrg(true)}
                >
                  Edit
                </button>
              </div>
            </div>
            {/* 2nd div */}
            <div className="w-full flex flex-col gap-5 md:flex-row flex-wrap">
              <div onClick={() => setActiveNavigation(2)}>
                <div className="cursor-pointer  flex justify-center w-[176px] items-center border-[1px] border-[lightgray]  h-[141px] border-dashed rounded-md hover:bg-[#777373] ease-in duration-200">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[41px] font-poppins">
                      {<DashboardIcons.plus />}
                    </span>
                  </div>
                </div>
              </div>
              {organizationData?.map((item, index) => {
                return (
                  <>
                    <div
                      className=" w-[176px] hover:scale-110 ease-in duration-200"
                      key={index}
                      onClick={() => setActiveNavigation(3)}
                    >
                      <div className="cursor-pointer  flex flex-col justify-center items-center border-[1px] border-[lightgray]  h-[141px] border-dashed rounded-md">
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-[41px] font-poppins">
                            <img
                              src={item.icon}
                              alt=""
                              className="h-[56px] rounded-full"
                            />
                          </span>
                          <span className="text-[14px]">{item.name}</span>
                        </div>
                        <div className="flex w-full justify-end gap-4 mt-4">
                          <button
                            className="text-[12px] mr-2 w-[80px] rounded-xl bg-white border-[1px] border-[#e5e5e5]"
                            onClick={() => setManageSubscriptions(true)}
                          >
                            Manage
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* ============== */}

      <CustomCenteredModal
        open={openCreateOrg}
        size="xxl"
        onClose={() => setOpenCreateOrg(false)}
        title="Add Organization"
        bodyContent={<CreateOrganization />}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        infoIcon={<DashboardIcons.infoIcon />}
      />

      <CustomCenteredModal
        open={manageSubscriptions}
        size="md"
        onClose={() => setManageSubscriptions(false)}
        title="Manage App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        bodyContent={
          <ManageApp setManageSubscriptions={setManageSubscriptions} />
        }
      />

      <CustomCenteredModal
        open={subscribeApp}
        size="md"
        onClose={() => setSubscribeApp(false)}
        title="Select Workspace"
        bodyContent={<SubscribeApp />}
      />
    </div>
  );
};

export default Home;
