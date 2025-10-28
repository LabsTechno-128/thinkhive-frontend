'use client';
import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  console.log('categoryOpen', categoryOpen);

  return (
    <nav className="w-full bg-white border-b border-gray-200  ">
      <div className=" mx-auto flex items-center justify-between py-4 px-6 md:px-24 ">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Logo Image */}
          <div className="hidden md:flex relative">
            <Image
              src="/logo/Logo.png"
              alt="Quizzy Logo"
              className="object-contain rounded-md"
              width={150}
              height={50}
            />
          </div>

          {/* Brand Text */}
        </Link>

        {/* Middle - Search + Category */}
        {/* <div className="hidden md:flex items-center bg-gray-50  rounded-md overflow-hidden w-[800px]">
          <button
            className=" px-3 py-3 cursor-pointer hover:bg-gray-100 text-sm text-gray-600 transform transition-all duration-300"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            All Categories <span className="ml-1">▾</span>
            {categoryOpen && (
              <ul className="absolute top-16 left-72 w-40 h-40 shadow-lg mt-1 rounded-md bg-white z-[999] transform transition-all duration-300 text-left">
                {['Science', 'Math', 'History', 'Tech'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/category/${item.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                      onClick={() => setCategoryOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </button>


          <p className="border border-gray-300 h-5 "></p>

          <div className="flex items-center justify-between w-[650px] ">
            <input
              type="text"
              placeholder="Search on quizzy..."
              className="px-3 py-2  focus:outline-none text-sm  w-[90%]"
            />
            <button className="px-3 text-gray-500 hover:text-indigo-600 ">
              <FiSearch className="w-5 h-5" />
            </button>
          </div>
        </div> */}
        <div className="flex items-center bg-gray-50 rounded-md overflow-hidden w-[800px] relative ">
          {/* Category Button */}
          <div className="relative">
            <button
              className="px-3 py-3 cursor-pointer hover:bg-gray-100 text-sm text-gray-600"
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              All Categories <span className="ml-1">▾</span>
            </button>

            {/* Smooth Animated Dropdown */}
          </div>

          {/* Divider Line */}
          <p className="border border-gray-300 h-5"></p>

          {/* Search Box */}
          <div className="flex items-center justify-between w-[650px] ">
            <input
              type="text"
              placeholder="Search on quizzy..."
              className="px-3 py-2 focus:outline-none text-sm w-[90%] bg-gray-50"
            />
            <button className="px-3 text-gray-500 hover:text-indigo-600">
              <FiSearch className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-5 ">
          <Link href="/cart">
            <button className="text-gray-600 hover:text-indigo-600 cursor-pointer">
              <FiShoppingCart className="w-6 h-6" />
            </button>
          </Link>
          <p className="border border-gray-300 h-5 "></p>
          <button className="text-gray-600 hover:text-indigo-600 border border-gray-200 rounded-full p-1.5 cursor-pointer">
            <FiUser className="w-5 h-5" />
          </button>
        </div>
      </div>
      <ul
        className={`absolute top-14 left-[450px] w-40 shadow-lg mt-1 rounded-md bg-white z-[999] transform transition-all duration-300 origin-top ${
          categoryOpen
            ? 'opacity-100 scale-100 visible'
            : 'opacity-0 scale-95 invisible'
        }`}
      >
        {['Science', 'Math', 'History', 'Tech'].map((item) => (
          <li key={item}>
            <Link
              href={`/category/${item.toLowerCase()}`}
              className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
              onClick={() => setCategoryOpen(false)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
