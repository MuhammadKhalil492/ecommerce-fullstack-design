import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <aside className="w-64 pt-4 pr-4 hidden lg:block">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-900">Category</h3>
            <button className="text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <span className="ml-2">Mobile accessory</span>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <span className="ml-2">Electronics</span>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <span className="ml-2">Smartphones</span>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <span className="ml-2">System Unit</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-900">Brands</h3>
            <button className="text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <span className="ml-2">Samsung</span>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <span className="ml-2">Apple</span>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <span className="ml-2">Huawei</span>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <span className="ml-2">Philco</span>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <span className="ml-2">Lenovo</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-900">Features</h3>
            <button className="text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <span className="ml-2">Metallic</span>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <span className="ml-2">Plastic cover</span>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <span className="ml-2">8GB Ram</span>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <span className="ml-2">Large Memory</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-900">Price range</h3>
          </div>
          <div className="px-2">
            <input type="range" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer" min="0" max="100" />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">Min</span>
              <span className="text-sm text-gray-600">Max</span>
            </div>
          </div>
          <button className="w-full mt-4 px-4 py-2 text-sm text-blue-600 hover:text-blue-700">
            Apply
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-900">Condition</h3>
            <button className="text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-600">
              <input type="radio" name="condition" className="w-4 h-4 border-gray-300 text-blue-600" />
              <span className="ml-2">Any</span>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="radio" name="condition" className="w-4 h-4 border-gray-300 text-blue-600" />
              <span className="ml-2">Refurbished</span>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="radio" name="condition" className="w-4 h-4 border-gray-300 text-blue-600" />
              <span className="ml-2">Brand new</span>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="radio" name="condition" className="w-4 h-4 border-gray-300 text-blue-600" />
              <span className="ml-2">Old items</span>
            </label>
          </div>
        </div>


        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-900">Ratings</h3>
            <button className="text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <div className="ml-2 flex">
                ★★★★★
              </div>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <div className="ml-2 flex">
                ★★★★☆
              </div>
            </label>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" />
              <div className="ml-2 flex">
                ★★★☆☆
              </div>
            </label>
          </div>
        </div>
      </aside>
    </div>
  )
}
