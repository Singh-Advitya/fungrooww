import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, TrendingUp, Wallet, Star } from 'lucide-react';
import { AudienceRole } from '../types';

interface HeroProps {
  onOpenJoinModal: (role: 'teen' | 'company') => void;
  onExploreGigs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal, onExploreGigs }) => {
  const [activeRole, setActiveRole] = useState<AudienceRole>('teen');

  // Interactive mockup state inside hero preview
  const [simulatedEarned, setSimulatedEarned] = useState(4850);
  const [completedCount, setCompletedCount] = useState(3);
  const [justSimulated, setJustSimulated] = useState(false);

  const handleSimulateGig = () => {
    setSimulatedEarned((prev) => prev + 1500);
    setCompletedCount((prev) => prev + 1);
    setJustSimulated(true);
    setTimeout(() => setJustSimulated(false), 2200);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Background radial ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.12),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Audience perspective interactive segmented control */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center rounded-xl border border-slate-800 bg-slate-900/90 p-1 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setActiveRole('teen')}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all whitespace-nowrap ${
                activeRole === 'teen'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              For Teenlancers (14–25)
            </button>
            <button
              type="button"
              onClick={() => setActiveRole('company')}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all whitespace-nowrap ${
                activeRole === 'company'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              For Companies & Startups
            </button>
            <button
              type="button"
              onClick={() => setActiveRole('parent')}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all whitespace-nowrap ${
                activeRole === 'parent'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              For Parents & Guardians
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Unboxed clean metadata kicker */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-amber-400 mb-4 tracking-wide uppercase">
              <span className="inline-flex items-center gap-1.5 font-bold">
                <Sparkles className="h-3.5 w-3.5" />
                Shark Tank India S2 Backed
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Over 60 Lakh Registered Youth</span>
            </div>

            <div className="transition-all duration-300 ease-out">
              {activeRole === 'teen' && (
                <div key="teen-copy" className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-display leading-[1.08] text-balance">
                    Earn your first income. <br />
                    <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400 bg-clip-text text-transparent">
                      Learn real skills.
                    </span>
                  </h1>
                  <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Work on paid live projects for 5,000+ top companies and hypergrowth startups. Design graphics, test new apps, create viral content, and build a verified career portfolio before finishing college.
                  </p>
                </div>
              )}

              {activeRole === 'company' && (
                <div key="company-copy" className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-display leading-[1.08] text-balance">
                    Hire agile Gen-Z talent <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-300 bg-clip-text text-transparent">
                      in under 48 hours.
                    </span>
                  </h1>
                  <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Get authentic user feedback, UGC video reels, design assets, and beta testing from energetic digital natives. Milestone escrow guarantee with zero agency overhead.
                  </p>
                </div>
              )}

              {activeRole === 'parent' && (
                <div key="parent-copy" className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-display leading-[1.08] text-balance">
                    Financial independence <br />
                    <span className="bg-gradient-to-r from-sky-400 via-indigo-200 to-amber-300 bg-clip-text text-transparent">
                      with guardian safety.
                    </span>
                  </h1>
                  <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Turn your teen’s screen time into productive life skills. Funngro ensures safe, verified brand projects with parental consent, structured mentorship, and financial literacy.
                  </p>
                </div>
              )}
            </div>

            {/* Key trust bullets */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Zero registration fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% Escrow protected payouts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Official work certificate</span>
              </div>
            </div>

            {/* CTA action bar */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {activeRole === 'company' ? (
                <button
                  type="button"
                  onClick={() => onOpenJoinModal('company')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20 whitespace-nowrap"
                >
                  <span>Post a Project (Free)</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onOpenJoinModal('teen')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20 whitespace-nowrap"
                >
                  <span>Start Earning as Teenlancer</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}

              <button
                type="button"
                onClick={onExploreGigs}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-800 whitespace-nowrap"
              >
                <span>Explore Live Gigs</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive High-Fidelity UI Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl shadow-black/60 backdrop-blur-md">
              {/* Top status bar inside mockup */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-semibold text-slate-300">Funngro Teen Dashboard</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400">
                  <Star className="h-3 w-3 fill-amber-400" />
                  <span>4.9 Star Rating</span>
                </div>
              </div>

              {/* Wallet Summary Card */}
              <div className="mt-4 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-950 to-slate-900/80 p-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Wallet className="h-4 w-4 text-amber-400" />
                    <span>Verified Teenlancer Balance</span>
                  </div>
                  <span className="font-mono text-emerald-400 font-medium">Direct Bank Transfer</span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="font-display text-3xl font-extrabold tracking-tight text-white font-mono tabular-nums">
                    ₹{simulatedEarned.toLocaleString('en-IN')}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-emerald-400">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>{completedCount} Gigs Completed</span>
                  </div>
                </div>

                {justSimulated && (
                  <div
                    className="mt-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2 text-center text-xs font-medium text-emerald-300 animate-in fade-in zoom-in-95 duration-200"
                  >
                    🎉 ₹1,500 Escrow Released! Transferred to bank account.
                  </div>
                )}
              </div>

              {/* Live Active Gig In Progress */}
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Current Live Assignment</span>
                  <span className="font-medium text-amber-400">Milestone 2 of 2</span>
                </div>

                <div className="rounded-xl border border-slate-800/90 bg-slate-950/60 p-3.5 transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs text-slate-400">Brand: FitKrate Nutrition</div>
                      <div className="font-semibold text-sm text-white mt-0.5">
                        Instagram UGC Reel Creation
                      </div>
                      <div className="mt-2 flex items-center gap-3 text-xs text-slate-400 font-mono">
                        <span>Payout: ₹1,500</span>
                        <span>·</span>
                        <span className="text-emerald-400">Escrow Locked</span>
                      </div>
                    </div>
                    <span className="rounded bg-amber-400/10 px-2 py-0.5 text-[11px] font-semibold text-amber-300">
                      In Review
                    </span>
                  </div>

                  {/* Interactive Button */}
                  <button
                    type="button"
                    onClick={handleSimulateGig}
                    className="mt-3 w-full rounded-lg bg-slate-800 py-2 text-xs font-medium text-slate-200 transition-colors hover:bg-slate-700 hover:text-white"
                  >
                    Simulate Client Approval & Instant Payout (+₹1,500)
                  </button>
                </div>

                {/* Quick live feed snippet */}
                <div className="rounded-lg border border-slate-800/60 bg-slate-950/40 p-2.5 text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="truncate">Tanya K. (18) completed App UX Bug Hunting</span>
                  <span className="text-emerald-400 font-mono shrink-0 ml-2">+₹3,200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
