import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionLabel from "../components/shared/SectionLabel";
import CTASection from "../components/shared/CTASection";

const plans = [
  {
    name: "Starter",
    size: "5–20 employees",
    price: "₹25,000",
    perLine: "₹0.70",
    arr: "₹12–18 Lakhs",
    popular: false,
    features: [
      "AI transcription pipeline",
      "Complete QA workflow",
      "HRMS — employee & shift management",
      "Attendance & leave tracking",
      "Basic compensation models",
      "Standard reporting",
      "Email support",
    ],
  },
  {
    name: "Professional",
    size: "20–100 employees",
    price: "₹50,000",
    perLine: "₹0.60",
    arr: "₹42–66 Lakhs",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "Advanced compensation with incentive tiers",
      "Multi-client management",
      "Payroll exports with holiday premiums",
      "AI insights & analytics dashboard",
      "Template & macro management",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    size: "100+ employees",
    price: "₹1,00,000",
    perLine: "₹0.50",
    arr: "₹1.02–1.32 Crore",
    popular: false,
    features: [
      "Everything in Professional, plus:",
      "White-label branding",
      "Custom QA rules & workflows",
      "Dedicated onboarding manager",
      "API access",
      "EHR integration support (HL7/FHIR)",
      "Dedicated support channel",
    ],
  },
];

function formatLakhs(num) {
  if (num >= 100) return `₹${(num / 100).toFixed(2)} Cr`;
  return `₹${num.toFixed(2)} L`;
}

export default function Pricing() {
  const [volume, setVolume] = useState([500000]);

  const estimates = useMemo(() => {
    const v = volume[0];
    return plans.map((plan) => {
      const rate = parseFloat(plan.perLine.replace("₹", ""));
      const base = parseInt(plan.price.replace(/[₹,]/g, ""));
      const monthly = base + v * rate;
      const annual = monthly * 12;
      const perLineEff = monthly / v;
      return {
        monthly: formatLakhs(monthly / 100000),
        annual: formatLakhs(annual / 100000),
        perLine: `₹${perLineEff.toFixed(4)}`,
      };
    });
  }, [volume]);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionLabel>Pricing</SectionLabel>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight max-w-3xl">
              Transparent Pricing.{" "}
              <span className="text-primary">No Surprises.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Simple hybrid pricing: a monthly base fee plus a per-line processing fee. 100% INR — no dollar exposure. Start with a free 10-day production pilot.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pilot Banner */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-primary rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">10-Day Production Pilot</h3>
                  <p className="text-white/80 text-sm">Zero cost. Zero risk. Operational by tomorrow morning. Auto-activates on Day 11.</p>
                </div>
              </div>
              <Link to="/request-demo">
                <Button className="bg-white text-primary hover:bg-white/90 gap-2 rounded-xl font-semibold">
                  Start Pilot <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* INR Pricing Advantage */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <IndianRupee className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">100% INR Pricing — Zero Dollar Exposure</h4>
                <p className="text-muted-foreground text-sm mt-0.5">
                  Legacy platforms bill in USD. With the rupee at ₹93+, your costs rise every year. MedScribeAI is priced entirely in INR — predictable costs, no currency risk.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative bg-card rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10 ring-1 ring-primary/20"
                    : "border-border hover:border-primary/20"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-bold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.size}</p>
                <div className="mt-6">
                  <span className="text-3xl lg:text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">/month</span>
                </div>
                <div className="text-primary font-bold text-sm mt-1">+ {plan.perLine}/line</div>
                <p className="text-xs text-muted-foreground mt-1">Est. ARR: {plan.arr}</p>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/request-demo" className="block mt-8">
                  <Button
                    className={`w-full rounded-xl font-semibold gap-2 ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25"
                        : "bg-secondary text-primary hover:bg-accent"
                    }`}
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Estimator */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>Savings Estimator</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
              Estimate Your Monthly Cost
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-10 bg-card rounded-2xl border border-border p-8">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-foreground">Monthly Line Volume</span>
                  <span className="text-lg font-bold text-primary">{(volume[0]).toLocaleString("en-IN")} lines</span>
                </div>
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  min={100000}
                  max={2000000}
                  step={50000}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>1 Lakh</span>
                  <span>5 Lakhs</span>
                  <span>10 Lakhs</span>
                  <span>20 Lakhs</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan, i) => (
                  <div key={plan.name} className={`rounded-xl border p-6 text-center ${plan.popular ? "border-primary bg-primary/5" : "border-border"}`}>
                    <h4 className="font-bold text-foreground">{plan.name}</h4>
                    <div className="mt-3 text-2xl font-extrabold text-primary">{estimates[i].monthly}</div>
                    <div className="text-sm text-muted-foreground">/month</div>
                    <div className="mt-2 text-xs text-muted-foreground">~{estimates[i].perLine}/line</div>
                    <div className="mt-2 text-xs text-muted-foreground">Annual: {estimates[i].annual}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Need a Custom Quote?"
        description="For MTSOs with unique requirements or very high volumes, we offer custom pricing. Let's talk."
        primaryLabel="Contact Sales"
      />
    </>
  );
}
