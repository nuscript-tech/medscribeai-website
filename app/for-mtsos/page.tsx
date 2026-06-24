"use client";

import React from "react";
import {
  Clock,
  Target,
  TrendingUp,
  Users,
  Rocket,
  PiggyBank,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const tableRows = [
  { item: "Editors for the same volume", without: "Full team", withAI: "Same team, ~2× output" },
  { item: "Path to more capacity", without: "Hire & train", withAI: "Existing team" },
  { item: "Legacy platform fees", without: "Per-line license", withAI: "Included" },
  { item: "Separate HRMS", without: "Standalone cost", withAI: "Built in" },
  { item: "Quality consistency", without: "Variable", withAI: "QA-scored", highlight: true },
  { item: "EBITDA margin", without: "~15%", withAI: "~30%", highlight: true },
];

const benefits = [
  {
    icon: Clock,
    title: "Faster Turnaround",
    stat: "Hours, not days",
    desc: "AI drafts are ready in seconds, compressing turnaround from days to hours.",
  },
  {
    icon: Target,
    title: "Higher Accuracy",
    stat: "AI draft + human QA",
    desc: "An AI first pass plus structured human review catches more than manual transcription alone.",
  },
  {
    icon: TrendingUp,
    title: "Scale Without Hiring",
    desc: "Take on more volume without adding headcount — or hold volume and free up capacity.",
  },
  {
    icon: Users,
    title: "Leaner QA Load",
    desc: "Cleaner first drafts mean QA spends time on judgment, not cleanup — compounding the efficiency.",
  },
  {
    icon: Rocket,
    title: "Growth Mode",
    desc: "Win a large new client without a hiring cycle eating the margin before the work even starts.",
  },
  {
    icon: PiggyBank,
    title: "Efficiency Mode",
    desc: "Hold current volume with the same team and convert the recovered capacity directly into margin.",
  },
];

export default function ForMTSOs() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>For MTSO Owners &amp; Operations Heads</SectionLabel>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight max-w-3xl">
              Grow the Work{" "}
              <span className="text-primary">Without Growing the Team</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Labor is the bulk of your cost base. MedScribeAI breaks the link
              between capacity and headcount — your editors review AI drafts
              instead of typing from scratch, processing more volume with the
              same people. The result is a different margin profile, not just a
              cost line item.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground mb-2">
              Manual Operation vs. MedScribeAI
            </h2>
            <p className="text-muted-foreground mb-8">
              What changes across your operation when AI drafts and your team
              reviews.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-[0_2px_24px_0_rgba(42,111,242,0.08)]">
              <table className="w-full">
                <thead>
                  <tr
                    style={{
                      background:
                        "linear-gradient(135deg, #F0F5FF 0%, #EEF4FF 100%)",
                    }}
                  >
                    <th className="text-left px-7 py-5 text-sm font-bold text-foreground w-1/3">
                      Dimension
                    </th>
                    <th className="text-center px-7 py-5 text-sm font-bold w-1/3">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-500 border border-red-100">
                        Manual
                      </span>
                    </th>
                    <th className="text-center px-7 py-5 text-sm font-bold w-1/3">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary border border-blue-100">
                        With MedScribeAI
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {tableRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t border-slate-100 transition-colors ${
                        row.highlight
                          ? "bg-gradient-to-r from-blue-50/60 to-white"
                          : "hover:bg-slate-50/60"
                      }`}
                    >
                      <td
                        className={`px-7 py-4 text-sm ${
                          row.highlight
                            ? "font-bold text-foreground"
                            : "text-slate-600"
                        }`}
                      >
                        {row.item}
                      </td>
                      <td
                        className={`px-7 py-4 text-sm text-center ${
                          row.highlight
                            ? "text-destructive font-extrabold text-base"
                            : "text-slate-500"
                        }`}
                      >
                        {row.without}
                      </td>
                      <td
                        className={`px-7 py-4 text-sm text-center ${
                          row.highlight
                            ? "text-primary font-extrabold text-base"
                            : "text-slate-500"
                        }`}
                      >
                        {row.withAI}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="mt-5 text-center text-xs text-muted-foreground/70 max-w-xl mx-auto">
              Illustrative. Actual results vary by specialty, client specs,
              baseline efficiency, and team adoption.
            </p>
            <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
              <div className="text-2xl lg:text-3xl font-extrabold text-primary">
                Capacity stops being a hiring decision.
              </div>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                The same team takes on more work, quality stays consistent, and
                the margin you used to spend on the hiring treadmill stays in the
                business.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>Beyond Cost</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight max-w-2xl">
              Quality and Speed Improve Together
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.06}>
                <div className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-500 h-full">
                  <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <b.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-1">
                    {b.title}
                  </h3>
                  {b.stat && (
                    <span className="text-sm font-bold text-primary">
                      {b.stat}
                    </span>
                  )}
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
                  See the Impact for Your Operation
                </h2>
                <p
                  className="mt-5 text-lg max-w-xl mx-auto"
                  style={{ color: "#4A4A4A" }}
                >
                  Share your volume and current setup — we'll walk through the
                  capacity and margin impact for your operation, starting with a
                  14-day pilot on your own work.
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
