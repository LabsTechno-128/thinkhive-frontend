'use client';

import SliderPage from '@/components/sliderPage';
import React, { use } from 'react';

export default function QuizPage({
  params
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  // Unwrap the promise
  const { slug, id } = use(params);

  return (
    <div className="w-[1440px] mx-auto py-10 px-6 md:px-24">
      <div className="text-sm text-gray-500 mb-4">
        Home / <span className="text-black font-medium capitalize">{slug}</span>
      </div>
      <SliderPage></SliderPage>
      <h2 className="text-2xl font-bold mb-4">Category: {slug}</h2>
      <h3 className="text-xl font-semibold">Quiz ID: {id}</h3>
    </div>
  );
}
