import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-secondary/60 rounded-full blur-3xl" />
      </div>

      {/* Floating dots */}
      {[
        { top: "15%", left: "8%", size: 6, delay: 0 },
        { top: "25%", right: "12%", size: 8, delay: 0.5 },
        { top: "60%", left: "15%", size: 5, delay: 1 },
        { top: "70%", right: "20%", size: 7, delay: 1.5 },
        { top: "40%", left: "45%", size: 4, delay: 2 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20"
          style={{ top: dot.top, left: dot.left, right: dot.right, width: dot.size, height: dot.size }}
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-accent text-sm font-medium text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Production-tested with 90+ daily users & 30+ practices
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]"
          >
            Cut Your MTSO{" "}
            <br className="hidden sm:block" />
            Operating Costs by{" "}
            <span className="text-primary">50%</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed"
          >
            AI-powered medical transcription + QA + workforce management — all in one platform built for Indian MTSOs.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-4 text-base text-muted-foreground/80 leading-relaxed max-w-2xl"
          >
            MedScribeAI replaces your legacy transcription platform and standalone HRMS with a single modern SaaS product. Our AI pipeline doubles CDE productivity from 500 to 1,000+ lines per shift, while built-in workforce management eliminates the need for separate HR tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link to="/request-demo">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all gap-2 px-8 rounded-xl font-semibold text-base h-12">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/for-mtsos">
              <Button size="lg" variant="outline" className="border-border hover:bg-muted gap-2 px-8 rounded-xl font-semibold text-base h-12">
                See the ROI Math
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}