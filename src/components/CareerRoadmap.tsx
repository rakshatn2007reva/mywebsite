import React from 'react';
import { ASPIRATIONS } from '../data/portfolioData';

export const CareerRoadmap: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-10 max-w-7xl mx-auto w-full">
      {/* 1. Where I'm Headed */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1c2b3c] via-[#122131] to-[#273647] border border-[#1c2b3c] flex flex-col gap-5 shadow-xl">
        <div className="flex items-center gap-2 text-[#4cd7f6]">
          <span className="material-symbols-outlined text-2xl">explore</span>
          <span className="text-xs font-bold uppercase tracking-widest">Future Roadmap</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#d4e4fa]">
          Where I'm Headed
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-[#0d1c2d]/60 border border-[#1c2b3c]">
            <span className="font-mono text-xs text-[#d0bcff] uppercase font-bold tracking-wider">
              Short-Term Goals
            </span>
            <p className="text-xs sm:text-sm text-[#cbc3d7] leading-relaxed">
              Build rigorous programming fundamentals, elevate my communication prowess, sustain high academic distinction (maintaining a 9+ CGPA), and secure rich hands-on experience through mini-projects, student hackathons, certifications, and technical workshops.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-2xl bg-[#0d1c2d]/60 border border-[#1c2b3c]">
            <span className="font-mono text-xs text-[#4cd7f6] uppercase font-bold tracking-wider">
              Long-Term Vision
            </span>
            <p className="text-xs sm:text-sm text-[#cbc3d7] leading-relaxed">
              Establish an impactful engineering career in the software technology sector as a versatile problem solver who develops innovative solutions to real-world challenges. I want to thoroughly explore multiple domains of Computer Science during my college years before locking in a specialty aligned with my passions.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Future Aspirations */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold text-[#d0bcff] uppercase tracking-widest">
            Actionable Intent
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#d4e4fa]">
            Future Aspirations
          </h2>
        </div>

        {/* College Growth Manifesto Quote */}
        <div className="p-5 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex items-start gap-3 shadow-sm">
          <span className="material-symbols-outlined text-[#d0bcff] text-2xl shrink-0 mt-0.5">
            format_quote
          </span>
          <p className="text-sm sm:text-base text-[#d4e4fa] leading-relaxed italic">
            "I believe college is not only about earning a degree but also about discovering genuine interests, developing useful skills, gaining practical experience, meeting new people, and becoming an independent and confident individual."
          </p>
        </div>

        {/* Aspirations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {ASPIRATIONS.map((item, idx) => {
            let iconColor = 'text-[#4cd7f6]';
            if (item.color === 'primary') iconColor = 'text-[#d0bcff]';
            if (item.color === 'tertiary') iconColor = 'text-[#c0c1ff]';

            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#1c2b3c] border border-[#273647] flex items-center gap-2.5 shadow-sm hover:border-[#4cd7f6]/40 transition-colors"
              >
                <span className={`material-symbols-outlined text-lg ${iconColor}`}>
                  {item.icon}
                </span>
                <span className="text-xs sm:text-sm text-[#d4e4fa] font-semibold">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
