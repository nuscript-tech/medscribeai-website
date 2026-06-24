"use client";

import React from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CTASection() {
  return (
    <section id="pilot" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-20 lg:px-24 lg:py-24 text-center"
            style={{
              background:
                "radial-gradient(ellipse 80% 70% at 50% 50%, #E8F1FF 0%, #EEF4FF 45%, #F5F7FA 75%, #ffffff 100%)",
            }}
          >
            {/* Soft edge glows */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                style={{ background: "rgba(42,111,242,0.12)" }}
              />
              <div
                className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
                style={{ background: "rgba(0,196,167,0.12)" }}
              />
            </div>

            <div className="relative z-10">
              <h2
                className="text-4xl lg:text-5xl font-bold max-w-2xl mx-auto leading-tight"
                style={{ color: "#1B1F3B" }}
              >
                Ready to Double Your Capacity?
              </h2>
              <p
                className="mt-5 text-lg max-w-xl mx-auto"
                style={{ color: "#4A4A4A" }}
              >
                Start a 14-day pilot on your own work — full access, no credit
                card. See the capacity shift with your own team and clients.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/request-demo?intent=pilot">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-[#1A5CD8] text-white gap-2 px-8 rounded-full font-semibold text-base"
                    style={{ boxShadow: "0 8px 24px rgba(42,111,242,0.25)" }}
                  >
                    Start 14-Day Pilot
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="https://app.medscribeai.in" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-white gap-2 px-8 rounded-full font-semibold text-base bg-white shadow-sm"
                  >
                    Login
                  </Button>
                </a>
              </div>

              {/* Contact */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                <a
                  href="mailto:marketing@nuscript.ai"
                  className="inline-flex items-center gap-2 font-medium transition-colors hover:text-primary"
                  style={{ color: "#4A4A4A" }}
                >
                  <Mail className="w-4 h-4 text-primary" />
                  marketing@nuscript.ai
                </a>
                <a
                  href="tel:+919790444927"
                  className="inline-flex items-center gap-2 font-medium transition-colors hover:text-primary"
                  style={{ color: "#4A4A4A" }}
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +91 97904 44927
                </a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span>HIPAA-compliant</span>
                <span className="hidden sm:inline text-slate-300">·</span>
                <span>BAA available</span>
                <span className="hidden sm:inline text-slate-300">·</span>
                <span>Proven across 70+ organizations</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
