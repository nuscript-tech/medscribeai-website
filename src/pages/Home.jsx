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
        title="Ready to Double Your Capacity?"
        description="Start a 10-day production pilot — zero cost, zero risk, operational by tomorrow morning. See the productivity gains and EBITDA impact with your own team and data."
        primaryLabel="Start 10-Day Pilot"
        primaryLink="/request-demo"
      />
    </>
  );
}
