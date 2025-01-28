import React from 'react'
import Flag from "react-world-flags";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGooglePlay,
  faApple,
  faFacebookF,
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

export default function Footer() {
  return (
    <div>
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            <div className="md:col-span-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 rtl:space-x-reverse sm:w-60 md:w-auto"
                >
                  <Image src={"/logos.png"} width={50} height={50} alt="Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Brand
                  </span>
                </a>
              </div>
              <p className="text-sm text-gray-600 mb-4">Best information about the company goes here but now lorem ipsum is</p>
              <div className="flex gap-3 justify-center md:justify-start">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>


            <div className="md:col-span-1 text-center md:text-left">
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Find store</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Categories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Blogs</a></li>
              </ul>
            </div>

            <div className="md:col-span-1 text-center md:text-left">
              <h3 className="font-semibold mb-4">Partnership</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Find store</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Categories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Blogs</a></li>
              </ul>
            </div>

            <div className="md:col-span-1 text-center md:text-left">
              <h3 className="font-semibold mb-4">Information</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Money Refund</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Shipping</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Contact us</a></li>
              </ul>
            </div>

            <div className="md:col-span-1 text-center md:text-left">
              <h3 className="font-semibold mb-4">For users</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Login</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Register</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Settings</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm">My Orders</a></li>
              </ul>
            </div>

            <div className="md:col-span-1 text-center md:text-left">
              <h3 className="font-semibold mb-4">Get app</h3>
              <div className="space-y-3 flex flex-col">
                <a href="#" class="inline-flex items-center justify-center px-6 py-3 bg-black rounded-lg hover:bg-gray-900 transition-colors duration-200 group">
                  <FontAwesomeIcon icon={faApple} className="w-7 h-7 text-white" />
                  <div class="ml-3">
                    <div class="text-xs text-white font-normal leading-none">Download on the</div>
                    <div class="text-xl text-white font-medium leading-tight tracking-tight">App Store</div>
                  </div>
                </a>
                <a href="#" class="inline-flex items-center px-6 py-3 justify-center bg-black rounded-lg hover:bg-gray-900 transition-colors duration-200">
                  <FontAwesomeIcon icon={faGooglePlay} className="w-7 h-7 text-white" />
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
