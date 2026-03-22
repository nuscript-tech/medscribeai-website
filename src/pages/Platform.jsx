import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Mic, FileCheck, Users, Clock, BarChart3, Shield, Settings, Calculator, CalendarDays, ClipboardCheck, FileSpreadsheet, Headphones, BookOpen, Layers } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const transcriptionFeatures = [
  { icon: Mic, title: 'Medical-Grade Speech-to-Text', desc: 'Industry-leading speech-to-text with medical vocabulary, dictation-style support, and 98%+ raw accuracy.' },
  { icon: Brain, title: 'AI Formatting Engine', desc: 'Advanced AI formats raw STT output into structured medical documents following provider styles, templates, and client specifications.' },
  { icon: Settings, title: 'Deterministic Post-Processor', desc: 'Rule-based corrections for ASR errors, medical abbreviations, and formatting standards — consistent and predictable.' },
  { icon: BookOpen, title: 'Self-Improving Learning Loop', desc: 'CDE corrections feed back into the system, improving future AI drafts for each provider over time.' },
  { icon: Layers, title: 'Template & Macro Management', desc: 'Full template system with DOCX extraction, macro libraries (900+ macros), and provider-specific samples with contextual search.' },
  { icon: Headphones, title: 'Two-Pass Pipeline', desc: 'AI generates a near-complete draft, CDE reviews and refines — doubling output from 500 to 1,000+ lines/day.' },
];

const qaFeatures = [
  { icon: ClipboardCheck, title: '13 Error Categories', desc: 'Comprehensive error taxonomy covering medical, grammatical, formatting, and critical errors with weighted scoring.' },
  { icon: FileCheck, title: 'Accuracy Scoring', desc: 'Automated accuracy calculations per CDE, per client, per time period — with drill-down into specific error patterns.' },
  { icon: Shield, title: 'Audit Sampling', desc: 'Configurable audit percentages, random sampling, and targeted reviews for quality assurance compliance.' },
  { icon: FileSpreadsheet, title: 'Blank Accountability', desc: 'Track unresolved blanks, monitor resolution times, and ensure no blank escapes to delivery without review.' },
];

const hrmsFeatures = [
  { icon: Users, title: 'Employee Management', desc: 'Complete employee profiles, role-based access (CDEs, QAS, managers, admins), department structure, and document management.' },
  { icon: CalendarDays, title: 'Shift Scheduling', desc: 'Flexible shift creation, rotation management, and schedule publishing — integrated with production tracking.' },
  { icon: Clock, title: 'Attendance Tracking', desc: 'Grace periods, gap rules, short permissions, overtime calculations — all configurable per MTSO policy.' },
  { icon: Calculator, title: 'Compensation & Payroll', desc: 'CDE & QAS compensation models with incentive tiers, line-based pay calculations, holiday/Sunday premiums, and payroll exports.' },
];

const Section = ({ tag, tagColor, title, desc, features, children }) => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mb-12">
        <span className={`text-sm font-bold uppercase tracking-wider ${tagColor}`}>{tag}</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-3 mb-4">{title}</h2>
        <p className="text-lg text-brand-text leading-relaxed">{desc}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:border-brand/20 hover:shadow-md transition-all">
            <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center mb-4">
              <f.icon className="w-5 h-5 text-brand" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy mb-2">{f.title}</h3>
            <p className="text-brand-text text-[15px] leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
      {children}
    </div>
  </section>
);

export default function Platform() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(42,111,242,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(42,111,242,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(circle_at_30%_20%,rgba(42,111,242,0.06),transparent_50%)]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-bold text-brand uppercase tracking-wider">Platform Overview</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy mt-4 mb-6 leading-[1.1]">
              Two Products in One.<br/>
              <span className="text-brand">One Price.</span>
            </h1>
            <p className="text-xl text-brand-text leading-relaxed max-w-3xl">
              MedScribeAI replaces both your legacy transcription platform (iMedX, EMDAT) and your standalone HRMS (GreytHR, Zoho People) with a single modern cloud SaaS — and adds AI capabilities that neither legacy product can match.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Replaces Table */}
      <section className="py-12 bg-brand-cool-gray">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="text-sm font-bold text-red-600 uppercase tracking-wider mb-3">Replaces</div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Legacy Transcription Platform</h3>
              <p className="text-brand-text/80 mb-4">iMedX, EMDAT/3M Solventum</p>
              <p className="text-brand-text leading-relaxed">AI transcription, template & macro management, provider samples, complete QA workflow, VBC line counting, delivery management, and reporting with AI insights.</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="text-sm font-bold text-red-600 uppercase tracking-wider mb-3">Replaces</div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Standalone HRMS</h3>
              <p className="text-brand-text/80 mb-4">GreytHR, Zoho People, Keka</p>
              <p className="text-brand-text leading-relaxed">Employee management with role-based access, shift scheduling, attendance tracking, leave management, CDE & QAS compensation models, and payroll calculations.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <Section tag="AI Transcription" tagColor="text-brand" title="AI-Powered Transcription Pipeline"
          desc="From raw audio to formatted medical document in seconds. Our multi-stage pipeline combines the best medical STT with AI formatting and deterministic post-processing for consistent, high-quality output."
          features={transcriptionFeatures} />
      </div>

      <div className="bg-brand-cool-gray">
        <Section tag="Quality Assurance" tagColor="text-brand" title="Enterprise-Grade QA Workflow"
          desc="The most comprehensive QA system built for medical transcription — 13 error categories, accuracy scoring, audit sampling, and full accountability tracking."
          features={qaFeatures} />
      </div>

      <div className="bg-white">
        <Section tag="Workforce Management" tagColor="text-brand-mint" title="Complete HRMS — Built In, Not Bolted On"
          desc="No more paying for a separate HRMS. MedScribeAI includes everything you need to manage your MTSO workforce, deeply integrated with your production data."
          features={hrmsFeatures} />
      </div>

      {/* Tech Stack */}
      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-brand-navy mb-4">See the Platform in Action</h2>
          <p className="text-lg text-brand-text mb-8">Schedule a private demo and see how MedScribeAI can transform your MTSO operations.</p>
          <Link to="/RequestDemo">
            <Button size="lg" className="bg-brand hover:bg-brand-hover text-white px-10 py-6 text-lg rounded-lg font-semibold">
              Request a Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
