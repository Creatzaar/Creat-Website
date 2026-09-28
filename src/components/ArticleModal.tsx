import React from 'react';
import { BlogPost } from '../types';
import { X, Clock, Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

interface ArticleModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenStrategyCall: () => void;
  onOpenCreatorRegister: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  post,
  isOpen,
  onClose,
  onOpenStrategyCall,
  onOpenCreatorRegister
}) => {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080d1a]/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0f172a] border border-[#1e2d4d] rounded-2xl p-6 sm:p-9 shadow-2xl my-8 text-[#f8fafc] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="sticky top-0 float-right z-10 p-2 rounded-xl bg-[#080d1a] text-[#94a3b8] hover:text-[#f8fafc] border border-[#1e2d4d] transition-colors cursor-pointer"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider bg-[#a3e635]/10 text-[#bef264] border border-[#a3e635]/30">
                {post.category}
              </span>
              <span className="text-[#94a3b8] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
              <span className="text-[#94a3b8] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold font-display text-[#f8fafc] leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-2 text-xs text-[#94a3b8] pt-1">
              <User className="w-3.5 h-3.5 text-[#a3e635]" />
              <span>By {post.author}</span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-[#1e2d4d] max-h-80 bg-[#080d1a]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 text-[#cbd5e1] text-base leading-relaxed">
            <p className="text-lg font-medium text-[#f8fafc] border-l-3 border-[#a3e635] pl-4 italic">
              {post.snippet}
            </p>
            {post.content.map((p, idx) => (
              <p key={idx} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Bottom call to action banner inside article */}
          <div className="mt-8 p-6 rounded-2xl bg-[#111e3b] border border-[#1e2d4d] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-[#f8fafc]">
                {post.target === 'restaurants' ? 'Ready to grow your restaurant footfall?' : 'Ready to start earning cashback?'}
              </h4>
              <p className="text-xs text-[#94a3b8] mt-1">
                {post.target === 'restaurants' ? 'Launch a targeted creator campaign with Creatzaar.' : 'Order food, create reels, and get up to 90% cashback.'}
              </p>
            </div>
            {post.target === 'restaurants' ? (
              <button
                onClick={() => {
                  onClose();
                  onOpenStrategyCall();
                }}
                className="shrink-0 px-5 py-2.5 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] text-sm font-bold transition-colors shadow-md shadow-[#a3e635]/20 cursor-pointer"
              >
                Book a Strategy Call
              </button>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  onOpenCreatorRegister();
                }}
                className="shrink-0 px-5 py-2.5 rounded-xl bg-[#a3e635] hover:bg-[#bef264] text-[#080d1a] text-sm font-bold transition-colors shadow-md shadow-[#a3e635]/20 cursor-pointer"
              >
                Join Creatzaar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
