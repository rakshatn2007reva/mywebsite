import React from 'react';
import { SOFT_SKILLS } from '../data/portfolioData';

export const SoftSkills: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-6 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold text-[#4cd7f6] uppercase tracking-widest">
          Personal Attributes
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#d4e4fa]">
          Soft Skills &amp; Mindset
        </h2>
      </div>

      {/* Pill-shaped tags cloud */}
      <div className="flex flex-wrap gap-2.5">
        {SOFT_SKILLS.map((skill, idx) => {
          let iconColor = 'text-[#4cd7f6]';
          if (skill.color === 'primary') iconColor = 'text-[#d0bcff]';
          if (skill.color === 'tertiary') iconColor = 'text-[#c0c1ff]';

          return (
            <span
              key={idx}
              className="px-4 py-2 rounded-full bg-[#1c2b3c] border border-[#273647] text-xs sm:text-sm text-[#d4e4fa] font-medium flex items-center gap-2 hover:border-[#4cd7f6]/40 transition-colors"
            >
              <span className={`material-symbols-outlined text-base ${iconColor}`}>
                {skill.icon}
              </span>
              <span>{skill.name}</span>
            </span>
          );
        })}
      </div>

      {/* Narrative card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex flex-col gap-3 shadow-md">
        <div className="flex items-center gap-2 text-[#d0bcff]">
          <span className="material-symbols-outlined text-2xl">self_improvement</span>
          <span className="text-base sm:text-lg font-bold">Core Learning Philosophy</span>
        </div>
        <p className="text-sm sm:text-base text-[#d4e4fa] leading-relaxed">
          My biggest strength is my genuine willingness to learn and continuously improve. I prefer understanding difficult engineering concepts step-by-step from fundamental principles rather than simply memorizing answers. I remain deeply curious about new technologies and naturally enjoy exploring unfamiliar topics.
        </p>
      </div>
    </section>
  );
};
