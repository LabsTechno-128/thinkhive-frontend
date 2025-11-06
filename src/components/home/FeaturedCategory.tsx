"use client";
import Image from "next/image";

import geographyImg from '../../../public/assets/card.png';

const categories = [
  { id: 1, name: "Science", available: "100 Quiz Available", image: geographyImg },
  { id: 2, name: "Mathematics", available: "100 Quiz Available", image: geographyImg},
  { id: 3, name: "General", available: "100 Quiz Available", image: geographyImg },
  { id: 4, name: "Geography", available: "100 Quiz Available", image: geographyImg },
  { id: 5, name: "History", available: "100 Quiz Available", image: geographyImg },
  { id: 6, name: "Language", available: "100 Quiz Available", image: geographyImg },
];

export default function FeaturedCategory() {
  return (
    <section className="pt-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Featured Category
          </h2>
          <button className="border border-indigo-500 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-all text-nowrap">
            View Detail
          </button>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-3">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={64}
                  height={64}
                  className="object-contain mx-auto"
                />
              </div>
              <h3 className="text-gray-800 font-semibold">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.available}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
