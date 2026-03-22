import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Target, Users, MapPin, Lightbulb } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const values = [
  { icon: Building2, title: 'Built by an MTSO, for MTSOs', desc: 'We run our own transcription operation with 90+ employees and 30 clients. MedScribeAI was built to solve our own challenges — then productized for the industry.' },
  { icon: Target, title: 'Production-First', desc: 'This is not a lab experiment. MedScribeAI processes real medical dictation for real healthcare providers every single day. Features are validated in production before they reach you.' },
  { icon: Lightbulb, title: 'India-Focused', desc: 'Built specifically for how Indian MTSOs operate — from compensation structures and shift patterns to compliance requirements and payment models.' },
  { icon: Users, title: 'MTSO Operations DNA', desc: 'Our team understands CDE workflows, QAS processes, TAT requirements, and client management because we live it daily. This isn\'t generic healthcare software.' },
];

const milestones = [
  { year: '2024', text: 'NuScript Technologies founded in Coimbatore. Began building transcription operations and technology platform.' },
  { year: '2025', text: 'MedScribeAI platform core developed. AI transcription pipeline with Deepgram + Claude AI integration operational. QA workflow and HRMS modules completed.' },
  { year: '2026', text: 'Platform in full production use. 90+ employees, 30+ clients processing daily. Preparing for SaaS launch to external MTSOs.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">About MedScribeAI</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-4 mb-6 leading-[1.1]">
              We Run an MTSO.<br/>
              <span className="text-blue-600">We Built What We Needed.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              MedScribeAI is built by NuScript Technologies, a Coimbatore-based medical transcription company. We built this platform to solve our own operational challenges — and now we're making it available to every MTSO in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-8 border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-xl font-extrabold text-blue-600">{m.year}</span>
                </div>
                <div className="w-px bg-blue-200 relative">
                  <div className="absolute top-1.5 -left-1.5 w-3.5 h-3.5 bg-blue-600 rounded-full border-2 border-white" />
                </div>
                <div className="pb-4">
                  <p className="text-slate-600 leading-relaxed">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Founded by Arvind</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Arvind founded NuScript Technologies with a clear mission: modernize medical transcription for Indian MTSOs. After years of working with legacy platforms and separate HRMS tools, he set out to build the platform he wished existed — one that combines AI transcription, quality assurance, and workforce management into a single product.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today, MedScribeAI processes real dictation for 30+ healthcare practice clients with a team of 90+ employees in Coimbatore. It's the production environment that validates every feature before it ships.
            </p>
          </div>
        </div>
      </section>

      {/* Location & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Based in Coimbatore</h3>
              <p className="text-slate-600 leading-relaxed">
                NuScript Technologies operates from Coimbatore, Tamil Nadu — one of India's growing technology and business hubs.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                Define the next generation of medical transcription technology for Indian MTSOs and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Join Us in Modernizing Medical Transcription</h2>
          <p className="text-xl text-blue-100 mb-8">Be among the first MTSOs to adopt the platform that's already proven in production.</p>
          <Link to="/RequestDemo">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-6 text-lg rounded-lg font-semibold">
              Request a Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
