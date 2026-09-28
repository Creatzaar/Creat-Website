import React from 'react';
import { PageView } from '../types';
import { Shield, ArrowLeft, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyViewProps {
  onNavigate: (page: PageView) => void;
  onOpenStrategyCall: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({
  onNavigate,
  onOpenStrategyCall
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-24 space-y-12">
      {/* Back link & Category Badge */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('restaurants')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#a3e635] hover:text-[#bef264] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
        <span className="text-xs text-[#64748b]">Last Updated: March 2026</span>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/30 text-[#bef264] text-xs font-semibold uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5" /> Legal & Transparency
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#f8fafc] tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-3xl">
          At Creatzaar (operated via creatzaar.com), we respect the privacy of our partner restaurants, cafés, and participating creators. This Privacy Policy details how we collect, use, disclose, and safeguard your data when utilizing our creator marketing, cashback, and UGC platforms.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-8 text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
        
        {/* Section 1 */}
        <section className="bg-[#0c1324] border border-[#1e2d4d] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-[#f8fafc] font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-center text-[#bef264]">
              1
            </div>
            <h2>Information We Collect</h2>
          </div>
          <p>
            When you register as a restaurant partner or join as a content creator, we collect information necessary to facilitate dining campaigns and verify content deliverables:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#94a3b8]">
            <li><strong className="text-[#f8fafc]">Restaurant Details:</strong> Business name, representative contact, phone number, email address, physical outlet locations, GST/tax information, and brand visual guidelines.</li>
            <li><strong className="text-[#f8fafc]">Creator Profile:</strong> Full name, social media handles (Instagram, YouTube), follower demographic data, portfolio links, phone number, and payout details (UPI ID / bank accounts for verified cashback settlement).</li>
            <li><strong className="text-[#f8fafc]">Campaign Deliverables:</strong> Published Reel URLs, performance metrics, high-resolution media uploads, and dining invoice receipts for bill verification.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="bg-[#0c1324] border border-[#1e2d4d] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-[#f8fafc] font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-center text-[#bef264]">
              2
            </div>
            <h2>How We Use Your Information</h2>
          </div>
          <p>
            We process collected information for legitimate business purposes, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              'Matching creators with hyper-local restaurant campaigns',
              'Validating dining bills and calculating eligible cashback tiers',
              'Automating cashback disbursements via secure banking channels',
              'Generating aggregated ROI and footfall analytics for restaurant partners',
              'Preventing fraudulent claims or automated duplicate engagement',
              'Sending campaign notices, slot confirmations, and payout updates'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-[#080d1a] border border-[#1e2d4d]/60 rounded-xl p-3 text-xs sm:text-sm text-[#cbd5e1]">
                <CheckCircle2 className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-[#0c1324] border border-[#1e2d4d] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-[#f8fafc] font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-center text-[#bef264]">
              3
            </div>
            <h2>Media Usage and Content Distribution</h2>
          </div>
          <p>
            By participating in Creatzaar campaigns, creators agree that published Reels, photography, and review footage generated as part of a campaign may be featured by the respective restaurant partner and Creatzaar for marketing and showcase purposes, in accordance with the specific campaign terms agreed upon during slot reservation.
          </p>
        </section>

        {/* Section 4 */}
        <section className="bg-[#0c1324] border border-[#1e2d4d] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-[#f8fafc] font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-center text-[#bef264]">
              4
            </div>
            <h2>Data Protection and Security</h2>
          </div>
          <p>
            Creatzaar implements enterprise-grade technical safeguards to maintain the confidentiality and integrity of your personal and financial details. Payout information is encrypted in transit and at rest. We never sell or license your personal contact information to third-party data brokers.
          </p>
        </section>

        {/* Section 5 */}
        <section className="bg-[#0c1324] border border-[#1e2d4d] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-[#f8fafc] font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-center text-[#bef264]">
              5
            </div>
            <h2>Contact Us</h2>
          </div>
          <p>
            If you have questions regarding this Privacy Policy or wish to exercise data access, modification, or deletion rights, reach out to our legal team:
          </p>
          <div className="p-4 rounded-xl bg-[#080d1a] border border-[#1e2d4d] space-y-1 font-mono text-xs text-[#94a3b8]">
            <p className="text-[#f8fafc] font-bold font-sans text-sm">Creatzaar Legal & Privacy</p>
            <p>Email: legal@creatzaar.com / privacy@creatzaar.com</p>
            <p>Support: support@creatzaar.com</p>
            <p>Delhi & Bengaluru, India</p>
          </div>
        </section>

      </div>
    </div>
  );
};
