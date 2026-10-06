import React from 'react';
import { SHARK_INVESTORS } from '../data/funngroData';
import { Tv, Award, Quote, CheckCircle2 } from 'lucide-react';

export const SharkTankShowcase: React.FC = () => {
  return (
    <section id="shark-tank" className="relative overflow-hidden py-16 md:py-24 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-b from-slate-900 to-slate-950 p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Story description */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <Tv className="h-4 w-4" />
                <span>Shark Tank India Season 2</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Backed by India's Top Business Leaders
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                When co-founder <strong className="text-white font-semibold">Payal Jain</strong> (IIM Calcutta alumna) presented Funngro on national television, the Sharks praised the vision of transforming passive teenage screen time into financial literacy and real-world work experience.
              </p>

              <div className="grid grid-cols-2 gap-4 border-y border-slate-800 py-4">
                <div>
                  <div className="text-xs text-slate-400">Television Deal</div>
                  <div className="text-lg font-bold text-amber-400 font-mono">
                    Amit Jain & Namita Thapar
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Total Youth Impact</div>
                  <div className="text-lg font-bold text-white font-mono">
                    60,00,000+ Teenlancers
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Incubated at Afthonia Lab</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>ISO & Guardian Safety Compliant</span>
                </div>
              </div>
            </div>

            {/* Investor quote cards */}
            <div className="lg:col-span-5 space-y-4">
              {SHARK_INVESTORS.map((shark, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 backdrop-blur-sm"
                >
                  <Quote className="h-5 w-5 text-amber-400/60 mb-2" />
                  <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                    "{shark.quote}"
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white">{shark.name}</div>
                      <div className="text-slate-400 text-[11px]">{shark.role}</div>
                    </div>
                    <span className="font-mono text-[10px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                      {shark.deal}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
