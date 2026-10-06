import React from 'react';
import { TRUST_METRICS, COMPANY_LOGOS } from '../data/funngroData';
import { Award, ShieldAlert, Check } from 'lucide-react';

export const TrustStats: React.FC = () => {
  return (
    <section className="border-y border-slate-800/80 bg-slate-900/40 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Quantitative Rigor Stats Row */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {TRUST_METRICS.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col border-l border-slate-800 pl-4 sm:pl-6 first:border-l-0 md:first:border-l"
            >
              <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono tabular-nums">
                {item.value}
              </span>
              <span className="mt-1 text-sm font-semibold text-slate-200">
                {item.label}
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                {item.unit}
              </span>
            </div>
          ))}
        </div>

        {/* Company Partner Wall */}
        <div className="mt-12 pt-8 border-t border-slate-800/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="shrink-0 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Trusted by 5,000+ forward-thinking brands
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3">
              {COMPANY_LOGOS.map((brand, i) => (
                <span
                  key={i}
                  className="font-display text-sm font-bold tracking-wider text-slate-400 hover:text-white transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
