import React from "react";
interface CateforySectionProps {
  heading: string;
  btnLink: string;
  leftImage: string;
  children?: React.ReactNode;
}
import ProductItem from '@/components/Products/ProductItem';

const CategorySection: React.FC<CateforySectionProps> = ({
  heading,
  btnLink,
  leftImage,
  children,
}) => {
  return (
    <div className="mx-auto mt-4 bg-white border border-gray-300 rounded-lg">
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-4">
        {/* <!-- Left Section --> */}
        <div className="relative bg-white rounded-l-lg">
          {/* <!-- Content Container --> */}
          <div className="relative z-10 w-48 p-6 text-sm font-sm">
            {/* <!-- Heading --> */}
            <h2 className="mb-6 text-2xl font-semibold text-gray-900">
              {heading}
            </h2>
            <a
              href={btnLink}
              className="inline-block px-6 py-3 text-base font-medium text-gray-900 transition-colors bg-white rounded-lg hover:bg-gray-50"
            >
              Source now
            </a>
          </div>
          {/* <!-- Decorative Image --> */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
            <img
              src={leftImage}
              alt="Home decor with plants"
              className="object-fill w-full h-full rounded-l-lg"
            />
          </div>
        </div>

        {/* <!-- Right Section --> */}
        {/* <div className="grid grid-cols-2  md:col-span-3 gap-0.5 pt-1 md:grid-cols-4"> */}
          {children}
       {/* </div> */}
      </div>
    </div>
  );
};

export default CategorySection;
