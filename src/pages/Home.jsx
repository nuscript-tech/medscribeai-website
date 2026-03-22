import React from "react";
import HeroSection from "../components/home/HeroSection";
import StatsBar from "../components/home/StatsBar";
import ProblemSection from "../components/home/ProblemSection";
import SolutionSection from "../components/home/SolutionSection";
import ProofSection from "../components/home/ProofSection";
import CTASection from "../components/shared/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ProblemSection />
      <SolutionSection />
      <ProofSection />
      <CTASection
        title="Ready to Transform Your MTSO Operations?"
        description="Join the pilot program — 1 month free, 1 month at 50% off. See the productivity gains and cost savings firsthand."
        primaryLabel="Request a Demo"
        primaryLink="/request-demo"
        secondaryLabel="See Pricing"
        secondaryLink="/pricing"
      />
    </>
  );
}