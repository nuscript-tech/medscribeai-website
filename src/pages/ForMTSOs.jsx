import React from "react";
import { motion } from "framer-motion";
import { Clock, Target, TrendingUp, Users, Rocket, PiggyBank } from "lucide-react";
import AnimatedSection from "../components/shared/AnimatedSection";
import SectionLabel from "../components/shared/SectionLabel";
import CTASection from "../components/shared/CTASection";

const tableRows = [
  { item: "CDEs required", without: "50 (at 500 lines/day)", withAI: "25 (at 1,000+ lines/day)" },
  { item: "Monthly CDE payroll", without: "₹10,00,000", withAI: "₹5,00,000" },
  { item: "Legacy platform fee", without: "₹5,25,000 ($0.0125/line)", withAI: "—" },
  { item: "HRMS (GreytHR etc.)", without: "₹3,750", withAI: "—" },
  { item: "MedScribeAI fee", without: "—", withAI: "₹2,50,000" },
  { item: "Total monthly cost", without: "₹15,28,750", withAI: "₹7,50,000", highlight: true },
  { item: "Annual cost", without: "₹1.83 Crore", withAI: "₹90 Lakhs", highlight: true },
];

const benefits = [
  { icon: Clock, title: "Faster Turnaround", stat: "<12 hours", desc: "AI drafts are available instantly. Reduced from 24–48 hours to under 12 hours." },
  { icon: Target, title: "Higher Accuracy", stat: "98–99%+", desc: "AI draft + human review catches more errors than manual transcription alone (95–97%)." },
  { icon: TrendingUp, title: "Scale Without Hiring", desc: "Take on 2x volume without adding headcount, or reduce headcount by 50% at current volume." },
  { icon: Users, title: "Fewer QAS Needed", desc: "Fewer CDEs means proportionally fewer QAS reviewers, compounding your savings." },
  { icon: Rocket, title: "Growth Mode", desc: "Take on 2x volume without hiring a single additional CDE. Scale your revenue without scaling your costs." },
  { icon: PiggyBank, title: "Efficiency Mode", desc: "Maintain current volume with 50% fewer CDEs. Convert payroll savings directly into profit." },
];

export default function ForMTSOs() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionLabel>For MTSO Owners & Operations Heads</SectionLabel>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight max-w-3xl">
              The Math That Changes{" "}
              <span className="text-primary">Everything</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Your biggest cost is CDE payroll. MedScribeAI's AI pipeline doubles CDE productivity — meaning you need half the CDEs for the same volume. Combined with replacing your legacy platform and HRMS, the savings are transformative.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground mb-2">
              Real-World Impact: Mid-Size MTSO (500K lines/month)
            </h2>
            <p className="text-muted-foreground mb-8">Side-by-side comparison of total operations cost.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-[0_2px_24px_0_rgba(42,111,242,0.08)]">
              <table className="w-full">
                <thead>
                  <tr style={{ background: "linear-gradient(135deg, #F0F5FF 0%, #EEF4FF 100%)" }}>
                    <th className="text-left px-7 py-5 text-sm font-bold text-foreground w-1/3">Cost Item</th>
                    <th className="text-center px-7 py-5 text-sm font-bold w-1/3">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-500 border border-red-100">
                        Without MedScribeAI
                      </span>
                    </th>
                    <th className="text-center px-7 py-5 text-sm font-bold w-1/3">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary border border-blue-100">
                        With MedScribeAI
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {tableRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t border-slate-100 transition-colors ${
                        row.highlight
                          ? "bg-gradient-to-r from-blue-50/60 to-white"
                          : "hover:bg-slate-50/60"
                      }`}
                    >
                      <td className={`px-7 py-4 text-sm ${row.highlight ? "font-bold text-foreground" : "text-slate-600"}`}>
                        {row.item}
                        {row.highlight && <span className="ml-2 text-xs font-semibold text-primary uppercase tracking-wide">↑ Key</span>}
                      </td>
                      <td className={`px-7 py-4 text-sm text-center ${row.highlight ? "text-destructive font-extrabold text-base" : "text-slate-500"}`}>
                        {row.without}
                      </td>
                      <td className={`px-7 py-4 text-sm text-center ${row.highlight ? "text-primary font-extrabold text-base" : "text-slate-500"}`}>
                        {row.withAI === "—" ? (
                          <span className="text-slate-300 font-medium">—</span>
                        ) : (
                          row.withAI
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
              <div className="text-3xl lg:text-4xl font-extrabold text-primary">₹93 Lakhs/year saved</div>
              <p className="mt-2 text-muted-foreground">A 51% reduction in total operations cost. The platform pays for itself in the first week from payroll savings alone.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionLabel>Beyond Cost Savings</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight max-w-2xl">
              Quality and Speed Improve Simultaneously
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <b.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">{b.title}</h3>
                {b.stat && <span className="text-sm font-bold text-primary">{b.stat}</span>}
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See the Numbers for Your MTSO"
        description="Share your monthly volume and current costs — we'll build a custom ROI analysis for your operation."
      />
    </>
  );
}