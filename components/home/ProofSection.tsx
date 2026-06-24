"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const proofStats = [
  { value: "70+", label: "US Healthcare Organizations" },
  { value: "4", label: "Entity Types Served" },
  { value: "2x", label: "Capacity Potential, Same Team" },
];

const impactRows = [
  { metric: "Throughput per editor", before: "Baseline", after: "Up to 2x", highlight: false },
  { metric: "Path to more capacity", before: "Hire & train", after: "Same team", highlight: false },
  { metric: "Quality consistency", before: "Variable", after: "QA-scored", highlight: false },
  { metric: "EBITDA margin", before: "~15%", after: "~30%", highlight: true },
];

export default function ProofSection() {
  return (
    <section id="proof" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-accent text-sm font-medium text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Live in Production
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
              Not a Prototype. A Production Platform.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven at production scale: live across 70+ diverse US healthcare
              organizations — hospitals, ASCs, physician groups, and clinics —
              processing real clinical work today.
            </p>
          </div>
        </AnimatedSection>

        {/* Track record stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {proofStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-white rounded-3xl border border-slate-100 p-10 text-center hover:shadow-[0_8px_40px_rgba(42,111,242,0.13)] transition-all duration-500 overflow-hidden"
              style={{
                boxShadow:
                  "0 2px 20px 0 rgba(42,111,242,0.08), 0 1px 4px 0 rgba(0,0,0,0.04)",
              }}
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary/20 to-transparent pointer-events-none" />
              <div className="relative">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-primary via-blue-500 to-primary/70 bg-clip-text text-transparent pb-1">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 shadow-sm ring-1 ring-primary/10"
              style={{
                background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)",
                color: "#2A6FF2",
              }}
            >
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              The Capacity Shift
            </h3>
            <p className="mt-2 text-muted-foreground">
              What changes when AI drafts and your team reviews
            </p>
          </div>

          <div
            className="relative max-w-3xl mx-auto rounded-3xl border border-slate-100 overflow-hidden bg-white"
            style={{
              boxShadow:
                "0 4px 30px 0 rgba(42,111,242,0.09), 0 1px 4px 0 rgba(0,0,0,0.04)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-primary/60" />
            <div className="grid grid-cols-3 bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-slate-200/80">
              <div className="p-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Metric
              </div>
              <div className="p-5 text-xs font-bold uppercase tracking-wider text-muted-foreground text-center">
                Manual
              </div>
              <div className="p-5 text-xs font-bold uppercase tracking-wider text-primary text-center">
                With MedScribeAI
              </div>
            </div>

            {impactRows.map((row) => (
              <div
                key={row.metric}
                className={`grid grid-cols-3 border-t transition-colors duration-300 ${
                  row.highlight
                    ? "border-primary/10 bg-gradient-to-r from-blue-50/60 to-primary/[0.04]"
                    : "border-slate-100 bg-white hover:bg-slate-50/50"
                }`}
              >
                <div
                  className={`p-5 text-sm leading-snug ${
                    row.highlight
                      ? "font-bold text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {row.metric}
                </div>
                <div
                  className={`p-5 text-sm text-center ${
                    row.highlight
                      ? "font-semibold text-muted-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {row.before}
                </div>
                <div
                  className={`p-5 text-sm text-center font-bold ${
                    row.highlight
                      ? "bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent"
                      : "text-foreground"
                  }`}
                >
                  {row.after}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-xs text-muted-foreground/70 max-w-xl mx-auto">
            Illustrative. Actual results vary by specialty, client specs, baseline
            efficiency, and team adoption.
          </p>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 relative rounded-3xl overflow-hidden border border-slate-100"
          style={{
            boxShadow:
              "0 8px 40px 0 rgba(42,111,242,0.12), 0 2px 8px 0 rgba(0,0,0,0.04)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/60 to-secondary/40" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-primary/60" />

          <div className="relative p-10 lg:p-14 text-center">
            <p className="text-lg lg:text-xl font-semibold text-muted-foreground">
              Capacity stops being a hiring decision.
            </p>
            <p className="mt-3 text-3xl lg:text-4xl font-bold bg-gradient-to-br from-primary via-blue-500 to-primary/70 bg-clip-text text-transparent">
              Grow the work without growing the team.
            </p>
            <div className="mt-6 w-16 h-px mx-auto bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <p className="mt-6 text-base text-muted-foreground italic font-medium">
              Built and proven on a real transcription floor — now live across the
              market.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
