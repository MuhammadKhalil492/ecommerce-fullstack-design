import React from "react";
interface CateforySectionProps {
  heading: string;
  btnLink: string;
  leftImage: string;
}

const CategorySection: React.FC<CateforySectionProps> = ({
  heading,
  btnLink,
  leftImage,
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
        <div className="grid grid-cols-2 col-span-3 gap-0.5 pt-1 md:grid-cols-4">
          {/* <!-- Card Item --> */}

          <div className="relative flex flex-col items-start justify-between max-w-sm p-6 border-b border-l ">
            <h2 className="text-xl font-medium text-black">Soft chairs</h2>
            <p className="mt-2 text-base text-gray-500">
              From <br />
              <span className="text-base text-gray-500">USD 19</span>
            </p>
            <div className="absolute flex self-end justify-end bottom-1 bg-slate-700">
              <img src="/1.png" alt="Soft Chair" className="w-20 h-auto" />
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-between max-w-sm p-6 border-b border-l ">
            <h2 className="text-xl font-medium text-black">Soft chairs</h2>
            <p className="mt-2 text-base text-gray-500">
              From <br />
              <span className="text-base text-gray-500">USD 19</span>
            </p>
            <div className="absolute flex self-end justify-end bottom-1 bg-slate-700">
              <img src="/1.png" alt="Soft Chair" className="w-20 h-auto" />
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-between max-w-sm p-6 border-b border-l ">
            <h2 className="text-xl font-medium text-black">Soft chairs</h2>
            <p className="mt-2 text-base text-gray-500">
              From <br />
              <span className="text-base text-gray-500">USD 19</span>
            </p>
            <div className="absolute flex self-end justify-end bottom-1 bg-slate-700">
              <img src="/1.png" alt="Soft Chair" className="w-20 h-auto" />
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-between max-w-sm p-6 border-b border-l ">
            <h2 className="text-xl font-medium text-black">Soft chairs</h2>
            <p className="mt-2 text-base text-gray-500">
              From <br />
              <span className="text-base text-gray-500">USD 19</span>
            </p>
            <div className="absolute flex self-end justify-end bottom-1 bg-slate-700">
              <img src="/1.png" alt="Soft Chair" className="w-20 h-auto" />
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-between max-w-sm p-6 border-b border-l ">
            <h2 className="text-xl font-medium text-black">Soft chairs</h2>
            <p className="mt-2 text-base text-gray-500">
              From <br />
              <span className="text-base text-gray-500">USD 19</span>
            </p>
            <div className="absolute flex self-end justify-end bottom-1 bg-slate-700">
              <img src="/1.png" alt="Soft Chair" className="w-20 h-auto" />
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-between max-w-sm p-6 border-b border-l ">
            <h2 className="text-xl font-medium text-black">Soft chairs</h2>
            <p className="mt-2 text-base text-gray-500">
              From <br />
              <span className="text-base text-gray-500">USD 19</span>
            </p>
            <div className="absolute flex self-end justify-end bottom-1 bg-slate-700">
              <img src="/1.png" alt="Soft Chair" className="w-20 h-auto" />
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-between max-w-sm p-6 border-b border-l ">
            <h2 className="text-xl font-medium text-black">Soft chairs</h2>
            <p className="mt-2 text-base text-gray-500">
              From <br />
              <span className="text-base text-gray-500">USD 19</span>
            </p>
            <div className="absolute flex self-end justify-end bottom-1 bg-slate-700">
              <img src="/1.png" alt="Soft Chair" className="w-20 h-auto" />
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-between max-w-sm p-6 border-b border-l ">
            <h2 className="text-xl font-medium text-black">Soft chairs</h2>
            <p className="mt-2 text-base text-gray-500">
              From <br />
              <span className="text-base text-gray-500">USD 19</span>
            </p>
            <div className="absolute flex self-end justify-end bottom-1 bg-slate-700">
              <img src="/1.png" alt="Soft Chair" className="w-20 h-auto" />
            </div>
          </div>

          {/* <div className="p-4 text-center bg-white rounded-lg shadow-md">
                    <i className="mb-3 text-3xl text-blue-500 fas fa-chair"></i>
                    <h2 className="text-lg font-medium">Soft chairs</h2>
                    <p className="text-gray-600">From USD 19</p>
                </div> */}

          {/* <!-- Card Item --> */}
          {/* <div className="p-4 text-center bg-white rounded-lg shadow-md">
                    <i className="mb-3 text-3xl text-blue-500 fas fa-couch"></i>
                    <h2 className="text-lg font-medium">Sofa & chair</h2>
                    <p className="text-gray-600">From USD 19</p>
                </div> */}

          {/* <!-- Card Item --> */}
          {/* <div className="p-4 text-center bg-white rounded-lg shadow-md">
                    <i className="mb-3 text-3xl text-blue-500 fas fa-utensils"></i>
                    <h2 className="text-lg font-medium">Kitchen dishes</h2>
                    <p className="text-gray-600">From USD 19</p>
                </div> */}

          {/* <!-- Card Item --> */}
          {/* <div className="p-4 text-center bg-white rounded-lg shadow-md">
                    <i className="mb-3 text-3xl text-blue-500 fas fa-clock"></i>
                    <h2 className="text-lg font-medium">Smart watches</h2>
                    <p className="text-gray-600">From USD 19</p>
                </div> */}

          {/* <!-- Card Item --> */}
          {/* <div className="p-4 text-center bg-white rounded-lg shadow-md">
                    <i className="mb-3 text-3xl text-blue-500 fas fa-blender"></i>
                    <h2 className="text-lg font-medium">Kitchen mixer</h2>
                    <p className="text-gray-600">From USD 100</p>
                </div> */}

          {/* <!-- Card Item --> */}
          {/* <div className="p-4 text-center bg-white rounded-lg shadow-md">
                    <i className="mb-3 text-3xl text-blue-500 fas fa-blender-phone"></i>
                    <h2 className="text-lg font-medium">Blenders</h2>
                    <p className="text-gray-600">From USD 39</p>
                </div> */}

          {/* <!-- Card Item --> */}
          {/* <div className="p-4 text-center bg-white rounded-lg shadow-md">
                    <i className="mb-3 text-3xl text-blue-500 fas fa-tv"></i>
                    <h2 className="text-lg font-medium">Home appliance</h2>
                    <p className="text-gray-600">From USD 19</p>
                </div> */}

          {/* <!-- Card Item --> */}
          {/* <div className="p-4 text-center bg-white rounded-lg shadow-md">
                    <i className="mb-3 text-3xl text-blue-500 fas fa-coffee"></i>
                    <h2 className="text-lg font-medium">Coffee maker</h2>
                    <p className="text-gray-600">From USD 10</p>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
