"use client";

import React from "react";
import {
  Building2,
  Target,
  MapPin,
  Lightbulb,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const values = [
  {
    icon: Building2,
    title: "Deep Domain Expertise",
    desc: "MedScribeAI is built by a team that understands transcription workflows, QA processes, turnaround requirements, and client management from the inside. This isn't generic healthcare software.",
  },
  {
    icon: Target,
    title: "Production-Proven",
    desc: "Every feature is validated on a live transcription floor — processing real clinical work at scale — before it ships to customers.",
  },
  {
    icon: Lightbulb,
    title: "Built for Real Operations",
    desc: "Designed around how transcription operations actually run — compensation models, shift patterns, leave policies, QA, and client specs — not a theoretical workflow.",
  },
  {
    icon: Shield,
    title: "Aligned With Your Success",
    desc: "MedScribeAI succeeds when our customers grow. Pricing scales with volume, features are shaped by operator feedback, and every release is designed to make your operation more profitable.",
  },
];

const milestones = [
  {
    year: "2000",
    text: "Our founder enters the health information and revenue-cycle sector, laying the groundwork for two decades of expertise in global documentation standards.",
  },
  {
    year: "2000–2025",
    text: "25 years building health-tech ventures across the US and Indian markets — mastering clinical documentation and revenue cycle management.",
  },
  {
    year: "2026",
    text: "NuScript Technologies builds MedScribeAI, proven on a real transcription floor and now live across 70+ diverse US healthcare organizations.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>About MedScribeAI</SectionLabel>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight max-w-3xl">
              Built by People Who Know{" "}
              <span className="text-primary">the Floor.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              MedScribeAI is built by NuScript Technologies — a Coimbatore-based
              technology company modernizing medical transcription operations. We
              pair deep domain expertise with modern AI and cloud engineering to
              deliver a platform proven on a real transcription floor.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div
                  className="bg-white rounded-3xl border border-slate-100 p-8 h-full"
                  style={{ boxShadow: "0 2px 20px 0 rgba(0,0,0,0.04)" }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm ring-1 ring-primary/10"
                    style={{
                      background:
                        "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)",
                    }}
                  >
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-14">
              Our Journey
            </h2>
          </AnimatedSection>
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.1}>
                <div className="flex gap-6 sm:gap-8">
                  <div className="flex-shrink-0 w-32 text-right">
                    <span className="text-2xl font-extrabold text-primary whitespace-nowrap">
                      {m.year}
                    </span>
                  </div>
                  <div className="relative pt-1">
                    <div className="absolute top-2 -left-[5px] w-2.5 h-2.5 bg-primary rounded-full ring-4 ring-secondary" />
                    <div className="pl-6 pb-4 border-l border-border ml-0">
                      <p className="text-muted-foreground leading-relaxed">
                        {m.text}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Vision */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ring-1 ring-primary/10"
                style={{
                  background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)",
                }}
              >
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Based in Coimbatore
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  NuScript Technologies operates from Coimbatore, Tamil Nadu —
                  one of India's growing technology and business hubs.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ring-1 ring-primary/10"
                style={{
                  background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)",
                }}
              >
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Define the next generation of technology for medical
                  transcription operations — and the healthcare organizations
                  they serve.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div
              className="relative overflow-hidden rounded-3xl px-8 py-20 lg:px-24 lg:py-24 text-center"
              style={{
                background:
                  "radial-gradient(ellipse 80% 70% at 50% 50%, #E8F1FF 0%, #EEF4FF 45%, #F5F7FA 75%, #ffffff 100%)",
              }}
            >
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                  style={{ background: "rgba(42,111,242,0.12)" }}
                />
                <div
                  className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
                  style={{ background: "rgba(0,196,167,0.12)" }}
                />
              </div>
              <div className="relative z-10">
                <h2
                  className="text-4xl lg:text-5xl font-extrabold max-w-2xl mx-auto leading-tight"
                  style={{ color: "#1B1F3B" }}
                >
                  Ready to Modernize Your Operation?
                </h2>
                <p
                  className="mt-5 text-lg max-w-xl mx-auto"
                  style={{ color: "#4A4A4A" }}
                >
                  See how MedScribeAI fits your operation — no pitch deck, just a
                  focused walkthrough with your numbers.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="/request-demo">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-[#1A5CD8] text-white gap-2 px-8 rounded-full font-semibold text-base"
                      style={{ boxShadow: "0 8px 24px rgba(42,111,242,0.25)" }}
                    >
                      Request a Demo
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
