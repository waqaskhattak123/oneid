import React, { useState } from "react";
import {
  NavbarUtills,
  NavbarUtillsProfile,
  NavbarUtillsWallet,
} from "../utils/NavbarUtills";

const Navbar = () => {
  const [userProfile, setUserProfile] = useState(false);
  const [addBalance, setUserBalance] = useState(false);

  return (
    <div>
      <nav className="bg-white text-[14px] border-gray-200 dark:bg-gray-900 border-[1px] border-b-[lightgray]">
        <div className="max-w-screen-full flex flex-wrap items-center lg:justify-between gap-8 mx-auto pt-[20px] pr-[33px] pl-[33px] pb-[1px]">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://s3-alpha-sig.figma.com/img/acef/9441/3ddf521f500a11fc99e556959eb77e28?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qnmfo8VEdtnuj3GNMiRJd6VFAF6G2upTM4atAIPOyDrPE7ezt6sshnKkVMy6qMRsHRl8c1VOj8Q1QWeZbG6DpqXUBIn6wujiNnNdO097Z1yAvZAL9rsrYWtZxT8nR4vl-j9yvQulcoTUQpRn3WIIz31XwVHCbILDeAE2tA7IZsOv89NXKdpEKTH4GMzCsXr-~fV52GYrJXABLMhy6bXlXzNPSK0g1XYmY~DcTCa4fxd1ZXSmOCmEcfuVCtUFkFe93RJveJzPSIITApLf8B-ZAFX6BiIK4CxKmx2Kl5f4gAueiFwigN8v8Fvhn-RF9Ph3v~4XPMRp0wg8~QQBR9gGKA__"
              className="h-[55px] w-[71px]"
              alt="Flowbite Logo"
            />
            <span className="self-center text-[15px] font-poppins font-semibold whitespace-nowrap dark:text-white text-[#6f6f6f]">
              VEEVO 1 ID
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* one wallet logo  */}
              <div className="relative flex justify-items-center sm:hidden  md:block items-center space-x-3 rtl:space-x-reverse flex-col">
                <button
                  type="button"
                  className="flex text-sm  bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                  onClick={() => setUserBalance(!addBalance)}
                >
                  <img
                    className="w-11 h-11 rounded-full"
                    src="https://oneid.veevotech.com/frontend_assets/images/1Wallet.png"
                    alt="user photo"
                  />
                </button>
                <span className="text-start font-poppins text-[12px]">
                  OneWallet
                </span>
                {/* Dropdown menu */}
                {addBalance && (
                  <div
                    className="z-50 absolute top-12 my-4 w-[175px] right-0 left-auto text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                  >
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      <li>
                        <span className="font-poppins text-[#6f6f6f] block px-4 py-2 text-xs hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                          Your Current Balance is:
                        </span>
                        <p className="font-poppins font-[600] text-[#1AAFD0] block px-4 py-2 text-[30px] hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                          90 <span className="text-[17px] text-[#6f6f6f]">PKR</span>
                        </p>
                      </li>
                      {NavbarUtillsWallet.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item.path}
                            className="block px-4 py-2 font-poppins text-[#6f6f6f] text-xs hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                          >
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
              <div className=" sm:hidden text-[10px] justify-items-center md:block flex relative items-center space-x-3 rtl:space-x-reverse flex-col">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                  onClick={() => setUserProfile(!userProfile)}
                >
                  <img
                    className=" w-11 h-11 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="user photo"
                  />
                </button>
                <span className="font-poppins text-[12px]">Badar</span>
                {/* Dropdown menu */}
                {userProfile && (
                  <div
                    className="z-50 absolute top-12 my-4 right-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                  >
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      {NavbarUtillsProfile.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/* =============== */}
            </div>

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
              onClick={() => setUserProfile(!userProfile)}
            >
              <span className="sr-only">Open main menu</span>
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
          </div>
          {/* dashboard, my sbsription.... */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {NavbarUtills.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="block py-2 px-3 text-[#6f6f6f] font-[600] font-poppins  rounded md:bg-transparent md:p-0 "
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
    </div>
  );
};

export default Navbar;
