import React from 'react';

export default function ProductMbl() {

  return (
    <div>
      <div class="bg-white shadow-sm rounded-lg border p-4">

        <div class="mb-4">
          <h2 class="text-lg font-semibold text-gray-800">Home and outdoor</h2>
        </div>


        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

          <div class="border rounded-lg p-4 text-center hover:shadow-lg">
            <img
              src="/product1.png"
              alt="Smart watches"
              class="object-contain w-full h-32 mx-auto mb-4"
            />
            <h3 class="text-base font-medium text-gray-800">Smart watches</h3>
            <p class="text-sm text-gray-500">From USD 19</p>
          </div>

          <div class="border rounded-lg p-4 text-center hover:shadow-lg">
            <img
              src="/product2.png"
              alt="Smart watches"
              class="object-contain w-full h-32 mx-auto mb-4"
            />
            <h3 class="text-base font-medium text-gray-800">Smart watches</h3>
            <p class="text-sm text-gray-500">From USD 19</p>
          </div>
          <div class="border rounded-lg p-4 text-center hover:shadow-lg">
            <img
              src="/product3.png"
              alt="Smart watches"
              class="object-contain w-full h-32 mx-auto mb-4"
            />
            <h3 class="text-base font-medium text-gray-800">Smart watches</h3>
            <p class="text-sm text-gray-500">From USD 19</p>
          </div>
          <div class="border rounded-lg p-4 text-center hover:shadow-lg">
            <img
              src="/product4.png"
              alt="Smart watches"
              class="object-contain w-full h-32 mx-auto mb-4"
            />
            <h3 class="text-base font-medium text-gray-800">Smart watches</h3>
            <p class="text-sm text-gray-500">From USD 19</p>
          </div>
        </div>


        <div class="mt-4 text-right">
          <a
            href="#"
            class="text-blue-600 text-sm font-semibold hover:underline inline-flex items-center"
          >
            Source now
            <svg
              class="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>

    </div>
  )
}
