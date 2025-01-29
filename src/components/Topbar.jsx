import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilter, faChevronDown, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    category: false,
    brands: false,
    condition: false,
    features: false,
    rating: false,
    range: false,
  });

  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 100,
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-3 rounded-md bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Item Count */}
          <div className="text-sm text-gray-600 py-2 md:py-0">
            <span className="font-semibold text-gray-900">12,911</span> items in
            <span className="text-gray-900 text-sm font-semibold"> Mobile accessory</span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            {/* Verified Only Checkbox */}
            <label className="hidden lg:flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Verified only
            </label>

            {/* Sort Dropdown */}
            <div className="relative hidden lg:block">
              <select
                className="appearance-none bg-transparent pr-8 pl-2 py-1 text-sm text-gray-600 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Mobile Controls */}
            <div className="flex gap-4">
              <div className="border border-gray-200 px-2 py-1 rounded-md flex items-center cursor-pointer lg:hidden">
                <span className="text-sm font-bold px-3">Sort: Newest</span>
                <FontAwesomeIcon icon={faBars} />
              </div>
              <div
                className="border border-gray-200 px-2 py-1 rounded-md flex items-center cursor-pointer lg:hidden"
                onClick={toggleModal}
              >
                <span className="text-sm font-bold px-3">Filter</span>
                <FontAwesomeIcon icon={faFilter} />
              </div>
              <div className="flex items-center gap-2 border border-gray-200 rounded-md">
                <button className="p-1 text-gray-600 hover:bg-gray-200">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4H4v-4zm6 0h4v4H4v-4z"></path>
                  </svg>
                </button>
                <button className="p-1 text-gray-400 hover:bg-gray-200">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16v4H4V6zm0 8h16v4H4v-4z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 px-4">
          <div className="bg-white rounded-lg w-full max-w-md mx-auto p-6">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filter Options</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={toggleModal}
              >
                ✕
              </button>
            </div>

            {/* Filter Dropdowns */}
            <div className="space-y-4">
              {[
                { key: "category", label: "Category", options: ["Mobile accessory", "Electronics", "Smartphones", "System Unit"] },
                { key: "brands", label: "Brands", options: ["Samsung", "Apple", "Huawei", "Philco", "Lenovo"] },
                { key: "features", label: "Features", options: ["Metallic", "Plastic Cover", "8GB Ram", "Large Memory"] },
              ].map(({ key, label, options }) => (
                <div key={key} className="relative">
                  <button
                    onClick={() => toggleDropdown(key)}
                    className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {label}
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                  {dropdowns[key] && (
                    <div className="mt-2 bg-white shadow-lg rounded-md border border-gray-200">
                      <div className="p-4 space-y-2">
                        {options.map((option, index) => (
                          <label
                            key={index}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <input
                              type="checkbox"
                              name={key}
                              className="w-4 h-4 rounded border-gray-300 text-blue-600"
                            />
                            <span className="ml-2">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Condition Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("condition")}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Condition
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
                {dropdowns.condition && (
                  <div className="mt-2 bg-white shadow-lg rounded-md border border-gray-200">
                    <div className="p-4 space-y-2">
                      {["Any", "Refurbished", "Brand New", "Old items"].map((option, index) => (
                        <label
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <input
                            type="radio"
                            name="condition"
                            value={option}
                            className="w-4 h-4 rounded border-gray-300 text-blue-600"
                            onChange={() => console.log(`${option} selected`)} // Optional: Add handler here
                          />
                          <span className="ml-2">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Rating Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("rating")}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Rating
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
                {dropdowns.rating && (
                  <div className="mt-2 bg-white shadow-lg rounded-md border border-gray-200">
                    <div className="p-4 space-y-2">
                      {[5, 4, 3, 2, 1].map((stars, index) => (
                        <label
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <input
                            type="radio"
                            name="rating"
                            className="w-4 h-4 rounded border-gray-300 text-blue-600"
                          />
                          <span className="ml-2 flex items-center">
                            {Array(stars)
                              .fill(0)
                              .map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
                              ))}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Range Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("range")}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Price Range
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
                {dropdowns.range && (
                  <div className="mt-2 bg-white shadow-lg rounded-md border border-gray-200">
                    <div className="p-4 space-y-2">
                      <label className="flex items-center text-sm text-gray-600">
                        Min
                        <input
                          type="range"
                          name="min"
                          value={priceRange.min}
                          onChange={handleRangeChange}
                          min="0"
                          max="100"
                          className="w-full h-1 bg-gray-200 rounded-lg"
                        />
                      </label>
                      <label className="flex items-center text-sm text-gray-600">
                        Max
                        <input
                          type="range"
                          name="max"
                          value={priceRange.max}
                          onChange={handleRangeChange}
                          min="0"
                          max="100"
                          className="w-full h-1 bg-gray-200 rounded-lg"
                        />
                      </label>
                    </div>
                  </div>
                )}
              </div>

              {/* Apply Button */}
              <button
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4"
                onClick={toggleModal}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
