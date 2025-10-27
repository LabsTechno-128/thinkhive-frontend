'use client';
import QuizCard from '@/components/card/QuizCard';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiFilter } from 'react-icons/fi';

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
  const [sortOrder, setSortOrder] = useState('relevant');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [openBestFilter, setOpenBestFilter] = useState(true);
  const [openCategoryFilter, setOpenCategoryFilter] = useState(true);
  const [openPriceFilter, setOpenPriceFilter] = useState(true);

  const handleToggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-[90%] mx-auto py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Home / <span className="text-black font-medium capitalize">{slug}</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Showing quiz for “{slug}”</h2>
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
      </div>

      <div className="flex gap-5">
        {/* Content Layout */}
        <div className=" w-80 ">
          {/* Sidebar */}
          <aside className=" border rounded-lg p-5 space-y-6 ">
            <h3 className="font-semibold flex items-center gap-2">
              <FiFilter /> Filter Option
            </h3>

            {/* Rating Filter */}
            {/* <div>
              <h4 className="font-medium mb-2">Best Filter</h4>
              <div className="flex flex-col gap-2 text-sm">
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
            </div> */}
            <div>
              {/* Header */}
              <button
                className="font-medium mb-2 flex items-center justify-between cursor-pointer w-full"
                onClick={() => setOpenBestFilter(!openBestFilter)}
              >
                <span>Best Filter</span>
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

            {/* Price Range */}
            <button
              className="font-medium mb-2 flex items-center justify-between cursor-pointer w-full"
              onClick={() => setOpenPriceFilter(!openPriceFilter)}
            >
              <span className='font-bold'>Price Range</span>
              {openBestFilter ? (
                <FiChevronUp className="text-gray-600" />
              ) : (
                <FiChevronDown className="text-gray-600" />
              )}
            </button>

            {openPriceFilter && (
              <div className="flex flex-col gap-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" name="price" /> $0 – $100
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="price" /> $100 – $200
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="price" /> $200 – $300
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="price" /> $300 – $500
                </label>
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
