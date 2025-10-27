'use client';
import { useState } from 'react';
import QuizCard from '../card/QuizCard';
// import geographyImg from '..//assets/card.png';
import geographyImg from '../../../public/assets/card.png';
import { quizType } from '../card/type';

const quizzes:quizType[] = [
  {
    id: 1,
    title: 'Geography Mastery',
    category: 'Geography',
    price: 10,
    sold: 1238,
    rating: 4.8,
    image: geographyImg
  },
  {
    id: 2,
    title: 'Grammar Essentials',
    category: 'English',
    price: 20,
    sold: 1238,
    rating: 4.8,
    image: geographyImg
  },
  {
    id: 3,
    title: 'Human Body System',
    category: 'Science',
    price: 15,
    sold: 1238,
    rating: 4.8,
    image: geographyImg
  },
  {
    id: 4,
    title: 'Algebra Crash Quiz',
    category: 'Mathematics',
    price: 20,
    sold: 1238,
    rating: 4.8,
    image: geographyImg
  }
];

export default function QuizSection() {
  const [favorites, setFavorites] = useState<number[]>([]);
  console.log(favorites, 'welco');
  const toggleFavorite = (id: number) => {
    setFavorites((prev: number[]) =>
      prev.includes(id)
        ? prev.filter((fid: number) => fid !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-white text-center">
      <div className=" mx-auto px-6 md:px-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-title">
          Available Quiz on Quzzy
        </h2>
        <p className="text-normal mb-10 ">
          Choose from a variety of topics. Buy now and get a free PDF guide with
          each quiz!
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {quizzes.map((quiz ) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              isFavorite={favorites.includes(quiz.id)}
              onToggleFavorite={() => toggleFavorite(quiz.id)}
            />
          ))}
        </div>

        {/* Load More Button */}
        <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition mt-10">
          View Detail
        </button>
      </div>
    </section>
  );
}
