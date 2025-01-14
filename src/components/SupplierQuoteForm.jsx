import React from 'react'

export default function SupplierQuoteForm() {
  return (
    <div className="relative px-8 py-10 mt-6">
          {/* <!-- Background image with gradient overlay --> */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 rounded-lg opacity-90 bg-gradient-to-r from-[#2C7CF1]/100 to-[#00D1FF]/50"></div>
            <img
              src="/image102.png"
              alt="background"
              className="object-cover w-full h-full rounded-lg"
            />
        </div>

          {/* <!-- Content --> */}
        <div className="container relative z-10 flex flex-wrap justify-between">
            {/* <!-- Left Column --> */}
            <div className="w-full text-white lg:w-2/5">
              <p className="mb-4 text-4xl font-semibold leading-tight md:text-4xl">
                An easy way to send requests to all suppliers
              </p>
              <p className="text-lg opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
        </div>

            {/* <!-- Right Column - Form --> */}
           
            <div className="w-full lg:w-5/12">
              <div className="p-8 bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                  Send quote to suppliers
                </h2>
                <form>
                  {/* <!-- Item Input --> */}
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="What item you need?"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* <!-- Details Textarea --> */}
                  <div className="mb-4">
                    <textarea
                      placeholder="Type more details"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  {/* <!-- Quantity and Units Row --> */}
                  <div className="flex gap-4 mb-6">
                    <div className="">
                      <input
                        type="number"
                        placeholder="Quantity"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="w-32">
                      <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Pcs</option>
                        <option>Kg</option>
                        <option>M</option>
                      </select>
                    </div>
                  </div>

                  {/* <!-- Submit Button --> */}
                  <button
                    type="submit"
                    className="px-4 py-3 font-medium text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Send inquiry
                  </button>
                </form>
              </div>
            </div>
      </div>
    </div>
  )
}
