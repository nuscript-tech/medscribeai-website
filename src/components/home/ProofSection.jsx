import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import AnimatedSection from "../shared/AnimatedSection";

const proofStats = [
  { value: "75K+", label: "Minutes Processed Monthly" },
  { value: "60+", label: "Active Editors on Platform" },
  { value: "2x", label: "Documented Productivity Gain" },
];

const ebitdaRows = [
  { metric: "Editors required for 700K lines", before: "50–60", after: "25–30" },
  { metric: "Monthly editor labor cost", before: "₹25–30L", after: "₹12–15L" },
  { metric: "Platform cost", before: "—", after: "~₹4.7L" },
  { metric: "Net monthly savings", before: "—", after: "₹8–10L", highlight: true },
  { metric: "EBITDA margin", before: "~15%", after: "~28–32%", highlight: true },
  { metric: "Annualized savings", before: "—", after: "₹1–1.2 Cr", highlight: true },
];

export default function ProofSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-accent text-sm font-medium text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Live in Production
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-2xl mx-auto">
              Not a Prototype. A Production Platform.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              MedScribeAI is processing real medical dictation for real MTSOs, every single day — with verified operational metrics.
            </p>
          </div>
        </AnimatedSection>

        {/* Track Record Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {proofStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-white rounded-3xl border border-slate-100 p-10 text-center hover:shadow-[0_8px_40px_rgba(42,111,242,0.13)] transition-all duration-500 overflow-hidden"
              style={{ boxShadow: "0 2px 20px 0 rgba(42,111,242,0.08), 0 1px 4px 0 rgba(0,0,0,0.04)" }}
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-secondary/20 to-transparent pointer-events-none" />
              <div className="relative">
                <div className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-primary via-blue-500 to-primary/70 bg-clip-text text-transparent pb-1">{stat.value}</div>
                <div className="mt-3 text-sm font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EBITDA Impact Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 shadow-sm ring-1 ring-primary/10" style={{ background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)", color: "#2A6FF2" }}>
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-foreground">
              The EBITDA Impact
            </h3>
            <p className="mt-2 text-muted-foreground">
              Illustrative financial impact at 700,000 lines/month
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto rounded-3xl border border-slate-100 overflow-hidden" style={{ boxShadow: "0 4px 30px 0 rgba(42,111,242,0.09), 0 1px 4px 0 rgba(0,0,0,0.04)" }}>
            {/* Gradient top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-primary/60" />

            {/* Table header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-slate-50 to-blue-50/50 border-b border-slate-200/80">
              <div className="p-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">Metric</div>
              <div className="p-5 text-xs font-bold uppercase tracking-wider text-muted-foreground text-center">Before</div>
              <div className="p-5 text-xs font-bold uppercase tracking-wider text-primary text-center">With MedScribeAI</div>
            </div>

            {/* Table rows */}
            {ebitdaRows.map((row, i) => (
              <div
                key={row.metric}
                className={`grid grid-cols-3 border-t transition-colors duration-300 ${
                  row.highlight
                    ? "border-primary/10 bg-gradient-to-r from-blue-50/60 to-primary/[0.04]"
                    : "border-slate-100 bg-white hover:bg-slate-50/50"
                }`}
              >
                <div className={`p-5 text-sm leading-snug ${row.highlight ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                  {row.metric}
                </div>
                <div className={`p-5 text-sm text-center ${row.highlight ? "font-semibold text-muted-foreground/70" : "text-muted-foreground"}`}>
                  {row.before}
                </div>
                <div className={`p-5 text-sm text-center font-bold ${
                  row.highlight
                    ? "bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent"
                    : "text-foreground"
                }`}>
                  {row.after}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-xs text-muted-foreground/70">
            Illustrative projections based on platform averages. Actual results vary by volume, baseline efficiency, and team adoption.
          </p>
        </motion.div>

        {/* The Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 relative rounded-3xl overflow-hidden"
          style={{ boxShadow: "0 8px 40px 0 rgba(42,111,242,0.12), 0 2px 8px 0 rgba(0,0,0,0.04)" }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
          {/* Subtle pattern overlay */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-primary/60" />

          <div className="relative p-10 lg:p-14 text-center">
            <p className="text-lg lg:text-xl font-semibold text-slate-300">
              A 15% margin becoming 30% doesn't just improve cash flow.
            </p>
            <p className="mt-3 text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              It doubles your company's valuation.
            </p>
            <div className="mt-6 w-16 h-px mx-auto bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
            <p className="mt-6 text-base text-blue-200/80 italic font-medium">
              Your typists become editors. Your editors become a force multiplier.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
