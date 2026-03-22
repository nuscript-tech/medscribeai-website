import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Calculator, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const tiers = [
  {
    name: 'Starter',
    base: '₹25,000',
    perLine: '₹0.45',
    target: '5–20 employees',
    arr: '₹8–12 Lakhs',
    popular: false,
    features: [
      'AI transcription pipeline',
      'Complete QA workflow',
      'HRMS — employee & shift management',
      'Attendance & leave tracking',
      'Basic compensation models',
      'Standard reporting',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    base: '₹50,000',
    perLine: '₹0.40',
    target: '20–100 employees',
    arr: '₹30–45 Lakhs',
    popular: true,
    features: [
      'Everything in Starter, plus:',
      'Advanced compensation with incentive tiers',
      'Multi-client management',
      'Payroll exports with holiday premiums',
      'AI insights & analytics dashboard',
      'Template & macro management',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    base: '₹1,00,000',
    perLine: '₹0.35',
    target: '100+ employees',
    arr: '₹75L–1.2 Crore',
    popular: false,
    features: [
      'Everything in Professional, plus:',
      'White-label branding',
      'Custom QA rules & workflows',
      'Dedicated onboarding manager',
      'API access',
      'EHR integration support (HL7/FHIR)',
      'Dedicated support channel',
    ],
  },
];

export default function Pricing() {
  const [volume, setVolume] = useState(500000);

  const calcMonthlyCost = (base, rate) => {
    const baseCost = parseInt(base.replace(/[₹,]/g, ''));
    const lineRate = parseFloat(rate.replace('₹', ''));
    return baseCost + (volume * lineRate);
  };

  const formatINR = (num) => {
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} L`;
    return `₹${num.toLocaleString('en-IN')}`;
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Pricing</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-4 mb-6 leading-[1.1]">
              Transparent Pricing.<br/><span className="text-blue-600">No Surprises.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              Simple hybrid pricing: a monthly base fee covers HRMS value, plus a per-line processing fee covers the AI transcription platform. Revenue scales with your MTSO's volume.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pilot Banner */}
      <section className="py-0 -mt-2">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Pilot Program</h3>
                <p className="text-blue-100">1 month free + 1 month at 50% off. Risk-free onboarding.</p>
              </div>
            </div>
            <Link to="/RequestDemo">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 font-semibold rounded-lg whitespace-nowrap">
                Start Pilot <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`rounded-xl p-8 border-2 transition-all ${tier.popular ? 'border-blue-600 shadow-xl shadow-blue-600/10 relative' : 'border-slate-200 hover:border-slate-300'}`}>
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{tier.name}</h3>
                  <p className="text-sm text-slate-500">{tier.target}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-slate-900">{tier.base}</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                  <div className="text-lg font-semibold text-blue-600 mt-1">+ {tier.perLine}/line</div>
                  <p className="text-xs text-slate-400 mt-2">Est. ARR: {tier.arr}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/RequestDemo" className="block">
                  <Button className={`w-full py-3 rounded-lg font-semibold ${tier.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Estimator */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
              <Calculator className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Savings Estimator</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Estimate Your Monthly Cost</h2>
            <p className="text-slate-600">Drag the slider to match your monthly line volume.</p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Monthly Line Volume: <span className="text-blue-600">{volume.toLocaleString('en-IN')}</span> lines
              </label>
              <input type="range" min="100000" max="2000000" step="50000" value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>1 Lakh</span><span>5 Lakhs</span><span>10 Lakhs</span><span>20 Lakhs</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {tiers.map((tier, i) => {
                const monthly = calcMonthlyCost(tier.base, tier.perLine);
                const annual = monthly * 12;
                const perLine = monthly / volume;
                return (
                  <div key={i} className={`rounded-lg p-5 border ${tier.popular ? 'border-blue-200 bg-blue-50/50' : 'border-slate-200'}`}>
                    <div className="text-sm font-bold text-slate-900 mb-2">{tier.name}</div>
                    <div className="text-2xl font-extrabold text-slate-900">{formatINR(monthly)}</div>
                    <div className="text-sm text-slate-500">/month</div>
                    <div className="text-xs text-slate-400 mt-2">~₹{perLine.toFixed(4)}/line</div>
                    <div className="text-xs text-slate-400">Annual: {formatINR(annual)}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Need a Custom Quote?</h2>
          <p className="text-lg text-slate-600 mb-8">For MTSOs with unique requirements or very high volumes, we offer custom pricing. Let's talk.</p>
          <Link to="/RequestDemo">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg rounded-lg font-semibold">
              Contact Sales <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
