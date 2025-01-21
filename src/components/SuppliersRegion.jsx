import React from "react";
import Flag from "react-world-flags"; // Import the react-world-flags package

export default function SuppliersRegion() {
  return (
    <div className="py-6 px-6 md:px-0">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Suppliers by region
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {[
          {
            countryCode: "AE",
            country: "Arabic Emirates",
            domain: "shopname.ae",
          },
          {
            countryCode: "AU",
            country: "Australia",
            domain: "shopname.au",
          },
          {
            countryCode: "US",
            country: "United States",
            domain: "shopname.us",
          },
          {
            countryCode: "RU",
            country: "Russia",
            domain: "shopname.ru",
          },
          {
            countryCode: "IT",
            country: "Italy",
            domain: "shopname.it",
          },
          {
            countryCode: "DK",
            country: "Denmark",
            domain: "denmark.com.dk",
          },
          {
            countryCode: "FR",
            country: "France",
            domain: "shopname.fr",
          },
          {
            countryCode: "AE",
            country: "Arabic Emirates",
            domain: "shopname.ae",
          },
          {
            countryCode: "CN",
            country: "China",
            domain: "shopname.cn",
          },
          {
            countryCode: "GB",
            country: "Great Britain",
            domain: "shopname.co.uk",
          },
        ].map((supplier, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 p-3 hover:bg-gray-100 rounded-lg transition-colors text-center md:text-left"
          >
            <Flag
              code={supplier.countryCode} // Use the country code for the flag
              className="w-8 h-6 sm:w-6 sm:h-4 mt-1"
            />
            <div>
              <h2 className="font-medium text-gray-900 text-sm sm:text-base">
                {supplier.country}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">{supplier.domain}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
