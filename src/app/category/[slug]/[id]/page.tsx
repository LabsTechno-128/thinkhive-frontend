'use client';

import React, { use } from 'react';

export default function QuizPage({ params }: { params: Promise<{ slug: string; id: string }> }) {
  // Unwrap the promise
  const { slug, id } = use(params);

  return (
    <div className="w-[90%] mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Category: {slug}</h2>
      <h3 className="text-xl font-semibold">Quiz ID: {id}</h3>
    </div>
  );
}
