'use client';
import { useState } from 'react';
import { FiMenu, FiSearch, FiShoppingCart, FiUser, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log('categoryOpen', categoryOpen);

  return (
    <nav className="w-full bg-white border-b border-gray-200  ">
      <div className=" mx-auto flex items-center justify-between py-4 px-6 md:px-24 ">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Logo Image */}
          <div className="hidden lg:flex relative">
            <Image
              src="/logo/Logo.png"
              alt="Quizzy Logo"
              className="object-contain rounded-md"
              width={150}
              height={50}
            />
          </div>
          <button
            className="text-gray-600 hover:text-indigo-600 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu className="w-6 h-6" />
          </button>

          {/* Brand Text */}
        </Link>

        {/* Middle - Search + Category */}

        <div className="hidden lg:flex items-center bg-gray-50 rounded-md overflow-hidden w-[500px] xl:w-[800px]  ">
          {/* Category Button */}
          <div className="relative ">
            <button
              className="px-3 py-3 cursor-pointer hover:bg-gray-100 text-sm text-gray-600 text-nowrap"
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
      {/* large device */}
      <div className="absolute top-14 left-[25%] w-40">
        <ul
          className={` shadow-lg mt-1 rounded-md bg-white z-[999] transform transition-all duration-300 origin-top ${
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
      </div>
      {/* small device */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[9999] transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            className="text-gray-600 hover:text-indigo-600"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-5 gap-4 text-gray-700">
          <Link href="/" onClick={() => setSidebarOpen(false)}>
            Home
          </Link>
          <Link href="/category/science" onClick={() => setSidebarOpen(false)}>
            Science
          </Link>
          <Link href="/category/math" onClick={() => setSidebarOpen(false)}>
            Math
          </Link>
          <Link href="/category/history" onClick={() => setSidebarOpen(false)}>
            History
          </Link>
          <Link href="/category/tech" onClick={() => setSidebarOpen(false)}>
            Tech
          </Link>
          <Link href="/cart" onClick={() => setSidebarOpen(false)}>
            Cart
          </Link>
          <Link href="/account" onClick={() => setSidebarOpen(false)}>
            My Account
          </Link>
        </div>

      </div>
    </nav>
  );
}
