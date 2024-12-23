import React, { useState } from "react";

const Navbar = ({ songData }) => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg rounded-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">My App</div>

        {/* Navbar Items */}
        <div className="flex items-center space-x-6">
          {/* Other Links */}
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>

          {/* Favourite Icon with Counter */}
          <div className="relative cursor-pointer flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-red-500"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold px-1.5 py-0.4 rounded-full">
              {songData.filter((item) => item.added).length}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
