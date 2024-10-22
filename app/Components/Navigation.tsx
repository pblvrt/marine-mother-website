"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import logo from "../../public/logo3.png";
import Image from 'next/image';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-[99]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src={logo} alt="logo" width={100} height={100} />
              </Link>
            </div>
            <div className="hidden sm:flex sm:ml-auto">
              <div className="flex space-x-4">
                <Link href="#about">
                  <span className="text-gray-700 hover:text-blue-500">About</span>
                </Link>
                <Link href="#lessons">
                  <span className="text-gray-700 hover:text-blue-500">Lessons</span>
                </Link>

                <Link href="#reviews">
                  <span className="text-gray-700 hover:text-blue-500">Reviews</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-4 text-center text-md">
              <Link href="#about">
                <span className="block text-gray-700 hover:text-blue-500 text-md border-b mb-2">About</span>
              </Link>
              <Link href="#lessons">
                <span className="block text-gray-700 hover:text-blue-500 border-b mb-2">Lessons</span>
              </Link>
              <Link href="#services">
                <span className="block text-gray-700 hover:text-blue-500 border-b mb-2">Services</span>
              </Link>
              <Link href="#reviews">
                <span className="block text-gray-700 hover:text-blue-500 ">Reviews</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;