import React from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const platformLinks = [
  { label: "Product Overview", path: "/platform" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "For MTSOs", path: "/for-mtsos" },
  { label: "Pricing", path: "/pricing" },
  { label: "Why MedScribeAI", path: "/why-us" },
];

const companyLinks = [
  { label: "About", path: "/about" },
  { label: "Request Demo", path: "/request-demo" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Service", path: "/terms" },
];

export default function Footer() {
  return (
    <footer style={{backgroundColor: "#1B1F3B"}} className="text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/medscribe-logo-white.png"
                alt="MedScribeAI"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-md text-white/60">
              The modern SaaS platform for Indian MTSOs — replacing legacy transcription platforms and standalone HRMS with AI-powered transcription, QA workflows, and workforce management in a single product.
            </p>
            <a href="mailto:hello@medscribeai.in" className="inline-flex items-center gap-2 mt-4 text-sm hover:opacity-80 transition-colors" style={{color: "#00C4A7"}}>
              <Mail className="w-4 h-4" />
              hello@medscribeai.in
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{color: "#E8F1FF", opacity: 0.7}}>Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm transition-colors hover:text-white" style={{color: "#E8F1FF"}}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{color: "#E8F1FF", opacity: 0.7}}>Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm transition-colors hover:text-white" style={{color: "#E8F1FF"}}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">© 2026 MedScribeAI, a product of <a href="https://nuscript.in" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 underline underline-offset-2 transition-colors">NuScript Technologies</a>. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-white/20 text-white/60">
              🔒 ISO 27001 Aligned
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-white/20 text-white/60">
              🏥 HIPAA Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}