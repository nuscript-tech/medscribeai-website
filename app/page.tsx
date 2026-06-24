import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import ProofSection from "@/components/home/ProofSection";
import SecuritySection from "@/components/home/SecuritySection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ProblemSection />
      <SolutionSection />
      <ProofSection />
      <SecuritySection />
      <CTASection />
    </>
  );
}
