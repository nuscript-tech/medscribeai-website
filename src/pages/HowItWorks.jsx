import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Upload, Mic, Brain, Settings, UserCheck, Shield, Send, RotateCcw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const steps = [
  { icon: Upload, num: '01', title: 'Audio Upload', desc: 'Healthcare provider dictates. Audio file (MP3/WAV/M4A) is uploaded to MedScribeAI via secure pipeline. Files are encrypted at rest on secure cloud storage.', tag: 'Input' },
  { icon: Mic, num: '02', title: 'Speech-to-Text', desc: 'Medical-grade STT engine converts speech to text with 98%+ raw accuracy. Medical vocabulary, dictation commands, and speaker diarization handled natively.', tag: 'Speech-to-Text' },
  { icon: Brain, num: '03', title: 'AI Formatting', desc: 'Our AI engine formats the raw transcript into a structured medical document — applying provider templates, client specifications, Book of Style rules, and medico-legal requirements.', tag: 'AI Engine' },
  { icon: Settings, num: '04', title: 'Post-Processor', desc: 'Deterministic rule engine applies ASR corrections, medical abbreviation expansion, formatting standards, and client-specific rules. Consistent, predictable, auditable.', tag: 'Rules Engine' },
  { icon: UserCheck, num: '05', title: 'CDE Review', desc: 'Clinical Documentation Editor reviews the AI draft, makes corrections, fills any blanks, and confirms accuracy. The AI did the heavy lifting — the human ensures perfection.', tag: 'Human Review' },
  { icon: Shield, num: '06', title: 'QA Review', desc: 'Quality Assurance Specialist audits the completed transcript against 13 error categories. Accuracy scores, error tracking, and rebuttal workflows ensure quality standards are met.', tag: 'Quality Assurance' },
  { icon: Send, num: '07', title: 'Delivery', desc: 'Final approved document is delivered to the healthcare practice client via their preferred method — EHR integration, secure portal, or file delivery.', tag: 'Output' },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">How It Works</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-4 mb-6 leading-[1.1]">
              From Audio to Approved Document<br/><span className="text-blue-600">in 7 Steps</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              MedScribeAI's pipeline combines AI speed with human accuracy. The AI generates a near-complete draft in seconds — your team reviews, refines, and approves. Every step is transparent and auditable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pipeline Steps */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-blue-200 hidden sm:block" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                      <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 flex-1 hover:border-blue-200 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">{step.tag}</span>
                      <span className="text-xs font-bold text-slate-400">STEP {step.num}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Loop */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12 border border-blue-100">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/20">
                <RotateCcw className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">The Self-Improving Learning Loop</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  Every CDE correction is captured and fed back into MedScribeAI's AI pipeline. Over time, the system learns each provider's style, common corrections, preferred formatting, and medical terminology patterns.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  This means AI drafts get better with every transcription processed. New providers start with baseline accuracy and improve rapidly. Established providers see near-perfect first drafts that require minimal editing.
                </p>
                <p className="text-slate-700 font-semibold">
                  The result: CDEs spend less time correcting and more time producing, pushing productivity even beyond 1,000 lines/day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human-in-the-Loop */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">AI Does the Heavy Lifting. Humans Ensure Perfection.</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            MedScribeAI is not a fully automated system. Every document is reviewed by a trained CDE before delivery. The AI accelerates the process — your team guarantees the quality.
          </p>
          <Link to="/RequestDemo">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-6 text-lg rounded-lg font-semibold">
              See It in Action <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
