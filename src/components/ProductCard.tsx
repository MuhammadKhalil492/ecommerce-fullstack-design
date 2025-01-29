'use client';
import React from 'react';
import ReactStars from 'react-stars';


interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string | number;
  originalPrice?: string | number;
  rating?: number;
  orders: number;
  freeShipping?: boolean;  // Add this prop to show a free shipping badge if true.
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  price,
  originalPrice,
  rating = 4,
  orders,
  freeShipping, // Add this prop to show a free shipping badge if true.
  description,
}) => {
  const ratingChanged = (newRating: number) => {
    console.log(`Rating changed to: ${newRating}`);
  };
  return (
    <div className='mx-2 md:mx-0'>
      <div className="bg-white rounded-lg shadow-sm p-4 w-full flex gap-6 mt-4">
        <div className="w-32 h-32 flex-shrink-0">
          <img
            src={imageSrc}
            alt="Canon Camera EOS 2000"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-sm md:text-md font-medium text-gray-900">{title}</h2>
            <button className="text-blue-600 hover:text-red-500 border rounded-md p-1.5 hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </button>
          </div>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-lg font-semibold">{price}</span>
            <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-8 items-center gap-2">
            {/* ReactStars Component for Rating */}
            <div className="flex items-center">
              <ReactStars
                count={5}
                value={rating}
                onChange={ratingChanged}
                size={20}
                activeColor="#ffd700"
                isHalf={true}
              />
            </div>

            {/* Orders Info */}
            <div className="flex items-center">
              <span className="text-sm text-gray-500">• {orders} orders</span>
            </div>

            {/* Free Shipping Info */}
            <div className="flex items-center">
              {freeShipping && (
                <span className="text-xs md:text-sm text-green-600">• Free Shipping</span>
              )}
            </div>
          </div>

          {/* </div> */}

          <p className="mt-2 text-sm text-gray-600 hidden md:block">
            {description}
          </p>

          <a href="#" className="mt-2 text-sm text-blue-600 hover:text-blue-800 inline-block">
            View details
          </a>
        </div>
      </div>
    </div>
  )
}
export default ProductCard;