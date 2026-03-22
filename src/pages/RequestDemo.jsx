import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, Send, Clock, Users, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const FORMSPREE_ID = 'mdawzyyk';

const benefits = [
  { icon: Clock, text: '30-minute personalized walkthrough' },
  { icon: Users, text: 'Custom ROI analysis for your MTSO' },
  { icon: Shield, text: 'No commitment — just a conversation' },
];

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    name: '', company: '', role: '', email: '', phone: '', volume: '', currentPlatform: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `MedScribeAI Demo Request from ${formData.company || formData.name}`,
        }),
      });
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setError('Something went wrong. Please email us at hello@medscribeai.in');
      }
    } catch {
      setError('Network error. Please email us at hello@medscribeai.in');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />

      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.06),transparent_50%)]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">Request a Demo</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.1]">
                  See <span className="text-blue-600">MedScribeAI</span><br/>in Action
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  Share a few details about your MTSO — volumes, current platform, and goals. We'll walk you through the platform, show the AI pipeline live, and build a custom ROI projection for your operation.
                </p>

                <div className="space-y-4 mb-10">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <b.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{b.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-2 font-semibold">Prefer email?</p>
                  <a href="mailto:hello@medscribeai.in" className="text-blue-600 font-semibold hover:underline">hello@medscribeai.in</a>
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              {isSubmitted ? (
                <div className="bg-white rounded-xl p-10 border border-slate-200 shadow-lg text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Demo Request Received</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Thank you for your interest in MedScribeAI. We'll get back to you within 24 hours with a demo schedule and custom ROI analysis.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-lg">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Tell us about your MTSO</h2>
                  <div className="space-y-5" role="form">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-slate-700 mb-1.5 block">Full Name *</Label>
                        <Input id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-sm font-medium text-slate-700 mb-1.5 block">Company *</Label>
                        <Input id="company" name="company" required value={formData.company} onChange={handleChange} placeholder="MTSO name" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="role" className="text-sm font-medium text-slate-700 mb-1.5 block">Your Role</Label>
                        <Input id="role" name="role" value={formData.role} onChange={handleChange} placeholder="e.g. Owner, Operations Head" />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-slate-700 mb-1.5 block">Email *</Label>
                        <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-slate-700 mb-1.5 block">Phone</Label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 ..." />
                      </div>
                      <div>
                        <Label htmlFor="volume" className="text-sm font-medium text-slate-700 mb-1.5 block">Monthly Volume (lines)</Label>
                        <Input id="volume" name="volume" value={formData.volume} onChange={handleChange} placeholder="e.g. 500,000" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="currentPlatform" className="text-sm font-medium text-slate-700 mb-1.5 block">Current Platform</Label>
                      <Input id="currentPlatform" name="currentPlatform" value={formData.currentPlatform} onChange={handleChange} placeholder="e.g. iMedX, EMDAT, in-house tool" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-slate-700 mb-1.5 block">Additional Details</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your goals, challenges, or specific questions..." rows={3} />
                    </div>
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    <Button onClick={handleSubmit} disabled={isSubmitting || !formData.name || !formData.company || !formData.email}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-base">
                      {isSubmitting ? 'Submitting...' : 'Request Demo'}
                      {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
