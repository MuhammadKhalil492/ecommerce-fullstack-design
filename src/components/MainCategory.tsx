"use client";
import LinkTab from "./Tabs/LinkTab";
import React, { useState } from "react";

function MainCategory() {
  const [activeTab, setActiveTab] = useState("/automobiles");

  return (
    // <div className="container mx-auto sm:border-none md:border border-gray-300 rounded-lg my-6  md:p-6 sm:p-0">
    //   <div className="grid grid-cols-12 gap-4">
        
    //     {/* Left Sidebar */}
    //     <div className="col-span-3 hidden md:block">
    //       <ul className="space-y-3 text-base font-medium text-gray-500 bg-white dark:text-gray-400">
    //         <LinkTab
    //           label="Automobiles"
    //           link="#"
    //           isActive={activeTab === "/automobiles"}
    //           onClick={() => setActiveTab("/automobiles")}
    //         />
    //         <LinkTab
    //           label="Clothes and wear"
    //           link="#"
    //           isActive={activeTab === "/clothes-and-wear"}
    //           onClick={() => setActiveTab("/clothes-and-wear")}
    //         />
    //         <LinkTab
    //           label="Home interiors"
    //           link="#"
    //           isActive={activeTab === "/home-interiors"}
    //           onClick={() => setActiveTab("/home-interiors")}
    //         />
    //         <LinkTab
    //           label="Tools, equipments"
    //           link="#"
    //           isActive={activeTab === "/tools-equipments"}
    //           onClick={() => setActiveTab("/tools-equipments")}
    //         />
    //         <LinkTab
    //           label="Sports and outdoor"
    //           link="#"
    //           isActive={activeTab === "/sports-and-outdoor"}
    //           onClick={() => setActiveTab("/sports-and-outdoor")}
    //         />
    //         <LinkTab
    //           label="Animal and pets"
    //           link="#"
    //           isActive={activeTab === "/animal-and-pets"}
    //           onClick={() => setActiveTab("/animal-and-pets")}
    //         />
    //         <LinkTab
    //           label="Machinery tools"
    //           link="#"
    //           isActive={activeTab === "/machinery-tools"}
    //           onClick={() => setActiveTab("/machinery-tools")}
    //         />
    //         <LinkTab
    //           label="More Category"
    //           link="#"
    //           isActive={activeTab === "/all-categories"}
    //           onClick={() => setActiveTab("/all-categories")}
    //         />
    //       </ul>
    //     </div>

    //     {/* Center Section */}
    //     <div className="col-span-7 bg-purple-400 rounded-lg">
    //       <div className="relative overflow-hidden">
    //         <img
    //           src="/banner.png"
    //           className="w-full h-full object-cover"
    //           alt="Electronic Items Banner"
    //         />
    //         <div className="absolute top-20 px-8 flex flex-col justify-center bg-gradient-to-r from-emerald-100/1 to-emerald-100/1">
    //           <h1 className="mb-4 text-2xl font-bold text-gray-800 md:text-4xl">
    //             Latest trending
    //             <div className="mt-1 text-3xl md:text-5xl">Electronic items</div>
    //           </h1>
    //           <button className="px-6 py-2 text-gray-800 transition-colors bg-white rounded-md w-fit hover:bg-gray-100">
    //             Learn more
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right Sidebar */}
    //     <aside className="col-span-2 hidden md:flex flex-col space-y-4">
    //       <div className="p-6 bg-[#E3F0FF] rounded-lg shadow-sm">
    //         <div className="flex items-center gap-3 mb-4">
    //           <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
    //             <i className="text-blue-500 fas fa-user"></i>
    //           </div>
    //           <div>
    //             <div className="font-medium">Hi, user</div>
    //             <div className="text-sm text-gray-500">Let's get started</div>
    //           </div>
    //         </div>
    //         <button className="w-full py-2 mb-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600">
    //           Join now
    //         </button>
    //         <button className="w-full py-2 text-blue-500 transition-colors bg-white border border-blue-500 rounded-md hover:bg-blue-50">
    //           Log in
    //         </button>
    //       </div>

    //       <div className="p-6 text-white bg-orange-400 rounded-lg">
    //         <div className="font-medium">Get US $10 off</div>
    //         <div className="text-sm">with a new supplier</div>
    //       </div>

    //       <div className="p-6 text-white bg-teal-400 rounded-lg">
    //         <div className="font-medium">Send quotes</div>
    //         <div className="text-sm">with supplier preferences</div>
    //       </div>
    //     </aside>
    //   </div>
    // </div>
    <div className="container mx-auto md:border border-gray-300 rounded-lg my-6 md:p-6 sm:p-0">
  <div className="grid grid-cols-12 gap-4">
    
    {/* Left Sidebar */}
    <div className="col-span-3 hidden md:block">
      <ul className="space-y-3 text-base font-medium text-gray-500 bg-white dark:text-gray-400">
        <LinkTab
          label="Automobiles"
          link="#"
          isActive={activeTab === "/automobiles"}
          onClick={() => setActiveTab("/automobiles")}
        />
        <LinkTab
          label="Clothes and wear"
          link="#"
          isActive={activeTab === "/clothes-and-wear"}
          onClick={() => setActiveTab("/clothes-and-wear")}
        />
        <LinkTab
          label="Home interiors"
          link="#"
          isActive={activeTab === "/home-interiors"}
          onClick={() => setActiveTab("/home-interiors")}
        />
        <LinkTab
          label="Tools, equipments"
          link="#"
          isActive={activeTab === "/tools-equipments"}
          onClick={() => setActiveTab("/tools-equipments")}
        />
        <LinkTab
          label="Sports and outdoor"
          link="#"
          isActive={activeTab === "/sports-and-outdoor"}
          onClick={() => setActiveTab("/sports-and-outdoor")}
        />
        <LinkTab
          label="Animal and pets"
          link="#"
          isActive={activeTab === "/animal-and-pets"}
          onClick={() => setActiveTab("/animal-and-pets")}
        />
        <LinkTab
          label="Machinery tools"
          link="#"
          isActive={activeTab === "/machinery-tools"}
          onClick={() => setActiveTab("/machinery-tools")}
        />
        <LinkTab
          label="More Category"
          link="#"
          isActive={activeTab === "/all-categories"}
          onClick={() => setActiveTab("/all-categories")}
        />
      </ul>
    </div>

    {/* Center Section */}
    <div className="col-span-12 md:col-span-7 bg-purple-400 rounded-lg">
      <div className="relative overflow-hidden">
        <img
          src="/banner.png"
          className="w-full h-full object-cover"
          alt="Electronic Items Banner"
        />
        <div className="absolute top-10 md:top-20 px-8 flex flex-col justify-center bg-gradient-to-r from-emerald-100/1 to-emerald-100/1">
          <h1 className="mb-4 text-xl font-bold text-gray-800 md:text-4xl">
            Latest trending
            <div className="mt-1 text-2xl md:text-5xl">Electronic items</div>
          </h1>
          <button className="px-5 py-2 text-blue-600 transition-colors bg-white rounded-md w-fit hover:bg-gray-100">
            Learn more
          </button>
        </div>
      </div>
    </div>

    {/* Right Sidebar */}
    <aside className="col-span-2 hidden md:flex flex-col space-y-4">
      <div className="p-6 bg-[#E3F0FF] rounded-lg shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
            <i className="text-blue-500 fas fa-user"></i>
          </div>
          <div>
            <div className="font-medium">Hi, user</div>
            <div className="text-sm text-gray-500">Let's get started</div>
          </div>
        </div>
        <button className="w-full py-2 mb-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600">
          Join now
        </button>
        <button className="w-full py-2 text-blue-500 transition-colors bg-white border border-blue-500 rounded-md hover:bg-blue-50">
          Log in
        </button>
      </div>

      <div className="p-6 text-white bg-orange-400 rounded-lg">
        <div className="font-medium">Get US $10 off</div>
        <div className="text-sm">with a new supplier</div>
      </div>

      <div className="p-6 text-white bg-teal-400 rounded-lg">
        <div className="font-medium">Send quotes</div>
        <div className="text-sm">with supplier preferences</div>
      </div>
    </aside>
  </div>
</div>


  );
}

export default MainCategory;
