import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, Minus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const comparisonRows = [
  { feature: 'AI Engine', medscribe: 'Claude AI + Deepgram', imedx: 'Basic ASR', emdat: 'Dragon (legacy)' },
  { feature: 'QA Depth', medscribe: '13 categories + blanks', imedx: 'Basic tracking', emdat: 'Limited' },
  { feature: 'HRMS Included', medscribe: true, imedx: false, emdat: false },
  { feature: 'Workforce Impact', medscribe: '2x CDE productivity', imedx: 'None', emdat: 'None' },
  { feature: 'Pricing Model', medscribe: 'Transparent hybrid', imedx: 'Enterprise quotes', emdat: 'Per-seat + custom' },
  { feature: 'Deployment', medscribe: 'Cloud SaaS (instant)', imedx: 'On-prem + cloud', emdat: 'On-prem heavy' },
  { feature: 'India Focus', medscribe: 'Built for Indian MTSOs', imedx: 'US-centric', emdat: 'Sunsetting' },
  { feature: 'Self-Improving AI', medscribe: true, imedx: false, emdat: false },
  { feature: 'Learning Loop', medscribe: true, imedx: false, emdat: false },
  { feature: 'Template/Macro System', medscribe: '900+ macros, DOCX extraction', imedx: 'Basic templates', emdat: 'Basic templates' },
  { feature: 'Compensation Models', medscribe: 'CDE & QAS with incentives', imedx: 'None', emdat: 'None' },
  { feature: 'Leave & Attendance', medscribe: 'Full system', imedx: 'None', emdat: 'None' },
];

const pricingRows = [
  { volume: '250K lines/mo', legacy: '$0.015–0.018', medscribe: '~$0.0066', includes: 'AI + QA + HRMS' },
  { volume: '500K lines/mo', legacy: '$0.010–0.0125', medscribe: '~$0.0060', includes: 'AI + QA + HRMS' },
  { volume: '1M lines/mo', legacy: '$0.005–0.0075', medscribe: '~$0.0050', includes: 'AI + QA + HRMS' },
];

const comparisons = [
  {
    name: 'vs iMedX',
    tagline: 'No AI, No HRMS, US-Centric',
    points: [
      'No AI transcription assistance — CDEs still type from scratch',
      'No workforce management — you need a separate HRMS',
      'Enterprise pricing designed for US healthcare systems, not Indian MTSOs',
      'Limited QA beyond basic tracking',
    ]
  },
  {
    name: 'vs EMDAT / 3M Solventum',
    tagline: 'Legacy Dragon, On-Prem, Sunsetting',
    points: [
      'Legacy Dragon speech engine — no modern AI formatting',
      'Heavy on-premises deployment requirements',
      '3M Solventum is actively sunsetting EMDAT — no investment in future',
      'Per-seat pricing with opaque custom contracts',
    ]
  },
  {
    name: 'vs GreytHR + Legacy Platform',
    tagline: 'Two Systems, Two Costs, Zero Integration',
    points: [
      'Running two separate platforms doubles your vendor management burden',
      'No integration between HR data and production data',
      'Combined cost exceeds MedScribeAI — and you get no AI',
      'Employee productivity metrics disconnected from attendance/leave data',
    ]
  },
];

const CellValue = ({ val }) => {
  if (val === true) return <Check className="w-5 h-5 text-emerald-600 mx-auto" />;
  if (val === false) return <X className="w-5 h-5 text-red-400 mx-auto" />;
  return <span>{val}</span>;
};

export default function WhyMedScribeAI() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Why MedScribeAI</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-4 mb-6 leading-[1.1]">
              How We Compare to<br/><span className="text-blue-600">Legacy Platforms</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              MedScribeAI costs less per line than a legacy platform that offers no AI and no HRMS. MTSOs currently pay separately for a transcription platform and an HRMS — MedScribeAI replaces both at a lower combined price.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8">Feature Comparison</h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="px-6 py-4 text-left font-bold text-slate-700">Feature</th>
                  <th className="px-6 py-4 text-center font-bold text-blue-600 bg-blue-50/50">MedScribeAI</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-500">iMedX</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-500">EMDAT / 3M</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0">
                    <td className="px-6 py-3.5 text-slate-700 font-medium">{row.feature}</td>
                    <td className="px-6 py-3.5 text-center text-slate-900 font-medium bg-blue-50/20"><CellValue val={row.medscribe} /></td>
                    <td className="px-6 py-3.5 text-center text-slate-500"><CellValue val={row.imedx} /></td>
                    <td className="px-6 py-3.5 text-center text-slate-500"><CellValue val={row.emdat} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Pricing vs Legacy Platforms</h2>
          <p className="text-slate-600 mb-8">Effective cost per line — MedScribeAI includes AI, QA, and HRMS.</p>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-4 bg-slate-100 border-b border-slate-200">
              <div className="px-6 py-4 font-bold text-slate-700 text-sm">Volume/Month</div>
              <div className="px-6 py-4 font-bold text-red-600 text-sm text-center">Legacy ($/line)</div>
              <div className="px-6 py-4 font-bold text-emerald-600 text-sm text-center">MedScribeAI ($/line)</div>
              <div className="px-6 py-4 font-bold text-blue-600 text-sm text-center">Includes</div>
            </div>
            {pricingRows.map((row, i) => (
              <div key={i} className="grid grid-cols-4 border-b border-slate-100 last:border-0">
                <div className="px-6 py-4 text-slate-700 font-medium text-sm">{row.volume}</div>
                <div className="px-6 py-4 text-center text-red-600 text-sm">{row.legacy}</div>
                <div className="px-6 py-4 text-center text-emerald-600 font-semibold text-sm">{row.medscribe}</div>
                <div className="px-6 py-4 text-center text-blue-600 font-medium text-sm">{row.includes}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparisons */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-10">Detailed Comparisons</h2>
          <div className="space-y-6">
            {comparisons.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{c.name}</h3>
                <p className="text-slate-500 font-medium mb-5">{c.tagline}</p>
                <ul className="space-y-3">
                  {c.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Ready to Move Beyond Legacy?</h2>
          <p className="text-lg text-slate-600 mb-8">See how MedScribeAI compares with your specific setup. We'll walk through the numbers for your MTSO.</p>
          <Link to="/RequestDemo">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg rounded-lg font-semibold">
              Request a Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
