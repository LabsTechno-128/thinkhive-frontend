"use client";
import Image from "next/image";

const articles = [
  {
    id: 1,
    date: "22 Dec 2024",
    title: "How to Improve Your MCQ Accuracy",
    description:
      "Struggling with multiple-choice questions? Learn smart techniques to identify correct answers, eliminate distractions, and improve your accuracy under time pressure.",
    image: "/assets/card-quzzy.png",
  },
  {
    id: 2,
    date: "22 May 2022",
    title: "Top 5 Topics to Focus on for Exams",
    description:
      "Not sure where to start? We've identified the most important topics across key subjects to help you focus, cut study efforts and shine high on upcoming tests and quizzes.",
    image: "/assets/card-quzzy.png",
  },
  {
    id: 3,
    date: "14 Sep 2022",
    title: "Why Leaderboards Motivate Learning",
    description:
      "Find out how seeing your name climb the leaderboard boosts motivation, builds confidence, and turns learning into a fun, goal-oriented experience.",
    image: "/assets/card-quzzy.png",
  },
];

export default function ArticlesSection() {
  return (
    <section className=" mx-auto  px-6 md:px-24 pt-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">
          Quzzy&apos;s Article
        </h2>
        <button className="px-4 py-1.5 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition">
          View Detail
        </button>
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {articles.map((article) => (
          <div
            key={article.id}
            className=" rounded-xl overflow-hidden  transition"
          >
            <div className="relative h-48 w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className=""
              />
            </div>

            <div className="py-5 px-2">
              <p className="text-sm text-gray-500 mb-2">{article.date}</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
