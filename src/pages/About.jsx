import React from "react";
import { Building2, Target, Users, MapPin, Lightbulb, Shield } from "lucide-react";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionLabel from "../components/shared/SectionLabel";
import CTASection from "../components/shared/CTASection";

const values = [
  { icon: Building2, title: "Deep MTSO Domain Expertise", desc: "MedScribeAI is built by a team that understands CDE workflows, QAS processes, TAT requirements, compensation structures, and client management from the inside. This isn't generic healthcare software." },
  { icon: Target, title: "Production-Proven", desc: "Every feature in MedScribeAI has been validated in a live production environment — processing real medical dictation at scale — before it ships to customers." },
  { icon: Lightbulb, title: "Purpose-Built for India", desc: "Designed for how Indian MTSOs actually operate — from CDE/QAS compensation models and shift patterns to leave policies and payroll structures used across the industry." },
  { icon: Shield, title: "Aligned With Your Success", desc: "MedScribeAI succeeds when our customers grow. Our pricing scales with your volume, our features are shaped by MTSO feedback, and every improvement we ship is designed to make your operation more profitable." },
];

const milestones = [
  { year: "2000", text: "Our founder enters the HIM/RCM sector, laying the groundwork for two decades of expertise in global documentation standards." },
  { year: "2000–2025", text: "25 years building health-tech ventures across the US and Indian markets — mastering the 'Truth of the Document' in clinical documentation and revenue cycle management." },
  { year: "2026", text: "NuScript Technologies is born in Coimbatore. MedScribeAI platform built and proven at scale — bringing autonomous AI to Indian MTSOs." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>About MedScribeAI</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
              Built by People Who<br />
              <span className="text-primary">Understand MTSOs.</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed max-w-3xl">
              MedScribeAI is built by NuScript Technologies — a Coimbatore-based technology company focused on modernizing medical transcription operations. We combine deep domain expertise with modern AI and cloud engineering to deliver the platform Indian MTSOs deserve.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl border border-slate-100 p-8 h-full" style={{ boxShadow: "0 2px 20px 0 rgba(0,0,0,0.04)" }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm ring-1 ring-primary/10" style={{ background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)" }}>
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-14">Our Journey</h2>
          </AnimatedSection>
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-6 sm:gap-8">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl font-extrabold text-primary">{m.year}</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="absolute top-2 -left-[5px] w-2.5 h-2.5 bg-primary rounded-full ring-4 ring-secondary" />
                    <div className="pl-6 pb-4 border-l border-border ml-0">
                      <p className="text-muted-foreground leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Vision */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ring-1 ring-primary/10" style={{ background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)" }}>
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Based in Coimbatore</h3>
                <p className="text-muted-foreground leading-relaxed">
                  NuScript Technologies operates from Coimbatore, Tamil Nadu — one of India's growing technology and business hubs.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ring-1 ring-primary/10" style={{ background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)" }}>
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Define the next generation of medical transcription technology for Indian MTSOs and beyond.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Ready to Modernize Your MTSO?"
        description="See how MedScribeAI can transform your operations. No pitch deck — just a focused walkthrough with your numbers."
      />
    </>
  );
}
