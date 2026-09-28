import React from 'react';
import { PageView } from '../types';
import { Instagram, Linkedin, Youtube, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onNavigateToSection?: (page: PageView, sectionId: string) => void;
  onOpenStrategyCall: () => void;
  onOpenCreatorRegister: () => void;
  onOpenAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onNavigateToSection,
  onOpenStrategyCall,
  onOpenCreatorRegister,
  onOpenAbout
}) => {
  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: PageView,
    sectionId: string
  ) => {
    e.preventDefault();
    if (onNavigateToSection) {
      onNavigateToSection(page, sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        handleNav(page);
      }
    }
  };

  return (
    <footer className="bg-[#060a14] border-t border-[#1e2d4d] text-[#94a3b8] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#1e2d4d]">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('restaurants')}
              className="flex items-center text-left select-none cursor-pointer focus:outline-none"
              aria-label="Creatzaar"
            >
              <img
                src="/creatzaar-logo.png"
                alt="Creatzaar"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </button>
            
            <p className="text-base text-[#f8fafc] font-semibold max-w-sm">
              Restaurants Get Customers. Creators Get Cashback.
            </p>
            
            <p className="text-sm text-[#94a3b8] max-w-sm leading-relaxed">
              Creatzaar connects passionate food & lifestyle creators with high-growth restaurants. Turn genuine dining experiences into viral Instagram Reels and trackable customer footfall.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0f172a] border border-[#1e2d4d] flex items-center justify-center text-[#94a3b8] hover:text-[#a3e635] hover:border-[#a3e635]/40 shadow-sm transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0f172a] border border-[#1e2d4d] flex items-center justify-center text-[#94a3b8] hover:text-[#a3e635] hover:border-[#a3e635]/40 shadow-sm transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#0f172a] border border-[#1e2d4d] flex items-center justify-center text-[#94a3b8] hover:text-[#a3e635] hover:border-[#a3e635]/40 shadow-sm transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* For Restaurants */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f8fafc]">
              For Restaurants
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#restaurant-and-cafes"
                  onClick={(e) => handleSectionClick(e, 'restaurants', 'restaurant-and-cafes')}
                  className="hover:text-white transition-colors text-[#94a3b8] text-left cursor-pointer block"
                >
                  Restaurant &amp; Cafés
                </a>
              </li>
              <li>
                <a
                  href="#saving-model"
                  onClick={(e) => handleSectionClick(e, 'restaurants', 'saving-model')}
                  className="hover:text-white transition-colors text-[#94a3b8] text-left cursor-pointer block"
                >
                  Saving Model
                </a>
              </li>
              <li>
                <a
                  href="#creatzaar-prive"
                  onClick={(e) => handleSectionClick(e, 'restaurants', 'creatzaar-prive')}
                  className="hover:text-white transition-colors text-[#94a3b8] text-left cursor-pointer block"
                >
                  Creatzaar Privé
                </a>
              </li>
              <li>
                <a
                  href="#ai-ugc"
                  onClick={(e) => handleSectionClick(e, 'restaurants', 'ai-ugc')}
                  className="hover:text-white transition-colors text-[#94a3b8] text-left cursor-pointer block"
                >
                  AI UGC
                </a>
              </li>
            </ul>
          </div>

          {/* Creators */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f8fafc]">
              CREATORS
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#creator-eligibility"
                  onClick={(e) => handleSectionClick(e, 'creators', 'creator-eligibility')}
                  className="hover:text-white transition-colors text-[#94a3b8] text-left cursor-pointer block"
                >
                  Eligibility
                </a>
              </li>
              <li>
                <a
                  href="#creatzaar-score"
                  onClick={(e) => handleSectionClick(e, 'creators', 'creatzaar-score')}
                  className="hover:text-white transition-colors text-[#94a3b8] text-left cursor-pointer block"
                >
                  Creatzaar Score
                </a>
              </li>
              <li>
                <a
                  href="#creatzaar-prive"
                  onClick={(e) => handleSectionClick(e, 'restaurants', 'creatzaar-prive')}
                  className="hover:text-white transition-colors text-[#94a3b8] text-left cursor-pointer block"
                >
                  Privé Program
                </a>
              </li>
            </ul>
          </div>

          {/* Platform & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f8fafc]">
              Platform &amp; Legal
            </h4>

            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#cbd5e1]">
                Company
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/blog"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav('blog');
                    }}
                    className="hover:text-white transition-colors text-[#94a3b8] text-left cursor-pointer block"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav('faq');
                    }}
                    className="hover:text-white transition-colors text-[#94a3b8] text-left cursor-pointer block"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#cbd5e1]">
                Legal
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/privacy-policy"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav('privacy-policy');
                    }}
                    className="hover:text-white transition-colors text-[#94a3b8] text-left cursor-pointer block"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-and-conditions"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav('terms-and-conditions');
                    }}
                    className="hover:text-white transition-colors text-[#94a3b8] text-left cursor-pointer block"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p>© {new Date().getFullYear()} Creatzaar (creatzaar.com). All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="hover:text-[#cbd5e1] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#cbd5e1] transition-colors cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-[#cbd5e1] transition-colors cursor-pointer">Creator Agreement</span>
            <span className="hover:text-[#cbd5e1] transition-colors cursor-pointer">Restaurant Agreement</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
