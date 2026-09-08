import React from 'react';
import { HOBBIES } from '../data/portfolioData';

export const BeyondCode: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-6 bg-[#010f1f]/40 border-y border-[#122131]/60" id="interests">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#c0c1ff] text-xl">interests</span>
            <span className="text-xs font-bold text-[#c0c1ff] uppercase tracking-widest">
              Life &amp; Hobbies
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#d4e4fa]">Beyond Code</h2>
          <p className="text-sm text-[#cbc3d7]">
            The activities and pastimes that keep me inspired and balanced
          </p>
        </div>

        {/* 6 Engaging Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HOBBIES.map((hobby) => {
            let iconBg = 'bg-[#d0bcff]/20 text-[#d0bcff] border-[#d0bcff]/30';
            if (hobby.color === 'secondary') {
              iconBg = 'bg-[#4cd7f6]/20 text-[#4cd7f6] border-[#4cd7f6]/30';
            } else if (hobby.color === 'tertiary') {
              iconBg = 'bg-[#c0c1ff]/20 text-[#c0c1ff] border-[#c0c1ff]/30';
            }

            return (
              <div
                key={hobby.id}
                className="p-5 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex items-start gap-4 shadow-sm hover:border-[#273647] hover:shadow-md transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105 ${iconBg}`}>
                  <span className="material-symbols-outlined text-2xl">
                    {hobby.iconName}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-[#d4e4fa] group-hover:text-[#ffffff] transition-colors">
                    {hobby.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#cbc3d7] leading-relaxed">
                    {hobby.description}
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
