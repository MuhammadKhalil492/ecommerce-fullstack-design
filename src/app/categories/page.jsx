"use client";
import React from 'react'
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import ProductCard from "@/components/ProductCard";
import BreadcrumbsSection from '../../components/BreadcrumbsSection';


export default function Page() {
  return (
    <div>
      <BreadcrumbsSection />
      <div class="flex">
        <Sidebar />
        <div class="flex-1">
          <Topbar />
          {/* <!-- Content --> */}
          <ProductCard imageSrc="/mbl1.png" title="Canon Camera EOS 2000, Black 10x zoom" price="$998.00" originalPrice="$1128.00" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." orders="154" freeShipping={true} />
          <ProductCard imageSrc="/mbl2.png" title="GoPro HERO6 4K Action Camera - Black" price="$998.00" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" orders="154" freeShipping={true} />
          <ProductCard imageSrc="/mbl3.png" title="GoPro HERO6 4K Action Camera - Black" price="$998.00" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" orders="154" freeShipping={true} />
          <ProductCard imageSrc="/laptop.png" title="GoPro HERO6 4K Action Camera - Black" price="$998.00" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" orders="154" freeShipping={true} />
          <ProductCard imageSrc="/smartWatch.png" title="GoPro HERO6 4K Action Camera - Black" price="$998.00" originalPrice="$1128.00" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" orders="154" freeShipping={true} />
          <ProductCard imageSrc="/40.png" title="GoPro HERO6 4K Action Camera - Black" price="$998.00" description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit" orders="154" freeShipping={true} />
        </div>
      </div>
    </div>
  )
}
