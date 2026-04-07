import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

export default function CTASection({ title, description, primaryLabel = "Request a Demo", primaryLink = "/request-demo", secondaryLabel, secondaryLink }) {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-20 lg:px-24 lg:py-24 text-center"
            style={{
              background: "radial-gradient(ellipse 80% 70% at 50% 50%, #E8F1FF 0%, #EEF4FF 45%, #F5F7FA 75%, #ffffff 100%)",
            }}
          >
            {/* Soft edge glows */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" style={{background: "rgba(42,111,242,0.12)"}} />
              <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" style={{background: "rgba(0,196,167,0.12)"}} />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-extrabold max-w-2xl mx-auto leading-tight" style={{ color: "#1B1F3B" }}>
                {title}
              </h2>
              {description && (
                <p className="mt-5 text-lg max-w-xl mx-auto" style={{ color: "#4A4A4A" }}>{description}</p>
              )}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to={primaryLink}>
                  <Button size="lg" className="bg-primary hover:bg-[#1A5CD8] text-white shadow-lg gap-2 px-8 rounded-full font-semibold text-base" style={{boxShadow: "0 8px 24px rgba(42,111,242,0.25)"}}>
                    {primaryLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                {secondaryLabel && secondaryLink && (
                  <Link to={secondaryLink}>
                    <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-white gap-2 px-8 rounded-full font-semibold text-base bg-white shadow-sm">
                      {secondaryLabel}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}