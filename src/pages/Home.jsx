import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, Zap, Target, Shield, Clock, BarChart3, Users, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const metrics = [
  { value: '50%', label: 'Cost Reduction', icon: TrendingDown, color: 'text-brand-mint', bg: 'bg-brand-mint/5' },
  { value: '2x', label: 'CDE Productivity', icon: Zap, color: 'text-brand', bg: 'bg-brand-light' },
  { value: '98-99%', label: 'Accuracy Rate', icon: Target, color: 'text-brand', bg: 'bg-brand-light' },
  { value: '<12hr', label: 'Turnaround Time', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
];

const problems = [
  { title: 'Legacy Platforms', desc: 'iMedX, EMDAT/3M Solventum — built 15+ years ago with no AI capabilities and enterprise-level pricing.' },
  { title: 'Separate HRMS', desc: 'GreytHR, Zoho People, Keka — a second system, second cost, and zero integration with your transcription workflow.' },
  { title: 'Manual Inefficiency', desc: 'CDEs typing 500 lines/day from scratch. No AI assistance, no learning loop, no productivity gains.' },
  { title: 'No Innovation Path', desc: 'Legacy vendors aren\'t investing in AI for Indian MTSOs. You\'re stuck with technology from 2010.' },
];

const solutions = [
  { icon: Zap, title: 'AI Transcription Pipeline', desc: 'Medical-grade speech-to-text + AI formatting generates near-complete drafts. CDEs review and refine — doubling output to 1,000+ lines/day.' },
  { icon: Shield, title: 'Complete QA Workflow', desc: '13 error categories, accuracy scoring, audit sampling, blank accountability, rebuttals — everything your QA team needs.' },
  { icon: Users, title: 'Full HRMS Built In', desc: 'Employee management, shift scheduling, attendance, leave, CDE/QAS compensation models, payroll — no separate system needed.' },
  { icon: BarChart3, title: 'Reporting & AI Insights', desc: 'Real-time dashboards, production analytics, quality metrics, and AI-powered operational insights across your entire MTSO.' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(42,111,242,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(42,111,242,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(circle_at_25%_20%,rgba(42,111,242,0.06),transparent_50%),radial-gradient(circle_at_75%_60%,rgba(0,196,167,0.05),transparent_50%)]" />
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`absolute w-2 h-2 rounded-full animate-pulse`}
              style={{
                top: `${20 + (i * 13) % 60}%`, left: `${15 + (i * 17) % 70}%`,
                backgroundColor: i % 2 ? 'rgba(42,111,242,0.15)' : 'rgba(0,196,167,0.15)',
                animationDelay: `${i * 0.5}s`, animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-light border border-brand-light mb-8">
              <div className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
              <span className="text-sm font-semibold text-brand">Production-tested with 90+ employees & 30 clients</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-brand-navy leading-[1.08] mb-8">
              Cut Your MTSO Operating Costs by{' '}
              <span className="text-brand">50%</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl sm:text-2xl text-brand-text mb-6 font-medium leading-relaxed">
              AI-powered medical transcription + QA + workforce management — all in one platform built for Indian MTSOs.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-brand-text/80 mb-10 leading-relaxed max-w-3xl">
              MedScribeAI replaces your legacy transcription platform and standalone HRMS with a single modern SaaS product. Our AI pipeline doubles CDE productivity from 500 to 1,000+ lines per shift, while built-in workforce management eliminates the need for separate HR tools.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-14">
              <Link to="/RequestDemo">
                <Button size="lg" className="bg-brand hover:bg-brand-hover text-white px-8 py-6 text-lg rounded-lg font-semibold shadow-xl shadow-brand/20">
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/ForMTSOs">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-brand-light font-semibold">
                  See the ROI Math
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className={`inline-flex items-center justify-center w-10 h-10 ${m.bg} rounded-lg mb-3`}>
                    <m.icon className={`w-5 h-5 ${m.color}`} />
                  </div>
                  <div className={`text-2xl sm:text-3xl font-extrabold ${m.color}`}>{m.value}</div>
                  <div className="text-sm text-brand-text/80 font-medium mt-1">{m.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-brand-cool-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="text-sm font-bold text-red-600 uppercase tracking-wider">The Problem</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-3 mb-5">
              Indian MTSOs Are Running on 15-Year-Old Technology
            </h2>
            <p className="text-lg text-brand-text leading-relaxed">
              Most MTSOs cobble together legacy transcription platforms with separate HRMS tools, manual processes, and zero AI. The result? High costs, low productivity, and no path to modernization.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-red-500 font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{p.title}</h3>
                <p className="text-brand-text text-[15px] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="text-sm font-bold text-brand uppercase tracking-wider">The Solution</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-3 mb-5">
              One Platform. Everything Your MTSO Needs.
            </h2>
            <p className="text-lg text-brand-text leading-relaxed">
              MedScribeAI combines AI-powered transcription, a complete QA workflow, and full HRMS capabilities into a single cloud-native SaaS platform — purpose-built for how Indian MTSOs operate.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {solutions.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-brand-cool-gray rounded-xl p-8 border border-gray-100 hover:border-brand/20 hover:bg-brand-light/30 transition-all group">
                <div className="w-12 h-12 bg-brand-light group-hover:bg-brand/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <s.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{s.title}</h3>
                <p className="text-brand-text leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Production Stats */}
      <section className="py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Not a Prototype. A Production Platform.
            </h2>
            <p className="text-xl text-brand-light max-w-2xl mx-auto">
              MedScribeAI is in active daily use at NuScript — processing real medical dictation for real healthcare practice clients, every single day.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: '90+', label: 'Employees Using Daily' },
              { value: '30+', label: 'Healthcare Practice Clients' },
              { value: '1M+', label: 'Lines Processed Monthly' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">{s.value}</div>
                <div className="text-brand-light/80 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-5">
            Ready to Transform Your MTSO Operations?
          </h2>
          <p className="text-lg text-brand-text mb-10 max-w-2xl mx-auto">
            Join the pilot program — 1 month free, 1 month at 50% off. See the productivity gains and cost savings firsthand before committing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/RequestDemo">
              <Button size="lg" className="bg-brand hover:bg-brand-hover text-white px-10 py-6 text-lg rounded-lg font-semibold shadow-xl shadow-brand/20">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/Pricing">
              <Button variant="outline" size="lg" className="px-10 py-6 text-lg rounded-lg border-2 border-gray-300 font-semibold">
                See Pricing
                <ChevronRight className="ml-1 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
