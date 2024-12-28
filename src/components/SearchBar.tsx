import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  return (
    <div className="flex">
     
      <div className="flex-1 mx-8 rounded-lg max-w-2xl">
        <div className="relative flex items-center rounded-lg border border-gray-300 focus-within:border-none focus-within:ring-blue-500 focus-within:ring-2">
          <input
            type="text"
            placeholder="Search"
            className="w-96 px-4 rounded-l-lg border-none outline-none focus:ring-0"
          />
          <div className="relative">
            <div className="relative inline-block text-left">
              <div>
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
              <div
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
              </div>
            </div>
          </div>
          <button className="px-6 py-2.5 w-44 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
