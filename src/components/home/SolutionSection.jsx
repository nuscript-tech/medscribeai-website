import React from "react";
import { motion } from "framer-motion";
import { Brain, ShieldCheck, Users, BarChart3 } from "lucide-react";
import AnimatedSection from "../shared/AnimatedSection";
import SectionLabel from "../shared/SectionLabel";

const solutions = [
  {
    icon: Brain,
    title: "AI Transcription Pipeline",
    desc: "Medical-grade speech-to-text + AI formatting generates near-complete drafts. CDEs review and refine — doubling output to 1,000+ lines/day.",
  },
  {
    icon: ShieldCheck,
    title: "Complete QA Workflow",
    desc: "13 error categories, accuracy scoring, audit sampling, blank accountability, rebuttals — everything your QA team needs.",
  },
  {
    icon: Users,
    title: "Full HRMS Built In",
    desc: "Employee management, shift scheduling, attendance, leave, CDE/QAS compensation models, payroll — no separate system needed.",
  },
  {
    icon: BarChart3,
    title: "Reporting & AI Insights",
    desc: "Real-time dashboards, production analytics, quality metrics, and AI-powered operational insights across your entire MTSO.",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionLabel>The Solution</SectionLabel>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground leading-tight max-w-3xl">
            One Platform. Everything Your MTSO Needs.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            MedScribeAI combines AI-powered transcription, a complete QA workflow, and full HRMS capabilities into a single cloud-native SaaS platform.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-[0_8px_40px_rgba(42,111,242,0.13)] transition-all duration-500 overflow-hidden"
              style={{ boxShadow: "0 2px 20px 0 rgba(42,111,242,0.07), 0 1px 4px 0 rgba(0,0,0,0.04)" }}
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              {/* Corner glow */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-secondary/60 to-transparent rounded-3xl pointer-events-none" />
              <div className="relative">
                <div className="w-13 h-13 w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-6 shadow-sm ring-1 ring-primary/10" style={{ background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)", color: "#2A6FF2" }}>
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}