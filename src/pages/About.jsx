import React from "react";
import { Building2, Target, Users, MapPin, Lightbulb } from "lucide-react";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionLabel from "../components/shared/SectionLabel";
import CTASection from "../components/shared/CTASection";

const values = [
  { icon: Building2, title: "Built by an MTSO, for MTSOs", desc: "We run our own transcription operation with 90+ employees and 30 clients. MedScribeAI was built to solve our own challenges — then productized for the industry." },
  { icon: Target, title: "Production-First", desc: "This is not a lab experiment. MedScribeAI processes real medical dictation for real healthcare providers every single day. Features are validated in production before they reach you." },
  { icon: Lightbulb, title: "India-Focused", desc: "Built specifically for how Indian MTSOs operate — from compensation structures and shift patterns to compliance requirements and payment models." },
  { icon: Users, title: "MTSO Operations DNA", desc: "Our team understands CDE workflows, QAS processes, TAT requirements, and client management because we live it daily. This isn't generic healthcare software." },
];

const milestones = [
  { year: "2024", text: "NuScript Technologies founded in Coimbatore. Began building transcription operations and technology platform." },
  { year: "2025", text: "MedScribeAI platform core developed. AI transcription pipeline operational. QA workflow and HRMS modules completed." },
  { year: "2026", text: "Platform in full production use. 90+ employees, 30+ clients processing daily. Preparing for SaaS launch to external MTSOs." },
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
              We Run an MTSO.<br />
              <span className="text-primary">We Built What We Needed.</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed max-w-3xl">
              MedScribeAI is built by NuScript Technologies, a Coimbatore-based medical transcription company. We built this platform to solve our own operational challenges — and now we're making it available to every MTSO in India.
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

      {/* Founder */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-10" style={{ boxShadow: "0 2px 20px 0 rgba(0,0,0,0.04)" }}>
              <h2 className="text-2xl font-extrabold text-foreground mb-4">Founded by Arvind</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Arvind founded NuScript Technologies with a clear mission: modernize medical transcription for Indian MTSOs. After years of working with legacy platforms and separate HRMS tools, he set out to build the platform he wished existed — one that combines AI transcription, quality assurance, and workforce management into a single product.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, MedScribeAI processes real dictation for 30+ healthcare practice clients with a team of 90+ employees in Coimbatore.
              </p>
            </div>
          </AnimatedSection>
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
        title="Join Us in Modernizing Medical Transcription"
        description="Be among the first MTSOs to adopt the platform that's already proven in production."
      />
    </>
  );
}
