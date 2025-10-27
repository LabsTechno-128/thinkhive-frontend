'use client';
import QuizCard from '@/components/card/QuizCard';
import React, { useState } from 'react';
import {
  FiChevronDown,
  FiChevronUp,
  FiFilter,
  FiGrid,
  FiMenu
} from 'react-icons/fi';

type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  type: string;
};

const products: Product[] = [
  {
    id: 1,
    title: 'Geography Mastery',
    category: 'Geography',
    price: 10,
    rating: 4.9,
    image: '/geo.png',
    type: 'Science'
  },
  {
    id: 2,
    title: 'Grammar Essentials',
    category: 'English',
    price: 20,
    rating: 4.8,
    image: '/eng.png',
    type: 'Language'
  },
  {
    id: 3,
    title: 'Human Body System',
    category: 'Science',
    price: 15,
    rating: 4.7,
    image: '/human.png',
    type: 'Biology'
  }
];

export default function CategoryPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  console.log("slug", typeof(slug))
  const [sortOrder, setSortOrder] = useState('relevant');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [openBestFilter, setOpenBestFilter] = useState(true);
  const [openCategoryFilter, setOpenCategoryFilter] = useState(true);
  const [openPriceFilter, setOpenPriceFilter] = useState(true);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selected, setSelected] = useState<string>('');
  const [active, setActive] = useState('grid');

  const handleToggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const options = ['$0 – $100', '$100 – $200', '$200 – $300', '$300 – $400'];

  return (
    <div className="w-[90%] mx-auto py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Home / <span className="text-black font-medium capitalize">{slug}</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Showing quiz for “{slug}”</h2>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Sort By:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded-md px-2 py-1 text-sm focus:outline-none"
            >
              <option value="relevant">Relevant Order</option>
              <option value="price_low_high">Price: Low → High</option>
              <option value="price_high_low">Price: High → Low</option>
            </select>
          </div>
          <button
            onClick={() => setActive('grid')}
            className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-200
          ${
            active === 'grid'
              ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-md'
              : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
          }`}
          >
            <FiGrid size={18} />
          </button>
          <button
            onClick={() => setActive('list')}
            className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-200
          ${
            active === 'list'
              ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-md'
              : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
          }`}
          >
            <FiMenu size={18} />
          </button>
        </div>
      </div>

      <div className="flex gap-5">
        {/* Content Layout */}
        <div className=" w-80 ">
          {/* Sidebar */}
          <aside className=" border border-[#E4E9EE] rounded-lg p-5 space-y-6 ">
            <h3 className="font-semibold flex items-center gap-2">
              <FiFilter /> Filter Option
            </h3>
            <hr className="text-[#E4E9EE]"></hr>

            <div>
              {/* Header */}
              <button
                className="font-medium mb-2 flex items-center justify-between cursor-pointer w-full"
                onClick={() => setOpenBestFilter(!openBestFilter)}
              >
                <span className="font-bold">Best Filter</span>
                {openBestFilter ? (
                  <FiChevronUp className="text-gray-600" />
                ) : (
                  <FiChevronDown className="text-gray-600" />
                )}
              </button>

              {/* Toggle Content */}
              {openBestFilter && (
                <div className="flex flex-col gap-2 text-sm transition-all duration-300">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> 4 stars or upper
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Available Quiz
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" /> Available Quiz
                  </label>
                </div>
              )}
            </div>
            <hr className="text-[#E4E9EE]"></hr>

            <button
              className="font-medium mb-2 flex items-center justify-between cursor-pointer w-full"
              onClick={() => setOpenCategoryFilter(!openCategoryFilter)}
            >
              <span className="font-bold">Category</span>
              {openCategoryFilter ? (
                <FiChevronUp className="text-gray-600" />
              ) : (
                <FiChevronDown className="text-gray-600" />
              )}
            </button>
            {openCategoryFilter && (
              <div className="flex flex-col gap-2 text-sm">
                {[
                  'Mathematics',
                  'Science',
                  'History',
                  'Geography',
                  'English'
                ].map((cat) => (
                  <label key={cat} className="flex items-center gap-2">
                    <input type="checkbox" /> {cat}
                  </label>
                ))}
              </div>
            )}

            <hr className="text-[#E4E9EE]"></hr>

            {/* Price Range */}
            <button
              className="font-medium mb-2 flex items-center justify-between cursor-pointer w-full"
              onClick={() => setOpenPriceFilter(!openPriceFilter)}
            >
              <span className="font-bold">Price Range</span>
              {openBestFilter ? (
                <FiChevronUp className="text-gray-600" />
              ) : (
                <FiChevronDown className="text-gray-600" />
              )}
            </button>

            {openPriceFilter && (
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center w-60 border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:border-gray-400">
                  <select
                    className="outline-none text-gray-500 text-sm bg-transparent"
                    defaultValue="BDT"
                  >
                    <option value="BDT">BDT</option>
                    <option value="USD">USD</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Minimum price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="flex-1 ml-2 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                  />
                </div>
                <div className="flex items-center w-60 border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:border-gray-400">
                  <select
                    className="outline-none text-gray-500 text-sm bg-transparent"
                    defaultValue="BDT"
                  >
                    <option value="BDT">BDT</option>
                    <option value="USD">USD</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Maximum price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="flex-1 ml-2 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  {options.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelected(option)}
                      className={`px-4 py-3 w-32 rounded-xl border text-sm font-medium transition-all duration-200 
            ${
              selected === option
                ? '  border-black'
                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
            }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
        {/* Product Grid */}
        <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {products.map((p) => (
            <QuizCard
              key={p.id}
              quiz={p}
              isFavorite={favorites.includes(p.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
