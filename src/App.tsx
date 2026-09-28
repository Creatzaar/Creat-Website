/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView, Campaign, BlogPost } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RestaurantsView } from './components/RestaurantsView';
import { CreatorsView } from './components/CreatorsView';
import { FaqView } from './components/FaqView';
import { BlogView } from './components/BlogView';
import { StrategyCallModal } from './components/StrategyCallModal';
import { CreatorRegisterModal } from './components/CreatorRegisterModal';
import { ApplyCampaignModal } from './components/ApplyCampaignModal';
import { AboutModal } from './components/AboutModal';
import { ArticleModal } from './components/ArticleModal';
import { PrivacyPolicyView } from './components/PrivacyPolicyView';
import { TermsConditionsView } from './components/TermsConditionsView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('restaurants');
  const [isStrategyCallOpen, setIsStrategyCallOpen] = useState(false);
  const [isCreatorRegisterOpen, setIsCreatorRegisterOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Sync with window.location pathname on initial load & popstate
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace(/^\/+/, '').toLowerCase();
      if (path === 'creators') setCurrentPage('creators');
      else if (path === 'faq') setCurrentPage('faq');
      else if (path === 'blog') setCurrentPage('blog');
      else if (path === 'privacy-policy') setCurrentPage('privacy-policy');
      else if (path === 'terms-and-conditions') setCurrentPage('terms-and-conditions');
      else if (path === 'about') setIsAboutOpen(true);
      else setCurrentPage('restaurants');
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      const url = page === 'restaurants' ? '/' : `/${page}`;
      if (window.location.pathname !== url) {
        window.history.pushState({ page }, '', url);
      }
    } catch {
      // ignore
    }
  };

  const handleNavigateToSection = (page: PageView, sectionId: string) => {
    if (currentPage !== page) {
      setCurrentPage(page);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#080d1a] text-[#f8fafc] flex flex-col font-sans selection:bg-[#a3e635] selection:text-[#080d1a]">
      
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenStrategyCall={() => setIsStrategyCallOpen(true)}
        onOpenCreatorRegister={() => setIsCreatorRegisterOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'restaurants' && (
          <RestaurantsView
            onNavigate={handleNavigate}
            onOpenStrategyCall={() => setIsStrategyCallOpen(true)}
          />
        )}

        {currentPage === 'creators' && (
          <CreatorsView
            onNavigate={handleNavigate}
            onOpenCreatorRegister={() => setIsCreatorRegisterOpen(true)}
            onSelectCampaign={() => setIsCreatorRegisterOpen(true)}
          />
        )}

        {currentPage === 'faq' && (
          <FaqView
            onNavigate={handleNavigate}
            onOpenStrategyCall={() => setIsStrategyCallOpen(true)}
            onOpenCreatorRegister={() => setIsCreatorRegisterOpen(true)}
          />
        )}

        {currentPage === 'blog' && (
          <BlogView
            onNavigate={handleNavigate}
            onSelectPost={(post) => setSelectedPost(post)}
            onOpenStrategyCall={() => setIsStrategyCallOpen(true)}
            onOpenCreatorRegister={() => setIsCreatorRegisterOpen(true)}
          />
        )}

        {currentPage === 'privacy-policy' && (
          <PrivacyPolicyView
            onNavigate={handleNavigate}
            onOpenStrategyCall={() => setIsStrategyCallOpen(true)}
          />
        )}

        {currentPage === 'terms-and-conditions' && (
          <TermsConditionsView
            onNavigate={handleNavigate}
            onOpenStrategyCall={() => setIsStrategyCallOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onNavigateToSection={handleNavigateToSection}
        onOpenStrategyCall={() => setIsStrategyCallOpen(true)}
        onOpenCreatorRegister={() => setIsCreatorRegisterOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
      />

      {/* Modals */}
      <StrategyCallModal
        isOpen={isStrategyCallOpen}
        onClose={() => setIsStrategyCallOpen(false)}
      />

      <CreatorRegisterModal
        isOpen={isCreatorRegisterOpen}
        onClose={() => setIsCreatorRegisterOpen(false)}
      />

      <ApplyCampaignModal
        campaign={selectedCampaign}
        isOpen={!!selectedCampaign}
        onClose={() => setSelectedCampaign(null)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenStrategyCall={() => setIsStrategyCallOpen(true)}
        onOpenCreatorRegister={() => setIsCreatorRegisterOpen(true)}
      />

      <ArticleModal
        post={selectedPost}
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
        onOpenStrategyCall={() => setIsStrategyCallOpen(true)}
        onOpenCreatorRegister={() => setIsCreatorRegisterOpen(true)}
      />

    </div>
  );
}
