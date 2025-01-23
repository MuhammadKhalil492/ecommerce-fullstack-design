import React from 'react'
import Flag from "react-world-flags";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="px-20">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <a
                  href="#"
                  className="flex items-center space-x-2 rtl:space-x-reverse sm:w-60 md:w-auto"
                >
                  <Image src={"/logos.png"} width={50} height={50} alt="Logog" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Brand
                  </span>
                </a>
              </div>
              <p className="text-sm text-gray-600 mb-4">Best information about the company goes here but now lorem ipsum is</p>
              <div className="flex gap-3">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </div>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Find store</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Categories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Blogs</a></li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-semibold mb-4">Partnership</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Find store</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Categories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Blogs</a></li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-semibold mb-4">Information</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Money Refund</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Shipping</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Contact us</a></li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-semibold mb-4">For users</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Login</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Register</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Settings</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">My Orders</a></li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-semibold mb-4">Get app</h3>
              <div className="space-y-3">
                <a href="#" class="inline-flex items-center px-6 py-2 bg-black rounded-lg hover:bg-gray-900 transition-colors duration-200 group">
                  <svg class="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.0468 12.3273C17.0348 10.3077 18.6348 9.24545 18.7197 9.19091C17.7348 7.77273 16.1887 7.54545 15.6538 7.52727C14.3517 7.39091 13.0977 8.29091 12.4327 8.29091C11.7557 8.29091 10.7227 7.54545 9.61167 7.56364C8.17967 7.58182 6.84567 8.40000 6.10967 9.70909C4.58967 12.3818 5.71167 16.3364 7.17567 18.3273C7.89567 19.3091 8.74767 20.4182 9.86967 20.3818C10.9677 20.3455 11.3827 19.6909 12.7077 19.6909C14.0207 19.6909 14.4117 20.3818 15.5577 20.3636C16.7397 20.3455 17.4837 19.3636 18.1797 18.3636C19.0077 17.2364 19.3507 16.1273 19.3627 16.0727C19.3387 16.0545 17.0587 15.1636 17.0468 12.3273Z" />
                    <path d="M15.1768 6.23636C15.7718 5.49091 16.1748 4.47273 16.0538 3.45455C15.1768 3.49091 14.0908 4.05455 13.4718 4.78182C12.9248 5.41818 12.4378 6.46364 12.5708 7.45455C13.5438 7.52727 14.5678 6.98182 15.1768 6.23636Z" />
                  </svg>
                  <div class="ml-3">
                    <div class="text-xs text-white font-normal leading-none">Download on the</div>
                    <div class="text-xl text-white font-medium leading-tight tracking-tight">App Store</div>
                  </div>
                </a>
                <a href="#" class="inline-flex items-center px-6 py-3 bg-black rounded-lg hover:bg-gray-900 transition-colors duration-200">
                  <svg class="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.609 2.73l8.13 8.129-8.13 8.13a2.354 2.354 0 01-.609-1.57V4.3c0-.576.227-1.13.609-1.57zm9.148 9.148l2.674 2.674-9.736 5.45 7.062-8.124zm3.394-3.394l2.503 1.401a2.407 2.407 0 010 4.23l-2.503 1.401-2.975-2.975 2.975-2.975zm-3.394-3.394l7.062 8.124-9.736-5.45 2.674-2.674z" fill="#fff" />
                  </svg>
                  <div class="flex flex-col">
                    <span class="text-xs text-gray-200">GET IT ON</span>
                    <span class="text-xl font-medium text-white leading-tight">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 flex justify-between items-center">
            <p className="text-sm text-gray-600">&copy; 2023 Ecommerce.</p>
            <div className="flex items-center gap-2">
              <Flag code="US" alt="US Flag" className="w-5 h-4" />
              <span className="text-sm text-gray-600">English</span>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
