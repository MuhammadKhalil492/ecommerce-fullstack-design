import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCartShopping,
  faMessage,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-center bg-white shadow-md">
      <nav className="container">
        <div className="hidden md:flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-9">
            <div className="flex items-center space-x-2">
              <div className="w-16 h-16 rounded flex items-center justify-center">
                <Image
                  src="/logos.png"
                  width={150}
                  height={150}
                  className="w-full h-fulltext-white"
                />
              </div>
              <span className="text-xl font-semibold text-blue-500">Brand</span>
            </div>
            <div className="flex items-center border rounded focus-within:border-blue-600 overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 text-gray-700 w-96"
              />
              <select className="px-4 py-2 bg-transparent focus:outline-none text-gray-700">
                <option>All category</option>
                <option>Electronics</option>
                <option>Clothes</option>
              </select>
              <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faHome} />
              <span className="text-gray-700 text-sm">Profile</span>
            </div>
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faMessage} />
              <span className="text-gray-700 text-sm">Message</span>
            </div>
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faHeart} />
              <span className="text-gray-700 text-sm">Orders</span>
            </div>
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="text-gray-700 text-sm">My cart</span>
            </div>
          </div>
        </div>

        <div className="flex md:hidden items-center justify-between px-4 py-3">
          <button>
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A5.002 5.002 0 015 9m10 0a5.002 5.002 0 010 8.804M9 21h6M12 3v9"
                />
              </svg>
            </div>
            <span className="text-xl font-semibold text-blue-500">Brand</span>
          </div>

          <div className="flex items-center space-x-4">
            <button>
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h18M9 12l2 2 4-4"
                />
              </svg>
            </button>
            <button>
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h18M9 12l2 2 4-4"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:hidden px-4 py-3">
          <div className="flex items-center border rounded-md px-3 py-2">
            <svg
              className="w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.35-4.35M14.4 11.25A6.75 6.75 0 1111.25 4.5"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent focus:outline-none text-sm text-gray-700 ml-2"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <button className="px-4 py-2 text-blue-500 bg-gray-100 rounded-md hover:bg-gray-200">
              All category
            </button>
            <button className="px-4 py-2 text-blue-500 bg-gray-100 rounded-md hover:bg-gray-200">
              Gadgets
            </button>
            <button className="px-4 py-2 text-blue-500 bg-gray-100 rounded-md hover:bg-gray-200">
              Clothes
            </button>
            <button className="px-4 py-2 text-blue-500 bg-gray-100 rounded-md hover:bg-gray-200">
              Accessories
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
