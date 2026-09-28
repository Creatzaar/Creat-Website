import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Check, Crown } from 'lucide-react';

interface GrowthModelsSectionProps {
  onOpenStrategyCall?: () => void;
}

interface GrowthModelCard {
  id: string;
  badge: string;
  isRecommended?: boolean;
  topBadge?: string;
  title: string;
  italicSubheading: string;
  description: string;
  bestFor: string;
  cost: string;
  ctaText: string;
  footnote?: string;
}

const GROWTH_MODELS: GrowthModelCard[] = [
  {
    id: 'savings-model',
    badge: 'ENTRY LEVEL',
    title: 'Savings Model',
    italicSubheading: 'Turn creator content into measurable savings',
    description: 'Offer creators 30% to 90% cashback on eligible orders in exchange for authentic Instagram content.',
    bestFor: 'Restaurants and cafés looking for performance-based creator marketing',
    cost: '30% to 90% cashback',
    ctaText: 'Explore Savings →'
  },
  {
    id: 'barter-campaigns',
    badge: 'FLEXIBLE',
    title: 'Barter Campaigns',
    italicSubheading: 'Exchange experiences for content',
    description: 'Collaborate with creators through product or meal exchanges and receive authentic content without a traditional influencer fee.',
    bestFor: 'Restaurants and cafés with strong products or experiences',
    cost: 'Product or meal barter',
    ctaText: 'Start a Barter Campaign →'
  },
  {
    id: 'creatzaar-prive',
    badge: 'PREMIUM',
    isRecommended: true,
    topBadge: 'RECOMMENDED',
    title: 'Creatzaar Privé',
    italicSubheading: 'Premium creator campaigns. Fully managed.',
    description: 'Get a managed creator marketing campaign with curated creators, campaign strategy, content briefs, approvals, execution, and performance tracking.',
    bestFor: 'Brands that want a fully managed creator campaign',
    cost: 'Custom pricing',
    ctaText: 'Talk to Creatzaar →',
    footnote: 'Limited campaign slots'
  },
  {
    id: 'ai-ugc',
    badge: 'NEW',
    title: 'AI UGC',
    italicSubheading: 'Create more content without a production team',
    description: 'Create UGC-style marketing creatives using AI for faster testing, paid advertising, and social media campaigns.',
    bestFor: 'Brands that need content at scale',
    cost: 'Per creative',
    ctaText: 'Explore AI UGC →'
  }
];

export const GrowthModelsSection: React.FC<GrowthModelsSectionProps> = ({ onOpenStrategyCall }) => {
  return (
    <section id="growth-models-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-16 sm:my-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" /> Growth Architecture
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#f8fafc] tracking-tight">
          Four ways to grow with Creatzaar
        </h2>
        <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto">
          Choose the creator marketing model that fits your restaurant, café, or brand.
        </p>
      </div>

      {/* 4 Cards Grid: 4 in a row on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {GROWTH_MODELS.map((model, idx) => {
          const isPrive = model.isRecommended;
          const cardId = model.id === 'savings-model' ? 'saving-model' : model.id;

          return (
            <motion.div
              key={model.id}
              id={cardId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 scroll-mt-28 ${
                isPrive
                  ? 'bg-[#151f38] border-2 border-amber-400/80 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20 hover:border-amber-400'
                  : 'bg-[#0f172a] border border-[#1e2d4d] hover:border-pink-500/50 shadow-md hover:shadow-lg hover:shadow-black/40'
              }`}
            >
              {/* Overlapping Top Badge for Recommended Card */}
              {model.id === 'savings-model' && (
                <span id="savings-model" className="absolute -top-28 pointer-events-none" />
              )}
              {isPrive && (
                <span id="prive-program" className="absolute -top-28 pointer-events-none" />
              )}
              {isPrive && model.topBadge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/30">
                    <Crown className="w-3 h-3 text-slate-950 fill-slate-950" />
                    {model.topBadge}
                  </span>
                </div>
              )}

              {/* Upper Content Area */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                {/* Category Label */}
                <div className="mb-4">
                  <span
                    className={`inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      isPrive
                        ? 'bg-amber-400/15 border border-amber-400/30 text-amber-300'
                        : 'bg-pink-500/10 border border-pink-500/20 text-pink-400'
                    }`}
                  >
                    {model.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl sm:text-2xl font-bold font-display tracking-tight mb-2 ${
                    isPrive ? 'text-white' : 'text-[#f8fafc]'
                  }`}
                >
                  {model.title}
                </h3>

                {/* Italic Subheading */}
                <p
                  className={`text-xs sm:text-sm italic font-normal leading-snug mb-4 ${
                    isPrive ? 'text-amber-200/90' : 'text-slate-300'
                  }`}
                >
                  &ldquo;{model.italicSubheading}&rdquo;
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-6">
                  {model.description}
                </p>

                {/* Bottom Specifications */}
                <div
                  className={`mt-auto pt-5 border-t space-y-2.5 text-xs ${
                    isPrive ? 'border-amber-400/20' : 'border-[#1e2d4d]'
                  }`}
                >
                  <div>
                    <span className="text-[#64748b] block text-[11px] uppercase tracking-wider font-semibold">
                      Best for:
                    </span>
                    <span className="text-[#cbd5e1] font-medium leading-tight block mt-0.5">
                      {model.bestFor}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#64748b] block text-[11px] uppercase tracking-wider font-semibold">
                      Cost:
                    </span>
                    <span
                      className={`font-semibold block mt-0.5 ${
                        isPrive ? 'text-amber-300' : 'text-[#a3e635]'
                      }`}
                    >
                      {model.cost}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button & Optional Footnote */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                <button
                  type="button"
                  onClick={onOpenStrategyCall}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                    isPrive
                      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/25 hover:shadow-amber-500/40'
                      : 'bg-[#1e293b] hover:bg-pink-600 text-[#f8fafc] hover:text-white border border-[#334155] hover:border-pink-500 shadow-sm'
                  }`}
                >
                  <span>{model.ctaText}</span>
                </button>

                {/* Micro note for limited slots */}
                {model.footnote && (
                  <p className="text-[11px] text-center text-amber-300/80 font-medium mt-2">
                    {model.footnote}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
