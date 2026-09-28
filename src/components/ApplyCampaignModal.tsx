import React, { useState } from 'react';
import { Campaign } from '../types';
import { X, CheckCircle2, MapPin, Sparkles, AlertCircle, Percent, ArrowRight } from 'lucide-react';

interface ApplyCampaignModalProps {
  campaign: Campaign | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyCampaignModal: React.FC<ApplyCampaignModalProps> = ({
  campaign,
  isOpen,
  onClose
}) => {
  const [handle, setHandle] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !campaign) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setHandle('');
    setAgreed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080d1a]/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0f172a] border border-[#1e2d4d] rounded-2xl p-6 sm:p-7 shadow-2xl my-8 text-[#f8fafc]">
        
        {/* Close */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-xl text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1e2d4d] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-center mx-auto text-[#a3e635]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-display text-[#f8fafc]">
              Application Received!
            </h3>
            <p className="text-[#cbd5e1] text-sm max-w-sm mx-auto leading-relaxed">
              Your application for <span className="text-[#a3e635] font-semibold">{campaign.restaurantName}</span> has been submitted with handle <span className="text-[#f8fafc] font-medium">@{handle.replace('@', '')}</span>.
            </p>
            <div className="p-4 bg-[#080d1a] border border-[#1e2d4d] rounded-xl text-xs text-left text-[#cbd5e1] space-y-2">
              <div className="font-semibold text-[#f8fafc] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#a3e635]" /> Campaign Deliverables reminder:
              </div>
              <ul className="list-disc list-inside text-[#94a3b8] space-y-1">
                {campaign.deliverables.map((del, i) => (
                  <li key={i}>{del}</li>
                ))}
              </ul>
              <p className="text-[11px] text-[#bef264] pt-1">
                Cashback reward: Up to {campaign.cashbackMax}% based on verified deliverables.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] text-sm font-bold transition-all shadow-md shadow-[#a3e635]/20 cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Header with Image */}
            <div className="flex items-start gap-4 mb-5 pb-5 border-b border-[#1e2d4d]">
              <img
                src={campaign.image}
                alt={campaign.restaurantName}
                referrerPolicy="no-referrer"
                className="w-18 h-18 rounded-xl object-cover border border-[#1e2d4d] shrink-0"
              />
              <div>
                {campaign.category ? (
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#bef264] bg-[#a3e635]/10 border border-[#a3e635]/30 px-2 py-0.5 rounded-md mb-1">
                    {campaign.category}
                  </span>
                ) : null}
                <h3 className="text-xl font-bold font-display text-[#f8fafc]">
                  {campaign.restaurantName}
                </h3>
                <p className="text-xs text-[#94a3b8] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#64748b]" />
                  {campaign.location}
                </p>
              </div>
            </div>

            {/* Campaign details */}
            <div className="space-y-4 text-sm">
              <div className="p-3.5 rounded-xl bg-[#111e3b] border border-[#1e2d4d] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#94a3b8] block">Campaign Reward</span>
                  <span className="text-lg font-bold text-[#f8fafc] flex items-center gap-1">
                    {campaign.cashbackBadge ? (
                      <span className="text-[#a3e635]">{campaign.cashbackBadge}</span>
                    ) : (
                      <>Up to <span className="text-[#a3e635]">{campaign.cashbackMax}%</span> Cashback</>
                    )}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#94a3b8] block">Available Slots</span>
                  <span className="text-sm font-semibold text-[#a3e635]">
                    {campaign.slotsRemaining} of {campaign.slotsTotal} spots open
                  </span>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-semibold text-[#cbd5e1] uppercase tracking-wider mb-2">
                  Deliverables
                </h4>
                <div className="space-y-1.5">
                  {campaign.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#cbd5e1] bg-[#080d1a] px-3 py-2 rounded-lg border border-[#1e2d4d]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
                      {del}
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="text-xs font-semibold text-[#cbd5e1] uppercase tracking-wider mb-2">
                  Requirements
                </h4>
                <ul className="space-y-1 text-xs text-[#94a3b8]">
                  {campaign.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#a3e635] font-bold">✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="pt-2 space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Your Instagram Handle *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#64748b] text-sm">@</span>
                    <input
                      type="text"
                      required
                      placeholder="your_handle"
                      value={handle}
                      onChange={e => setHandle(e.target.value)}
                      className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl pl-8 pr-3.5 py-2.5 text-sm text-[#f8fafc] placeholder:text-[#64748b] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors"
                    />
                  </div>
                </div>

                <label className="flex items-start gap-2 text-xs text-[#94a3b8] cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={e => setAgreed(e.target.checked)}
                    className="mt-0.5 rounded border-[#1e2d4d] bg-[#080d1a] text-[#a3e635] focus:ring-[#a3e635]"
                  />
                  <span>
                    I agree to visit the restaurant, order food, post original content within 72 hours, and tag the restaurant & @creatzaar.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!agreed || !handle.trim()}
                  className="w-full py-3 px-5 rounded-xl bg-[#a3e635] hover:bg-[#bef264] disabled:opacity-40 disabled:cursor-not-allowed text-[#080d1a] font-bold text-sm shadow-md shadow-[#a3e635]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Apply for Campaign</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
