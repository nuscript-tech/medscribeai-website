import React from "react";
import { motion } from "framer-motion";
import { Brain, Mic, Globe, RefreshCw, FileText, Layers, AlertTriangle, Target, BarChart2, FileSearch, Users, CalendarDays, Clock, Wallet, Zap, PenTool, ShieldCheck, Cloud, MonitorSmartphone, ArrowRight } from "lucide-react";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionLabel from "../components/shared/SectionLabel";
import CTASection from "../components/shared/CTASection";

const aiFeatures = [
  { icon: Mic, title: "Medical-Grade Speech-to-Text", desc: "Industry-leading speech-to-text with medical vocabulary, dictation-style support, and 98%+ raw accuracy." },
  { icon: Brain, title: "AI Formatting Engine", desc: "Advanced AI formats raw STT output into structured medical documents following provider styles, templates, and client specifications." },
  { icon: Globe, title: "Deterministic Post-Processor", desc: "Rule-based corrections for ASR errors, medical abbreviations, and formatting standards — consistent and predictable." },
  { icon: RefreshCw, title: "Self-Improving Learning Loop", desc: "CDE corrections feed back into the system, improving future AI drafts for each provider over time." },
  { icon: FileText, title: "Template & Macro Management", desc: "Full template system with DOCX extraction, macro libraries (900+ macros), and provider-specific samples with contextual search." },
  { icon: Layers, title: "Two-Pass Pipeline", desc: "AI generates a near-complete draft, your editor reviews and refines — transforming the role from typist to editor, doubling output to 1,000+ lines/day." },
];

const qaFeatures = [
  { icon: AlertTriangle, title: "13 Error Categories", desc: "Comprehensive error taxonomy covering medical, grammatical, formatting, and critical errors with weighted scoring." },
  { icon: Target, title: "Accuracy Scoring", desc: "Automated accuracy calculations per CDE, per client, per time period — with drill-down into specific error patterns." },
  { icon: BarChart2, title: "Audit Sampling", desc: "Configurable audit percentages, random sampling, and targeted reviews for quality assurance compliance." },
  { icon: FileSearch, title: "Blank Accountability", desc: "Track unresolved blanks, monitor resolution times, and ensure no blank escapes to delivery without review." },
];

const hrmsFeatures = [
  { icon: Users, title: "Employee Management", desc: "Complete employee profiles, role-based access (CDEs, QAS, managers, admins), department structure, and document management." },
  { icon: CalendarDays, title: "Shift Scheduling", desc: "Flexible shift creation, rotation management, and schedule publishing — integrated with production tracking." },
  { icon: Clock, title: "Attendance Tracking", desc: "Grace periods, gap rules, short permissions, overtime calculations — all configurable per MTSO policy." },
  { icon: Wallet, title: "Compensation & Payroll", desc: "CDE & QAS compensation models with incentive tiers, line-based pay calculations, holiday/Sunday premiums, and payroll exports." },
];

function FeatureGrid({ features, columns = 3 }) {
  const gridCls = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`mt-12 grid grid-cols-1 ${gridCls} gap-6`}>
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-500"
        >
          <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <f.icon className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-foreground mb-2">{f.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function Platform() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-secondary/60 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionLabel>Platform Overview</SectionLabel>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight max-w-3xl">
              The AI Engine Behind the{" "}
              <span className="text-primary">Force Multiplier</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              MedScribeAI's multi-stage AI pipeline transforms your editors from typists into AI-assisted editors — doubling throughput while a complete QA workflow maintains quality. Workforce management is built in at no extra cost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How the Force Multiplier Works */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: Zap,
                title: "AI Does the Heavy Lifting",
                desc: "Audio goes in. Our AI pipeline handles speech-to-text, template insertion, macro expansion, and formatting — delivering a near-complete draft in seconds.",
                accent: "#2A6FF2",
                accentBg: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)",
              },
              {
                step: "02",
                icon: PenTool,
                title: "Editors Review & Refine",
                desc: "Your team shifts from typing every word to reviewing AI-generated drafts. Clinical accuracy and quality — the work humans do best. 2x the output, less physical strain.",
                accent: "#2A6FF2",
                accentBg: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)",
              },
              {
                step: "03",
                icon: ShieldCheck,
                title: "QA Ensures Quality at Scale",
                desc: "13 error categories, accuracy scoring, audit sampling, and accountability tracking ensure that doubling volume never means compromising quality.",
                accent: "#2A6FF2",
                accentBg: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)",
              },
            ].map((card, i) => (
              <motion.div
                key={card.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-[0_8px_40px_rgba(42,111,242,0.13)] transition-all duration-500 overflow-hidden"
                style={{ boxShadow: "0 2px 20px 0 rgba(42,111,242,0.07), 0 1px 4px 0 rgba(0,0,0,0.04)" }}
              >
                {/* Gradient top border */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                {/* Corner glow */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-secondary/60 to-transparent rounded-3xl pointer-events-none" />

                <div className="relative">
                  {/* Step badge + icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center shadow-sm ring-1 ring-primary/10 group-hover:scale-105 transition-transform duration-300" style={{ background: card.accentBg, color: card.accent }}>
                      <card.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-primary/30 uppercase tracking-widest">Step {card.step}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Flow connector — visible on desktop */}
          <div className="hidden md:flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/30" />
            <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Audio In</span>
            <ArrowRight className="w-4 h-4 text-primary/30" />
            <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">AI Draft</span>
            <ArrowRight className="w-4 h-4 text-primary/30" />
            <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Editor Review</span>
            <ArrowRight className="w-4 h-4 text-primary/30" />
            <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">QA Verified</span>
            <ArrowRight className="w-4 h-4 text-primary/30" />
            <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Delivered</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
        </div>
      </section>

      {/* AI Transcription */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>The AI Pipeline</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight max-w-2xl">
              Six-Stage AI Transcription Engine
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              From raw audio to formatted medical document in seconds. Each stage adds precision — so your editors start from a near-complete draft, not a blank screen.
            </p>
          </AnimatedSection>
          <FeatureGrid features={aiFeatures} />
        </div>
      </section>

      {/* QA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>Quality at Scale</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight max-w-2xl">
              Enterprise-Grade QA Workflow
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Doubling editor output means nothing if quality drops. MedScribeAI's QA system ensures accuracy at every scale — 13 error categories, automated scoring, and full audit trails.
            </p>
          </AnimatedSection>
          <FeatureGrid features={qaFeatures} columns={2} />
        </div>
      </section>

      {/* HRMS */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <SectionLabel>Included Free</SectionLabel>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight max-w-2xl">
                Workforce Management — Built In
              </h2>
              <span className="hidden lg:inline-flex px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">No Extra Cost</span>
            </div>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              No separate HRMS needed. No GreytHR. No Zoho People. No second system, second cost, or integration headaches. Everything your MTSO needs to manage its workforce is already inside MedScribeAI.
            </p>
          </AnimatedSection>
          <FeatureGrid features={hrmsFeatures} columns={2} />
        </div>
      </section>

      {/* Zero Friction */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-slate-100 overflow-hidden"
            style={{ boxShadow: "0 8px 40px 0 rgba(42,111,242,0.12), 0 2px 8px 0 rgba(0,0,0,0.04)" }}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/60 to-secondary/40" />
            {/* Subtle glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-primary/60" />

            <div className="relative p-10 lg:p-14">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 shadow-sm ring-1 ring-primary/10 mx-auto" style={{ background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)", color: "#2A6FF2" }}>
                  <Cloud className="w-7 h-7" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-foreground">
                  100% Cloud. Zero Installation.
                </h3>
                <p className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-br from-primary via-blue-500 to-primary/70 bg-clip-text text-transparent">
                  Operational by Tomorrow Morning.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  { icon: Cloud, title: "No Hardware", desc: "Nothing to provision, rack, or maintain. Everything runs in the cloud." },
                  { icon: MonitorSmartphone, title: "Browser-Based", desc: "Your editors access MedScribeAI through any standard web browser. No downloads." },
                  { icon: Clock, title: "Hours to Go-Live", desc: "Setup completes in hours. Your team processes real production work by next morning." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-3 shadow-sm ring-1 ring-primary/10" style={{ background: "linear-gradient(145deg, #EEF4FF 0%, #dbeafe 100%)", color: "#2A6FF2" }}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="See the Force Multiplier in Action"
        description="Start a 10-day production pilot — zero cost, zero risk, zero downtime. See your editors transform from typists to AI-assisted editors with your own data and team."
        primaryLabel="Start 10-Day Pilot"
        primaryLink="/request-demo"
      />
    </>
  );
}
