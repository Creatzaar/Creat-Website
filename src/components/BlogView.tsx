import React, { useState } from 'react';
import { PageView, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/mockData';
import { BookOpen, Clock, Calendar, Search, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface BlogViewProps {
  onNavigate: (page: PageView) => void;
  onSelectPost: (post: BlogPost) => void;
  onOpenStrategyCall: () => void;
  onOpenCreatorRegister: () => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  onNavigate,
  onSelectPost,
  onOpenStrategyCall,
  onOpenCreatorRegister
}) => {
  const [filter, setFilter] = useState<'all' | 'restaurants' | 'creators'>('all');
  const [search, setSearch] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesFilter = filter === 'all' || post.target === filter;
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                          post.snippet.toLowerCase().includes(search.toLowerCase()) ||
                          post.category.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-24 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a3e635]/10 border border-[#a3e635]/30 text-[#bef264] text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" /> Food & Creator Growth Intelligence
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-[#f8fafc] tracking-tight">
          Creatzaar Insights & Guides
        </h1>
        <p className="text-[#cbd5e1] text-sm sm:text-base">
          Proven strategies for restaurants expanding local footfall and creators scaling their personal brand and dining cashback.
        </p>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="inline-flex p-1 rounded-xl bg-[#0c1324] border border-[#1e2d4d] w-full sm:w-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#a3e635] text-[#080d1a] font-bold shadow-sm'
                : 'text-[#94a3b8] hover:text-[#f8fafc]'
            }`}
          >
            All Articles ({BLOG_POSTS.length})
          </button>
          <button
            onClick={() => setFilter('restaurants')}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === 'restaurants'
                ? 'bg-[#a3e635] text-[#080d1a] font-bold shadow-sm'
                : 'text-[#94a3b8] hover:text-[#f8fafc]'
            }`}
          >
            For Restaurants ({BLOG_POSTS.filter(b => b.target === 'restaurants').length})
          </button>
          <button
            onClick={() => setFilter('creators')}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === 'creators'
                ? 'bg-[#a3e635] text-[#080d1a] font-bold shadow-sm'
                : 'text-[#94a3b8] hover:text-[#f8fafc]'
            }`}
          >
            For Creators ({BLOG_POSTS.filter(b => b.target === 'creators').length})
          </button>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-[#64748b] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search guides..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-[#0f172a] border border-[#1e2d4d] rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-[#f8fafc] placeholder:text-[#64748b] outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635]"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => onSelectPost(post)}
            className="bg-[#0f172a] border border-[#1e2d4d] hover:border-[#a3e635]/50 hover:shadow-lg rounded-2xl overflow-hidden flex flex-col justify-between transition-all cursor-pointer group shadow-sm"
          >
            <div>
              <div className="h-44 relative overflow-hidden bg-[#080d1a]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm bg-[#080d1a]/85 border border-[#a3e635]/30 text-[#bef264] backdrop-blur-xs">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center gap-3 text-[11px] text-[#94a3b8]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#a3e635]" /> {post.readTime}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-lg font-bold font-display text-[#f8fafc] group-hover:text-[#bef264] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-[#94a3b8] line-clamp-3 leading-relaxed">
                  {post.snippet}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <span className="text-xs font-semibold text-[#a3e635] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Full Guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
