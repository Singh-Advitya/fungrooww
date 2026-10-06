import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: (role?: 'teen' | 'company') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0b0f19]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single element brand wordmark */}
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-90 font-display flex items-center gap-1.5"
        >
          <span className="text-amber-400 font-extrabold">funn</span>
          <span className="text-white">gro</span>
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 mb-2"></span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a
            href="#teenlancers"
            className="transition-colors hover:text-white"
          >
            Teenlancers
          </a>
          <a
            href="#companies"
            className="transition-colors hover:text-white"
          >
            For Companies
          </a>
          <a
            href="#live-gigs"
            className="transition-colors hover:text-white"
          >
            Live Gigs
          </a>
          <a
            href="#calculator"
            className="transition-colors hover:text-white"
          >
            Earnings Calc
          </a>
          <a
            href="#shark-tank"
            className="transition-colors hover:text-white"
          >
            Shark Tank
          </a>
          <a
            href="#faq"
            className="transition-colors hover:text-white"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden items-center gap-3 sm:flex">
          <button
            type="button"
            onClick={() => onOpenJoinModal('company')}
            className="rounded-lg px-3.5 py-2 text-xs font-semibold text-slate-300 transition-colors hover:text-white hover:bg-slate-800/80 whitespace-nowrap shrink-0"
          >
            Hire Talent
          </button>
          <button
            type="button"
            onClick={() => onOpenJoinModal('teen')}
            className="group flex items-center gap-1.5 rounded-lg bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20 whitespace-nowrap shrink-0"
          >
            <span>Start Earning</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drop menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-[#0b0f19] px-4 pt-2 pb-6 md:hidden">
          <div className="flex flex-col space-y-3 pt-2 text-base font-medium text-slate-300">
            <a
              href="#teenlancers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-slate-800 hover:text-white"
            >
              Teenlancers
            </a>
            <a
              href="#companies"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-slate-800 hover:text-white"
            >
              For Companies
            </a>
            <a
              href="#live-gigs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-slate-800 hover:text-white"
            >
              Live Gigs
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-slate-800 hover:text-white"
            >
              Earnings Calculator
            </a>
            <a
              href="#shark-tank"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-slate-800 hover:text-white"
            >
              Shark Tank India
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 rounded-md hover:bg-slate-800 hover:text-white"
            >
              FAQ
            </a>
            <div className="pt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal('teen');
                }}
                className="w-full rounded-lg bg-amber-400 py-2.5 text-center text-sm font-bold text-slate-950 hover:bg-amber-300"
              >
                Start Earning Today
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal('company');
                }}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 py-2.5 text-center text-sm font-medium text-slate-200 hover:bg-slate-800"
              >
                Hire Teen Talent
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
