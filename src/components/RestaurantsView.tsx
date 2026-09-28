import React, { useState } from 'react';
import { PageView } from '../types';
import { ContentTrustSection } from './ContentTrustSection';
import { GrowthModelsSection } from './GrowthModelsSection';
import {
  RESTAURANT_BENEFITS,
  COMPARISON_DATA,
  FAQS
} from '../data/mockData';
import {
  Sparkles,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Video,
  MapPin,
  Users,
  TrendingUp,
  ChevronDown,
  Store
} from 'lucide-react';

interface RestaurantsViewProps {
  onNavigate: (page: PageView) => void;
  onOpenStrategyCall: () => void;
}

export const RestaurantsView: React.FC<RestaurantsViewProps> = ({
  onNavigate,
  onOpenStrategyCall
}) => {
  const [openFaq, setOpenFaq] = useState<string>('r1');

  const getBenefitIcon = (name: string) => {
    switch (name) {
      case 'Video': return <Video className="w-6 h-6 text-[#a3e635]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#a3e635]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#a3e635]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#a3e635]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#a3e635]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#a3e635]" />;
      default: return <CheckCircle2 className="w-6 h-6 text-[#a3e635]" />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      
      {/* 1. Hero Section (Section 5) */}
      <section id="restaurant-and-cafes" className="relative pt-10 sm:pt-16 pb-10 scroll-mt-24">
        <span id="restaurants-and-cafes" className="absolute -top-24 pointer-events-none" />
        <span id="restaurant-cafes" className="absolute -top-24 pointer-events-none" />
        <span id="restaurants-cafes" className="absolute -top-24 pointer-events-none" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#a3e635]/10 via-[#84cc16]/5 to-transparent blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/30 text-[#bef264] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> creatzaar.com/restaurants
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-[#f8fafc] leading-tight">
            Turn Local Creators Into Your Marketing Team
          </h1>

          <p className="text-lg sm:text-xl text-[#cbd5e1] max-w-2xl mx-auto leading-relaxed">
            Get authentic Instagram content, creator exposure and new customers without managing influencer campaigns yourself.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenStrategyCall}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] font-bold text-base shadow-lg shadow-[#a3e635]/20 flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer"
            >
              <PhoneCall className="w-5 h-5 text-[#080d1a]" />
              <span>Book a Strategy Call</span>
            </button>

            <button
              onClick={onOpenStrategyCall}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0f172a] hover:bg-[#162138] border border-[#1e2d4d] text-[#f8fafc] font-semibold text-base flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
            >
              <span>Start a Campaign</span>
              <ArrowRight className="w-4 h-4 text-[#a3e635]" />
            </button>
          </div>
        </div>
      </section>

      {/* Network Scale & Proof (1,000+ creators and 50+ restaurants & cafes) */}
      <section id="network-proof-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f172a] border border-[#1e2d4d] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#1e2d4d]">
            
            {/* Stat 1: 1,000+ creators */}
            <div id="stat-creators" className="flex flex-col items-center text-center p-2">
              <div className="w-12 h-12 rounded-xl bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-[#a3e635]" />
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-[#f8fafc] tracking-tight">
                1,000+
              </span>
              <span className="text-sm font-semibold text-[#f8fafc] mt-1">Creators</span>
              <span className="text-xs text-[#94a3b8] mt-0.5">Vetted food & lifestyle storytellers</span>
            </div>

            {/* Stat 2: 50+ restaurants and cafes */}
            <div id="stat-restaurants" className="flex flex-col items-center text-center p-2 pt-6 sm:pt-0">
              <div className="w-12 h-12 rounded-xl bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center mb-3">
                <Store className="w-6 h-6 text-[#a3e635]" />
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-[#f8fafc] tracking-tight">
                50+
              </span>
              <span className="text-sm font-semibold text-[#f8fafc] mt-1">Restaurants & Cafes</span>
              <span className="text-xs text-[#94a3b8] mt-0.5">Active partner venues across top dining hubs</span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Problem vs Creatzaar Solution */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Traditional Problem Card */}
          <div className="bg-[#120f1a] border border-rose-900/40 rounded-3xl p-8 relative space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" /> Traditional Influencer Marketing
            </div>

            <h3 className="text-2xl font-bold font-display text-[#f8fafc]">
              Why Traditional Influencer Marketing Fails Restaurants
            </h3>

            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Managing food creators manually is painful, unpredictable, and rarely delivers local customers.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                { title: 'Expensive', desc: 'Heavy upfront fees and agency retainers with zero guarantee of foot traffic.' },
                { title: 'Difficult to manage', desc: 'Dozens of messy Instagram DM threads, ghosted invitations, and lost receipts.' },
                { title: 'Dependent on follower count', desc: 'Overpaying vanity accounts whose followers live outside your city.' },
                { title: 'Difficult to track', desc: 'Chasing influencers for view count screenshots and vague impressions.' },
                { title: 'Time-consuming', desc: 'Managers spending hours coordinating tables instead of focusing on food.' }
              ].map((prob, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#f8fafc] font-semibold">{prob.title}</strong> — <span className="text-[#94a3b8]">{prob.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Creatzaar Solution Card */}
          <div className="bg-[#0c1529] border-2 border-[#a3e635]/40 rounded-3xl p-8 relative space-y-6 shadow-xl shadow-[#a3e635]/5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a3e635]/15 border border-[#a3e635]/30 text-[#bef264] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> The Creatzaar Solution
            </div>

            <h3 className="text-2xl font-bold font-display text-[#f8fafc]">
              You Provide the Campaign. We Help Bring Creators.
            </h3>

            <p className="text-sm text-[#cbd5e1] leading-relaxed">
              A streamlined, automated platform built to connect your venue with eager, vetted food storytellers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                'Set campaign requirements',
                'Set cashback & reward tiers',
                'Select creators & review niches',
                'Approve applications easily',
                'Track tagged Reels & Stories',
                'Monitor campaign performance & ROI'
              ].map((sol, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#101b34] border border-[#1e2d4d] text-xs font-medium text-[#f8fafc] shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#a3e635] shrink-0" />
                  <span>{sol}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenStrategyCall}
                className="w-full py-3.5 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] text-sm font-bold shadow-md shadow-[#a3e635]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Launch Your First Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Content Trust & Shift to Creator-Generated Content */}
      <ContentTrustSection />

      {/* 3. Restaurant Benefits (6 cards per Section 6) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/30 text-[#bef264] text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" /> Why Top Venues Choose Creatzaar
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#f8fafc]">
            6 Core Benefits for Restaurants
          </h2>
          <p className="text-[#94a3b8] text-sm">
            Everything your kitchen, bar, or café needs to fuel consistent social foot traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESTAURANT_BENEFITS.map((b) => (
            <div
              key={b.id}
              className="bg-[#0f172a] border border-[#1e2d4d] hover:border-[#a3e635]/40 hover:shadow-lg rounded-2xl p-6 transition-all group flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center transition-colors">
                  {getBenefitIcon(b.iconName)}
                </div>
                <h3 className="text-lg font-bold font-display text-[#f8fafc] group-hover:text-[#bef264] transition-colors">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Four ways to grow with Creatzaar */}
      <GrowthModelsSection onOpenStrategyCall={onOpenStrategyCall} />

      {/* 6. Comparison Table (Section 14: Traditional vs Creatzaar) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-3xl font-bold font-display text-[#f8fafc]">
            Why Creatzaar?
          </h2>
          <p className="text-[#94a3b8] text-sm">
            A transparent comparison between old-school influencer marketing and the modern Creatzaar platform.
          </p>
        </div>

        <div className="bg-[#0f172a] border border-[#1e2d4d] rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#1e2d4d] bg-[#080d1a] text-[#f8fafc]">
                  <th className="p-4 font-bold uppercase tracking-wider text-xs">Aspect</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-xs text-[#94a3b8]">Traditional Influencer Marketing</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-xs text-[#a3e635]">Creatzaar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2d4d] text-[#cbd5e1]">
                {COMPARISON_DATA.map((row, i) => (
                  <tr key={i} className="hover:bg-[#131f38] transition-colors">
                    <td className="p-4 font-semibold text-[#f8fafc]">{row.aspect}</td>
                    <td className="p-4 text-[#94a3b8]">{row.traditional}</td>
                    <td className="p-4 font-semibold text-[#f8fafc] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#a3e635] shrink-0" />
                      <span>{row.creatzaar}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Strategy Call CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-[#0c1529] via-[#111f3d] to-[#0c1529] border border-[#1e2d4d] rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#f8fafc]">
            Ready to Fill Tables with Authentic Food Content?
          </h2>
          <p className="text-[#cbd5e1] text-sm sm:text-base max-w-xl mx-auto">
            Book a 15-minute strategy call with our restaurant marketing team. We'll forecast your reach and design your first creator campaign.
          </p>
          <button
            onClick={onOpenStrategyCall}
            className="px-8 py-4 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] font-bold text-base shadow-lg shadow-[#a3e635]/20 inline-flex items-center gap-2 cursor-pointer transition-all"
          >
            <PhoneCall className="w-5 h-5 text-[#080d1a]" />
            <span>Book a Strategy Call</span>
          </button>
        </div>
      </section>

    </div>
  );
};
