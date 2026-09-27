import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CinematicInterlude from "@/components/CinematicInterlude";
import ProblemSection from "@/components/ProblemSection";
import DecisionDemo from "@/components/DecisionDemo";
import HowItWorks from "@/components/HowItWorks";
import TargetAudience from "@/components/TargetAudience";
import VisionSection from "@/components/VisionSection";
import WaitlistSection from "@/components/WaitlistSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <CinematicInterlude />
        <ProblemSection />
        <DecisionDemo />
        <HowItWorks />
        <TargetAudience />
        <VisionSection />
        <WaitlistSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
