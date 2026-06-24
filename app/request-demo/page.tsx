"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Target, Mail, Sparkles, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const LEAD_EMAIL = "marketing@nuscript.ai";

type Intent = "demo" | "pilot";

type FormState = {
  fullName: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  volume: string;
  message: string;
};

const emptyForm: FormState = {
  fullName: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  volume: "",
  message: "",
};

const copy: Record<
  Intent,
  { eyebrow: string; heading: React.ReactNode; sub: string; benefits: string[]; button: string }
> = {
  demo: {
    eyebrow: "Request a Demo",
    heading: (
      <>
        See <span className="text-primary">MedScribeAI</span> in Action
      </>
    ),
    sub: "Share a few details about your operation — volume, current setup, and goals. We'll walk you through both engines, show the AI pipeline live, and talk through the capacity and margin impact for your operation.",
    benefits: [
      "30-minute personalized walkthrough",
      "Both engines shown live — production and management",
      "No commitment — just a conversation",
    ],
    button: "Request Demo",
  },
  pilot: {
    eyebrow: "Start Your Pilot",
    heading: (
      <>
        Run <span className="text-primary">MedScribeAI</span> on Your Own Work
      </>
    ),
    sub: "A 14-day pilot on your own dictation — full access, no credit card. The fastest way to see the capacity shift is to put real work through it with your own team and clients.",
    benefits: [
      "14-day pilot on your own work",
      "Full platform access, no credit card",
      "See the capacity shift with your own team",
    ],
    button: "Start 14-Day Pilot",
  },
};

/**
 * Single submission entry point.
 * Today: composes a structured email to marketing@nuscript.ai via mailto.
 * To move to server-side capture later, replace ONLY this function body with a
 * fetch() to a Cloudflare Pages Function / Worker (e.g. POST /api/contact).
 */
function submitLead(intent: Intent, form: FormState) {
  const subject = `${intent === "pilot" ? "Pilot request" : "Demo request"} — ${form.company || form.fullName}`;
  const lines = [
    `Intent: ${intent === "pilot" ? "Start a pilot" : "Request a demo"}`,
    `Name: ${form.fullName}`,
    `Company: ${form.company}`,
    `Role: ${form.role || "—"}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone || "—"}`,
    `Monthly volume: ${form.volume || "—"}`,
    "",
    "Message:",
    form.message || "—",
  ];
  const body = lines.join("\r\n");
  const href = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}

export default function RequestDemo() {
  const [intent, setIntent] = useState<Intent>("demo");
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Preset intent from ?intent=pilot without requiring a Suspense boundary.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("intent") === "pilot") setIntent("pilot");
  }, []);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.company) {
      setError("Please fill in your name, company, and email.");
      return;
    }
    setError("");
    submitLead(intent, form);
    setSubmitted(true);
  };

  const c = copy[intent];

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
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
              {c.eyebrow}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {c.heading}
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {c.sub}
            </p>

            <div className="mt-10 space-y-5">
              {c.benefits.map((b, i) => {
                const Icon = [Clock, Users, Target][i] ?? Target;
                return (
                  <div key={b} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-foreground font-medium">{b}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 bg-muted/50 rounded-2xl border border-border p-6">
              <p className="text-sm text-muted-foreground">Prefer email?</p>
              <a
                href={`mailto:${LEAD_EMAIL}`}
                className="flex items-center gap-2 mt-1 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {LEAD_EMAIL}
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
              {/* Intent toggle */}
              <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-muted mb-6">
                {(["demo", "pilot"] as Intent[]).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    suppressHydrationWarning
                    onClick={() => {
                      setIntent(opt);
                      setSubmitted(false);
                    }}
                    className={`py-2 text-sm font-semibold rounded-lg transition-colors ${
                      intent === opt
                        ? "bg-white text-primary shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {opt === "demo" ? "Request a demo" : "Start a pilot"}
                  </button>
                ))}
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 mb-5">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    Almost there
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                    Your email app should have opened with the details ready to
                    send. If it didn't, email us directly at{" "}
                    <a
                      href={`mailto:${LEAD_EMAIL}`}
                      className="text-primary font-medium hover:underline"
                    >
                      {LEAD_EMAIL}
                    </a>
                    .
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-xl"
                  >
                    Back to form
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Tell us about your operation
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label>Full Name *</Label>
                        <Input
                          value={form.fullName}
                          onChange={update("fullName")}
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Company *</Label>
                        <Input
                          value={form.company}
                          onChange={update("company")}
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label>Your Role</Label>
                        <Input
                          value={form.role}
                          onChange={update("role")}
                          placeholder="e.g. Owner, Operations Head"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Email *</Label>
                        <Input
                          type="email"
                          value={form.email}
                          onChange={update("email")}
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label>Phone</Label>
                        <Input
                          value={form.phone}
                          onChange={update("phone")}
                          placeholder="Optional"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Monthly Volume</Label>
                        <Input
                          value={form.volume}
                          onChange={update("volume")}
                          placeholder="Optional"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label>Anything else?</Label>
                      <Textarea
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Goals, challenges, or specific questions..."
                        className="h-28"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-destructive">{error}</p>
                    )}

                    <Button
                      type="submit"
                      suppressHydrationWarning
                      className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-xl font-semibold gap-2 h-12"
                    >
                      {c.button}
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
