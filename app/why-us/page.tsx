"use client";

import React from "react";
import {
  Factory,
  Brain,
  Layers,
  LineChart,
  Rocket,
  Shield,
  X,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const reasons = [
  {
    icon: Factory,
    title: "Built on a Real Transcription Floor",
    desc: "Not a generic tool adapted after the fact. MedScribeAI was built and proven against the realities of a live transcription operation — shifts, workflows, compliance, and quality standards.",
  },
  {
    icon: Brain,
    title: "AI That Actually Ships",
    desc: "A multi-stage pipeline (speech-to-text → AI formatting → post-processor) delivers production-quality output, not demo-quality. Proven in daily production, not a sandbox.",
  },
  {
    icon: Layers,
    title: "Two Engines in One",
    desc: "A Production Engine and a Management Suite in a single platform — replacing your legacy transcription tool and a separate HRMS. One vendor, one system, deeply integrated.",
  },
  {
    icon: LineChart,
    title: "Economics That Make Sense",
    desc: "Capacity stops scaling with headcount. The same team processes more volume, quality stays consistent, and the margin you spent on hiring stays in the business.",
  },
  {
    icon: Rocket,
    title: "Production-Tested at Scale",
    desc: "Not a prototype. MedScribeAI runs in daily production across 70+ diverse US healthcare organizations — hospitals, ASCs, physician groups, and clinics.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    desc: "HIPAA-compliant architecture with BAAs, tenant isolation, encryption in transit and at rest, role-based access, and full audit trails.",
  },
];

const comparison: [string, string, string][] = [
  ["AI Transcription", "None", "Multi-stage pipeline"],
  ["QA Workflow", "Basic / manual", "13 error categories, scored"],
  ["Workforce Management", "Separate system", "Built in"],
  ["Throughput", "Typing speed", "Up to 2×, same team"],
  ["Learning Loop", "No", "Self-improving"],
  ["Delivery", "Manual / portal", "EHR / HL7-FHIR ready"],
  ["Footprint", "Two systems, two costs", "One platform"],
];

export default function WhyUs() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>Why MedScribeAI</SectionLabel>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl">
              Purpose-Built.{" "}
              <span className="text-primary">Production-Proven.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              MedScribeAI isn't another generic transcription tool. It's the AI
              platform for medical transcription operations — combining an AI
              production pipeline, complete QA, and workforce management in one
              system, proven across 70+ diverse US healthcare organizations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Reasons */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.08}>
                <div className="group bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-secondary text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <r.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {r.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, #F0F5FF 0%, #EEF4FF 50%, #F5F7FA 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl -z-10"
          style={{ background: "rgba(42,111,242,0.07)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl -z-10"
          style={{ background: "rgba(0,196,167,0.06)" }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <SectionLabel>The Difference</SectionLabel>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Manual Stack vs. MedScribeAI
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
                A capability-by-capability look at what changes when you switch.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-[0_2px_24px_0_rgba(42,111,242,0.08)]">
              <table className="w-full">
                <thead>
                  <tr>
                    <th
                      className="text-left px-7 py-5 text-sm font-bold text-foreground w-1/3 rounded-tl-3xl"
                      style={{
                        background:
                          "linear-gradient(135deg, #F0F5FF 0%, #EEF4FF 100%)",
                      }}
                    >
                      Capability
                    </th>
                    <th
                      className="text-center px-7 py-5 text-sm font-bold w-1/3"
                      style={{
                        background:
                          "linear-gradient(135deg, #F0F5FF 0%, #EEF4FF 100%)",
                      }}
                    >
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                        Manual Stack
                      </span>
                    </th>
                    <th
                      className="text-center px-7 py-5 text-sm font-bold w-1/3 rounded-tr-3xl"
                      style={{
                        background:
                          "linear-gradient(135deg, #F0F5FF 0%, #EEF4FF 100%)",
                      }}
                    >
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary border border-blue-100">
                        MedScribeAI
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {comparison.map(([cap, manual, ms], i) => (
                    <tr
                      key={i}
                      className="border-t border-slate-100 hover:bg-blue-50/30 transition-colors"
                    >
                      <td className="px-7 py-4 text-sm font-semibold text-foreground">
                        {cap}
                      </td>
                      <td className="px-7 py-4 text-sm text-center">
                        <span className="inline-flex items-center gap-1.5 text-slate-400">
                          <X className="w-3.5 h-3.5 text-red-400 shrink-0" />
                          {manual}
                        </span>
                      </td>
                      <td className="px-7 py-4 text-sm text-center">
                        <span className="inline-flex items-center gap-1.5 text-primary font-semibold">
                          <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                          {ms}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  className="text-4xl lg:text-5xl font-bold max-w-2xl mx-auto leading-tight"
                  style={{ color: "#1B1F3B" }}
                >
                  Ready to See the Difference?
                </h2>
                <p
                  className="mt-5 text-lg max-w-xl mx-auto"
                  style={{ color: "#4A4A4A" }}
                >
                  Request a demo and see the platform that's already running in
                  production across 70+ healthcare organizations.
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
