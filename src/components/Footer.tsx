import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenJoinModal: (role?: 'teen' | 'company') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenJoinModal }) => {
  return (
    <footer className="border-t border-slate-800 bg-[#070a11] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <a href="#" className="font-display text-2xl font-bold text-white flex items-center gap-1.5">
              <span className="text-amber-400 font-extrabold">funn</span>
              <span className="text-white">gro</span>
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 mb-1.5"></span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed">
              India's smart earning platform empowering teens (ages 14–25) with real-world company projects, financial literacy, and career growth.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              Backed by Shark Tank India Season 2
            </div>
          </div>

          {/* Quick Links for Teens */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              For Teenlancers
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#live-gigs" className="hover:text-amber-400 transition-colors">
                  Browse Live Gigs
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Earnings Calculator
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenJoinModal('teen')}
                  className="text-left hover:text-amber-400 transition-colors"
                >
                  Create Teen Account
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Teen FAQs & Safety
                </a>
              </li>
            </ul>
          </div>

          {/* For Companies */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              For Companies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#companies" className="hover:text-amber-400 transition-colors">
                  Enterprise Solutions
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenJoinModal('company')}
                  className="text-left hover:text-amber-400 transition-colors"
                >
                  Post a Live Project
                </button>
              </li>
              <li>
                <a href="#companies" className="hover:text-amber-400 transition-colors">
                  UGC & Reel Campaigns
                </a>
              </li>
              <li>
                <a href="#companies" className="hover:text-amber-400 transition-colors">
                  Mobile App Beta Testing
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Safety */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Trust & Compliance
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Parental Consent Protocol</span>
              </li>
              <li>
                <span className="text-slate-400">100% Escrow Protected Funds</span>
              </li>
              <li>
                <span className="text-slate-400">Zero Commission on Teen Earners</span>
              </li>
              <li>
                <span className="text-slate-400">Incubated at Afthonia Lab</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Funngro (GrowTech Innovations Pvt Ltd). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#faq" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#faq" className="hover:text-slate-300">Terms of Service</a>
            <a href="#faq" className="hover:text-slate-300">Parental Safety Charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
