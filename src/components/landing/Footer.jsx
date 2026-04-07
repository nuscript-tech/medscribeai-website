import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" opacity="0.9"/>
                  <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                MedScribe<span className="text-brand-light">AI</span>
              </span>
              <div className="w-px h-6 bg-white/20 ml-2" />
              <span className="text-sm font-medium text-gray-400 ml-2">AI Medical Transcription Platform</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6 text-[15px]">
              The modern SaaS platform for Indian MTSOs — replacing legacy transcription platforms and standalone HRMS with AI-powered transcription, QA workflows, and workforce management in a single product.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/nuscript/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-300" />
              </a>
              <a href="mailto:hello@medscribeai.in" className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Mail className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3.5">
              <li><Link to="/Platform" className="text-gray-400 hover:text-white text-[14px] transition-colors">Product Overview</Link></li>
              <li><Link to="/HowItWorks" className="text-gray-400 hover:text-white text-[14px] transition-colors">How It Works</Link></li>
              <li><Link to="/ForMTSOs" className="text-gray-400 hover:text-white text-[14px] transition-colors">For MTSOs</Link></li>
              <li><Link to="/WhyMedScribeAI" className="text-gray-400 hover:text-white text-[14px] transition-colors">Why MedScribeAI</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3.5">
              <li><Link to="/About" className="text-gray-400 hover:text-white text-[14px] transition-colors">About</Link></li>
              <li><Link to="/RequestDemo" className="text-gray-400 hover:text-white text-[14px] transition-colors">Request Demo</Link></li>
              <li><Link to="/PrivacyPolicy" className="text-gray-400 hover:text-white text-[14px] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/TermsOfService" className="text-gray-400 hover:text-white text-[14px] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[13px] font-medium">
            © 2026 NuScript Technologies Pvt Ltd — MedScribeAI. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-mint flex-shrink-0" />
              <span className="text-gray-500 text-[13px] font-medium">ISO 27001 Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-mint flex-shrink-0" />
              <span className="text-gray-500 text-[13px] font-medium">HIPAA Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
