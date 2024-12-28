"use client";
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
import { Tabs, Tab } from "@nextui-org/tabs";
const Header = () => {
  const tabs = [
    {
      label: "All Category",
      content: "conten 1",
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
      content: "Cloths",
    },
  ];
  return (
    <header className="md:border-b">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 md:border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} size="2xl" className="text-black" />
          </button>
          <a
            href="#"
            className="flex items-center space-x-2 rtl:space-x-reverse w-60 md:w-auto"
          >
            <Image src={"/logos.png"} width={50} height={50} alt="Logog" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Brand
            </span>
          </a>
          <div className="md:hidden justify-self-end flex justify-between space-x-4">
            <a href="#">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </a>
          </div>
          <div className="hidden md:flex">
            <div className="flex-1 mx-8 rounded-lg max-w-2xl">
              <div className="relative flex items-center rounded-lg border border-gray-300 focus-within:border-none focus-within:ring-blue-500 focus-within:ring-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-96 px-4 rounded-l-lg border-none outline-none focus:ring-0"
                />
                <div className="relative">
                  <div className="relative inline-block text-left">
                    <div className="border-l">
                      <button
                        type="button"
                        className="inline-flex w-36 justify-center  gap-x-1.5 px-3 py-3 text-sm  text-gray-900 shadow-sm  hover:bg-gray-50"
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
                    {/* <div
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg  ring-black/5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          id="menu-item-0"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          id="menu-item-1"
                        >
                          Duplicate
                        </a>
                      </div>
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          id="menu-item-2"
                        >
                          Archive
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          id="menu-item-3"
                        >
                          Move
                        </a>
                      </div>
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          id="menu-item-4"
                        >
                          Share
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          id="menu-item-5"
                        >
                          Add to favorites
                        </a>
                      </div>
                      <div className="py-1" role="none">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          id="menu-item-6"
                        >
                          Delete
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
                <button className="px-6 py-2.5 w-44 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden rounded-lg border border-gray-300 w-full mt-2.5">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 flex flex-col items-center"
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="text-sm mt-1">Profile</span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 flex flex-col items-center"
              >
                <FontAwesomeIcon icon={faMessage} />
                <span className="text-sm mt-1">Message</span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 flex flex-col items-center"
              >
                <FontAwesomeIcon icon={faHeart} />
                <span className="text-sm mt-1">Orders</span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 flex flex-col items-center"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="text-sm mt-1">My cart</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Categories */}
      <div className="max-w-7xl mx-auto sm:px-5 md:block hidden">
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
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Help
                {/* <i className="fas fa-chevron-down ml-1 text-xs"></i> */}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                English, USD
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Ship to
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden mx-4">
        <div
          dir="ltr"
          data-orientation="horizontal"
          className="w-full overflow-hidden"
        >
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="scroll-smooth items-center justify-start text-center rounded-md bg-muted p-1 text-muted-foreground flex space-x-4 overflow-x-auto scrollbar-hide"
            data-orientation="horizontal"
          >
            {tabs.map((item,index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-:R1l97nenb:-content-tab1"
                data-state="inactive"
                id="radix-:R1l97nenb:-trigger-tab1"
                className="inline-flex bg-gray-100 font-md rounded-lg text-blue-500 items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
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
    </header>
  );
};

export default Header;
