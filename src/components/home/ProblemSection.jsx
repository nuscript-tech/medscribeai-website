import React from "react";
import { motion } from "framer-motion";
import { Monitor, Users, PenTool, Ban } from "lucide-react";
import AnimatedSection from "../shared/AnimatedSection";
import SectionLabel from "../shared/SectionLabel";

const problems = [
  {
    icon: Monitor,
    number: "01",
    title: "Legacy Platforms",
    desc: "iMedX, EMDAT/3M Solventum — built 15+ years ago with no AI capabilities and enterprise-level pricing.",
  },
  {
    icon: Users,
    number: "02",
    title: "Separate HRMS",
    desc: "GreytHR, Zoho People, Keka — a second system, second cost, and zero integration with your transcription workflow.",
  },
  {
    icon: PenTool,
    number: "03",
    title: "Manual Inefficiency",
    desc: "CDEs typing 500 lines/day from scratch. No AI assistance, no learning loop, no productivity gains.",
  },
  {
    icon: Ban,
    number: "04",
    title: "No Innovation Path",
    desc: "Legacy vendors aren't investing in AI for Indian MTSOs. You're stuck with technology from 2010.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-3xl">
            Indian MTSOs Are Running on 15-Year-Old Technology
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Most MTSOs cobble together legacy transcription platforms with separate HRMS tools, manual processes, and zero AI.
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
              <div className="relative flex items-start gap-5">
                <span className="text-6xl font-extrabold shrink-0 leading-none select-none" style={{ color: "rgba(203,213,225,0.7)" }}>
                  {p.number}
                </span>
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