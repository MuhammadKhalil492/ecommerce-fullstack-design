"use client";
import React from 'react'
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import FilterBrands from "@/components/FilterBrands";
import CustomProductCard from "@/components/CustomProductCard";
import BreadcrumbsSection from '../../components/BreadcrumbsSection';


export default function Page() {
  return (
    <div>
      <BreadcrumbsSection />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Topbar />
          <FilterBrands />
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-4 lg:mx-0">
            <CustomProductCard imageSrc="/mbl1.png" rating={4} price="99.50" originalPrice="1128.00" description="GoPro HERO6 4K Action Camera -
              Black"/>
            <CustomProductCard imageSrc="/image 22.png" rating={3} price="99.50" originalPrice="1128.00" description="GoPro HERO6 4K Action Camera -
              Black"/>
            <CustomProductCard imageSrc="/mbl3.png" rating={4} price="99.50" originalPrice="1128.00" description="GoPro HERO6 4K Action Camera -
              Black"/>
            <CustomProductCard imageSrc="/mbl1.png" rating={4} price="99.50" originalPrice="1128.00" description="GoPro HERO6 4K Action Camera -
              Black"/>
            <CustomProductCard imageSrc="/laptop.png" rating={4} price="99.50" originalPrice="1128.00" description="GoPro HERO6 4K Action Camera -
              Black"/>
            <CustomProductCard imageSrc="/watch.png" rating={4} price="99.50" originalPrice="1128.00" description="GoPro HERO6 4K Action Camera -
              Black"/>
            <CustomProductCard imageSrc="/mbl1.png" rating={4} price="99.50" originalPrice="1128.00" description="GoPro HERO6 4K Action Camera -
              Black"/>
            <CustomProductCard imageSrc="/mbl1.png" rating={4} price="99.50" originalPrice="1128.00" description="GoPro HERO6 4K Action Camera -
              Black"/>
            <CustomProductCard imageSrc="/mbl1.png" rating={4} price="99.50" originalPrice="1128.00" description="GoPro HERO6 4K Action Camera -
              Black"/>
            <CustomProductCard imageSrc="/mbl1.png" rating={4} price="99.50" originalPrice="1128.00" description="GoPro HERO6 4K Action Camera -
              Black"/>
            <CustomProductCard imageSrc="/mbl1.png" rating={4} price="99.50" originalPrice="1128.00" description="GoPro HERO6 4K Action Camera -
              Black"/>
            <CustomProductCard imageSrc="/mbl1.png" rating={4} price="99.50" originalPrice="1128.00" description="GoPro HERO6 4K Action Camera -
              Black"/>
          </div>
        </div>
      </div>
    </div>
  )
}
