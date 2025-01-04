"use client";
import CategorySection from "@/components/CategorySection";
import DealOffer from "@/components/DealOffer";
import MainCategory from "@/components/MainCategory";
import OurService from "@/components/Services/OurService";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
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
        <div className="relative px-8 py-10">
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
        {/* Recomedned section */}
        <div className="container px-4 py-8 mx-auto">
          <h1 className="mb-6 text-2xl font-bold">Recommended items</h1>

          {/* <!-- Grid Container --> */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {/* <!-- Item 1 --> */}
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 aspect-square">
                <img
                  src="/2.png"
                  alt="T-shirt"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">$10.30</p>
                <p className="text-sm text-gray-600">
                  T-shirts with multiple colors, for men
                </p>
              </div>
            </div>

            {/* <!-- Item 2 --> */}
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 aspect-square">
                <img
                  src="/3.png"
                  alt="Winter jacket"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">$10.30</p>
                <p className="text-sm text-gray-600">
                  Jeans shorts for men blue color
                </p>
              </div>
            </div>

            {/* <!-- Item 3 --> */}
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 aspect-square">
                <img
                  src="/7.png"
                  alt="Blue blazer"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">$12.50</p>
                <p className="text-sm text-gray-600">
                  Brown winter coat medium size
                </p>
              </div>
            </div>

            {/* <!-- Item 4 --> */}
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 aspect-square">
                <img
                  src="/6.png"
                  alt="Wallet"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">$34.00</p>
                <p className="text-sm text-gray-600">
                  Jeans bag for travel for men
                </p>
              </div>
            </div>

            {/* <!-- Item 5 --> */}
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 aspect-square">
                <img
                  src="/5.png"
                  alt="Backpack"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">$99.00</p>
                <p className="text-sm text-gray-600">Leather wallet</p>
              </div>
            </div>

            {/* <!-- Item 6 --> */}
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 aspect-square">
                <img
                  src="/11.png"
                  alt="Denim shorts"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">$9.99</p>
                <p className="text-sm text-gray-600">
                  Canon camera black, 100x zoom
                </p>
              </div>
            </div>

            {/* <!-- Item 7 --> */}
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 aspect-square">
                <img
                  src="/9.png"
                  alt="Headphones"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">$8.99</p>
                <p className="text-sm text-gray-600">
                  Headset for gaming with mic
                </p>
              </div>
            </div>

            {/* <!-- Item 8 --> */}
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 aspect-square">
                <img
                  src="/5.png"
                  alt="Smartwatch"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">$10.30</p>
                <p className="text-sm text-gray-600">
                  Smartwatch silver color modern
                </p>
              </div>
            </div>

            {/* <!-- Item 9 --> */}
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 aspect-square">
                <img
                  src="/4.png"
                  alt="Wallet"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">$10.30</p>
                <p className="text-sm text-gray-600">
                  Blue wallet for men leather metarfial
                </p>
              </div>
            </div>

            {/* <!-- Item 10 --> */}
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 aspect-square">
                <img
                  src="/10.png"
                  alt="Travel bag"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold">$80.95</p>
                <p className="text-sm text-gray-600">
                  Jeans bag for travel for men
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Service sections */}
        <div className="px-4 py-12 mx-auto max-w-7xl">
          <h2 className="relative inline-block mb-8 text-3xl font-bold">
            Our extra services
            {/* <span className="absolute bottom-0 left-0 w-full h-1 transform -translate-y-2 bg-blue-500"></span> */}
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* <!-- Source from Industry Hubs --> */}
            <div className="overflow-hidden border border-gray-300 rounded-lg shadow-lg">
              <div className="relative h-48 bg-gradient-to-r from-black/70 to-transparent/60">
                <img
                  src="/image108.png"
                  alt="Warehouse with boxes"
                  className="object-fill h-full"
                />
                <div className="absolute bg-blue-100 border-2 border-white rounded-full p-7 -bottom-6 right-4">
                  <i className="text-xl text-blue-600 fas fa-search"></i>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-medium">
                  Source from Industry Hubs
                </h3>
              </div>
            </div>

            {/* <!-- Customize Your Products --> */}
            <OurService icon="faPalette" image="/image104.png" imgAlt="Color palette" heading="Customize Your Products"/>

            {/* <!-- Fast, reliable shipping --> */}
            <OurService icon="faPalette" image="/image106.png" imgAlt="Product inspection" heading="Fast, reliable shipping by ocean or air"/>

            {/* <!-- Product monitoring --> */}
            <OurService icon="faPalette" image="/image107.png" imgAlt="Cargo plane and containers" heading="Product monitoring and inspection"/>
            
          </div>
        </div>
      </section>
    </div>
  );
}
