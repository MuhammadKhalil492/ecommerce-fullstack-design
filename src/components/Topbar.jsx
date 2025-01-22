import React from 'react'

export default function Topbar() {
  return (
    <div>
      <div className="container mx-auto px-4 py-3 rounded-md bg-white">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">12,911</span> items in
            <span className="text-gray-900 text-sm font-semibold"> Mobile accessory</span>
          </div>


          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              Verified only
            </label>
            <div className="relative">
              <select
                className="appearance-none bg-transparent pr-8 pl-2 py-1 text-sm text-gray-600 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <div
                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                <svg className="h-4 w-4" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>

            <div
              className="flex items-center gap-2 border border-gray-200 rounded-md">
              <button className="p-1 text-gray-600 hover:bg-gray-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"></path>
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
  )
}
