import React, { useState } from 'react';
import { Gig } from '../types';
import { X, CheckCircle2, ShieldCheck, Clock, Award, Send } from 'lucide-react';

interface ApplyModalProps {
  gig: Gig | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ gig, isOpen, onClose }) => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantAge, setApplicantAge] = useState('16');
  const [applicantContact, setApplicantContact] = useState('');
  const [pitchNote, setPitchNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen || !gig) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!applicantContact.trim() || applicantContact.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number or email');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setApplicantName('');
    setApplicantContact('');
    setPitchNote('');
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-800 bg-[#0f172a] p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-4 right-4 rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              Application Submitted Successfully!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Your profile and pitch have been sent to <strong className="text-white">{gig.company}</strong>. The company will review your submission within 24 hours. Check your SMS / email for the invite link.
            </p>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-400 max-w-md mx-auto">
              <span className="font-semibold text-amber-400">Project:</span> {gig.title} <br />
              <span className="font-semibold text-emerald-400">Escrow Reserved:</span> ₹{gig.payout.toLocaleString('en-IN')}
            </div>
            <button
              type="button"
              onClick={resetAndClose}
              className="mt-4 rounded-xl bg-amber-400 px-6 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300"
            >
              Back to Live Gigs
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                <span className="font-semibold text-amber-400">{gig.company}</span>
                <span aria-hidden="true">·</span>
                <span>{gig.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{gig.level}</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                {gig.title}
              </h2>
            </div>

            {/* Project Overview Details */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-b border-slate-800 pb-4 text-xs">
              <div className="rounded-lg bg-slate-900/60 p-2.5">
                <span className="text-slate-500 block text-[11px]">Guaranteed Payout</span>
                <span className="font-mono text-base font-bold text-emerald-400">
                  ₹{gig.payout.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="rounded-lg bg-slate-900/60 p-2.5">
                <span className="text-slate-500 block text-[11px]">Turnaround Time</span>
                <span className="font-mono text-sm font-semibold text-white">
                  {gig.duration}
                </span>
              </div>
              <div className="rounded-lg bg-slate-900/60 p-2.5 col-span-2 sm:col-span-1">
                <span className="text-slate-500 block text-[11px]">Open Slots</span>
                <span className="font-mono text-sm font-semibold text-amber-400">
                  {gig.spotsLeft} Teenlancers Needed
                </span>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="mt-4 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Deliverables & Requirements
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {gig.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick 1-Click Application Form */}
            <form onSubmit={handleSubmit} className="mt-6 border-t border-slate-800 pt-5 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Quick Apply (Zero Resume Needed)
              </h4>

              {errorMsg && (
                <div className="rounded-lg bg-rose-500/10 border border-rose-500/30 p-2.5 text-xs text-rose-300">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 py-2 px-3 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Age *
                  </label>
                  <select
                    value={applicantAge}
                    onChange={(e) => setApplicantAge(e.target.value)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 py-2 px-3 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    {[14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((age) => (
                      <option key={age} value={age}>
                        {age} years old
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Mobile Number or Email (for project invite) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 9876543210 or name@gmail.com"
                  value={applicantContact}
                  onChange={(e) => setApplicantContact(e.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 py-2 px-3 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Why are you excited for this gig? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention any similar work, phone model, or tools you use..."
                  value={pitchNote}
                  onChange={(e) => setPitchNote(e.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 py-2 px-3 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Escrow locked payout guaranteed</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 transition-all hover:bg-amber-300"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
