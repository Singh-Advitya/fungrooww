/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { HowItWorks } from './components/HowItWorks';
import { GigExplorer } from './components/GigExplorer';
import { EarningsCalculator } from './components/EarningsCalculator';
import { ForCompanies } from './components/ForCompanies';
import { SharkTankShowcase } from './components/SharkTankShowcase';
import { SuccessStories } from './components/SuccessStories';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';
import { HireModal } from './components/HireModal';
import { Gig } from './types';

export default function App() {
  const [selectedGig, setSelectedGig] = useState<Gig | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [hireModalRole, setHireModalRole] = useState<'teen' | 'company'>('teen');

  const handleOpenGigDetail = (gig: Gig) => {
    setSelectedGig(gig);
    setIsApplyModalOpen(true);
  };

  const handleOpenJoinModal = (role: 'teen' | 'company' = 'teen') => {
    setHireModalRole(role);
    setIsHireModalOpen(true);
  };

  const handleScrollToGigs = () => {
    const el = document.getElementById('live-gigs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans">
      {/* Strict 3-zone top bar */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      <main className="flex-1">
        {/* Dynamic audience hero */}
        <Hero
          onOpenJoinModal={handleOpenJoinModal}
          onExploreGigs={handleScrollToGigs}
        />

        {/* Quantitative metrics & partner logos */}
        <TrustStats />

        {/* Guided 4-step execution flow */}
        <HowItWorks onOpenJoinModal={handleOpenJoinModal} />

        {/* Live searchable & filterable gigs */}
        <GigExplorer
          onSelectGig={handleOpenGigDetail}
          onOpenJoinModal={handleOpenJoinModal}
        />

        {/* Interactive earnings & savings calculator */}
        <EarningsCalculator onOpenJoinModal={handleOpenJoinModal} />

        {/* Enterprise & startup solutions with campaign estimator */}
        <ForCompanies onOpenHireModal={() => handleOpenJoinModal('company')} />

        {/* Shark Tank India Season 2 feature */}
        <SharkTankShowcase />

        {/* Real proof & student case studies */}
        <SuccessStories />

        {/* Interactive FAQ accordion */}
        <FAQSection />
      </main>

      {/* Quiet, compliant footer */}
      <Footer onOpenJoinModal={handleOpenJoinModal} />

      {/* Gig Brief Inspection & Application Modal */}
      <ApplyModal
        gig={selectedGig}
        isOpen={isApplyModalOpen}
        onClose={() => {
          setIsApplyModalOpen(false);
          setSelectedGig(null);
        }}
      />

      {/* Onboarding & Project Request Modal */}
      <HireModal
        initialRole={hireModalRole}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
      />
    </div>
  );
}
