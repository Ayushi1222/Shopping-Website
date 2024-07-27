import React, { useEffect, useState } from 'react';
import { HiOutlineShoppingBag, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SuprSendInbox from '@suprsend/react-inbox';
import 'react-toastify/dist/ReactToastify.css';
import { jsx as _jsx } from "react/jsx-runtime";

function Navbar({ productCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-25 w-auto " // Increased image size
              src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg"
              alt="Logo"
            />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a href="#" className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md text-lg font-medium hover:text-primary-default">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md text-lg font-medium hover:text-primary-default">Products</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md text-lg font-medium hover:text-primary-default text">About</a>
          </div>
          <div className="flex items-center">
            <SuprSendInbox 
              workspaceKey="2yP2Ifan2cavl5IpnSPn"
              subscriberId="CUj4mabsS3l_WFI5cWa8jW8RLmK9a0RoC1N4VcUpy6k"
              distinctId="ayushihereby@gmail.com"
            />
            <div className="ml-6 relative">
              <button className="text-primary-default hover:text-gray-900 focus:outline-none">
                <HiOutlineShoppingBag className="h-10 w-10 hover:text-primary-default" /> {/* Increased icon size */}
                {productCount > 0 && (
                  <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-3 py-2 text-sm font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {productCount}
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMenuOpen ? (
                <HiOutlineX className="block h-8 w-8" /> // Increased icon size
              ) : (
                <HiOutlineMenu className="block h-8 w-8" /> // Increased icon size
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-xl font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-xl font-medium">Products</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-xl font-medium">About</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;