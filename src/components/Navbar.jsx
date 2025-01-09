import React, { useEffect, useRef, useState } from "react";
import {
  NavbarUtills,
  NavbarUtillsProfile,
  NavbarUtillsWallet,
} from "../utils/NavbarUtills";
import "./index.css";
import NavbarServices from "../viewModel/NavbarViewModel/NavbarServices";
import { useNavigate } from "react-router-dom";
import { CustomCenteredModal } from "./CenteredModal";
import ShareBalance from "../view/ShareBalance/ShareBalance";
import ViewHistory from "../view/ViewHistory/ViewHistory";
import RechargeBalanceCompo from "../view/RechargeBalance/RechargeBalance";
import { NavbarImages } from "../assets/Images";

const Navbar = () => {
  const {
    walletDropDown,
    setWalletDropDown,
    userProfile,
    setUserProfile,
    activeNavigation,
    setActiveNavigation,
    dropdownRef,
    sharebalance,
    setShareBalance,
    viewHistory,
    setViewHistory,
    RechargeBalance,
    setRechargeBalance,
    handleNavigation,
    handleNavbarNavigation,
    handleProfileNavigation,
    buttonRef,
    navigate,
    toggleDropdown,
  } = NavbarServices();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setUserProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // console.log("recharg ", RechargeBalance);

  return (
    <div className="">
      <nav className="bg-white text-[14px] border-gray-200 dark:bg-gray-900 border-[1px] border-b-[lightgray]">
        <div className="max-w-screen-full flex flex-wrap items-center justify-between lg:justify-between gap-8 mx-auto pt-[20px] pr-[33px] pl-[33px] pb-[1px]">
          <a
            className="flex items-center cursor-pointer space-x-3 rtl:space-x-reverse"
            onClick={() => navigate("/")}
          >
            <img
              src={NavbarImages.oneIdLogo}
              className="h-[55px] w-[71px]"
              alt="Flowbite Logo"
            />
            <span className="self-center text-[15px] font-poppins font-semibold whitespace-nowrap dark:text-white text-[#6f6f6f]">
              VEEVO 1 ID
            </span>
          </a>
          <div className=" flex flex-row  justify-between md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* one wallet logo  */}
              <div className="relative md:flex justify-items-center hidden  items-center space-x-3 rtl:space-x-reverse flex-col">
                <button
                  type="button"
                  className="flex text-sm  bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                  onClick={() => setWalletDropDown(!walletDropDown)}
                >
                  <img
                    className="w-11 h-11 rounded-full"
                    src={NavbarImages.oneWallet}
                    alt="user photo"
                  />
                </button>
                <span className="text-start font-poppins text-[12px]">
                  One Wallet
                </span>
                {/* Dropdown menu */}
                {walletDropDown && (
                  <div
                    className="z-50 absolute top-12 my-4 w-[175px] right-0 left-auto text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                    ref={dropdownRef}
                  >
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      <li>
                        <span className="font-poppins text-[#6f6f6f] block px-4 py-2 text-xs hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                          Your Current Balance is:
                        </span>
                        <p className="font-poppins font-[600] text-[#1AAFD0] block px-4 py-2 text-[30px] hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                          90{" "}
                          <span className="text-[17px] text-[#6f6f6f]">
                            PKR
                          </span>
                        </p>
                      </li>
                      {NavbarUtillsWallet.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => handleNavigation(item, index)}
                        >
                          <a className="cursor-pointer block px-4 py-2 font-poppins text-[#6f6f6f] text-xs hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* =============== */}
              {/* user profile */}
              <div className="hidden text-[10px] justify-items-center md:flex relative items-center space-x-3 rtl:space-x-reverse flex-col">
                <button
                  ref={buttonRef}
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded={userProfile}
                  onClick={toggleDropdown}
                >
                  <img
                    className="w-11 h-11 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="user photo"
                  />
                </button>
                <span className="font-poppins text-[12px]">Badar</span>

                {userProfile && (
                  <div
                    ref={dropdownRef}
                    className="z-50 absolute top-12 my-4 right-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                  >
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      {NavbarUtillsProfile.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => handleProfileNavigation(item, index)}
                          className="cursor-pointer"
                        >
                          <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/* w */}
              {/* =============== */}
            </div>
            <div className="md:hidden flex justify-between items-center w-full md:w-auto md:order-1">
              {/* ======== svg====== */}
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded="false"
                onClick={() => setUserProfile(!userProfile)}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              {userProfile && (
                <div
                  className="z-50 absolute top-12 my-4  text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    {NavbarUtillsProfile.map((item, index) => (
                      <li key={index} className="cursor-pointer">
                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* =============== */}
            </div>
          </div>
          {/* dashboard, my sbsription.... */}
          <div
            className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {NavbarUtills.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleNavbarNavigation(item, index)}
                >
                  <a
                    // href={item.path}
                    className={`${
                      index === activeNavigation
                        ? "navbarActive text-[#1AAFD0] ease-out duration-700 font-semibold font-poppins"
                        : " block cursor-pointer py-2  px-3 text-[#6f6f6f] font-[600] font-poppins  rounded md:bg-transparent md:p-0"
                    } hover:font-semibold hover:text-[#1AAFD0] dark:text-gray-300 dark:hover:text-[#1AAFD0]`}
                    aria-current="page"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* ========= */}

      {sharebalance && (
        <CustomCenteredModal
          open={sharebalance}
          size="md"
          onClose={() => setShareBalance(false)}
          title="Share Balance"
          bodyContent={<ShareBalance />}
        />
      )}
      {/* ========= */}
      {/* ========= */}

      {viewHistory && (
        <CustomCenteredModal
          open={viewHistory}
          size="lg"
          onClose={() => setViewHistory(false)}
          title="Manaual Payment History"
          bodyContent={<ViewHistory />}
        />
      )}
      {/* ========= */}

      {RechargeBalance && (
        <CustomCenteredModal
          open={RechargeBalance}
          size="xl"
          onClose={() => setRechargeBalance(false)}
          title="Add Payment"
          bodyContent={<RechargeBalanceCompo />}
        />
      )}
      {/* ========= */}
    </div>
  );
};

export default Navbar;
