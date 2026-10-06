import React from 'react';
import { SUCCESS_STORIES } from '../data/funngroData';
import { Star, ShieldCheck, HeartHandshake, Building2 } from 'lucide-react';

export const SuccessStories: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-slate-800 bg-[#0b0f19]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Real Proof & Human Impact
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stories From India's Youngest Achievers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            How Indian teenagers are turning after-school hobbies into verifiable income and career confidence.
          </p>
        </div>

        {/* 3 Student Case Study Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-slate-700"
            >
              <div>
                {/* Clean unboxed metadata header */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{story.name}</span>
                    <span aria-hidden="true">·</span>
                    <span>Age {story.age}</span>
                    <span aria-hidden="true">·</span>
                    <span>{story.city}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-amber-400 mb-3">
                  {story.role}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <div className="text-[11px] text-slate-500">Verified Payout</div>
                  <div className="font-mono font-bold text-emerald-400 text-sm">
                    {story.earnings}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-500">Completed</div>
                  <div className="font-mono font-bold text-white text-sm">
                    {story.projectsCompleted} Projects
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Parent & Founder Side-by-Side Perspectives */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
              <HeartHandshake className="h-4 w-4" />
              <span>Parent Testimonial</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
              "As a parent, I was hesitant at first about online freelance. But Funngro's guardian approval system and educational framework are remarkable. My 15-year-old daughter now understands the value of hard work and manages her own savings."
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 font-medium">
              — Sunita Sharma, Parent of 10th Grader, Mumbai
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <Building2 className="h-4 w-4" />
              <span>Employer Testimonial</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
              "We needed 60 user-generated video reviews for our consumer app launch across Tier 1 & 2 colleges. Funngro deployed motivated creators within 48 hours, delivering content that outperformed our regular marketing agencies."
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 font-medium">
              — Raghav Goel, Growth Head at D2C Consumer Brand
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
