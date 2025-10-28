'use client';


import ReviewsPage from '@/components/dynamicPage/ReviewsPage';
import SliderPage from '@/components/dynamicPage/sliderPage';
import React, { use } from 'react';

export default function QuizPage({
  params
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  // Unwrap the promise
  const { slug } = use(params);

  return (
    <div className="max-w-[1440px] mx-auto py-10 px-6 md:px-24 overflow-hidden">
      <div className="text-sm text-gray-500 mb-4">
        Home / <span className="text-black font-medium capitalize">{slug}</span>
      </div>
      <SliderPage></SliderPage>
      <ReviewsPage></ReviewsPage>
      {/* <CartPage></CartPage> */}

    </div>
  );
}
