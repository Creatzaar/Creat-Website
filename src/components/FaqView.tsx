import React, { useState } from 'react';
import { PageView } from '../types';
import { FAQS } from '../data/mockData';
import { HelpCircle, Search, ChevronDown, Sparkles, PhoneCall, ArrowRight } from 'lucide-react';

interface FaqViewProps {
  onNavigate: (page: PageView) => void;
  onOpenStrategyCall: () => void;
  onOpenCreatorRegister: () => void;
}

export const FaqView: React.FC<FaqViewProps> = ({
  onNavigate,
  onOpenStrategyCall,
  onOpenCreatorRegister
}) => {
  const [audience, setAudience] = useState<'creator' | 'restaurant'>('creator');
  const [search, setSearch] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['c1', 'r1']);

  const toggleFaq = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(i => i !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = FAQS.filter(f => {
    const matchesAudience = f.audience === audience;
    const matchesSearch = f.question.toLowerCase().includes(search.toLowerCase()) ||
                          f.answer.toLowerCase().includes(search.toLowerCase());
    return matchesAudience && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-24 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/30 text-[#bef264] text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" /> Help Center & Knowledge Base
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-[#f8fafc] tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-[#cbd5e1] text-sm sm:text-base max-w-xl mx-auto">
          Clear answers for restaurants starting campaigns and creators claiming dining cashback.
        </p>
      </div>

      {/* Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="inline-flex p-1 rounded-xl bg-[#0c1324] border border-[#1e2d4d] w-full sm:w-auto">
          <button
            onClick={() => setAudience('creator')}
            className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              audience === 'creator'
                ? 'bg-[#a3e635] text-[#080d1a] font-bold shadow-sm'
                : 'text-[#94a3b8] hover:text-[#f8fafc]'
            }`}
          >
            For Creators ({FAQS.filter(f => f.audience === 'creator').length})
          </button>
          <button
            onClick={() => setAudience('restaurant')}
            className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              audience === 'restaurant'
                ? 'bg-[#a3e635] text-[#080d1a] font-bold shadow-sm'
                : 'text-[#94a3b8] hover:text-[#f8fafc]'
            }`}
          >
            For Restaurants ({FAQS.filter(f => f.audience === 'restaurant').length})
          </button>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-[#64748b] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-[#0f172a] border border-[#1e2d4d] rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-[#f8fafc] placeholder:text-[#64748b] outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635]"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-[#0c1324] rounded-2xl border border-[#1e2d4d] text-[#94a3b8] text-sm">
            No questions found matching your search.
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-[#0f172a] border border-[#1e2d4d] rounded-2xl overflow-hidden transition-colors shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer hover:bg-[#13203b]/60 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#f8fafc]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#a3e635] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed border-t border-[#1e2d4d] pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still have questions card */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0c1529] via-[#111f3d] to-[#0c1529] border border-[#1e2d4d] text-center space-y-4 shadow-xl">
        <h3 className="text-xl font-bold font-display text-[#f8fafc]">
          Still Have Questions?
        </h3>
        <p className="text-xs sm:text-sm text-[#cbd5e1] max-w-md mx-auto">
          Our team is happy to answer your specific questions, explain campaign metrics, or help onboarding your venue or creator profile.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <button
            onClick={onOpenStrategyCall}
            className="px-5 py-2.5 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] text-xs font-bold transition-all shadow-md shadow-[#a3e635]/20 cursor-pointer"
          >
            Speak to Restaurant Team
          </button>
          <button
            onClick={onOpenCreatorRegister}
            className="px-5 py-2.5 rounded-xl bg-[#080d1a] border border-[#1e2d4d] text-[#f8fafc] hover:bg-[#0f172a] text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            Creator Support
          </button>
        </div>
      </div>

    </div>
  );
};
