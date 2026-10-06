import React, { useState } from 'react';
import { Building2, Sparkles, Zap, Shield, Users, ArrowRight, Check } from 'lucide-react';

interface ForCompaniesProps {
  onOpenHireModal: () => void;
}

export const ForCompanies: React.FC<ForCompaniesProps> = ({ onOpenHireModal }) => {
  const [selectedProjectType, setSelectedProjectType] = useState<'ugc' | 'testing' | 'design' | 'campus'>('ugc');
  const [volume, setVolume] = useState<number>(10);

  const quoteDetails = {
    ugc: {
      name: 'UGC Reels & TikTok-Style Video Creation',
      unit: 'Video Creators',
      basePrice: 1200,
      turnaround: '48 – 72 Hours',
      impact: '100% native Gen-Z authenticity for Instagram & YouTube Shorts',
    },
    testing: {
      name: 'Mobile App Beta Testing & UX Audits',
      unit: 'Device Testers',
      basePrice: 800,
      turnaround: '24 – 48 Hours',
      impact: 'Real-world testing across 50+ diverse Android and iOS hardware configurations',
    },
    design: {
      name: 'Social Media Posts & Creative Assets',
      unit: 'Design Assets',
      basePrice: 950,
      turnaround: '3 – 5 Days',
      impact: 'Fresh, trend-aware graphics tailored for youth audiences',
    },
    campus: {
      name: 'Campus Ambassador & Student Activation',
      unit: 'Campus Champions',
      basePrice: 1500,
      turnaround: '5 – 7 Days',
      impact: 'Direct viral penetration across high school & college student groups',
    },
  }[selectedProjectType];

  const estimatedBudget = volume * quoteDetails.basePrice;

  return (
    <section id="companies" className="border-t border-slate-800 bg-slate-900/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Enterprise & Startup Solutions
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why 5,000+ Brands Scale With Funngro
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Tap into India's largest curated network of 60 Lakh+ tech-savvy Gen-Z creators, testers, and brand ambassadors.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenHireModal}
            className="self-start md:self-auto rounded-xl bg-emerald-400 px-5 py-2.5 text-xs font-bold text-slate-950 transition-all hover:bg-emerald-300"
          >
            Post a Project (Free)
          </button>
        </div>

        {/* Bento Grid layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1: Marquee 2-col span */}
          <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/90 p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Unmatched Velocity
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">
                Mobilize 50+ Creators in Under 48 Hours
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-xl">
                Traditional agencies take weeks to brief, negotiate, and staff. Funngro's automated matching algorithm connects your brief with verified, highly motivated youth in minutes.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5">
                  <span className="font-display text-2xl font-bold text-white font-mono tabular-nums">48 hrs</span>
                  <p className="text-xs text-slate-400 mt-0.5">Average delivery window</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5">
                  <span className="font-display text-2xl font-bold text-white font-mono tabular-nums">1/5th</span>
                  <p className="text-xs text-slate-400 mt-0.5">Traditional agency cost</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5">
                  <span className="font-display text-2xl font-bold text-white font-mono tabular-nums">98.4%</span>
                  <p className="text-xs text-slate-400 mt-0.5">Milestone approval rate</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Backed by Shark Tank India</span>
              <span className="text-emerald-400 font-medium">100% Money-Back Escrow Guarantee</span>
            </div>
          </div>

          {/* Bento Card 2: 1-col Authentic UGC */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                True Gen-Z Voice
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-white">
                User-Generated Content That Actually Converts
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Audiences scroll past polished corporate ads. Funngro creators produce raw, relatable reels that drive real engagement, app installs, and social buzz.
              </p>
            </div>
            <div className="mt-6 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Zero copyright friction (full commercial rights)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Multi-language & regional coverage across India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Scope & Price Estimator for Companies */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="flex-1 space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Instant Project Calculator for Employers
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                  Configure Your Campaign Scope
                </h3>
              </div>

              {/* Service Tabs */}
              <div className="flex flex-wrap gap-2">
                {(['ugc', 'testing', 'design', 'campus'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedProjectType(type)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                      selectedProjectType === type
                        ? 'bg-emerald-400 text-slate-950'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {type.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Quantity selector */}
              <div>
                <div className="flex items-center justify-between text-xs font-medium text-slate-300 mb-2">
                  <span>Deliverables Count:</span>
                  <span className="font-mono text-emerald-400 font-bold text-sm">
                    {volume} {quoteDetails.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              <div className="text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Deliverable focus:</span> {quoteDetails.impact}
              </div>
            </div>

            {/* Price Output Card */}
            <div className="w-full lg:w-80 rounded-xl border border-emerald-500/30 bg-slate-900/90 p-6 space-y-4 text-center lg:text-left">
              <div>
                <div className="text-xs text-slate-400">Estimated Project Escrow</div>
                <div className="font-display text-3xl font-extrabold text-white font-mono tabular-nums mt-1">
                  ₹{estimatedBudget.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-emerald-400 mt-0.5">
                  Turnaround: {quoteDetails.turnaround}
                </div>
              </div>

              <div className="text-xs text-slate-400 border-t border-slate-800 pt-3">
                Pay only when milestones are delivered and approved.
              </div>

              <button
                type="button"
                onClick={onOpenHireModal}
                className="w-full rounded-lg bg-emerald-400 py-3 text-xs font-bold text-slate-950 transition-all hover:bg-emerald-300"
              >
                Launch This Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
