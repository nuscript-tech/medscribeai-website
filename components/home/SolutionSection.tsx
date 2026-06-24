"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Sparkles,
  ShieldCheck,
  Send,
  LayoutDashboard,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const pipeline = [
  { icon: Mic, label: "Audio In", sub: "Dictation & ambient capture" },
  { icon: Sparkles, label: "AI Draft", sub: "Speech-to-text + note generation" },
  { icon: ShieldCheck, label: "Editor Review", sub: "QA workflow & accuracy scoring" },
  { icon: Send, label: "EHR-Ready", sub: "HL7 / FHIR delivery" },
];

const productionFeatures = [
  "Speech-to-text tuned for clinical audio",
  "AI-drafted notes your editors review, not retype",
  "13-category QA workflow with accuracy scoring",
  "EHR / HL7-FHIR delivery and claims-ready output",
];

const managementFeatures = [
  "Productivity and TAT tracking per team member",
  "Quality dashboards and audit sampling",
  "Compensation models and payroll exports",
  "Multi-client routing and reporting",
];

export default function SolutionSection() {
  return (
    <section id="platform" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionLabel>The Platform</SectionLabel>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl">
            Two Engines. One Platform.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            A Production Engine that turns audio into EHR-ready documentation, and
            a Management Suite that runs the operation around it. Together they
            break the link between capacity and headcount.
          </p>
        </AnimatedSection>

        {/* Pipeline visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 relative bg-white rounded-3xl border border-slate-100 p-8 lg:p-10 overflow-hidden"
          style={{
            boxShadow:
              "0 4px 30px 0 rgba(42,111,242,0.08), 0 1px 4px 0 rgba(0,0,0,0.04)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-primary/60" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {pipeline.map((step, i) => (
              <div key={step.label} className="relative flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm ring-1 ring-primary/10"
                  style={{
                    background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)",
                    color: "#2A6FF2",
                  }}
                >
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="text-base font-bold text-foreground">
                  {step.label}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {step.sub}
                </div>
                {i < pipeline.length - 1 && (
                  <div className="hidden lg:block absolute top-7 -right-2 w-4 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Two engines */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Production Engine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-white rounded-3xl border border-primary/30 ring-1 ring-primary/10 p-8 overflow-hidden"
            style={{
              boxShadow:
                "0 2px 20px 0 rgba(42,111,242,0.07), 0 1px 4px 0 rgba(0,0,0,0.04)",
            }}
          >
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-secondary/60 to-transparent rounded-3xl pointer-events-none" />
            <div className="relative">
              <div
                className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-6 shadow-sm ring-1 ring-primary/10"
                style={{
                  background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)",
                  color: "#2A6FF2",
                }}
              >
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                Production Engine
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Audio in, EHR-ready documentation out.
              </p>
              <ul className="space-y-3">
                {productionFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-[15px] text-muted-foreground leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Management Suite */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative rounded-3xl border border-emerald-200/60 p-8 overflow-hidden bg-gradient-to-br from-emerald-50/60 to-teal-50/40"
            style={{
              boxShadow:
                "0 2px 20px 0 rgba(13,148,136,0.07), 0 1px 4px 0 rgba(0,0,0,0.04)",
            }}
          >
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center shadow-sm ring-1 ring-emerald-200"
                  style={{
                    background: "linear-gradient(145deg, #ecfdf5 0%, #d1fae5 100%)",
                    color: "#0d9488",
                  }}
                >
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                  Included
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                Management Suite
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Run the whole operation in one place — no separate HRMS.
              </p>
              <ul className="space-y-3">
                {managementFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-[15px] text-muted-foreground leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
