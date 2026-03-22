import React from "react";
import { motion } from "framer-motion";
import { Upload, Mic, Brain, Settings, Pencil, ShieldCheck, Send, RefreshCw, TrendingUp, Sparkles, User } from "lucide-react";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionLabel from "../components/shared/SectionLabel";
import CTASection from "../components/shared/CTASection";

const steps = [
  { icon: Upload, tag: "Input", step: "01", title: "Audio Upload", desc: "Healthcare provider dictates. Audio file (MP3/WAV/M4A) is uploaded to MedScribeAI via secure pipeline. Files are encrypted at rest on secure cloud storage." },
  { icon: Mic, tag: "Speech-to-Text", step: "02", title: "Speech-to-Text", desc: "Medical-grade STT engine converts speech to text with 98%+ raw accuracy. Medical vocabulary, dictation commands, and speaker diarization handled natively." },
  { icon: Brain, tag: "AI Engine", step: "03", title: "AI Formatting", desc: "Our AI engine formats the raw transcript into a structured medical document — applying provider templates, client specifications, Book of Style rules, and medico-legal requirements." },
  { icon: Settings, tag: "Rules Engine", step: "04", title: "Post-Processor", desc: "Deterministic rule engine applies ASR corrections, medical abbreviation expansion, formatting standards, and client-specific rules. Consistent, predictable, auditable." },
  { icon: Pencil, tag: "Human Review", step: "05", title: "CDE Review", desc: "Clinical Documentation Editor reviews the AI draft, makes corrections, fills any blanks, and confirms accuracy. The AI did the heavy lifting — the human ensures perfection." },
  { icon: ShieldCheck, tag: "Quality Assurance", step: "06", title: "QA Review", desc: "Quality Assurance Specialist audits the completed transcript against 13 error categories. Accuracy scores, error tracking, and rebuttal workflows ensure quality standards are met." },
  { icon: Send, tag: "Output", step: "07", title: "Delivery", desc: "Final approved document is delivered to the healthcare practice client via their preferred method — EHR integration, secure portal, or file delivery." },
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionLabel>How It Works</SectionLabel>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight max-w-3xl">
              From Audio to Approved Document{" "}
              <span className="text-primary">in 7 Steps</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              MedScribeAI's pipeline combines AI speed with human accuracy. The AI generates a near-complete draft in seconds — your team reviews, refines, and approves. Every step is transparent and auditable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

            <div className="space-y-8 lg:space-y-12">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative flex gap-6 lg:gap-10"
                >
                  {/* Icon circle */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/25">
                      <s.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-card rounded-2xl border border-border p-6 lg:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold">
                        {s.tag}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Step {s.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Loop */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #F0F5FF 0%, #EEF4FF 50%, #F5F7FA 100%)" }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "rgba(42,111,242,0.07)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: "rgba(0,196,167,0.06)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <SectionLabel>Continuous Improvement</SectionLabel>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
                The Self-Improving Learning Loop
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Every correction makes the system smarter. MedScribeAI learns from every interaction — so your team does less work over time, not more.
              </p>
            </div>
          </AnimatedSection>

          {/* Loop Visual */}
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {[
                {
                  icon: User,
                  color: "text-primary",
                  bg: "bg-blue-50",
                  border: "border-blue-100",
                  step: "01",
                  title: "CDE Makes a Correction",
                  desc: "The Clinical Documentation Editor reviews the AI draft and makes any required edits — terminology, formatting, provider-specific preferences.",
                },
                {
                  icon: RefreshCw,
                  color: "text-accent",
                  bg: "bg-teal-50",
                  border: "border-teal-100",
                  step: "02",
                  title: "Feedback Feeds the Engine",
                  desc: "Every correction is captured and fed back into MedScribeAI's AI pipeline, building a rich, provider-specific knowledge base over time.",
                },
                {
                  icon: Sparkles,
                  color: "text-primary",
                  bg: "bg-indigo-50",
                  border: "border-indigo-100",
                  step: "03",
                  title: "Drafts Get Better Automatically",
                  desc: "The next AI draft for the same provider is more accurate, requires fewer corrections, and gets closer to perfect with every cycle.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`relative group bg-white rounded-3xl border ${item.border} p-8 shadow-[0_2px_20px_0_rgba(42,111,242,0.07)] hover:shadow-[0_8px_32px_0_rgba(42,111,242,0.13)] transition-all duration-500`}
                >
                  {/* Step connector arrow */}
                  {i < 2 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 items-center justify-center shadow-sm text-slate-400 text-xs font-bold">→</div>
                  )}
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-5`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Step {item.step}</div>
                  <h3 className="text-base font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Result callout */}
          <AnimatedSection delay={0.3}>
            <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-white p-8 lg:p-12 shadow-[0_2px_24px_0_rgba(42,111,242,0.08)]">
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl" style={{ background: "linear-gradient(90deg, #2A6FF2, #00C4A7)" }} />
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-extrabold text-foreground mb-2">The Compounding Result</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    New providers start with strong baseline accuracy and improve rapidly. Established providers see near-perfect first drafts requiring minimal editing. <span className="font-semibold text-foreground">CDEs spend less time correcting and more time producing — pushing productivity well beyond 1,000 lines/day.</span>
                  </p>
                </div>
                <div className="shrink-0 text-center lg:text-right">
                  <div className="text-4xl font-extrabold text-primary">1,000+</div>
                  <div className="text-sm text-muted-foreground font-medium mt-1">lines/day per CDE</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="AI Does the Heavy Lifting. Humans Ensure Perfection."
        description="MedScribeAI is not a fully automated system. Every document is reviewed by a trained CDE before delivery."
        primaryLabel="See It in Action"
      />
    </>
  );
}