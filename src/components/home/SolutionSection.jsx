import React from "react";
import { motion } from "framer-motion";
import { Brain, ShieldCheck, Users, Sparkles } from "lucide-react";
import AnimatedSection from "../shared/AnimatedSection";
import SectionLabel from "../shared/SectionLabel";

const primarySolutions = [
  {
    icon: Brain,
    title: "AI-Powered Force Multiplier",
    desc: "Our AI pipeline handles first-pass transcription, template insertion, macro expansion, and formatting. Your editors stop typing from scratch and start reviewing AI-generated drafts — doubling output to 1,000+ lines/day with less physical strain.",
    highlight: true,
  },
  {
    icon: Sparkles,
    title: "From Typists to Editors",
    desc: "MedScribeAI transforms your team's role. Instead of 8 hours of repetitive keystroke work, your people focus on clinical accuracy and quality — a higher-value, more rewarding role. That's upskilling, not downsizing.",
    highlight: true,
  },
  {
    icon: ShieldCheck,
    title: "Complete QA Workflow",
    desc: "13 error categories, accuracy scoring, audit sampling, blank accountability, rebuttals — everything your QA team needs to maintain quality while your editors process double the volume.",
    highlight: false,
  },
];

export default function SolutionSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionLabel>The Force Multiplier</SectionLabel>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-3xl">
            Your Team × AI = 2x Capacity
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            MedScribeAI doesn't replace your editors — it gives them superpowers. The same team, double the output, dramatically better margins.
          </p>
        </AnimatedSection>

        {/* Primary solutions — force multiplier story */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primarySolutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative bg-white rounded-3xl border p-8 hover:shadow-[0_8px_40px_rgba(42,111,242,0.13)] transition-all duration-500 overflow-hidden ${
                s.highlight ? "border-primary/30 ring-1 ring-primary/10" : "border-slate-100"
              }`}
              style={{ boxShadow: "0 2px 20px 0 rgba(42,111,242,0.07), 0 1px 4px 0 rgba(0,0,0,0.04)" }}
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-secondary/60 to-transparent rounded-3xl pointer-events-none" />
              <div className="relative">
                <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-6 shadow-sm ring-1 ring-primary/10" style={{ background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)", color: "#2A6FF2" }}>
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus: Built-in HRMS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 relative bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl border border-emerald-200/60 p-8 overflow-hidden"
        >
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0 shadow-sm ring-1 ring-emerald-200" style={{ background: "linear-gradient(145deg, #ecfdf5 0%, #d1fae5 100%)", color: "#0d9488" }}>
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-foreground">Plus: Built-in Workforce Management</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">Included Free</span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                Employee management, shift scheduling, attendance, leave, CDE/QAS compensation models, payroll exports — all built into the platform. No separate HRMS needed. No GreytHR. No Zoho. No second system, second cost, or integration headaches.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
