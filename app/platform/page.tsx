"use client";

import React from "react";
import {
  Brain,
  Mic,
  Globe,
  RefreshCw,
  FileText,
  Layers,
  AlertTriangle,
  Target,
  BarChart2,
  FileSearch,
  Users,
  CalendarDays,
  Clock,
  Wallet,
  Zap,
  PenTool,
  ShieldCheck,
  Cloud,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

type Feature = { icon: React.ElementType; title: string; desc: string };

const aiFeatures: Feature[] = [
  {
    icon: Mic,
    title: "Clinical-Grade Speech-to-Text",
    desc: "Speech-to-text tuned for clinical audio, with medical vocabulary, dictation-style support, and high raw accuracy.",
  },
  {
    icon: Brain,
    title: "AI Formatting Engine",
    desc: "AI structures raw transcript output into clinical documents that follow provider styles, templates, and client specifications.",
  },
  {
    icon: Globe,
    title: "Deterministic Post-Processor",
    desc: "Rule-based corrections for recognition errors, abbreviations, and formatting standards — consistent and predictable.",
  },
  {
    icon: RefreshCw,
    title: "Self-Improving Learning Loop",
    desc: "Editor corrections feed back into the system, improving future drafts for each provider over time.",
  },
  {
    icon: FileText,
    title: "Template & Macro Management",
    desc: "A full template system with document extraction, macro libraries, and provider-specific samples with contextual search.",
  },
  {
    icon: Layers,
    title: "Review-First Pipeline",
    desc: "The AI generates a near-complete draft and your editor reviews and refines — shifting the work from typing to reviewing, toward 2× output.",
  },
];

const qaFeatures: Feature[] = [
  {
    icon: AlertTriangle,
    title: "13 Error Categories",
    desc: "A comprehensive error taxonomy covering medical, grammatical, formatting, and critical errors with weighted scoring.",
  },
  {
    icon: Target,
    title: "Accuracy Scoring",
    desc: "Automated accuracy calculations per editor, per client, and per period — with drill-down into specific error patterns.",
  },
  {
    icon: BarChart2,
    title: "Audit Sampling",
    desc: "Configurable audit percentages, random sampling, and targeted reviews for quality-assurance compliance.",
  },
  {
    icon: FileSearch,
    title: "Blank Accountability",
    desc: "Track unresolved blanks, monitor resolution times, and ensure nothing reaches delivery without review.",
  },
];

const managementFeatures: Feature[] = [
  {
    icon: Users,
    title: "Team Management",
    desc: "Complete profiles, role-based access for editors, QA, managers, and admins, plus department structure and document management.",
  },
  {
    icon: CalendarDays,
    title: "Shift Scheduling",
    desc: "Flexible shift creation, rotation management, and schedule publishing — integrated with production tracking.",
  },
  {
    icon: Clock,
    title: "Attendance Tracking",
    desc: "Grace periods, gap rules, short permissions, and overtime calculations — all configurable to your policy.",
  },
  {
    icon: Wallet,
    title: "Compensation & Payroll",
    desc: "Compensation models with incentive tiers, line-based pay calculations, premium handling, and payroll exports.",
  },
];

function FeatureGrid({
  features,
  columns = 3,
}: {
  features: Feature[];
  columns?: 2 | 3;
}) {
  const gridCls =
    columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`mt-12 grid grid-cols-1 ${gridCls} gap-6`}>
      {features.map((f, i) => (
        <AnimatedSection key={f.title} delay={i * 0.06}>
          <div className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-500 h-full">
            <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <f.icon className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">
              {f.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {f.desc}
            </p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}

const flowCards = [
  {
    step: "01",
    icon: Zap,
    title: "AI Does the Heavy Lifting",
    desc: "Audio goes in. The pipeline handles speech-to-text, template insertion, macro expansion, and formatting — producing a near-complete draft in seconds.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Editors Review & Refine",
    desc: "Your team shifts from typing every word to reviewing AI drafts — focusing on clinical accuracy and quality, the work humans do best.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "QA Ensures Quality at Scale",
    desc: "13 error categories, accuracy scoring, audit sampling, and accountability tracking ensure more volume never means lower quality.",
  },
];

const cloudCards = [
  {
    icon: Cloud,
    title: "No Hardware",
    desc: "Nothing to provision, rack, or maintain. Everything runs in the cloud.",
  },
  {
    icon: MonitorSmartphone,
    title: "Browser-Based",
    desc: "Your team accesses MedScribeAI through any standard web browser. No downloads.",
  },
  {
    icon: Clock,
    title: "Hours to Go-Live",
    desc: "Setup completes in hours. Your team processes real production work the next morning.",
  },
];

export default function Platform() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-accent text-sm font-medium text-primary mb-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Platform Overview
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl">
              Two Engines.{" "}
              <span className="text-accent">One Platform.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A Production Engine that turns audio into EHR-ready documentation,
              and a Management Suite that runs the operation around it. Together
              they let you process more volume with the same team, while a
              complete QA workflow holds quality steady.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How it flows */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flowCards.map((card, i) => (
              <AnimatedSection key={card.step} delay={i * 0.12}>
                <div
                  className="group relative bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-[0_8px_40px_rgba(42,111,242,0.13)] transition-all duration-500 overflow-hidden h-full"
                  style={{
                    boxShadow:
                      "0 2px 20px 0 rgba(42,111,242,0.07), 0 1px 4px 0 rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                  <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-secondary/60 to-transparent rounded-3xl pointer-events-none" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center shadow-sm ring-1 ring-primary/10 group-hover:scale-105 transition-transform duration-300"
                        style={{
                          background:
                            "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)",
                          color: "#2A6FF2",
                        }}
                      >
                        <card.icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold text-primary/30 uppercase tracking-widest">
                        Step {card.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-center gap-3 mt-8 flex-wrap">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/30" />
            {["Audio In", "AI Draft", "Editor Review", "QA Verified", "Delivered"].map(
              (label, i, arr) => (
                <React.Fragment key={label}>
                  <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">
                    {label}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-primary/30" />
                  )}
                </React.Fragment>
              )
            )}
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
        </div>
      </section>

      {/* Production Engine — AI pipeline */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>Production Engine</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight max-w-2xl">
              The AI Transcription Pipeline
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              From raw audio to formatted clinical document in seconds. Each
              stage adds precision, so your editors start from a near-complete
              draft, not a blank screen.
            </p>
          </AnimatedSection>
          <FeatureGrid features={aiFeatures} />
        </div>
      </section>

      {/* QA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>Quality at Scale</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight max-w-2xl">
              A Complete QA Workflow
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              More output means nothing if quality slips. The QA system holds
              accuracy steady at every scale — 13 error categories, automated
              scoring, and full audit trails.
            </p>
          </AnimatedSection>
          <FeatureGrid features={qaFeatures} columns={2} />
        </div>
      </section>

      {/* Management Suite */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>Management Suite</SectionLabel>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                Workforce Management — Built In
              </h2>
              <span className="inline-flex px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
                Included
              </span>
            </div>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              No separate HRMS, no second system, no second cost, no integration
              headaches. Everything needed to run the operation lives inside
              MedScribeAI.
            </p>
          </AnimatedSection>
          <FeatureGrid features={managementFeatures} columns={2} />
        </div>
      </section>

      {/* Cloud / zero install */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div
              className="relative rounded-3xl border border-slate-100 overflow-hidden"
              style={{
                boxShadow:
                  "0 8px 40px 0 rgba(42,111,242,0.12), 0 2px 8px 0 rgba(0,0,0,0.04)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/60 to-secondary/40" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-primary/60" />

              <div className="relative p-10 lg:p-14">
                <div className="text-center mb-10">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 shadow-sm ring-1 ring-primary/10 mx-auto"
                    style={{
                      background:
                        "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)",
                      color: "#2A6FF2",
                    }}
                  >
                    <Cloud className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    100% Cloud. Zero Installation.
                  </h3>
                  <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-br from-primary via-blue-500 to-primary/70 bg-clip-text text-transparent">
                    Operational by Tomorrow Morning.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  {cloudCards.map((item) => (
                    <div key={item.title} className="text-center">
                      <div
                        className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-3 shadow-sm ring-1 ring-primary/10"
                        style={{
                          background:
                            "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)",
                          color: "#2A6FF2",
                        }}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
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
                  style={{ background: "rgba(13,148,136,0.12)" }}
                />
              </div>
              <div className="relative z-10">
                <h2
                  className="text-4xl lg:text-5xl font-bold max-w-2xl mx-auto leading-tight"
                  style={{ color: "#1B1F3B" }}
                >
                  See the Platform in Action
                </h2>
                <p
                  className="mt-5 text-lg max-w-xl mx-auto"
                  style={{ color: "#4A4A4A" }}
                >
                  Start a 14-day pilot on your own work — full access, no credit
                  card. See both engines running with your own team and data.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="/request-demo?intent=pilot">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-[#1A5CD8] text-white gap-2 px-8 rounded-full font-semibold text-base"
                      style={{ boxShadow: "0 8px 24px rgba(42,111,242,0.25)" }}
                    >
                      Start 14-Day Pilot
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
