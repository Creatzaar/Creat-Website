import React from 'react';
import { PageView } from '../types';
import { Scale, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

interface TermsConditionsViewProps {
  onNavigate: (page: PageView) => void;
  onOpenStrategyCall: () => void;
}

export const TermsConditionsView: React.FC<TermsConditionsViewProps> = ({
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
          <Scale className="w-3.5 h-3.5" /> Platform Governance
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#f8fafc] tracking-tight">
          Terms &amp; Conditions
        </h1>
        <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-3xl">
          These Terms &amp; Conditions govern the use of Creatzaar platform services by both restaurant partners and creators. By registering an account, booking a campaign slot, or publishing sponsored content, you agree to be bound by these provisions.
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
            <h2>Platform Model &amp; Campaign Activation</h2>
          </div>
          <p>
            Creatzaar provides an automated matchmaking and verification infrastructure connecting food and beverage businesses with food and lifestyle creators.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#94a3b8]">
            <li>Campaigns define designated cashback tiers (ranging typically from 30% to 90%), target deliverables (e.g., 1 Instagram Reel), eligible dining windows, and slot allocations.</li>
            <li>Restaurant partners agree to honor valid campaign reservations and provide authentic dining experiences to approved creators.</li>
            <li>Creatzaar reserves the right to review, pause, or adjust campaigns to safeguard community standards and fair participation.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="bg-[#0c1324] border border-[#1e2d4d] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-[#f8fafc] font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-center text-[#bef264]">
              2
            </div>
            <h2>Creator Obligations &amp; Content Guidelines</h2>
          </div>
          <p>
            Approved creators must adhere to strict quality and honesty guidelines when claiming dining cashback:
          </p>
          <div className="space-y-2.5 pt-1">
            {[
              { title: 'Original Content', desc: 'All footage must be authentic, high-definition, shot on-premises, and created by the registered creator.' },
              { title: 'Tagging & Collaboration', desc: 'Creators must correctly tag the restaurant handle and @creatzaar as specified in the campaign deliverables.' },
              { title: 'No Artificial Engagement', desc: 'Engagement pods, bought views, bot comments, or artificial reach generation result in immediate forfeiture of cashback and permanent ban.' },
              { title: 'Timely Submission', desc: 'Draft links or live post verification must be submitted within the specified campaign deadline (usually 7 days from dining date).' }
            ].map((rule, idx) => (
              <div key={idx} className="bg-[#080d1a] border border-[#1e2d4d]/60 rounded-xl p-3.5">
                <div className="text-sm font-semibold text-[#f8fafc] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#a3e635]" /> {rule.title}
                </div>
                <p className="text-xs sm:text-sm text-[#94a3b8] mt-1 pl-6">{rule.desc}</p>
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
            <h2>Bill Verification &amp; Cashback Payouts</h2>
          </div>
          <p>
            Cashback is calculated based on legitimate food and beverage consumption up to the campaign cap. Creators must submit a clear photograph of the official itemized tax invoice.
          </p>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200/90 text-xs sm:text-sm">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p>
              Cashback is disbursed directly via UPI or IMPS within 48 to 72 hours of deliverable approval. Any attempt to submit tampered receipts, duplicate bills, or non-conforming content will lead to instant rejection.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-[#0c1324] border border-[#1e2d4d] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-[#f8fafc] font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-center text-[#bef264]">
              4
            </div>
            <h2>Intellectual Property &amp; License</h2>
          </div>
          <p>
            Creators retain moral authorship of their creative works. By claiming campaign benefits, creators grant the featured restaurant partner and Creatzaar a non-exclusive, worldwide, royalty-free license to reshare, embed, and feature the content on their owned digital channels.
          </p>
        </section>

        {/* Section 5 */}
        <section className="bg-[#0c1324] border border-[#1e2d4d] rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-[#f8fafc] font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center justify-center text-[#bef264]">
              5
            </div>
            <h2>Governing Law &amp; Dispute Resolution</h2>
          </div>
          <p>
            These terms are governed by the laws of India. Any legal dispute or claim arising in connection with Creatzaar services shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
          </p>
        </section>

      </div>
    </div>
  );
};
