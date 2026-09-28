import React, { useState } from 'react';
import { PageView, Campaign } from '../types';
import {
  CAMPAIGNS,
  CREATOR_BENEFITS,
  CREATOR_ELIGIBILITY
} from '../data/mockData';
import {
  Sparkles,
  ArrowRight,
  Percent,
  Compass,
  Film,
  FolderPlus,
  Zap,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Search,
  Filter,
  Award,
  Users,
  Store
} from 'lucide-react';

interface CreatorsViewProps {
  onNavigate: (page: PageView) => void;
  onOpenCreatorRegister: () => void;
  onSelectCampaign?: (c: Campaign) => void;
}

export const CreatorsView: React.FC<CreatorsViewProps> = ({
  onNavigate,
  onOpenCreatorRegister,
  onSelectCampaign
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getBenefitIcon = (name: string) => {
    switch (name) {
      case 'Percent': return <Percent className="w-6 h-6 text-[#a3e635]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#a3e635]" />;
      case 'Film': return <Film className="w-6 h-6 text-[#a3e635]" />;
      case 'FolderPlus': return <FolderPlus className="w-6 h-6 text-[#a3e635]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#a3e635]" />;
      default: return <CheckCircle2 className="w-6 h-6 text-[#a3e635]" />;
    }
  };

  const filteredCampaigns = CAMPAIGNS.filter(c => {
    const matchesCity = selectedCity === 'all' || c.location.toLowerCase().includes(selectedCity.toLowerCase());
    const matchesSearch = c.restaurantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (c.cuisine ? c.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) : false) ||
                          c.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      
      {/* 1. Hero Section (Section 8) */}
      <section className="relative pt-10 sm:pt-16 pb-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#a3e635]/10 via-[#84cc16]/5 to-transparent blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-[#f8fafc] leading-tight">
            Eat. Create.{' '}
            <span className="text-[#a3e635]">
              Get Cashback.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#cbd5e1] max-w-2xl mx-auto leading-relaxed">
            You create anyway. Creatzaar turns your content into <span className="text-[#a3e635] font-semibold">cashback</span>, <span className="text-[#f8fafc] font-medium">restaurant experiences</span>, and new opportunities to grow as a creator.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenCreatorRegister}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] font-bold text-base shadow-lg shadow-[#a3e635]/20 flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer"
            >
              <span>Join Creatzaar</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#campaigns-grid"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0f172a] hover:bg-[#162138] border border-[#1e2d4d] text-[#f8fafc] font-semibold text-base flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>Explore Campaigns</span>
              <Compass className="w-4 h-4 text-[#a3e635]" />
            </a>
          </div>

          <div className="pt-2">
            <p className="text-xs text-[#94a3b8]">
              ⚡️ Over 50+ active campaigns across Delhi NCR.
            </p>
          </div>
        </div>
      </section>

      {/* Network Scale & Proof Stats Section */}
      <section id="creator-network-stats" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0f172a] border border-[#1e2d4d] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#1e2d4d]">
            
            {/* Left Stat: 1,000+ Creators */}
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

            {/* Right Stat: 50+ Restaurants & Cafés */}
            <div id="stat-restaurants" className="flex flex-col items-center text-center p-2 pt-6 sm:pt-0">
              <div className="w-12 h-12 rounded-xl bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center mb-3">
                <Store className="w-6 h-6 text-[#a3e635]" />
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold font-display text-[#f8fafc] tracking-tight">
                50+
              </span>
              <span className="text-sm font-semibold text-[#f8fafc] mt-1">Restaurants & Cafés</span>
              <span className="text-xs text-[#94a3b8] mt-0.5">Active partner venues across top dining hubs</span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Creator Benefits (6 cards per Section 9) */}
      <section id="creatzaar-score" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative scroll-mt-24">
        <span id="creator-score" className="absolute -top-24 pointer-events-none" />
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#f8fafc]">
            6 Core Benefits for Creators
          </h2>
          <p className="text-[#94a3b8] text-sm">
            Everything you need to turn your passion for food and aesthetic content into tangible cashback rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CREATOR_BENEFITS.map((b) => (
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

      {/* 3. Creator Eligibility (Section 10) */}
      <section id="creator-eligibility" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative scroll-mt-24">
        <span id="eligibility" className="absolute -top-24 pointer-events-none" />
        <div className="bg-[#0c1324] border border-[#1e2d4d] rounded-3xl p-8 sm:p-10 space-y-8 shadow-sm">
          
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/30 text-[#bef264] text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" /> Eligibility Criteria
            </div>
            <h2 className="text-3xl font-bold font-display text-[#f8fafc]">
              Who Can Join Creatzaar?
            </h2>
            <p className="text-sm text-[#94a3b8]">
              We believe great storytelling lives in micro & nano communities. You do not need 100k followers to create real impact.
            </p>
          </div>

          {/* Strategic Quote box */}
          <div className="p-5 rounded-2xl bg-[#111e3b] border border-[#a3e635]/30 flex items-start gap-3.5">
            <Sparkles className="w-5 h-5 text-[#a3e635] shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base text-[#f8fafc] font-medium leading-relaxed">
              <strong>Follower count isn't everything.</strong> We care about content quality, audience relevance and engagement. A thoughtful 1,000-follower creator with high community trust is immensely valuable.
            </p>
          </div>

          {/* Eligibility checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              'Instagram creators with public accounts',
              'Food & dining creators',
              'Lifestyle, travel & fashion creators',
              'Local neighborhood / city guides',
              'Nano creators (1,000 to 10,000 followers)',
              'Micro creators (10,000 to 50,000+ followers)'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#080d1a] border border-[#1e2d4d] text-xs sm:text-sm text-[#f8fafc] font-medium shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#a3e635] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#1e2d4d]">
            <p className="text-xs text-[#94a3b8]">
              Have a public Instagram account with recent foodie content? Apply in 60 seconds.
            </p>
            <button
              onClick={onOpenCreatorRegister}
              className="px-6 py-2.5 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] text-xs sm:text-sm font-bold shadow-md shadow-[#a3e635]/20 transition-all cursor-pointer shrink-0"
            >
              Join Creatzaar
            </button>
          </div>

        </div>
      </section>

      {/* 5. Featured Campaign Example Card (Section 12: Caffio Café) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
          <span className="text-xs font-bold text-[#bef264] uppercase tracking-wider">
            Representative Campaign Structure
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#f8fafc]">
            What a Live Campaign Looks Like
          </h2>
        </div>

        {/* Featured Campaign Card */}
        <div className="bg-[#0f172a] border-2 border-[#a3e635]/40 rounded-3xl p-6 sm:p-8 shadow-xl shadow-[#a3e635]/5 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1e2d4d]">
            <div>
              <span className="text-xs font-semibold text-[#bef264] uppercase tracking-wider block">
                Artisanal Coffee & Continental
              </span>
              <h3 className="text-2xl font-bold font-display text-[#f8fafc] mt-0.5">
                Signature Cafe
              </h3>
              <p className="text-xs text-[#94a3b8] flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#a3e635]" />
                Delhi
              </p>
            </div>
            
            <div className="text-left sm:text-right bg-[#080d1a] p-3 sm:p-0 sm:bg-transparent rounded-xl">
              <span className="text-xs text-[#94a3b8] block font-medium">Campaign Reward</span>
              <span className="text-2xl font-extrabold text-[#a3e635] font-display">
                90% Cashback
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 text-xs text-[#cbd5e1]">
            <div className="p-3.5 rounded-xl bg-[#080d1a] border border-[#1e2d4d] space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-[#64748b] block">Deliverables</span>
              <p className="text-sm font-semibold text-[#f8fafc]">1 Instagram Reel</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#080d1a] border border-[#1e2d4d] space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-[#64748b] block">Requirements</span>
              <ul className="space-y-1 text-[#94a3b8] text-[11px]">
                <li>• Public Instagram profile</li>
                <li>• Relevant audience</li>
                <li>• Original content</li>
                <li>• Tag restaurant (@caffiocafe)</li>
                <li>• Tag Creatzaar (@creatzaar)</li>
              </ul>
            </div>
          </div>

          <button
            onClick={onOpenCreatorRegister}
            className="w-full py-3.5 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] font-bold text-sm shadow-md shadow-[#a3e635]/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <span>Joining Waitlist</span>
          </button>
        </div>
      </section>

      {/* 6. Active Campaigns Grid with Search & Filters */}
      <section id="campaigns-grid" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold font-display text-[#f8fafc]">
              Explore Active Campaigns
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8]">
              Browse dining campaigns accepting creator applications today.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative">
              <Search className="w-4 h-4 text-[#64748b] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search restaurant or cuisine..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-[#0f172a] border border-[#1e2d4d] rounded-xl pl-9 pr-3.5 py-2 text-xs text-[#f8fafc] placeholder:text-[#64748b] outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635]"
              />
            </div>

            <select
              value={selectedCity}
              onChange={e => setSelectedCity(e.target.value)}
              className="bg-[#0f172a] border border-[#1e2d4d] rounded-xl px-3 py-2 text-xs text-[#f8fafc] outline-none focus:border-[#a3e635] cursor-pointer"
            >
              <option value="all">All Cities</option>
              <option value="delhi">Delhi NCR</option>
              <option value="mumbai">Mumbai</option>
              <option value="bengaluru">Bengaluru</option>
              <option value="pune">Pune</option>
              <option value="hyderabad">Hyderabad</option>
            </select>
          </div>
        </div>

        {filteredCampaigns.length === 0 ? (
          <div className="text-center py-16 bg-[#0c1324] rounded-2xl border border-[#1e2d4d] text-[#94a3b8] text-sm">
            No campaigns found matching your search. Try resetting city or search term.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((camp) => (
              <div
                key={camp.id}
                className="bg-[#0f172a] border border-[#1e2d4d] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#a3e635]/50 hover:shadow-lg transition-all group shadow-sm"
              >
                <div>
                  <div className="h-44 relative overflow-hidden bg-[#080d1a]">
                    <img
                      src={camp.image}
                      alt={camp.restaurantName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#a3e635] text-[#080d1a] text-xs font-bold shadow-md">
                      {camp.cashbackBadge || `Up to ${camp.cashbackMax}% Cashback`}
                    </div>
                    {camp.cuisine ? (
                      <div className="absolute bottom-2 left-3">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-white bg-black/70 px-2 py-0.5 rounded backdrop-blur-xs">
                          {camp.cuisine}
                        </span>
                      </div>
                    ) : null}
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold font-display text-[#f8fafc] group-hover:text-[#bef264] transition-colors">
                        {camp.restaurantName}
                      </h3>
                      <p className="text-xs text-[#94a3b8] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#a3e635]" />
                        {camp.location}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#080d1a] border border-[#1e2d4d] space-y-1.5 text-xs">
                      <div className="flex justify-between">
                        <span className="text-[#94a3b8]">Deliverables:</span>
                        <span className="text-[#f8fafc] font-medium">{camp.deliverables.join(' + ')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#94a3b8]">Slots Open:</span>
                        <span className="text-[#bef264] font-semibold">{camp.slotsRemaining} of {camp.slotsTotal} left</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#94a3b8]">Min Followers:</span>
                        <span className="text-[#cbd5e1]">{camp.creatorFollowerMin}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={onOpenCreatorRegister}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] text-xs font-bold shadow-md shadow-[#a3e635]/20 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Apply for Campaign</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 7. Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-[#0c1529] via-[#111f3d] to-[#0c1529] border border-[#1e2d4d] rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#f8fafc]">
            Ready to Eat, Create, and Earn Cashback?
          </h2>
          <p className="text-[#cbd5e1] text-sm sm:text-base max-w-xl mx-auto">
            Join Creatzaar today. Start discovering high-vibe restaurants in your city and turn your meals into verified cashback.
          </p>
          <button
            onClick={onOpenCreatorRegister}
            className="px-8 py-4 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] font-bold text-base shadow-lg shadow-[#a3e635]/20 inline-flex items-center gap-2 cursor-pointer transition-all"
          >
            <span>Join Creatzaar as Creator</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
