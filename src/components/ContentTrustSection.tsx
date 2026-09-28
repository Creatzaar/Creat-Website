import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const ContentTrustSection: React.FC = () => {
  const stats = [
    {
      id: 'stat-ugc-trust',
      value: '92%',
      text: 'of consumers trust UGC more than brand-produced ads',
      source: 'Source: Nielsen'
    },
    {
      id: 'stat-ctr',
      value: '4×',
      text: 'higher click-through rate compared to traditional brand content'
    },
    {
      id: 'stat-conversions',
      value: '29%',
      text: 'higher web conversions when UGC is present on product pages'
    }
  ];

  const pyramidBars = [
    {
      id: 'tier-nano',
      name: 'Nano Creator Content',
      width: 'w-full',
      isHighlight: true,
      annotation: 'Where Creatzaar focuses',
      barStyle: 'bg-pink-600 text-white border-pink-600 shadow-sm shadow-pink-500/20'
    },
    {
      id: 'tier-micro',
      name: 'Micro Creator Content',
      width: 'w-[82%]',
      isHighlight: false,
      barStyle: 'bg-white border-slate-200 text-slate-800'
    },
    {
      id: 'tier-macro',
      name: 'Macro Creator Content',
      width: 'w-[66%]',
      isHighlight: false,
      barStyle: 'bg-slate-50 border-slate-200/90 text-slate-700'
    },
    {
      id: 'tier-brand',
      name: 'Traditional Brand Ad',
      width: 'w-[50%]',
      isHighlight: false,
      barStyle: 'bg-slate-100/80 border-slate-200/70 text-slate-500'
    }
  ];

  return (
    <section
      id="content-trust-section"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-16 sm:my-20"
    >
      {/* Light editorial container */}
      <div className="bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 text-slate-900 shadow-sm">
        
        {/* 1. Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 tracking-tight leading-tight"
          >
            Why are restaurants switching to creator content?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed"
          >
            People trust real experiences more than polished advertisements. Creatzaar helps restaurants and cafés turn creator content into authentic marketing that reaches the right local audience.
          </motion.p>
        </div>

        {/* 2 & 3. Two-Column Layout: Left = Statistics, Right = Trust Pyramid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: 3 White Statistic Cards Stacked Vertically */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-5">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                id={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-none mb-2">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                  {stat.text}
                </p>
                {stat.source && (
                  <span className="text-[11px] sm:text-xs text-slate-400 font-medium mt-2 block">
                    {stat.source}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Content Trust Pyramid */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Header */}
              <div className="border-b border-slate-100 pb-4 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-pink-600 block mb-1">
                  Authenticity &amp; Influence Scale
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 tracking-wide">
                  CONTENT TRUST PYRAMID
                </h3>
              </div>

              {/* 4 Decreasing Width Horizontal Bars */}
              <div className="space-y-4">
                {pyramidBars.map((bar, idx) => (
                  <motion.div
                    key={bar.id}
                    id={bar.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.1 + idx * 0.08 }}
                    className="space-y-1.5"
                  >
                    <div className="flex items-center gap-3">
                      {/* Bar */}
                      <div
                        className={`${bar.width} ${bar.barStyle} border rounded-xl py-3 px-4 sm:px-5 flex items-center justify-between transition-all`}
                      >
                        <span className="text-xs sm:text-sm font-semibold truncate pr-2">
                          {bar.name}
                        </span>
                        {bar.isHighlight && (
                          <Sparkles className="w-4 h-4 text-white shrink-0" />
                        )}
                      </div>

                      {/* Small Annotation next to top bar (Desktop) */}
                      {bar.isHighlight && bar.annotation && (
                        <div className="shrink-0 hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-[11px] font-bold whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                          <span>{bar.annotation}</span>
                        </div>
                      )}
                    </div>

                    {/* Small Annotation on Mobile */}
                    {bar.isHighlight && bar.annotation && (
                      <div className="sm:hidden pt-0.5">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-[10px] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                          {bar.annotation}
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Subtle hierarchy footnote */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="text-slate-500 font-medium">Higher Audience Trust &amp; Local Reach</span>
              <span className="text-slate-400 font-normal">Authenticity Hierarchy</span>
            </div>
          </div>

        </div>

        {/* 4. Closing Statement (Full-width highlighted quote-style box) */}
        <motion.div
          id="content-trust-closing-quote"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-8 sm:mt-10 p-5 sm:p-7 rounded-2xl bg-pink-50/80 border border-pink-200 text-slate-900"
        >
          <p className="text-sm sm:text-base lg:text-lg font-medium text-slate-800 leading-relaxed italic text-center sm:text-left">
            “People don&apos;t just want to see advertisements. They want to see real people experiencing real places. That&apos;s where creator content changes restaurant marketing.”
          </p>
        </motion.div>

      </div>
    </section>
  );
};
