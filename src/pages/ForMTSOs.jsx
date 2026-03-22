import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, TrendingUp, Users, Clock, CheckCircle, IndianRupee } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const costRows = [
  { item: 'CDEs required', without: '50 (at 500 lines/day)', with: '25 (at 1,000+ lines/day)' },
  { item: 'Monthly CDE payroll', without: '₹10,00,000', with: '₹5,00,000' },
  { item: 'Legacy platform fee', without: '₹5,25,000 ($0.0125/line)', with: '—' },
  { item: 'HRMS (GreytHR etc.)', without: '₹3,750', with: '—' },
  { item: 'MedScribeAI fee', without: '—', with: '₹2,50,000' },
  { item: 'Total monthly cost', without: '₹15,28,750', with: '₹7,50,000', highlight: true },
  { item: 'Annual cost', without: '₹1.83 Crore', with: '₹90 Lakhs', highlight: true },
];

const benefits = [
  { icon: Clock, title: 'Faster Turnaround', value: '<12 hours', desc: 'AI drafts are available instantly. Reduced from 24–48 hours to under 12 hours.' },
  { icon: TrendingUp, title: 'Higher Accuracy', value: '98–99%+', desc: 'AI draft + human review catches more errors than manual transcription alone (95–97%).' },
  { icon: Users, title: 'Scale Without Hiring', desc: 'Take on 2x volume without adding headcount, or reduce headcount by 50% at current volume.' },
  { icon: TrendingDown, title: 'Fewer QAS Needed', desc: 'Fewer CDEs means proportionally fewer QAS reviewers, compounding your savings.' },
];

export default function ForMTSOs() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,196,167,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,196,167,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,196,167,0.06),transparent_50%)]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-bold text-brand-mint uppercase tracking-wider">For MTSO Owners & Operations Heads</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy mt-4 mb-6 leading-[1.1]">
              The Math That Changes<br/><span className="text-brand-mint">Everything</span>
            </h1>
            <p className="text-xl text-brand-text leading-relaxed max-w-3xl">
              Your biggest cost is CDE payroll. MedScribeAI's AI pipeline doubles CDE productivity — meaning you need half the CDEs for the same volume. Combined with replacing your legacy platform and HRMS, the savings are transformative.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="py-16 bg-brand-cool-gray">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-brand-navy mb-2">Real-World Impact: Mid-Size MTSO (500K lines/month)</h2>
            <p className="text-brand-text">Side-by-side comparison of total operations cost.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-brand-cool-gray border-b border-gray-200">
              <div className="px-6 py-4 font-bold text-brand-text text-sm">Cost Item</div>
              <div className="px-6 py-4 font-bold text-red-600 text-sm text-center">Without MedScribeAI</div>
              <div className="px-6 py-4 font-bold text-brand-mint text-sm text-center">With MedScribeAI</div>
            </div>
            {costRows.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-gray-100 last:border-0 ${row.highlight ? 'bg-brand-mint/5' : ''}`}>
                <div className={`px-6 py-4 ${row.highlight ? 'font-bold text-brand-navy' : 'text-brand-text'} text-sm`}>{row.item}</div>
                <div className={`px-6 py-4 text-center text-sm ${row.highlight ? 'font-bold text-red-600' : 'text-brand-text'}`}>{row.without}</div>
                <div className={`px-6 py-4 text-center text-sm ${row.highlight ? 'font-bold text-brand-mint' : 'text-brand-text'}`}>{row.with}</div>
              </div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-8 bg-brand-mint rounded-xl p-8 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">₹93 Lakhs/year saved</div>
            <p className="text-emerald-100 text-lg">A 51% reduction in total operations cost. The platform pays for itself in the first week from payroll savings alone.</p>
          </motion.div>
        </div>
      </section>

      {/* Beyond Cost */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-brand uppercase tracking-wider">Beyond Cost Savings</span>
            <h2 className="text-3xl font-extrabold text-brand-navy mt-3 mb-4">Quality and Speed Improve Simultaneously</h2>
            <p className="text-lg text-brand-text">Cost reduction is just the beginning. MedScribeAI improves every operational metric that matters.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-5 p-6 bg-brand-cool-gray rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-1">{b.title}{b.value && <span className="text-brand ml-2">{b.value}</span>}</h3>
                  <p className="text-brand-text text-[15px] leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale Options */}
      <section className="py-16 bg-brand">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-extrabold text-white mb-3">Growth Mode</h3>
              <p className="text-brand-light text-lg leading-relaxed">Take on 2x volume without hiring a single additional CDE. Scale your revenue without scaling your costs.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-extrabold text-white mb-3">Efficiency Mode</h3>
              <p className="text-brand-light text-lg leading-relaxed">Maintain current volume with 50% fewer CDEs. Convert payroll savings directly into profit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-brand-navy mb-4">See the Numbers for Your MTSO</h2>
          <p className="text-lg text-brand-text mb-8">Share your monthly volume and current costs — we'll build a custom ROI analysis for your operation.</p>
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
