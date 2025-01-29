import React from 'react'

export default function FilterBrands() {
  return (
    <div>
      <div class="flex flex-wrap items-center gap-2 py-4">
        <div
          class="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-md bg-white">
          <span class="text-md font-normal text-[#505050]">Samsung</span>
          <button class="ml-1 text-gray-400 hover:text-gray-600">×</button>
        </div>

        <div
          class="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-md bg-white">
          <span class="text-md font-normal text-[#505050]">Apple</span>
          <button class="ml-1 text-gray-400 hover:text-gray-600">×</button>
        </div>

        <div
          class="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-md bg-white">
          <span class="text-md font-normal text-[#505050]">Poco</span>
          <button class="ml-1 text-gray-400 hover:text-gray-600">×</button>
        </div>

        <div
          class="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-md bg-white">
          <span class="text-md font-normal text-[#505050]">Metallic</span>
          <button class="ml-1 text-gray-400 hover:text-gray-600">×</button>
        </div>

        <div
          class="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-md bg-white">
          <span class="text-md font-normal text-[#505050]">4 star</span>
          <button class="ml-1 text-gray-400 hover:text-gray-600">×</button>
        </div>

        <div
          class="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-md bg-white">
          <span class="text-md font-normal text-[#505050]">3 star</span>
          <button class="ml-1 text-gray-400 hover:text-gray-600">×</button>
        </div>

        <button class="text-sm text-blue-600 hover:text-blue-700">Clear all
          filter</button>
      </div>
    </div>
  )
}
