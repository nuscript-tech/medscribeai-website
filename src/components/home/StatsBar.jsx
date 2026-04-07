import React from "react";
import { motion } from "framer-motion";
import { TrendingDown, Zap, Target, Clock } from "lucide-react";

const stats = [
  { value: "50%", label: "Cost Reduction", icon: TrendingDown },
  { value: "2x", label: "CDE Productivity", icon: Zap },
  { value: "98-99%", label: "Accuracy Rate", icon: Target },
  { value: "<12hr", label: "Turnaround Time", icon: Clock },
];

export default function StatsBar() {
  return (
    <section className="py-16 lg:py-20" style={{ background: "#1B1F3B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl p-6 text-center transition-all duration-400 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="absolute top-0 left-4 right-4 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(42,111,242,0.4), transparent)" }} />
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-105" style={{ background: "rgba(42,111,242,0.15)", color: "#6B9EFF" }}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold tracking-tight" style={{ color: "#FFFFFF" }}>{stat.value}</div>
              <div className="mt-1 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
