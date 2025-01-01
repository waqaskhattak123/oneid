import { useState } from "react";
import {
  forMeApps,
  HomeNavigationUils,
  organizationData,
  vtMarketApps,
  vtMarketAppsButtons,
} from "../../../utils/DashboardUtils";
import "../../Dashboard/Dashboard.css";
import { DashboardIcons } from "../../../assets/Icons";

const Home = () => {
  const [activeNavigation, setActiveNavigation] = useState(0);
  const handleNavigation = (index) => {
    setActiveNavigation(index);
  };
  return (
    <div className=" w-full p-[50px]">
      <div className=" flex gap-[20px] border-b-[1px] border-b-[lightgray] w-[36%] mt-4">
        {HomeNavigationUils.map((item, index) => (
          <div
            key={index}
            className={`${
              index === activeNavigation ? "navigationActive" : ""
            } pt-4 ml-2 font-poppins text-[#6f6f6f] w-[150px] text-center`}
            onClick={() => handleNavigation(index)}
          >
            <span className="text-[14px] font-poppins cursor-pointer ">
              {item.title}
            </span>
          </div>
        ))}
      </div>
      {/* conditional Render */}
      <div className="flex flex-wrap w-full gap-4 mt-8">
        {activeNavigation === 0 ? (
          <div>
            <div className="cursor-pointer  flex justify-center items-center border-[1px] border-[lightgray]  h-[141px] border-dashed rounded-md">
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
        ) : 
        activeNavigation === 2 ? (
          <div className="flex flex-col gap-4 relative flex-wrap mb-6">
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
        ) : (
          ""
        )
        }
        {activeNavigation === 0
          ? organizationData?.map((item, index) => {
              return (
                <>
                  <div className="w-[176px]" key={index}>
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
          : activeNavigation === 1
          ? forMeApps.map((item, index) => {
              return (
                <>
                  <div className="w-[176px]" key={index}>
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
          : activeNavigation === 2
          ? vtMarketApps.map((item, index) => {
              return (
                <div key={index} className="">
                  {/* {index === 0 && (
                    <div className="flex gap-4 relative flex-wrap mb-6">
                      <div className="flex gap-4">
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
                  )} */}
                  <div className="w-[176px] mt-[70px] mb-[-70px]" key={index}>
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
                      <button className="text-[12px] font-poppins text-[#6f6f6f] bg-[#ffffff] pt-[2px] pr-[12px] pb-[0px] pl-[17px] rounded-md mt-2 w-max focus:outline-none hover:bg-[#999999] hover:text-[white] border-[1px] border-[#e5e5e5] self-end">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>

      {/* ============== */}
    </div>
  );
};

export default Home;
