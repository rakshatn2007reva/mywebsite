import React from 'react';
import { PRACTICAL_PILLARS } from '../data/portfolioData';

export const PracticalExperience: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-6 bg-[#010f1f]/50 border-y border-[#122131]/60">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold text-[#d0bcff] uppercase tracking-widest">
            Hands-On Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#d4e4fa]">
            Learning Through Practice
          </h2>
          <p className="text-sm text-[#cbc3d7]">
            Structured learning pillars turning academic theory into muscle memory
          </p>
        </div>

        {/* 4 Numbered Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PRACTICAL_PILLARS.map((item) => {
            let numberColor = 'text-[#4cd7f6]/30';
            if (item.color === 'primary') numberColor = 'text-[#d0bcff]/30';
            if (item.color === 'tertiary') numberColor = 'text-[#c0c1ff]/30';

            return (
              <div
                key={item.num}
                className="p-5 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex items-start gap-4 shadow-sm hover:border-[#273647] transition-all"
              >
                <span className={`text-4xl sm:text-5xl font-black font-mono select-none leading-none ${numberColor}`}>
                  {item.num}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-[#d4e4fa]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#cbc3d7] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
