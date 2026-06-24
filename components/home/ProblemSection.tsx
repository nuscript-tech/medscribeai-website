"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingDown, Users, Clock, Lock } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const problems = [
  {
    icon: TrendingDown,
    title: "Margins Under Pressure",
    desc: "Labor is the bulk of your cost base. When output is tied to manual typing speed, there's a hard ceiling on profitability — and client rates rarely move in your favor.",
  },
  {
    icon: Users,
    title: "The Hiring Treadmill",
    desc: "Need to process more volume? Hire more editors. That means more salaries, more training, more management, more attrition — and the same thin margins at greater scale.",
  },
  {
    icon: Clock,
    title: "Turnaround Demands",
    desc: "Clients expect faster TAT every year. Meeting it with a manual workflow means overtime, weekend shifts, and burnout — or turning work away.",
  },
  {
    icon: Lock,
    title: "Capacity Locked to Headcount",
    desc: "In a manual model, capacity equals people. Growth means proportional cost. You can't take on a big new client without a hiring cycle that eats the margin first.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionLabel>The Squeeze</SectionLabel>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl">
            Transcription Operations Are Trapped Between Cost and Capacity
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Margins compress, hiring never stops, and clients want faster
            turnaround. In a manual model, the only way to grow is to add people —
            and people are exactly what's squeezing the margin.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-[0_8px_40px_rgba(239,68,68,0.09)] transition-all duration-500 overflow-hidden"
              style={{
                boxShadow:
                  "0 2px 20px 0 rgba(0,0,0,0.06), 0 1px 4px 0 rgba(0,0,0,0.03)",
              }}
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-destructive/30 to-transparent" />
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-red-50/80 to-transparent rounded-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm ring-1 ring-red-100"
                    style={{
                      background:
                        "linear-gradient(145deg, #fff1f1 0%, #fee2e2 100%)",
                      color: "#ef4444",
                    }}
                  >
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-14 text-center">
            <p className="text-lg lg:text-xl font-semibold text-foreground">
              There's a way to grow without hiring.
            </p>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Break the link between capacity and headcount — process more
              clinical work with the team you already have.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
