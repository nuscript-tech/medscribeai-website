"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Server,
  FileCheck,
  KeyRound,
  Eye,
} from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionLabel from "@/components/shared/SectionLabel";

const points = [
  {
    icon: ShieldCheck,
    title: "HIPAA-Compliant",
    desc: "Architected for HIPAA from the ground up. We sign Business Associate Agreements with every client.",
  },
  {
    icon: Lock,
    title: "Encrypted End to End",
    desc: "Data is encrypted in transit and at rest using industry-standard protocols.",
  },
  {
    icon: Server,
    title: "Isolated by Tenant",
    desc: "Each organization's data is logically isolated. No shared buckets, no cross-tenant access.",
  },
  {
    icon: KeyRound,
    title: "Role-Based Access",
    desc: "Granular permissions across editors, QA, and admins — least-privilege by default.",
  },
  {
    icon: FileCheck,
    title: "Full Audit Trail",
    desc: "Every action is logged and reviewable, supporting your own compliance obligations.",
  },
  {
    icon: Eye,
    title: "Secure Infrastructure",
    desc: "Built on hardened cloud infrastructure with monitoring and redundancy.",
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <SectionLabel>Security &amp; Compliance</SectionLabel>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
              Built for the Standards Healthcare Demands
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Clinical data requires trust. MedScribeAI is engineered for HIPAA
              compliance, tenant isolation, and security at scale.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-[0_8px_40px_rgba(42,111,242,0.1)] transition-all duration-500 overflow-hidden"
              style={{
                boxShadow:
                  "0 2px 20px 0 rgba(0,0,0,0.05), 0 1px 4px 0 rgba(0,0,0,0.03)",
              }}
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm ring-1 ring-primary/10"
                style={{
                  background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)",
                  color: "#2A6FF2",
                }}
              >
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
