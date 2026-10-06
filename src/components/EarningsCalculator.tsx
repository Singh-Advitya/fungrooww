import React, { useState, useMemo } from 'react';
import { Calculator, Award, Briefcase, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

interface EarningsCalculatorProps {
  onOpenJoinModal: (role: 'teen') => void;
}

const SKILL_RATES: Record<string, { label: string; basePerHour: number }> = {
  social: { label: 'Social Media & UGC Reels', basePerHour: 350 },
  design: { label: 'Graphic & UI Design', basePerHour: 450 },
  testing: { label: 'App & QA Testing', basePerHour: 380 },
  video: { label: 'Short-Form Video Editing', basePerHour: 500 },
  content: { label: 'Content Writing & Blogs', basePerHour: 320 },
  data: { label: 'AI Labeling & Data Tasks', basePerHour: 300 },
};

const EXP_TIERS = [
  { id: 'beginner', label: 'First-Time Earner', multiplier: 1.0 },
  { id: 'intermediate', label: 'Completed 3+ Gigs', multiplier: 1.35 },
  { id: 'pro', label: 'Verified Top Teenlancer', multiplier: 1.8 },
];

export const EarningsCalculator: React.FC<EarningsCalculatorProps> = ({ onOpenJoinModal }) => {
  const [weeklyHours, setWeeklyHours] = useState<number>(8);
  const [selectedSkill, setSelectedSkill] = useState<string>('social');
  const [expTier, setExpTier] = useState<string>('beginner');

  const stats = useMemo(() => {
    const skillData = SKILL_RATES[selectedSkill];
    const tierData = EXP_TIERS.find((t) => t.id === expTier) || EXP_TIERS[0];

    const hourlyRate = Math.round(skillData.basePerHour * tierData.multiplier);
    const weeklyEarnings = hourlyRate * weeklyHours;
    const monthlyEarnings = weeklyEarnings * 4;
    const annualSavings = monthlyEarnings * 12;
    const estimatedProjectsPerMonth = Math.max(1, Math.round(weeklyHours * 0.4));
    const annualCertificates = estimatedProjectsPerMonth * 12;

    return {
      monthlyEarnings,
      annualSavings,
      estimatedProjectsPerMonth,
      annualCertificates,
      hourlyRate,
    };
  }, [weeklyHours, selectedSkill, expTier]);

  return (
    <section id="calculator" className="border-t border-slate-800 bg-slate-900/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Interactive Financial Planning
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate Your Teenlancer Earning Potential
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            See how spending 5–10 weekend hours on live company projects translates into real income, practical job experience, and official credentials.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Form */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-6">
            {/* Hours Slider */}
            <div>
              <div className="flex items-center justify-between text-sm">
                <label className="font-semibold text-slate-200">
                  Hours committed per week
                </label>
                <span className="font-mono text-base font-bold text-amber-400 tabular-nums">
                  {weeklyHours} hrs / week
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="24"
                step="2"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(Number(e.target.value))}
                className="mt-3 w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>4 hrs (Weekend casual)</span>
                <span>12 hrs (Balanced student)</span>
                <span>24 hrs (Full holiday grind)</span>
              </div>
            </div>

            {/* Skill Stream Selector */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Primary Skill Interest
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.entries(SKILL_RATES).map(([key, value]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedSkill(key)}
                    className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                      selectedSkill === key
                        ? 'border-amber-400 bg-amber-400/10 text-white font-semibold'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div>{value.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Level Selector */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Experience Status
              </label>
              <div className="grid grid-cols-3 gap-2">
                {EXP_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setExpTier(tier.id)}
                    className={`p-2.5 rounded-xl text-center border text-xs transition-all ${
                      expTier === tier.id
                        ? 'border-emerald-400 bg-emerald-400/10 text-white font-semibold'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 rounded-2xl border border-amber-400/30 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-semibold">
                Estimated Monthly Income
              </span>
              <div className="mt-1 font-display text-4xl sm:text-5xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                ₹{stats.monthlyEarnings.toLocaleString('en-IN')}
                <span className="text-sm font-sans font-normal text-slate-400"> / month</span>
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Transferred directly to student bank account / UPI upon milestone completion.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-y border-slate-800 py-4">
              <div>
                <div className="text-[11px] text-slate-400">Annual Earning Potential</div>
                <div className="font-display text-xl font-bold text-emerald-400 font-mono tabular-nums mt-0.5">
                  ₹{stats.annualSavings.toLocaleString('en-IN')}
                </div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400">Real Projects Delivered</div>
                <div className="font-display text-xl font-bold text-white font-mono tabular-nums mt-0.5">
                  ~{stats.estimatedProjectsPerMonth} / month
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Earn up to {stats.annualCertificates} verifiable company experience certificates</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% Escrow protected, zero commission charged to teens</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenJoinModal('teen')}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-400 py-3.5 text-xs font-bold text-slate-950 transition-all hover:bg-amber-300"
            >
              <span>Unlock Live Gigs Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
