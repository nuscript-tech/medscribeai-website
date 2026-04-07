import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Platform', path: '/Platform' },
    { name: 'For MTSOs', path: '/ForMTSOs' },
    { name: 'How It Works', path: '/HowItWorks' },
    { name: 'Why Us', path: '/WhyMedScribeAI' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img
                src="/medscribe-logo.png"
                alt="MedScribeAI"
                className="h-8 w-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-7 h-20">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[15px] font-medium text-brand-text hover:text-brand-navy whitespace-nowrap transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a href="https://app.medscribeai.in" className="flex-shrink-0">
                <Button variant="outline" className="text-brand-navy border-gray-200 px-5 rounded-full">
                  Login
                </Button>
              </a>
              <Link to="/RequestDemo" className="flex-shrink-0">
                <Button className="bg-gradient-to-b from-brand to-brand-hover text-white px-5 rounded-full shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/25 transition-all">
                  Request Demo
                  <ArrowRight className="ml-1.5 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-brand-cool-gray"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-navy" />
              ) : (
                <Menu className="w-6 h-6 text-brand-navy" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-20 z-40 lg:hidden">
          <div className="bg-white border-b border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg text-brand-text hover:text-brand-navy font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a href="https://app.medscribeai.in" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full text-brand-navy border-gray-200 rounded-full">
                    Login
                  </Button>
                </a>
                <Link to="/RequestDemo" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-b from-brand to-brand-hover text-white rounded-full mt-3 shadow-lg shadow-brand/20">
                    Request Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}