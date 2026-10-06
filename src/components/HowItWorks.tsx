import React from 'react';
import { UserCheck, FileSearch, CheckCircle, Wallet, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenJoinModal: (role: 'teen') => void;
}

const STEPS = [
  {
    step: '01',
    title: 'Create Verified Profile',
    desc: 'Register in 2 minutes. Select your skill passions (design, video editing, social media, beta testing). For teens under 18, parental confirmation ensures full legal safety.',
    badge: 'Quick Onboarding',
  },
  {
    step: '02',
    title: 'Pick Live Brand Briefs',
    desc: 'Explore real project briefs from verified startups and enterprises. Each project lists explicit deliverables, deadlines, and guaranteed escrow payouts.',
    badge: '100% Escrow Funded',
  },
  {
    step: '03',
    title: 'Guided Milestone Execution',
    desc: 'Work on your project with structured checkpoints, clear submission templates, and feedback iterations directly from company mentors.',
    badge: 'Real Mentorship',
  },
  {
    step: '04',
    title: 'Instant Payout & Certificate',
    desc: 'Once approved, your funds are released immediately to your bank account or registered UPI. Receive an official certificate of work experience for your CV.',
    badge: 'Resume Boost',
  },
];

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenJoinModal }) => {
  return (
    <section id="teenlancers" className="py-16 md:py-24 border-t border-slate-800 bg-[#0b0f19]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Guided Execution Engine
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Funngro Turns Passion Into Earning
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A safe, transparent, and structured platform designed so beginners can deliver professional outcomes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-slate-700 hover:bg-slate-900/90"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-extrabold text-amber-400">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                <span>Verified milestone standard</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onOpenJoinModal('teen')}
            className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-xs font-bold text-slate-950 transition-all hover:bg-amber-300 shadow-lg shadow-amber-400/10"
          >
            <span>Join 60 Lakh+ Teenlancers Today</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
