"use client";

import React from "react";
import {
  Upload,
  Mic,
  Brain,
  Settings,
  Pencil,
  ShieldCheck,
  Send,
  RefreshCw,
  TrendingUp,
  Sparkles,
  User,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const steps = [
  {
    icon: Upload,
    tag: "Input",
    step: "01",
    title: "Audio Capture",
    desc: "Providers dictate or capture ambient audio. Files arrive through a secure pipeline and are encrypted at rest on hardened cloud storage.",
  },
  {
    icon: Mic,
    tag: "Speech-to-Text",
    step: "02",
    title: "Speech-to-Text",
    desc: "A clinical-grade speech engine converts audio to text with high raw accuracy, handling medical vocabulary, dictation commands, and speaker separation natively.",
  },
  {
    icon: Brain,
    tag: "AI Engine",
    step: "03",
    title: "AI Formatting",
    desc: "The AI engine structures the raw transcript into a clinical document — applying provider templates, client specifications, style rules, and medico-legal requirements.",
  },
  {
    icon: Settings,
    tag: "Rules Engine",
    step: "04",
    title: "Post-Processor",
    desc: "A deterministic rule engine applies corrections, abbreviation expansion, and client-specific formatting. Consistent, predictable, and auditable.",
  },
  {
    icon: Pencil,
    tag: "Human Review",
    step: "05",
    title: "Editor Review",
    desc: "Your editor reviews the AI draft, makes corrections, fills any blanks, and confirms accuracy. The AI does the heavy lifting; your team ensures it's right.",
  },
  {
    icon: ShieldCheck,
    tag: "Quality Assurance",
    step: "06",
    title: "QA Review",
    desc: "QA audits the completed document across 13 error categories. Accuracy scoring, error tracking, and rebuttal workflows keep quality standards consistent.",
  },
  {
    icon: Send,
    tag: "Output",
    step: "07",
    title: "Delivery",
    desc: "The approved document is delivered to the client through their preferred channel — EHR integration, HL7/FHIR, secure portal, or file delivery.",
  },
];

const loop = [
  {
    icon: User,
    bg: "bg-blue-50",
    color: "text-primary",
    border: "border-blue-100",
    step: "01",
    title: "Your Editor Makes a Correction",
    desc: "An editor reviews the AI draft and makes any required edits — terminology, formatting, provider-specific preferences.",
  },
  {
    icon: RefreshCw,
    bg: "bg-teal-50",
    color: "text-accent",
    border: "border-teal-100",
    step: "02",
    title: "Feedback Feeds the Engine",
    desc: "Every correction is captured and fed back into the pipeline, building a provider-specific knowledge base over time.",
  },
  {
    icon: Sparkles,
    bg: "bg-indigo-50",
    color: "text-primary",
    border: "border-indigo-100",
    step: "03",
    title: "Drafts Get Better Automatically",
    desc: "The next draft for that provider is more accurate, needs fewer corrections, and moves closer to ready-to-deliver with every cycle.",
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-40 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>How It Works</SectionLabel>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight max-w-3xl">
              From Audio to Approved Document{" "}
              <span className="text-primary">in 7 Steps</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              MedScribeAI pairs AI speed with human accuracy. The AI generates a
              near-complete draft in seconds; your team reviews, refines, and
              approves. Every step is transparent and auditable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />
            <div className="space-y-8 lg:space-y-12">
              {steps.map((s, i) => (
                <AnimatedSection key={s.step} delay={i * 0.05}>
                  <div className="relative flex gap-6 lg:gap-10">
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/25">
                        <s.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                      </div>
                    </div>
                    <div className="flex-1 bg-card rounded-2xl border border-border p-6 lg:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold">
                          {s.tag}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Step {s.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Loop */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #F0F5FF 0%, #EEF4FF 50%, #F5F7FA 100%)",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: "rgba(42,111,242,0.07)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{ background: "rgba(0,196,167,0.06)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <SectionLabel>Continuous Improvement</SectionLabel>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
                The Self-Improving Learning Loop
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Every correction makes the system smarter. MedScribeAI learns
                from each interaction, so your team does less work over time, not
                more.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {loop.map((item, i) => (
                <div
                  key={item.step}
                  className={`relative group bg-white rounded-3xl border ${item.border} p-8 shadow-[0_2px_20px_0_rgba(42,111,242,0.07)] hover:shadow-[0_8px_32px_0_rgba(42,111,242,0.13)] transition-all duration-500`}
                >
                  {i < 2 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 items-center justify-center shadow-sm text-slate-400 text-xs font-bold">
                      →
                    </div>
                  )}
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-5`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">
                    Step {item.step}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-white p-8 lg:p-12 shadow-[0_2px_24px_0_rgba(42,111,242,0.08)]">
              <div
                className="absolute top-0 left-0 w-full h-1 rounded-t-3xl"
                style={{ background: "linear-gradient(90deg, #2A6FF2, #00C4A7)" }}
              />
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-extrabold text-foreground mb-2">
                    The Compounding Result
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    New providers start with strong baseline accuracy and improve
                    rapidly. Established providers see near-ready first drafts
                    that need minimal editing.{" "}
                    <span className="font-semibold text-foreground">
                      Your team spends less time correcting and more time
                      producing — pushing throughput toward 2× without adding
                      headcount.
                    </span>
                  </p>
                </div>
                <div className="shrink-0 text-center lg:text-right">
                  <div className="text-4xl font-extrabold text-primary">
                    Up to 2×
                  </div>
                  <div className="text-sm text-muted-foreground font-medium mt-1">
                    throughput, same team
                  </div>
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
                  style={{ background: "rgba(0,196,167,0.12)" }}
                />
              </div>
              <div className="relative z-10">
                <h2
                  className="text-4xl lg:text-5xl font-extrabold max-w-2xl mx-auto leading-tight"
                  style={{ color: "#1B1F3B" }}
                >
                  AI Does the Heavy Lifting. Your Team Ensures Perfection.
                </h2>
                <p
                  className="mt-5 text-lg max-w-xl mx-auto"
                  style={{ color: "#4A4A4A" }}
                >
                  MedScribeAI isn't a fully automated black box. Every document is
                  reviewed by a trained editor before delivery.
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
