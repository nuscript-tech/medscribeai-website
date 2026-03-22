import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../shared/AnimatedSection";

const proofStats = [
  { value: "90+", label: "Employees Using Daily" },
  { value: "30+", label: "Healthcare Practice Clients" },
  { value: "1M+", label: "Lines Processed Monthly" },
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
              MedScribeAI is in active daily use at a leading India and US-based MTSO — processing real medical dictation for real healthcare practice clients, every single day.
            </p>
          </div>
        </AnimatedSection>

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
      </div>
    </section>
  );
}