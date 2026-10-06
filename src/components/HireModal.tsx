import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Building2, Send, Sparkles } from 'lucide-react';

interface HireModalProps {
  initialRole?: 'teen' | 'company';
  isOpen: boolean;
  onClose: () => void;
}

export const HireModal: React.FC<HireModalProps> = ({
  initialRole = 'teen',
  isOpen,
  onClose,
}) => {
  const [role, setRole] = useState<'teen' | 'company'>(initialRole);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [orgOrAge, setOrgOrAge] = useState('');
  const [category, setCategory] = useState('social-media');
  const [isDone, setIsDone] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your name');
      return;
    }
    if (!contact.trim() || contact.length < 8) {
      setErrorMsg('Please enter a valid phone number or email address');
      return;
    }
    setErrorMsg('');
    setIsDone(true);
  };

  const resetAndClose = () => {
    setIsDone(false);
    setName('');
    setContact('');
    setOrgOrAge('');
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-[#0f172a] p-6 sm:p-8 shadow-2xl my-8">
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-4 right-4 rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {isDone ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              {role === 'teen' ? 'Welcome to Funngro!' : 'Campaign Inquiry Received!'}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              {role === 'teen'
                ? "We've created your initial Teenlancer profile. A verification link has been sent to your contact details. Start browsing live gigs now!"
                : "Our partnership team will connect within 2 hours to help finalize your project brief, escrow structure, and creator shortlists."}
            </p>
            <button
              type="button"
              onClick={resetAndClose}
              className="mt-4 rounded-xl bg-amber-400 px-6 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300"
            >
              Continue Browsing
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center pb-5 border-b border-slate-800">
              <div className="inline-flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl mb-3">
                <button
                  type="button"
                  onClick={() => setRole('teen')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    role === 'teen' ? 'bg-amber-400 text-slate-950' : 'text-slate-400'
                  }`}
                >
                  Join as Teenlancer
                </button>
                <button
                  type="button"
                  onClick={() => setRole('company')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    role === 'company' ? 'bg-amber-400 text-slate-950' : 'text-slate-400'
                  }`}
                >
                  Hire Gen-Z Talent
                </button>
              </div>

              <h2 className="font-display text-2xl font-bold text-white">
                {role === 'teen' ? 'Start Earning & Learning' : 'Post a Project on Funngro'}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {role === 'teen'
                  ? 'Join 60 Lakh+ teenagers building careers with real company gigs.'
                  : 'Get high-energy UGC creators, beta testers, and designers in 48 hours.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {errorMsg && (
                <div className="rounded-lg bg-rose-500/10 border border-rose-500/30 p-2.5 text-xs text-rose-300">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  {role === 'teen' ? 'Full Name *' : 'Company or Brand Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={role === 'teen' ? 'e.g. Diya Sengupta' : 'e.g. UrbanSprout Media'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 py-2 px-3 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  {role === 'teen' ? 'Phone Number or Email *' : 'Work Email / WhatsApp Contact *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={role === 'teen' ? '9876543210' : 'contact@company.com'}
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 py-2 px-3 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    {role === 'teen' ? 'Age (14–25) *' : 'Industry / Vertical *'}
                  </label>
                  <input
                    type="text"
                    placeholder={role === 'teen' ? '16' : 'D2C / Fintech / EdTech'}
                    value={orgOrAge}
                    onChange={(e) => setOrgOrAge(e.target.value)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 py-2 px-3 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Primary Domain *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 py-2 px-3 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="social-media">UGC & Social Media</option>
                    <option value="testing">App Beta Testing</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="video-editing">Video Editing</option>
                    <option value="campus">Campus Ambassador</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-400 py-3 text-xs font-bold text-slate-950 transition-all hover:bg-amber-300"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{role === 'teen' ? 'Create Free Teen Account' : 'Submit Project Request'}</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500">
                {role === 'teen'
                  ? 'Zero registration fees · Guardian safety compliant'
                  : 'No commitment required · Free campaign consultation'}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
