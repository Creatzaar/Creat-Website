import React, { useState } from 'react';
import { StrategyCallFormData } from '../types';
import { X, CheckCircle2, PhoneCall, Sparkles, Building2, MapPin, DollarSign, Instagram, Loader2, AlertCircle } from 'lucide-react';
import { submitToGoogleSheets, RestaurantSubmissionPayload } from '../services/googleSheets';

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

const INITIAL_RESTAURANT_FORM: StrategyCallFormData = {
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
};

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<StrategyCallFormData>(INITIAL_RESTAURANT_FORM);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const submissionDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    const formattedHandle = formData.instagramHandle.trim()
      ? formData.instagramHandle.trim().startsWith('@')
        ? formData.instagramHandle.trim()
        : `@${formData.instagramHandle.trim()}`
      : '';

    const lookingForValue = formData.goals.length > 0
      ? formData.goals.join(', ')
      : 'All of the above';

    const payload: RestaurantSubmissionPayload = {
      formType: 'restaurant',
      'Submission Date & Time': submissionDate,
      'Restaurant Name': formData.restaurantName.trim(),
      'Owner / Contact Person': formData.contactPerson.trim(),
      'Phone Number': formData.phone.trim(),
      'Email Address': formData.email.trim(),
      'City': formData.city,
      'Instagram Handle': formattedHandle,
      'Restaurant Website': formData.website.trim(),
      'Number of Locations': formData.locationsCount,
      'Monthly Marketing Budget': formData.monthlyBudget,
      'Looking For': lookingForValue,
      // Resilient fallback properties for backend mapping
      restaurantName: formData.restaurantName.trim(),
      contactPerson: formData.contactPerson.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      city: formData.city,
      instagramHandle: formattedHandle,
      website: formData.website.trim(),
      locationsCount: formData.locationsCount,
      monthlyBudget: formData.monthlyBudget,
      lookingFor: lookingForValue,
      goals: lookingForValue
    };

    try {
      await submitToGoogleSheets(payload);
      setSubmitted(true);
      setFormData(INITIAL_RESTAURANT_FORM);
    } catch (err: any) {
      setSubmitError(err.message || 'Unable to submit your strategy call request. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmitError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080d1a]/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-[#1e2d4d] rounded-2xl p-6 sm:p-8 shadow-2xl my-8 text-[#f8fafc]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isSubmitting}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1e2d4d] transition-colors cursor-pointer disabled:opacity-50"
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
              Thanks for reaching out to Creatzaar. Your strategy call request has been submitted successfully. Our team will contact you shortly.
            </p>
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

              {/* Submission Error Display */}
              {submitError && (
                <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/30 text-xs text-red-300 flex items-start gap-2.5 animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-semibold text-red-200">Submission note: </span>
                    <span>{submitError}</span>
                  </div>
                </div>
              )}

              {/* CTA & Cancel Buttons */}
              <div className="pt-3">
                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] font-bold text-sm sm:text-base shadow-lg shadow-[#a3e635]/20 flex items-center justify-center gap-2 transition-all transform active:scale-98 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <PhoneCall className="w-4 h-4" />
                        <span>Book My Strategy Call</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#1e2d4d] hover:bg-[#1e2d4d] hover:border-[#334155] text-[#cbd5e1] hover:text-[#f8fafc] text-sm font-semibold transition-all cursor-pointer text-center disabled:opacity-50 disabled:cursor-not-allowed"
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
