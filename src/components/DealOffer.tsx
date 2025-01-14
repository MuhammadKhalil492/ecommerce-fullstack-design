"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
interface Product {
  name: string;
  discount: number;
  image: string;
}
const DealOffer: React.FC = () => {
  const products: Product[] = [
    {
      name: "Smart watches",
      discount: -25,
      image: "/watch.png",
    },
    {
      name: "Laptops",
      discount: -15,
      image: "/laptop.png",
    },
    {
      name: "GoPro cameras",
      discount: -40,
      image: "/camera.png",
    },
    {
      name: "Headphones",
      discount: -25,
      image: "/headphone.png",
    },
    {
      name: "Canon cameras",
      discount: -25,
      image: "/mobile.png",
    },
  ];
  const responsive = {
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="bg-white shadow-sm md:rounded-lg md:border bg-card text-card-foreground">
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Left section with title and timer */}
        <div className="flex justify-between px-4 py-6 border-b md:border-none md:justify-start md:flex-col md:w-64">
          <div className="">
            <h2 className="text-xl font-semibold">Deals and offers</h2>
            <p className="text-base text-[#8B96A5] text-muted-foreground">
              Hygiene equipments
            </p>
          </div>

          {/* Timer */}
          <div className="flex md:mt-4 gap-x-2">
            <div className="flex flex-col items-center p-2 text-white bg-gray-500 rounded">
              <span className="font-bold">04</span>
              <span className="text-xs">Days</span>
            </div>
            <div className="flex flex-col items-center p-2 text-white bg-gray-500 rounded">
              <span className="font-bold">13</span>
              <span className="text-xs">Hour</span>
            </div>
            <div className="flex flex-col items-center p-2 text-white bg-gray-500 rounded">
              <span className="font-bold">34</span>
              <span className="text-xs">Min</span>
            </div>
            <div className="flex flex-col items-center p-2 text-white bg-gray-500 rounded">
              <span className="font-bold">56</span>
              <span className="text-xs">Sec</span>
            </div>
          </div>
        </div>

        {/* Right section with products */}

        <div className="hidden md:grid-cols-5 md:grid">
          {products.map((product, index) => (
            <div
              key={index}
              className="py-2 text-center border-l md:px-10 md:w-full"
            >
              <div className="w-full h-[150px] flex items-center">
              <img
                src={product.image}
                alt="Smart watch"
                className="object-fill mx-auto"
              />
              </div>
              <h2 className="mt-4 text-lg font-medium text-gray-800">
                {product.name}
              </h2>
              <div className="inline-block px-5 py-1 my-2 text-sm font-semibold text-red-600 bg-red-100 rounded-full">
                {product.discount} %
              </div>
            </div>
          ))}
        </div>
        <Carousel responsive={responsive} removeArrowOnDeviceType={["mobile"]} swipeable={true}>
          {products.map((product, index) => (
            <div
              key={index}
              className="py-2 text-center border-l md:px-10 md:w-full"
            >
              <img
                src="/watch.png"
                alt="Smart watch"
                className="object-fill mx-auto"
              />
              <h2 className="mt-4 text-lg font-medium text-gray-800">
                {product.name}
              </h2>
              <div className="inline-block px-5 py-1 my-2 text-sm font-semibold text-red-600 bg-red-100 rounded-full">
                {product.discount} %
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {/* <div
        id="default-carousel"
        className="relative w-full bg-red-400"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/watch.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/watch.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/watch.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/watch.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/watch.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>

        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <button
          type="button"
          className="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer start-0 group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer end-0 group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div> */}
    </div>
  );
};
export default DealOffer;
