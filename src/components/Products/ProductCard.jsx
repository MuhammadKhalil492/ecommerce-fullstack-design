import React from "react";

export default function ProductCard({url, imageUrl, imageAlt, price, description }
) {
  return (
    <a href={url}>
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="mb-4 aspect-square">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="space-y-2">
        <p className="text-lg font-semibold">{price}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
    </a>
    
  );
}
