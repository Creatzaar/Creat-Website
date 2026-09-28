import React from 'react';
import { X, Utensils, Sparkles, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStrategyCall: () => void;
  onOpenCreatorRegister: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenStrategyCall,
  onOpenCreatorRegister
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080d1a]/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-[#1e2d4d] rounded-2xl p-6 sm:p-8 shadow-2xl my-8 text-[#f8fafc]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1e2d4d] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#a3e635] p-2 flex items-center justify-center shadow-md shadow-[#a3e635]/20">
              <Utensils className="w-6 h-6 text-[#080d1a]" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-[#f8fafc]">About Creatzaar</h3>
              <p className="text-xs text-[#bef264] font-medium">creatzaar.com — Creator Marketing + Restaurant Growth Platform</p>
            </div>
          </div>

          <div className="space-y-4 text-[#cbd5e1] text-sm leading-relaxed">
            <h2 className="text-2xl font-bold font-display text-[#f8fafc]">
              We're Building a Better Way for Restaurants and Creators to Work Together.
            </h2>
            <p>
              Creatzaar connects restaurants with creators through transparent, performance-driven campaigns.
            </p>
            <p>
              Restaurants get authentic, high-quality creator-generated content, localized Instagram exposure, and genuine foot traffic without dealing with expensive agency retainers or endless DM negotiations.
            </p>
            <p>
              Creators get exciting opportunities to discover new cafés and restaurants, express their culinary aesthetic freely, and earn <span className="text-[#a3e635] font-semibold">up to 90% cashback</span> on eligible orders.
            </p>

            <div className="p-4 rounded-xl bg-[#111e3b] border border-[#a3e635]/30 text-center my-4">
              <span className="text-base font-bold text-[#f8fafc] tracking-wide">
                One platform. Two sides. One ecosystem.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#080d1a] border border-[#1e2d4d]">
                <h4 className="text-sm font-semibold text-[#f8fafc] mb-1">For Restaurants</h4>
                <p className="text-xs text-[#94a3b8]">
                  Turn food into content, and turn content into customers through local creators.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#080d1a] border border-[#1e2d4d]">
                <h4 className="text-sm font-semibold text-[#f8fafc] mb-1">For Creators</h4>
                <p className="text-xs text-[#94a3b8]">
                  Eat what you love, create in your own style, and get cashback on every approved reel.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#1e2d4d] flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenCreatorRegister();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#1e2d4d] text-[#f8fafc] hover:bg-[#1e2d4d] text-sm font-semibold transition-colors cursor-pointer"
            >
              Join as Creator
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenStrategyCall();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] text-sm font-bold transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#a3e635]/20 cursor-pointer"
            >
              <span>Partner as Restaurant</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
