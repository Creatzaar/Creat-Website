import React, { useState } from 'react';
import { PageView } from '../types';
import { Sparkles, Menu, X, ArrowRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenStrategyCall: () => void;
  onOpenCreatorRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenStrategyCall,
  onOpenCreatorRegister
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#080d1a]/90 backdrop-blur-md border-b border-[#1e2d4d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNav('restaurants')}
            className="flex items-center text-left select-none cursor-pointer focus:outline-none"
            aria-label="Creatzaar"
          >
            <img
              src="/creatzaar-logo.png"
              alt="Creatzaar"
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </button>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0f172a] border border-[#1e2d4d] p-1.5 rounded-full">
            <button
              onClick={() => handleNav('restaurants')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                currentPage === 'restaurants'
                  ? 'bg-[#1a2744] text-[#f8fafc] shadow-sm font-semibold border border-[#2d406b]'
                  : 'text-[#cbd5e1] hover:text-white hover:bg-[#162138]'
              }`}
            >
              Restaurants & Cafés
            </button>
            <button
              onClick={() => handleNav('creators')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                currentPage === 'creators'
                  ? 'bg-[#a3e635]/15 text-[#bef264] shadow-sm font-semibold border border-[#a3e635]/40'
                  : 'text-[#cbd5e1] hover:text-white hover:bg-[#162138]'
              }`}
            >
              Creators
            </button>
            <button
              onClick={() => handleNav('faq')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                currentPage === 'faq'
                  ? 'bg-[#1a2744] text-[#f8fafc] shadow-sm font-semibold border border-[#2d406b]'
                  : 'text-[#cbd5e1] hover:text-white hover:bg-[#162138]'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => handleNav('blog')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                currentPage === 'blog'
                  ? 'bg-[#1a2744] text-[#f8fafc] shadow-sm font-semibold border border-[#2d406b]'
                  : 'text-[#cbd5e1] hover:text-white hover:bg-[#162138]'
              }`}
            >
              Blog
            </button>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNav('restaurants')}
              className="text-sm font-semibold text-[#cbd5e1] hover:text-white px-3 py-2 transition-colors cursor-pointer"
            >
              For Restaurants
            </button>
            
            <button
              onClick={onOpenCreatorRegister}
              className="text-sm font-semibold text-[#bef264] bg-[#a3e635]/10 hover:bg-[#a3e635]/20 border border-[#a3e635]/30 px-3.5 py-2 rounded-xl transition-all cursor-pointer"
            >
              Join as Creator
            </button>

            {/* Highlighted CTA: Book a Strategy Call */}
            <button
              onClick={onOpenStrategyCall}
              className="flex items-center gap-2 bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] text-sm font-bold px-4 py-2.5 rounded-xl shadow-md shadow-[#a3e635]/20 hover:shadow-lg hover:shadow-[#a3e635]/30 transition-all transform active:scale-95 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#080d1a]" />
              <span>Book a Strategy Call</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenStrategyCall}
              className="bg-[#a3e635] text-[#080d1a] text-xs font-bold px-3 py-2 rounded-lg"
            >
              Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#0f172a] text-[#cbd5e1] hover:text-white border border-[#1e2d4d]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1e2d4d] bg-[#0c1324] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => handleNav('restaurants')}
              className={`p-3 rounded-xl text-center text-sm font-medium border ${
                currentPage === 'restaurants'
                  ? 'bg-[#1a2744] border-[#2d406b] text-[#f8fafc] font-semibold'
                  : 'bg-[#0f172a] border-[#1e2d4d] text-[#cbd5e1]'
              }`}
            >
              Restaurants & Cafés
            </button>
            <button
              onClick={() => handleNav('creators')}
              className={`p-3 rounded-xl text-center text-sm font-medium border ${
                currentPage === 'creators'
                  ? 'bg-[#a3e635]/15 border-[#a3e635]/40 text-[#bef264] font-semibold'
                  : 'bg-[#0f172a] border-[#1e2d4d] text-[#cbd5e1]'
              }`}
            >
              Creators
            </button>
          </div>

          <div className="flex flex-col space-y-2 border-t border-[#1e2d4d] pt-3">
            <button
              onClick={() => handleNav('faq')}
              className="text-left py-2 px-3 rounded-lg text-sm text-[#cbd5e1] hover:bg-[#162138] hover:text-white"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNav('blog')}
              className="text-left py-2 px-3 rounded-lg text-sm text-[#cbd5e1] hover:bg-[#162138] hover:text-white"
            >
              Blog & Guides
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCreatorRegister();
              }}
              className="w-full py-3 rounded-xl text-center text-sm font-semibold border border-[#a3e635]/30 bg-[#a3e635]/10 text-[#bef264]"
            >
              Join as Creator (Up to 90% Cashback)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStrategyCall();
              }}
              className="w-full py-3 rounded-xl text-center text-sm font-bold bg-[#a3e635] text-[#080d1a] shadow-md shadow-[#a3e635]/20 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#080d1a]" />
              <span>Book a Strategy Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
