"use client";
import Flag from "react-world-flags"; // Import the react-world-flags package
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMessage,
  faHeart,
  faUser,
  faChevronDown,
  faSearch,
  faBars,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Header = () => {
  const [countryCode, setCountryCode] = useState("DE"); // Germany country code
  const tabs = [
    {
      label: "All Category",
      content: "content 1",
    },
    {
      label: "Gadgets",
      content: "Gadgets",
    },
    {
      label: "Cloths",
      content: "Cloths",
    },
    {
      label: "Accessories",
      content: "Accessories",
    },
  ]

  return (
    <div className="px-4 lg:px-20 mx-auto">
      <nav className="bg-white dark:bg-gray-900">
        <div className="container flex flex-wrap items-center  justify-between py-4 mx-auto">
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} size="2xl" className="text-black" />
          </button>
          <a
            href="#"
            className="flex lg:items-center lg:space-x-2 rtl:space-x-reverse lg:w-32"
          >
            <Image src={"/logos.png"} width={50} height={50} alt="Logog" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Brand
            </span>
          </a>
          <div className="flex justify-between space-x-4 lg:hidden justify-self-end">
            <a href="#">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </a>
          </div>
          <div className="hidden lg:flex bg-purple-400 ">
            <div className="rounded-lg">
              <div className="relative flex items-center border border-gray-300 rounded-lg focus-within:border-none focus-within:ring-blue-500 focus-within:ring-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 border-none rounded-l-lg outline-none lg:w-20 xl:w-96 focus:ring-0"
                />
                <div className="relative">
                  <div className="relative inline-block text-left">
                    <div className="border-l">
                      <button
                        type="button"
                        className="inline-flex lg:w-24 xl:w-36 justify-center  gap-x-1.5 px-3 py-3 text-sm  text-gray-900 shadow-sm  hover:bg-gray-50"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        All Category
                        <span>
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            className="text-sm text-normal"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <button className="px-6 py-2.5 lg:w-10 xl:w-44 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="lg:hidden rounded-lg border border-gray-300 w-full mt-2.5">
            <div className="relative w-full">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search branch name..."
                required
              />
            </div>
          </div>

          <div
            className="items-center  xl:justify-between hidden  w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-search"
          >
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="flex flex-col items-center text-gray-600 hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="mt-1 text-sm">Profile</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center text-gray-600 hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faMessage} />
                <span className="mt-1 text-sm">Message</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center text-gray-600 hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faHeart} />
                <span className="mt-1 text-sm">Orders</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center text-gray-600 hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="mt-1 text-sm">My cart</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Categories */}
      <div className="hidden mx-auto container lg:block">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-8">
            <button className="flex items-center mr-2 text-gray-700 hover:text-gray-900">
              <FontAwesomeIcon icon={faBars} size="lg" />
              <span className="ml-2">All category</span>
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Hot offers
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Gift boxes
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Projects
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Menu item
            </a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium">
                <span>Help</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium">
                <span>English, USD</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-2 text-sm font-medium">
                <span>Ship to</span>
                <Flag
                  code={countryCode} // Use Germany's country code "DE"
                  className="w-5 h-4 object-cover rounded-sm"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:mx-4 lg:hidden">
        <div
          dir="ltr"
          data-orientation="horizontal"
          className="w-full overflow-hidden"
        >
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="flex items-center justify-start p-1 space-x-4 overflow-x-auto text-center rounded-md scroll-smooth bg-muted text-muted-foreground scrollbar-hide"
            data-orientation="horizontal"
          >
            {tabs.map((item, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-:R1l97nenb:-content-tab1"
                data-state="inactive"
                id="radix-:R1l97nenb:-trigger-tab1"
                className="inline-flex bg-gray-100 font-md rounded-lg text-blue-500 items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                {item.label}
              </button>
            ))}
          </div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:R1l97nenb:-trigger-tab1"
            id="radix-:R1l97nenb:-content-tab1"
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          ></div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:R1l97nenb:-trigger-tab2"
            id="radix-:R1l97nenb:-content-tab2"
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          ></div>
          <div
            data-state="inactive"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:R1l97nenb:-trigger-tab3"
            id="radix-:R1l97nenb:-content-tab3"
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
