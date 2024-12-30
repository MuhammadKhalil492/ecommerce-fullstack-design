"use client";
import CategorySection from "@/components/CategorySection";
import DealOffer from "@/components/DealOffer";
import MainCategory from "@/components/MainCategory";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center h-100 bg-blue-50">
      <section className="container md:gap-y-4">
        <MainCategory />
        <DealOffer />
        <CategorySection
          leftImage="/image92.png"
          heading="Home and outdoor"
          btnLink="#"
        />
        <CategorySection
          leftImage="/image98.png"
          heading="Consumer electronics and gadgets"
          btnLink="#"
        />
      </section>
      <section className="relative min-h-screen">
        {/* <!-- Background image with gradient overlay --> */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90"></div>
          <img
            src="/image102.png"
            alt="background"
            className="object-cover w-full h-full"
          />
        </div>

        {/* <!-- Content --> */}
        <div className="container relative z-10 flex flex-wrap items-center justify-between gap-8 px-4 py-12 mx-auto">
          {/* <!-- Left Column --> */}
          <div className="w-full text-white lg:w-5/12">
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              An easy way to send requests to all suppliers
            </h1>
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
                  <div className="flex-grow">
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
                  className="w-full px-4 py-3 font-medium text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700"
                >
                  Send inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
