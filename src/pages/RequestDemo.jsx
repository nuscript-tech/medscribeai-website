import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Target, Mail, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionLabel from "../components/shared/SectionLabel";
import { toast } from "sonner";

const benefits = [
  { icon: Clock, text: "30-minute personalized walkthrough" },
  { icon: Users, text: "Custom ROI analysis for your MTSO" },
  { icon: Target, text: "No commitment — just a conversation" },
];

export default function RequestDemo() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    volume: "",
    currentPlatform: "",
    details: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.company) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("Demo request submitted! We'll be in touch within 24 hours.");
    setForm({ fullName: "", company: "", role: "", email: "", phone: "", volume: "", currentPlatform: "", details: "" });
    setSubmitting(false);
  };

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-accent text-sm font-medium text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              Request a Demo
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              See <span className="text-primary">MedScribeAI</span>{" "}
              in Action
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Share a few details about your MTSO — volumes, current platform, and goals. We'll walk you through the platform, show the AI pipeline live, and build a custom ROI projection for your operation.
            </p>

            <div className="mt-10 space-y-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5" />
                  </div>
                  <span className="text-foreground font-medium">{b.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 bg-muted/50 rounded-2xl border border-border p-6">
              <p className="text-sm text-muted-foreground">Prefer email?</p>
              <a href="mailto:hello@medscribeai.in" className="flex items-center gap-2 mt-1 text-primary font-semibold hover:text-primary/80 transition-colors">
                <Mail className="w-4 h-4" />
                hello@medscribeai.in
              </a>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-card rounded-2xl border border-border p-8 shadow-xl shadow-black/5">
              <h2 className="text-xl font-bold text-foreground mb-6">Tell us about your MTSO</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Full Name *</Label>
                    <Input value={form.fullName} onChange={handleChange("fullName")} placeholder="Your name" className="mt-1.5 rounded-xl" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Company *</Label>
                    <Input value={form.company} onChange={handleChange("company")} placeholder="MTSO name" className="mt-1.5 rounded-xl" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Your Role</Label>
                    <Input value={form.role} onChange={handleChange("role")} placeholder="e.g. Owner, Operations Head" className="mt-1.5 rounded-xl" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Email *</Label>
                    <Input type="email" value={form.email} onChange={handleChange("email")} placeholder="your@email.com" className="mt-1.5 rounded-xl" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Phone</Label>
                    <Input value={form.phone} onChange={handleChange("phone")} placeholder="+91 ..." className="mt-1.5 rounded-xl" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Monthly Volume (lines)</Label>
                    <Input value={form.volume} onChange={handleChange("volume")} placeholder="e.g. 500,000" className="mt-1.5 rounded-xl" />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Current Platform</Label>
                  <Input value={form.currentPlatform} onChange={handleChange("currentPlatform")} placeholder="e.g. iMedX, EMDAT, in-house tool" className="mt-1.5 rounded-xl" />
                </div>
                <div>
                  <Label className="text-sm font-medium">Additional Details</Label>
                  <Textarea
                    value={form.details}
                    onChange={handleChange("details")}
                    placeholder="Tell us about your goals, challenges, or specific questions..."
                    className="mt-1.5 rounded-xl h-28"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-xl font-semibold gap-2 h-12"
                >
                  {submitting ? "Submitting..." : "Request Demo"}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}