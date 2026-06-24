'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-lg text-gray-900">MedScribeAI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
              Features
            </a>
            <a href="#proof" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
              Why MedScribeAI
            </a>
            <a href="#security" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
              Security
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary text-sm">
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
            <a
              href="#features"
              className="block text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#proof"
              className="block text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              Why MedScribeAI
            </a>
            <a
              href="#security"
              className="block text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
            >
              Security
            </a>
            <button className="btn-primary w-full text-sm">
              Start Free Trial
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
