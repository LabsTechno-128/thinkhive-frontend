import ArticlesSection from "@/components/card/QuzzyCard";
import FeaturedCategory from "@/components/home/FeaturedCategory";
import HeroSection from "@/components/home/HeroSection";
import Physics from "@/components/home/Physics";
import QuizSection from "@/components/home/QuizSection";


export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <HeroSection></HeroSection>
      <FeaturedCategory></FeaturedCategory>
      <QuizSection></QuizSection>
      <Physics></Physics>
      <ArticlesSection></ArticlesSection>
      
       
    </div>
  );
}
