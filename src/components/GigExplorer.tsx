import React, { useState, useMemo } from 'react';
import { LIVE_GIGS } from '../data/funngroData';
import { Gig, GigCategory } from '../types';
import { Search, Filter, Clock, Users, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface GigExplorerProps {
  onSelectGig: (gig: Gig) => void;
  onOpenJoinModal: (role: 'teen') => void;
}

const CATEGORIES: { id: GigCategory; label: string }[] = [
  { id: 'all', label: 'All Opportunities' },
  { id: 'social-media', label: 'Social Media & UGC' },
  { id: 'testing', label: 'App & Game Testing' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'video-editing', label: 'Video Editing' },
  { id: 'content', label: 'Content Writing' },
  { id: 'ai-data', label: 'AI & Data Tasks' },
  { id: 'campus', label: 'Campus Outreach' },
];

export const GigExplorer: React.FC<GigExplorerProps> = ({ onSelectGig, onOpenJoinModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<GigCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredGigs = useMemo(() => {
    return LIVE_GIGS.filter((gig) => {
      const matchesCategory = selectedCategory === 'all' || gig.category === selectedCategory;
      const matchesSearch =
        gig.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gig.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gig.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesLevel =
        selectedLevel === 'all' || gig.level.toLowerCase().includes(selectedLevel.toLowerCase());

      return matchesCategory && matchesSearch && matchesLevel;
    });
  }, [selectedCategory, searchQuery, selectedLevel]);

  return (
    <section id="live-gigs" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Live Company Projects
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Browse Available Teenlancer Gigs
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Real companies, structured project scopes, and guaranteed payouts locked in escrow. Apply in seconds.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{filteredGigs.length} Active Gigs Open Now</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-8 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          {/* Category Tabs (Segmented Button Controls) */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Level Filters */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search gigs or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="rounded-xl border border-slate-800 bg-slate-900/90 py-2 px-3 text-xs text-slate-300 focus:border-amber-400 focus:outline-none"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner Friendly</option>
              <option value="intermediate">Intermediate</option>
            </select>
          </div>
        </div>

        {/* Gig Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGigs.map((gig) => (
            <div
              key={gig.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-black/40"
            >
              <div>
                {/* Clean unboxed metadata header */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-300">{gig.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-400">{gig.categoryLabel}</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-500">{gig.duration}</span>
                </div>

                {/* Gig Title */}
                <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {gig.title}
                </h3>

                {/* Brief description */}
                <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {gig.description}
                </p>

                {/* Unboxed skills tags with typographic separators */}
                <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400">
                  {gig.tags.map((tag, idx) => (
                    <span key={idx} className="bg-slate-800/80 rounded px-2 py-0.5 text-slate-300">
                      {tag}
                    </span>
                  ))}
                  <span className="text-slate-500">·</span>
                  <span className="text-emerald-400 font-medium">{gig.level}</span>
                </div>
              </div>

              {/* Card Footer: Payout & Primary Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider font-mono">
                    Guaranteed Payout
                  </div>
                  <div className="font-display text-xl font-extrabold text-white font-mono tabular-nums">
                    ₹{gig.payout.toLocaleString('en-IN')}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectGig(gig)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3.5 py-2 text-xs font-semibold text-white transition-all hover:bg-amber-400 hover:text-slate-950 whitespace-nowrap"
                >
                  <span>View Brief</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredGigs.length === 0 && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-12 text-center">
            <p className="text-slate-400 text-sm">No gigs found matching your query.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setSelectedLevel('all');
              }}
              className="mt-4 rounded-lg bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner for Teenlancers */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-gradient-to-r from-amber-500/10 via-slate-900 to-emerald-500/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display text-xl font-bold text-white">
              Want personalized gigs sent directly to your phone?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Create your profile in 2 minutes, get your skills verified, and receive automated invites from top brands.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenJoinModal('teen')}
            className="shrink-0 rounded-xl bg-amber-400 px-6 py-3 text-xs font-bold text-slate-950 transition-all hover:bg-amber-300 whitespace-nowrap"
          >
            Create Teenlancer Profile
          </button>
        </div>
      </div>
    </section>
  );
};
