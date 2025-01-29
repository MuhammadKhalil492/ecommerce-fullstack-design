'use client';
import React from 'react';
import ReactStars from 'react-stars';

interface CustomProductCardProps {
  imageSrc: string;
  title: string;
  price: string | number;
  originalPrice?: string | number;
  rating?: number;
  orders: number;
  description: string;
}

const CustomProductCard: React.FC<CustomProductCardProps> = ({
  imageSrc,
  title,
  price,
  originalPrice,
  rating = 4,
  orders,
  description,
}) => {
  const ratingChanged = (newRating: number) => {
    console.log(`Rating changed to: ${newRating}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg md:max-w-[280px] relative mb-3">
      {/* Product Image */}
      <div className="relative p-4 flex items-center justify-center border-b">
        <img
          src={imageSrc}
          alt={title}
          className="w-[200px] h-[200px] object-contain rounded-xl"
        />
      </div>

      {/* Price Section */}
      <div className="p-4">
      <div className="flex justify-between items-center gap-2">
        <div>
          <span className="text-xl font-bold">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">
              ${originalPrice}
            </span>
          )}
        </div>
        <button className="p-1.5 border rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 hover:text-red-500 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Rating Section */}
      <div className="flex items-center gap-2 mb-2">
        <div>
          <ReactStars
            count={5}
            value={rating}
            onChange={ratingChanged}
            size={20}
            activeColor="#ffd700"
            isHalf={true}
          />
        </div>
      </div>

      {/* Product Title */}
      <h3 className="text-gray-700 font-medium">{description}</h3>
      </div>
    </div>
  );
};

export default CustomProductCard;
