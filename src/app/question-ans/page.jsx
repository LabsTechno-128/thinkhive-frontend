"use client";

import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

export default function QuizQuestion() {
  const [timeLeft, setTimeLeft] = useState(65); // seconds
  const [selected, setSelected] = useState<number | null>(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const answers = [
    "None of my business, let somebody else take care of it",
    "Ask the person to leave the facility",
    "Escort the person to the security and raise a security incident",
    "Raise a security incident and go back doing your work",
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-12 px-4">
      {/* Timer */}
      <div className="bg-indigo-100 text-indigo-700 font-semibold px-6 py-2 rounded-lg mb-10 shadow-sm">
        Time Left: <span className="ml-1">{formatTime(timeLeft)}</span>
      </div>

      {/* Quiz Box */}
      <div className="bg-white rounded-2xl shadow-md w-full max-w-lg p-8 relative">
        {/* Back Button */}
        <button className="absolute top-6 left-6 text-gray-600 hover:text-indigo-600">
          <FiArrowLeft size={22} />
        </button>

        {/* Question */}
        <h2 className="text-center text-lg font-semibold text-gray-900 mb-4 mt-2">
          Question 30
        </h2>

        <p className="text-gray-600 text-sm text-center mb-8">
          You see a non-familiar face in the access-controlled areas of our
          office. The person does not have the MGL ID/Visitor/Staff/Vendor tag
          with him. What would you do?
        </p>

        {/* Answer Options */}
        <div className="flex flex-col gap-3">
          {answers.map((ans, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full border rounded-lg py-3 px-4 text-sm transition-all duration-200 ${
                selected === i
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-gray-300 text-gray-700 hover:border-indigo-400"
              }`}
            >
              {ans}
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <button className="mt-10 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-200">
          Submit
        </button>
      </div>
    </div>
  );
}
