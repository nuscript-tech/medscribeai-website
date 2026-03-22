import React from "react";
import { motion } from "framer-motion";
import { Factory, Brain, Layers, IndianRupee, Rocket, Shield, X, Check } from "lucide-react";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionLabel from "../components/shared/SectionLabel";
import CTASection from "../components/shared/CTASection";

const reasons = [
  {
    icon: Factory,
    title: "Built for Indian MTSOs",
    desc: "Not a generic transcription tool adapted for India. MedScribeAI is designed from the ground up for how Indian MTSOs operate — shifts, compensation models, compliance, and workflow.",
  },
  {
    icon: Brain,
    title: "AI That Actually Works",
    desc: "Our multi-stage pipeline (STT → AI Formatting → Post-Processor) delivers production-quality output, not demo-quality. Proven with 1M+ lines processed monthly.",
  },
  {
    icon: Layers,
    title: "Two Products in One",
    desc: "Replaces both your legacy transcription platform AND your HRMS. One vendor, one invoice, one system — deeply integrated, not bolted together.",
  },
  {
    icon: IndianRupee,
    title: "Economics That Make Sense",
    desc: "51% cost reduction isn't a projection — it's math. Double CDE productivity, eliminate legacy platform fees, and remove standalone HRMS costs.",
  },
  {
    icon: Rocket,
    title: "Production-Tested",
    desc: "Not a prototype or MVP. MedScribeAI is in active daily production at NuScript with 90+ employees and 30+ healthcare practice clients.",
  },
  {
    icon: Shield,
    title: "Modern & Secure",
    desc: "Cloud-native SaaS with modern security practices, encrypted storage, role-based access control, and audit trails for compliance.",
  },
];

export default function WhyUs() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-secondary/60 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionLabel>Why MedScribeAI</SectionLabel>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight max-w-3xl">
              Purpose-Built.{" "}
              <span className="text-primary">Production-Proven.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              We didn't build another generic transcription tool. MedScribeAI is the only platform designed specifically for the Indian MTSO industry — combining AI transcription, QA, and workforce management in one product.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <r.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(135deg, #F0F5FF 0%, #EEF4FF 50%, #F5F7FA 100%)" }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl -z-10" style={{ background: "rgba(42,111,242,0.07)" }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl -z-10" style={{ background: "rgba(0,196,167,0.06)" }} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <SectionLabel>The Difference</SectionLabel>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
                Legacy Stack vs. MedScribeAI
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
                A feature-by-feature look at why modern MTSOs are making the switch.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-[0_2px_24px_0_rgba(42,111,242,0.08)]">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left px-7 py-5 text-sm font-bold text-foreground w-1/3 rounded-tl-3xl" style={{ background: "linear-gradient(135deg, #F0F5FF 0%, #EEF4FF 100%)" }}>
                      Capability
                    </th>
                    <th className="text-center px-7 py-5 text-sm font-bold w-1/3" style={{ background: "linear-gradient(135deg, #F0F5FF 0%, #EEF4FF 100%)" }}>
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                        Legacy Stack
                      </span>
                    </th>
                    <th className="text-center px-7 py-5 text-sm font-bold w-1/3 rounded-tr-3xl" style={{ background: "linear-gradient(135deg, #F0F5FF 0%, #EEF4FF 100%)" }}>
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary border border-blue-100">
                        MedScribeAI
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    ["AI Transcription", "None", "Multi-stage pipeline"],
                    ["QA Workflow", "Basic / Manual", "13 error categories, automated scoring"],
                    ["HRMS", "Separate system", "Built-in"],
                    ["CDE Productivity", "~500 lines/day", "1,000+ lines/day"],
                    ["Learning Loop", "No", "Self-improving AI"],
                    ["Pricing", "Enterprise + HRMS cost", "Single SaaS pricing"],
                    ["India-Focused", "Adapted", "Purpose-built"],
                  ].map(([cap, legacy, ms], i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="border-t border-slate-100 hover:bg-blue-50/30 transition-colors"
                    >
                      <td className="px-7 py-4 text-sm font-semibold text-foreground">{cap}</td>
                      <td className="px-7 py-4 text-sm text-center">
                        <span className="inline-flex items-center gap-1.5 text-slate-400">
                          <X className="w-3.5 h-3.5 text-red-400 shrink-0" />
                          {legacy}
                        </span>
                      </td>
                      <td className="px-7 py-4 text-sm text-center">
                        <span className="inline-flex items-center gap-1.5 text-primary font-semibold">
                          <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                          {ms}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Ready to See the Difference?"
        description="Schedule a demo and experience the platform that's already transforming MTSO operations."
      />
    </>
  );
}