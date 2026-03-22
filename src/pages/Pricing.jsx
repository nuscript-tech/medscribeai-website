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
          <div className="absolute inset-0 bg-[linear-gradient(rgba(42,111,242,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(42,111,242,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-bold text-brand uppercase tracking-wider">Pricing</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy mt-4 mb-6 leading-[1.1]">
              Transparent Pricing.<br/><span className="text-brand">No Surprises.</span>
            </h1>
            <p className="text-xl text-brand-text leading-relaxed max-w-3xl">
              Simple hybrid pricing: a monthly base fee covers HRMS value, plus a per-line processing fee covers the AI transcription platform. Revenue scales with your MTSO's volume.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pilot Banner */}
      <section className="py-0 -mt-2">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-brand to-brand-hover rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Pilot Program</h3>
                <p className="text-brand-light">1 month free + 1 month at 50% off. Risk-free onboarding.</p>
              </div>
            </div>
            <Link to="/RequestDemo">
              <Button className="bg-white text-brand hover:bg-brand-light px-6 py-3 font-semibold rounded-lg whitespace-nowrap">
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
                className={`rounded-xl p-8 border-2 transition-all ${tier.popular ? 'border-brand shadow-xl shadow-brand/10 relative' : 'border-gray-200 hover:border-gray-300'}`}>
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-1">{tier.name}</h3>
                  <p className="text-sm text-brand-text/80">{tier.target}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-brand-navy">{tier.base}</span>
                    <span className="text-brand-text/80">/month</span>
                  </div>
                  <div className="text-lg font-semibold text-brand mt-1">+ {tier.perLine}/line</div>
                  <p className="text-xs text-gray-400 mt-2">Est. ARR: {tier.arr}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-brand-mint flex-shrink-0 mt-1" />
                      <span className="text-sm text-brand-text">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/RequestDemo" className="block">
                  <Button className={`w-full py-3 rounded-lg font-semibold ${tier.popular ? 'bg-brand hover:bg-brand-hover text-white' : 'bg-brand-cool-gray hover:bg-gray-200 text-brand-navy'}`}>
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Estimator */}
      <section className="py-16 bg-brand-cool-gray">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-brand-light border border-brand-light rounded-full px-4 py-1.5 mb-4">
              <Calculator className="w-4 h-4 text-brand" />
              <span className="text-sm font-semibold text-brand">Savings Estimator</span>
            </div>
            <h2 className="text-2xl font-extrabold text-brand-navy mb-2">Estimate Your Monthly Cost</h2>
            <p className="text-brand-text">Drag the slider to match your monthly line volume.</p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="mb-8">
              <label className="block text-sm font-semibold text-brand-text mb-3">
                Monthly Line Volume: <span className="text-brand">{volume.toLocaleString('en-IN')}</span> lines
              </label>
              <input type="range" min="100000" max="2000000" step="50000" value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand" />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>1 Lakh</span><span>5 Lakhs</span><span>10 Lakhs</span><span>20 Lakhs</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {tiers.map((tier, i) => {
                const monthly = calcMonthlyCost(tier.base, tier.perLine);
                const annual = monthly * 12;
                const perLine = monthly / volume;
                return (
                  <div key={i} className={`rounded-lg p-5 border ${tier.popular ? 'border-brand/20 bg-brand-light/50' : 'border-gray-200'}`}>
                    <div className="text-sm font-bold text-brand-navy mb-2">{tier.name}</div>
                    <div className="text-2xl font-extrabold text-brand-navy">{formatINR(monthly)}</div>
                    <div className="text-sm text-brand-text/80">/month</div>
                    <div className="text-xs text-gray-400 mt-2">~₹{perLine.toFixed(4)}/line</div>
                    <div className="text-xs text-gray-400">Annual: {formatINR(annual)}</div>
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
          <h2 className="text-3xl font-extrabold text-brand-navy mb-4">Need a Custom Quote?</h2>
          <p className="text-lg text-brand-text mb-8">For MTSOs with unique requirements or very high volumes, we offer custom pricing. Let's talk.</p>
          <Link to="/RequestDemo">
            <Button size="lg" className="bg-brand hover:bg-brand-hover text-white px-10 py-6 text-lg rounded-lg font-semibold">
              Contact Sales <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
