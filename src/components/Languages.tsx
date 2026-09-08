import React from 'react';
import { LANGUAGES } from '../data/portfolioData';

export const Languages: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-6 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold text-[#4cd7f6] uppercase tracking-widest">
          Communication
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#d4e4fa]">Languages</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {LANGUAGES.map((lang, idx) => {
          let badgeColor = 'text-[#4cd7f6] bg-[#4cd7f6]/10';
          if (lang.color === 'primary') badgeColor = 'text-[#d0bcff] bg-[#d0bcff]/10';
          if (lang.color === 'tertiary') badgeColor = 'text-[#c0c1ff] bg-[#c0c1ff]/10';

          return (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex flex-col items-center text-center gap-1.5 shadow-sm hover:border-[#273647] transition-all"
            >
              <span className="text-xl font-bold text-[#d4e4fa]">
                {lang.name}
              </span>
              <span className={`px-3 py-0.5 rounded-full font-mono text-xs font-semibold ${badgeColor}`}>
                {lang.level}
              </span>
              <span className="text-xs text-[#cbc3d7]">
                {lang.role}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
