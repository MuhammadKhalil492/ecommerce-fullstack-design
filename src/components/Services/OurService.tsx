"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface OurServiceProps {
  heading: string;
  image: string;
  imgAlt: string;
  iconName: any;
}
const OurService: React.FC<OurServiceProps> = ({
  heading,
  image,
  imgAlt,
  iconName,
}) => {
  return (
    <div className="overflow-hidden border border-gray-300 rounded-lg shadow-lg">
      <div className="relative h-48 bg-gradient-to-r from-black/70 to-transparent/60">
        <img src={image} alt={imgAlt} className="object-fill h-full" />
        <div className="absolute bg-blue-100 border-2 border-white rounded-full p-7 -bottom-6 right-4">
          <FontAwesomeIcon icon={iconName} className="text-xl text-black" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium">{heading}</h3>
      </div>
    </div>
  );
};
export default OurService;
