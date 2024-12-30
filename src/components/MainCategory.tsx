"use client";
import LinkTab from "./Tabs/LinkTab";
import React, { useState } from "react";

function MainCategory() {
  const [activeTab, setActiveTab] = useState("/automobiles");
  return (
    <div className="flex justify-center">
      <div className="flex md:p-3.5 md:rounded-lg border border-gray-300 bg-white">
        {/* Left Sidebar - Hidden on mobile */}

        <div className="justify-center hidden md:flex">
          <ul className="mb-4 space-y-3 text-base font-medium text-gray-500 md:w-56 flex-column space-y dark:text-gray-400 md:me-4 md:mb-0">
            <LinkTab
              label="Automobiles"
              link={"#"}
              isActive={activeTab === "/automobiles"}
              onClick={() => {
                setActiveTab("/automobiles");
              }}
            />
            <LinkTab
              label="Clothes and wear"
              link={"#"}
              isActive={activeTab === "/clothes-and-wear"}
              onClick={() => {
                setActiveTab("/clothes-and-wear");
              }}
            />
            <LinkTab
              label="Home interiors"
              link={"#"}
              isActive={activeTab === "/home-interiors"}
              onClick={() => {
                setActiveTab("/home-interiors");
              }}
            />
            <LinkTab
              label="Tools, equipments"
              link={"#"}
              isActive={activeTab === "/tools-equipments"}
              onClick={() => {
                setActiveTab("/tools-equipments");
              }}
            />
            <LinkTab
              label="Sports and outdoor"
              link={"#"}
              isActive={activeTab === "/sports-and-outdoor"}
              onClick={() => {
                setActiveTab("/sports-and-outdoor");
              }}
            />
            <LinkTab
              label="Animal and pets"
              link={"#"}
              isActive={activeTab === "/animal-and-pets"}
              onClick={() => {
                setActiveTab("/animal-and-pets");
              }}
            />
            <LinkTab
              label="Machinery tools"
              link={"#"}
              isActive={activeTab === "/machinery-tools"}
              onClick={() => {
                setActiveTab("/machinery-tools");
              }}
            />
            <LinkTab
              label="More Category"
              link={"#"}
              isActive={activeTab === "/all-categories"}
              onClick={() => {
                setActiveTab("/all-categories");
              }}
            />
          </ul>
          {/* <div className="w-full p-6 text-gray-500 rounded-lg bg-gray-50 text-medium dark:text-gray-400 dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
              Profile Tab
            </h3>
            <p className="mb-2">
              This is some placeholder content the Profile tab's associated
              content, clicking another tab will toggle the visibility of this
              one for the next.
            </p>
            <p>
              The tab JavaScript swaps classes to control the content visibility
              and styling.
            </p>
          </div> */}
        </div>

        {/* Main Content  */}

        <div className="flex-2">
          <div className="relative md:h-[50vh] md:w-full overflow-hidden  md:rounded-lg">
            <img
              src="/banner.png"
              className="w-full h-full"
              alt="Electronic Items Banner"
            />
            <div className="absolute flex flex-col justify-center px-8 top-20 bg-gradient-to-r from-emerald-100/1 to-emerald-100/1">
              <h1 className="mb-4 text-2xl font-bold text-gray-800 md:text-4xl">
                Latest trending
                <div className="mt-1 text-3xl md:text-5xl">Electronic items</div>
              </h1>
              <button className="px-6 py-2 text-gray-800 transition-colors bg-white rounded-md w-fit hover:bg-gray-100">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Hidden on mobile */}
        <aside className="flex-col hidden p-6 space-y-4 md:flex w-80">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                <i className="text-blue-500 fas fa-user"></i>
              </div>
              <div>
                <div className="font-medium">Hi, user</div>
                <div className="text-sm text-gray-500">let's get stated</div>
              </div>
            </div>
            <button className="w-full py-2 mb-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600">
              Join now
            </button>
            <button className="w-full py-2 text-blue-500 transition-colors bg-white border border-blue-500 rounded-md hover:bg-blue-50">
              Log in
            </button>
          </div>

          <div className="p-4 text-white bg-orange-400 rounded-lg">
            <div className="font-medium">Get US $10 off</div>
            <div className="text-sm">with a new supplier</div>
          </div>

          <div className="p-4 text-white bg-teal-400 rounded-lg">
            <div className="font-medium">Send quotes</div>
            <div className="text-sm">with supplier preferences</div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default MainCategory;
