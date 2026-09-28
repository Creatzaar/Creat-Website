import React, { useState } from 'react';
import { StrategyCallFormData } from '../types';
import { X, CheckCircle2, PhoneCall, Sparkles, Building2, MapPin, DollarSign, Instagram } from 'lucide-react';

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GOALS_OPTIONS = [
  'Instagram Reels',
  'Creator Visits',
  'Customer Acquisition',
  'Brand Awareness',
  'UGC Content',
  'All of the above'
];

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<StrategyCallFormData>({
    restaurantName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: 'Delhi NCR',
    instagramHandle: '',
    website: '',
    locationsCount: '1-2 outlets',
    monthlyBudget: '₹25,000 - ₹50,000',
    goals: ['All of the above']
  });

  if (!isOpen) return null;

  const toggleGoal = (goal: string) => {
    if (goal === 'All of the above') {
      if (formData.goals.includes('All of the above')) {
        setFormData({ ...formData, goals: [] });
      } else {
        setFormData({ ...formData, goals: [...GOALS_OPTIONS] });
      }
      return;
    }

    let updated = formData.goals.filter(g => g !== 'All of the above');
    if (updated.includes(goal)) {
      updated = updated.filter(g => g !== goal);
    } else {
      updated.push(goal);
    }
    setFormData({ ...formData, goals: updated });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080d1a]/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-[#1e2d4d] rounded-2xl p-6 sm:p-8 shadow-2xl my-8 text-[#f8fafc]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1e2d4d] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-center mx-auto text-[#a3e635]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-display text-[#f8fafc]">
              Strategy Call Requested!
            </h3>
            <p className="text-[#cbd5e1] text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#a3e635] font-semibold">{formData.contactPerson || 'Partner'}</span>. Our restaurant growth specialist will contact you at <span className="text-[#f8fafc] font-medium">{formData.phone || formData.email}</span> within 4 business hours to curate your creator campaign.
            </p>
            <div className="p-4 bg-[#080d1a] border border-[#1e2d4d] rounded-xl text-xs text-[#cbd5e1] max-w-md mx-auto text-left space-y-1">
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">Restaurant:</span>
                <span className="text-[#f8fafc] font-medium">{formData.restaurantName || 'Your Venue'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">Selected Focus:</span>
                <span className="text-[#f8fafc] font-medium">{formData.goals.slice(0, 2).join(', ') || 'Growth'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">Location:</span>
                <span className="text-[#f8fafc] font-medium">{formData.city}</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] font-bold text-sm transition-all shadow-md shadow-[#a3e635]/20 cursor-pointer"
              >
                Back to Creatzaar
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1.5 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/30 text-[#bef264] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> For Restaurants & Cafés
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#f8fafc]">
                Let's Grow Your Restaurant With Creators
              </h2>
              <p className="text-sm text-[#cbd5e1]">
                Book a 15-minute 1-on-1 strategy session to design a tailored creator campaign and fill tables.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Restaurant Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Restaurant Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Caffio Café"
                    value={formData.restaurantName}
                    onChange={e => setFormData({ ...formData, restaurantName: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] placeholder:text-[#64748b] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors"
                  />
                </div>

                {/* Owner / Contact Person */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Owner / Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sameer Kapoor"
                    value={formData.contactPerson}
                    onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] placeholder:text-[#64748b] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] placeholder:text-[#64748b] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sameer@caffiocafe.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] placeholder:text-[#64748b] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    City *
                  </label>
                  <select
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] focus:outline-none focus:border-[#a3e635] transition-colors cursor-pointer"
                  >
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Other">Other City</option>
                  </select>
                </div>

                {/* Instagram Handle */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Instagram Handle
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#64748b] text-sm">@</span>
                    <input
                      type="text"
                      placeholder="caffio_delhi"
                      value={formData.instagramHandle}
                      onChange={e => setFormData({ ...formData, instagramHandle: e.target.value })}
                      className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl pl-8 pr-3.5 py-2.5 text-sm text-[#f8fafc] placeholder:text-[#64748b] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors"
                    />
                  </div>
                </div>

                {/* Restaurant Website */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Restaurant Website
                  </label>
                  <input
                    type="url"
                    placeholder="https://caffio.in"
                    value={formData.website}
                    onChange={e => setFormData({ ...formData, website: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] placeholder:text-[#64748b] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors"
                  />
                </div>

                {/* Number of Locations */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Number of Locations
                  </label>
                  <select
                    value={formData.locationsCount}
                    onChange={e => setFormData({ ...formData, locationsCount: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] focus:outline-none focus:border-[#a3e635] transition-colors cursor-pointer"
                  >
                    <option value="1 outlet">Single Location</option>
                    <option value="2-4 outlets">2 - 4 Outlets</option>
                    <option value="5-10 outlets">5 - 10 Outlets</option>
                    <option value="10+ chain">10+ Regional / National Chain</option>
                  </select>
                </div>
              </div>

              {/* Monthly Marketing Budget */}
              <div>
                <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                  Monthly Marketing Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['< ₹5,000', '₹10,000 - ₹25,000', '₹25,000 - ₹50,000', '₹50,000+'].map((budget) => (
                    <button
                      type="button"
                      key={budget}
                      onClick={() => setFormData({ ...formData, monthlyBudget: budget })}
                      className={`text-xs py-2 px-3 rounded-lg border text-center transition-all cursor-pointer ${
                        formData.monthlyBudget === budget
                          ? 'bg-[#a3e635] border-[#a3e635] text-[#080d1a] font-bold'
                          : 'bg-[#080d1a] border-[#1e2d4d] text-[#94a3b8] hover:text-[#f8fafc] hover:border-[#a3e635]/40'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* What are you looking for? */}
              <div>
                <label className="block text-xs font-semibold text-[#cbd5e1] mb-1.5">
                  What are you looking for? (Select all that apply)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {GOALS_OPTIONS.map((goal) => {
                    const isSelected = formData.goals.includes(goal);
                    return (
                      <button
                        type="button"
                        key={goal}
                        onClick={() => toggleGoal(goal)}
                        className={`text-xs p-2.5 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#a3e635]/15 border-[#a3e635] text-[#f8fafc] font-semibold'
                            : 'bg-[#080d1a] border-[#1e2d4d] text-[#94a3b8] hover:text-[#f8fafc] hover:border-[#a3e635]/40'
                        }`}
                      >
                        <span className="truncate">{goal}</span>
                        <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9px] ${
                          isSelected ? 'bg-[#a3e635] border-[#a3e635] text-[#080d1a] font-bold' : 'border-[#475569]'
                        }`}>
                          {isSelected && '✓'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CTA & Cancel Buttons */}
              <div className="pt-3">
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] font-bold text-sm sm:text-base shadow-lg shadow-[#a3e635]/20 flex items-center justify-center gap-2 transition-all transform active:scale-98 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Book My Strategy Call</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#1e2d4d] hover:bg-[#1e2d4d] hover:border-[#334155] text-[#cbd5e1] hover:text-[#f8fafc] text-sm font-semibold transition-all cursor-pointer text-center"
                  >
                    Cancel
                  </button>
                </div>
                <p className="text-[11px] text-[#94a3b8] text-center mt-2">
                  Zero commitment. We will audit your Instagram presence and provide a custom creator forecast.
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
