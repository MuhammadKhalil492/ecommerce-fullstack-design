// import React from 'react';

export default function ProductItem({ title, price, srcImg, url }) {
  return (
    <a href={url}>
      <div className="relative flex flex-col items-start justify-between max-w-sm p-6 border-b border-l">
        <h2 className="text-sm md:text-xl font-medium text-black">{title}</h2>
        <p className="mt-2 text-base text-gray-500">
          <span className="text-xs md:text-base">From</span> <br />
          <span className="text-xs md:text-base text-gray-500">{price}</span>
        </p>
        <div className="absolute flex self-end justify-end bottom-1 w-[60px] h-[60px]">
          <img src={srcImg} alt="Soft Chair" className="object-contain" />
        </div>
      </div>
    </a>
  )
}
