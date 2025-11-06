"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#F7F7F7] ">
      <div className=" mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 md:px-10 lg:px-24">
        {/* Left Text Section */}
        <div className="lg:w-[50%] pb-10">
          <h1 className="text-xl md:text-5xl font-extrabold text-title leading-tight">
            Boost Your Brainpower <br /> With Daily Quizzes
          </h1>
          <p className="text-normal mt-5">
            Challenge yourself with daily quizzes designed to sharpen your skills
            and boost your rankings. Master topics, win badges, and rise to the top!
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition">
              Take Quiz Now
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition">
              View Detail
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative py-10">
          <Image
            src="/assets/hero.png"
            alt="Quiz Illustration"
            width={490}
            height={500}
            className="object-contain w-96 lg:w-full"
          />
        </div>
      </div>
    </section>
  );
}
