import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-6 max-w-7xl mx-auto w-full" id="education">
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#d0bcff] text-xl">school</span>
          <span className="text-xs font-bold text-[#d0bcff] uppercase tracking-widest">
            Milestones
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#d4e4fa]">Education</h2>
        <p className="text-sm text-[#cbc3d7]">
          Academic track record and ongoing higher education journey
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative flex flex-col gap-6 pl-4 sm:pl-6">
        {/* Vertical Guide Line */}
        <div className="absolute left-2 sm:left-3 top-3 bottom-3 w-0.5 bg-[#1c2b3c]" />

        {EDUCATION_DATA.map((item) => {
          return (
            <div key={item.id} className="relative pl-6 sm:pl-8 flex flex-col gap-2">
              {/* Timeline Node Glow Dot */}
              <div
                className={`absolute -left-[9px] sm:-left-[7px] top-2 w-4 h-4 rounded-full border-4 border-[#051424] transition-transform ${
                  item.color === 'secondary'
                    ? 'bg-[#4cd7f6] shadow-[0_0_12px_#4cd7f6]'
                    : item.color === 'primary'
                    ? 'bg-[#d0bcff] shadow-[0_0_10px_#d0bcff]'
                    : 'bg-[#c0c1ff] shadow-[0_0_10px_#c0c1ff]'
                }`}
              />

              {/* Education Card */}
              <div className="p-5 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex flex-col gap-2.5 shadow-md hover:border-[#273647] transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#1c2b3c] text-[#4cd7f6] font-mono text-xs font-semibold">
                    {item.period}
                  </span>
                  {item.isCurrent ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#a078ff] text-[#001f26] text-[11px] uppercase font-extrabold tracking-wider">
                      First Year
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#1c2b3c] text-[#cbc3d7] font-mono text-xs">
                      {item.scoreLabel}: <strong className="text-[#d0bcff]">{item.scoreValue}</strong>
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#d4e4fa]">
                  {item.degree}
                </h3>
                <p className="text-sm text-[#cbc3d7]">{item.institution}</p>

                {/* Explicit Highlighted CGPA Box for REVA */}
                {item.isCgpa && (
                  <div className="mt-2 p-3.5 rounded-xl bg-[#1c2b3c] border border-[#273647] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[#4cd7f6] text-xl">
                        grade
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-[#d4e4fa]">
                          Current Academic CGPA
                        </span>
                        <span className="text-[11px] text-[#cbc3d7]">
                          First Year Cumulative Performance
                        </span>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-mono text-2xl font-extrabold text-[#4cd7f6]">
                        9.00
                      </span>
                      <span className="text-xs text-[#cbc3d7] font-mono">/ 10</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
