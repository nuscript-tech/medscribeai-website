import React from "react";
import { motion } from "framer-motion";
import { Brain, Mic, Globe, RefreshCw, FileText, Layers, AlertTriangle, Target, BarChart2, FileSearch, Users, CalendarDays, Clock, Wallet } from "lucide-react";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionLabel from "../components/shared/SectionLabel";
import CTASection from "../components/shared/CTASection";

const replacesCards = [
  {
    label: "Replaces",
    title: "Legacy Transcription Platform",
    subtitle: "iMedX, EMDAT/3M Solventum",
    desc: "AI transcription, template & macro management, provider samples, complete QA workflow, VBC line counting, delivery management, and reporting with AI insights.",
  },
  {
    label: "Replaces",
    title: "Standalone HRMS",
    subtitle: "GreytHR, Zoho People, Keka",
    desc: "Employee management with role-based access, shift scheduling, attendance tracking, leave management, CDE & QAS compensation models, and payroll calculations.",
  },
];

const aiFeatures = [
  { icon: Mic, title: "Medical-Grade Speech-to-Text", desc: "Industry-leading speech-to-text with medical vocabulary, dictation-style support, and 98%+ raw accuracy." },
  { icon: Brain, title: "AI Formatting Engine", desc: "Advanced AI formats raw STT output into structured medical documents following provider styles, templates, and client specifications." },
  { icon: Globe, title: "Deterministic Post-Processor", desc: "Rule-based corrections for ASR errors, medical abbreviations, and formatting standards — consistent and predictable." },
  { icon: RefreshCw, title: "Self-Improving Learning Loop", desc: "CDE corrections feed back into the system, improving future AI drafts for each provider over time." },
  { icon: FileText, title: "Template & Macro Management", desc: "Full template system with DOCX extraction, macro libraries (900+ macros), and provider-specific samples with contextual search." },
  { icon: Layers, title: "Two-Pass Pipeline", desc: "AI generates a near-complete draft, CDE reviews and refines — doubling output from 500 to 1,000+ lines/day." },
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
              Two Products in One.{" "}
              <span className="text-primary">One Price.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              MedScribeAI replaces both your legacy transcription platform (iMedX, EMDAT) and your standalone HRMS (GreytHR, Zoho People) with a single modern cloud SaaS — and adds AI capabilities that neither legacy product can match.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Replaces Cards */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {replacesCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-destructive">{card.label}</span>
                <h3 className="mt-3 text-xl font-bold text-foreground">{card.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{card.subtitle}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Transcription */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>AI Transcription</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight max-w-2xl">
              AI-Powered Transcription Pipeline
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              From raw audio to formatted medical document in seconds. Our multi-stage pipeline combines the best medical STT with AI formatting and deterministic post-processing.
            </p>
          </AnimatedSection>
          <FeatureGrid features={aiFeatures} />
        </div>
      </section>

      {/* QA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>Quality Assurance</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight max-w-2xl">
              Enterprise-Grade QA Workflow
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              The most comprehensive QA system built for medical transcription — 13 error categories, accuracy scoring, audit sampling, and full accountability tracking.
            </p>
          </AnimatedSection>
          <FeatureGrid features={qaFeatures} columns={2} />
        </div>
      </section>

      {/* HRMS */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>Workforce Management</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight max-w-2xl">
              Complete HRMS — Built In, Not Bolted On
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              No more paying for a separate HRMS. MedScribeAI includes everything you need to manage your MTSO workforce.
            </p>
          </AnimatedSection>
          <FeatureGrid features={hrmsFeatures} columns={2} />
        </div>
      </section>

      <CTASection
        title="See the Platform in Action"
        description="Schedule a private demo and see how MedScribeAI can transform your MTSO operations. Start with a free pilot."
      />
    </>
  );
}