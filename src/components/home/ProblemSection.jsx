import React from "react";
import { motion } from "framer-motion";
import { PenTool, TrendingDown, HeartCrack, Lock } from "lucide-react";
import AnimatedSection from "../shared/AnimatedSection";
import SectionLabel from "../shared/SectionLabel";

const problems = [
  {
    icon: PenTool,
    number: "01",
    title: "Stuck at 500 Lines/Day",
    desc: "Your editors type every word from scratch — 8 hours of repetitive keystrokes for 500 lines. That's not productivity; that's endurance.",
  },
  {
    icon: TrendingDown,
    number: "02",
    title: "Margins Squeezed to 15%",
    desc: "Labor is 60–70% of your costs. When your biggest expense is tied to manual typing speed, there's a hard ceiling on profitability.",
  },
  {
    icon: HeartCrack,
    number: "03",
    title: "Burnout & Attrition",
    desc: "Repetitive typing causes physical strain, RSI, and fatigue. Your best editors leave because the job is relentless — and replacing them costs months.",
  },
  {
    icon: Lock,
    number: "04",
    title: "Capacity Locked to Headcount",
    desc: "Need to process more volume? You hire more editors. That means more salaries, more management, and the same thin margins at scale.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-3xl">
            Your Editors Are Your Biggest Cost — And Your Biggest Opportunity
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Indian MTSOs are trapped in a labor-intensive model where capacity = headcount. Every new client means more hires, more overhead, and the same razor-thin margins.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-[0_8px_40px_rgba(239,68,68,0.09)] transition-all duration-500 overflow-hidden"
              style={{ boxShadow: "0 2px 20px 0 rgba(0,0,0,0.06), 0 1px 4px 0 rgba(0,0,0,0.03)" }}
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-destructive/30 to-transparent" />
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-red-50/80 to-transparent rounded-3xl pointer-events-none" />
              <div className="relative">
                <div>              
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm ring-1 ring-red-100" style={{ background: "linear-gradient(145deg, #fff1f1 0%, #fee2e2 100%)", color: "#ef4444" }}>
                      <p.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
