import React, { useState } from 'react';
import { CreatorRegisterFormData } from '../types';
import { X, CheckCircle2, Sparkles, Instagram, Award, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { submitToGoogleSheets, CreatorSubmissionPayload } from '../services/googleSheets';

interface CreatorRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CITY_OPTIONS = [
  'Delhi NCR (Delhi, Gurgaon, Noida, Faridabad)',
  'Mumbai',
  'Bengaluru',
  'Hyderabad',
  'Pune',
  'Chennai',
  'Kolkata',
  'Jaipur',
  'Chandigarh',
  'Goa',
  'Ahmedabad',
  'Lucknow',
  'Other City'
];

const CATEGORY_OPTIONS = [
  'Food & Dining',
  'Café & Specialty Coffee',
  'Lifestyle & Daily Vlogs',
  'Fashion & Beauty',
  'Travel & Hospitality',
  'Cocktails & Nightlife',
  'Street Food & Hidden Gems',
  'Fine Dining & Luxury',
  'Fitness & Healthy Eating',
  'Desserts & Bakery'
];

const FOLLOWER_OPTIONS = [
  '1,000 - 5,000 followers (Nano Creator)',
  '5,000 - 15,000 followers (Micro Creator)',
  '15,000 - 50,000 followers (Rising Creator)',
  '50,000 - 100,000 followers (Mid-Tier Creator)',
  '100,000 - 250,000 followers (Macro Creator)',
  '250,000+ followers (Elite Creator)'
];

const REEL_VIEWS_OPTIONS = [
  '1,000 - 5,000 views',
  '5,000 - 15,000 views',
  '15,000 - 50,000 views',
  '50,000 - 100,000 views',
  '100,000 - 500,000 views',
  '500,000+ viral views'
];

const LANGUAGE_OPTIONS = [
  'English & Hindi',
  'English Only',
  'Hindi Only',
  'Hinglish (Urban Conversational)',
  'English, Hindi & Punjabi',
  'English, Hindi & Marathi',
  'English, Hindi & Bengali',
  'English & South Indian Languages (Kannada, Tamil, Telugu, Malayalam)',
  'Multilingual (English + Regional)'
];

const PREFERRED_CITIES_OPTIONS = [
  'Delhi NCR (Delhi, Gurgaon, Noida)',
  'Delhi NCR + Surrounding (Jaipur, Chandigarh)',
  'Mumbai Metropolitan Region',
  'Bengaluru',
  'Hyderabad',
  'Pune',
  'All Major Metros (Pan-India Travel)',
  'North India Cities',
  'South India Cities',
  'West India Cities'
];

const INITIAL_FORM_DATA: CreatorRegisterFormData = {
  fullName: '',
  instagramUsername: '',
  phone: '',
  email: '',
  city: '',
  category: '',
  followersRange: '',
  avgReelViews: '',
  profileUrl: '',
  contentCategories: [],
  languages: [],
  preferredCities: []
};

export const CreatorRegisterModal: React.FC<CreatorRegisterModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<CreatorRegisterFormData>(INITIAL_FORM_DATA);

  if (!isOpen) return null;

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

    const formattedUsername = formData.instagramUsername.trim().startsWith('@')
      ? formData.instagramUsername.trim()
      : `@${formData.instagramUsername.trim()}`;

    const languagesText = formData.languages.length > 0
      ? formData.languages.join(', ')
      : 'English & Hindi';

    const preferredCitiesText = formData.preferredCities.length > 0
      ? formData.preferredCities.join(', ')
      : formData.city;

    const payload: CreatorSubmissionPayload = {
      formType: 'creator',
      'Submission Date & Time': submissionDate,
      'Full Name': formData.fullName.trim(),
      'Instagram Username': formattedUsername,
      'Phone Number (WhatsApp)': formData.phone.trim(),
      'Email Address': formData.email.trim(),
      'Primary City': formData.city,
      'Primary Creator Category': formData.category,
      'Instagram Followers': formData.followersRange,
      'Average Reel Views': formData.avgReelViews,
      'Instagram Profile URL': formData.profileUrl.trim(),
      'Languages Spoken / Captions': languagesText,
      'Preferred Collaboration Cities': preferredCitiesText,
      // Resilient fallback properties for backend mapping
      fullName: formData.fullName.trim(),
      instagramUsername: formattedUsername,
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      city: formData.city,
      category: formData.category,
      followers: formData.followersRange,
      views: formData.avgReelViews,
      profileUrl: formData.profileUrl.trim(),
      languages: languagesText,
      preferredCities: preferredCitiesText
    };

    try {
      await submitToGoogleSheets(payload);
      setSubmitted(true);
      setFormData(INITIAL_FORM_DATA);
    } catch (err: any) {
      setSubmitError(err.message || 'Unable to submit your application. Please check your connection and try again.');
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
        
        {/* Close & Cancel */}
        <div className="absolute top-5 right-5 flex items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1e2d4d] transition-colors cursor-pointer disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="p-1.5 rounded-lg text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1e2d4d] transition-colors cursor-pointer disabled:opacity-50"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-center mx-auto text-[#a3e635]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-display text-[#f8fafc]">
              Application Submitted!
            </h3>
            <p className="text-[#cbd5e1] text-sm max-w-md mx-auto leading-relaxed">
              You're in! Your Creatzaar creator application has been submitted successfully. Our team will review your profile and contact you shortly.
            </p>
            <div className="p-4 bg-[#080d1a] border border-[#1e2d4d] rounded-xl text-xs text-[#cbd5e1] max-w-md mx-auto space-y-2 text-left">
              <div className="flex items-center gap-2 text-[#a3e635] font-semibold">
                <Sparkles className="w-4 h-4" /> Next Steps:
              </div>
              <p className="text-[#94a3b8]">1. Keep your Instagram profile public so our team can check content quality.</p>
              <p className="text-[#94a3b8]">2. Watch your WhatsApp for the invitation link to claim your first meal!</p>
            </div>
            <div className="pt-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] font-bold text-sm transition-all shadow-md shadow-[#a3e635]/20 cursor-pointer"
              >
                Browse Campaigns
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1.5 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/30 text-[#bef264] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> For Instagram Creators
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#f8fafc]">
                Join Creatzaar
              </h2>
              <p className="text-sm text-[#cbd5e1]">
                Order from restaurants you love, create authentic content, and get <span className="text-[#a3e635] font-semibold">up to 90% cashback</span>.
              </p>
            </div>

            {/* Strategic Note */}
            <div className="mb-5 p-3 rounded-xl bg-[#111e3b] border border-[#a3e635]/30 text-xs text-[#f8fafc] flex items-start gap-2.5">
              <Award className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
              <span>
                <strong>Follower count isn't everything.</strong> We care about content quality, audience relevance, visual aesthetic, and genuine engagement.
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] placeholder:text-[#64748b] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors"
                  />
                </div>

                {/* Instagram Username */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Instagram Username *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#64748b] text-sm">@</span>
                    <input
                      type="text"
                      required
                      placeholder="priya_eats"
                      value={formData.instagramUsername}
                      onChange={e => setFormData({ ...formData, instagramUsername: e.target.value })}
                      className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl pl-8 pr-3.5 py-2.5 text-sm text-[#f8fafc] placeholder:text-[#64748b] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Phone Number (WhatsApp) *
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
                    placeholder="priya@gmail.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] placeholder:text-[#64748b] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Primary City *
                  </label>
                  <select
                    required
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors cursor-pointer"
                  >
                    <option value="">Select Primary City</option>
                    {CITY_OPTIONS.map(c => (
                      <option key={c} value={c} className="bg-[#0f172a] text-[#f8fafc]">{c}</option>
                    ))}
                  </select>
                </div>

                {/* Creator Category */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Primary Creator Category *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors cursor-pointer"
                  >
                    <option value="">Select Primary Creator Category</option>
                    {CATEGORY_OPTIONS.map(cat => (
                      <option key={cat} value={cat} className="bg-[#0f172a] text-[#f8fafc]">{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Instagram Followers */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Instagram Followers *
                  </label>
                  <select
                    required
                    value={formData.followersRange}
                    onChange={e => setFormData({ ...formData, followersRange: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors cursor-pointer"
                  >
                    <option value="">Select Instagram Followers</option>
                    {FOLLOWER_OPTIONS.map(range => (
                      <option key={range} value={range} className="bg-[#0f172a] text-[#f8fafc]">{range}</option>
                    ))}
                  </select>
                </div>

                {/* Average Reel Views */}
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Average Reel Views *
                  </label>
                  <select
                    required
                    value={formData.avgReelViews}
                    onChange={e => setFormData({ ...formData, avgReelViews: e.target.value })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors cursor-pointer"
                  >
                    <option value="">Select Average Reel Views</option>
                    {REEL_VIEWS_OPTIONS.map(views => (
                      <option key={views} value={views} className="bg-[#0f172a] text-[#f8fafc]">{views}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Instagram Profile URL */}
              <div>
                <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                  Instagram Profile URL *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://instagram.com/priya_eats"
                  value={formData.profileUrl}
                  onChange={e => setFormData({ ...formData, profileUrl: e.target.value })}
                  className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] placeholder:text-[#64748b] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors"
                />
              </div>

              {/* Languages & Preferred Cities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Languages Spoken / Captions *
                  </label>
                  <select
                    required
                    value={formData.languages[0] || ''}
                    onChange={e => setFormData({ ...formData, languages: e.target.value ? [e.target.value] : [] })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors cursor-pointer"
                  >
                    <option value="">Select Languages Spoken / Captions</option>
                    {LANGUAGE_OPTIONS.map(lang => (
                      <option key={lang} value={lang} className="bg-[#0f172a] text-[#f8fafc]">{lang}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                    Preferred Collaboration Cities *
                  </label>
                  <select
                    required
                    value={formData.preferredCities[0] || ''}
                    onChange={e => setFormData({ ...formData, preferredCities: e.target.value ? [e.target.value] : [] })}
                    className="w-full bg-[#080d1a] border border-[#1e2d4d] rounded-xl px-3.5 py-2.5 text-sm text-[#f8fafc] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-colors cursor-pointer"
                  >
                    <option value="">Select Preferred Collaboration Cities</option>
                    {PREFERRED_CITIES_OPTIONS.map(city => (
                      <option key={city} value={city} className="bg-[#0f172a] text-[#f8fafc]">{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-start gap-2.5 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-semibold text-red-200">Submission note: </span>
                    <span>{submitError}</span>
                  </div>
                </div>
              )}

              {/* CTA & Cancel Button on Right-Hand Side */}
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
                        <span>Join Creatzaar</span>
                        <ArrowRight className="w-4 h-4" />
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
                  By joining, you agree to post original content and respect restaurant campaign terms. No subscription fees.
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
