import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-6 bg-[#010f1f]/50 border-y border-[#122131]/60" id="about">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4cd7f6] text-xl">account_circle</span>
            <span className="text-xs font-bold text-[#4cd7f6] uppercase tracking-widest">
              Introduction
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#d4e4fa]">About Me</h2>
        </div>

        {/* Student Bio Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex flex-col gap-4 shadow-lg">
          <p className="text-base sm:text-lg text-[#d4e4fa] leading-relaxed">
            I am <strong className="text-[#d0bcff] font-semibold">{PERSONAL_INFO.name}</strong>, a first-year B.Tech Computer Science and Engineering student at REVA University. I am a curious, enthusiastic, and adaptable learner with an interest in technology, programming, creativity, and continuous self-development.
          </p>
          <p className="text-sm sm:text-base text-[#cbc3d7] leading-relaxed">
            {PERSONAL_INFO.aboutDetailed}
          </p>
          <div className="p-4 rounded-xl bg-[#1c2b3c]/80 border border-[#273647] flex items-center gap-3 text-[#4cd7f6] text-sm">
            <span className="material-symbols-outlined text-2xl shrink-0">lightbulb</span>
            <span>
              Learning is an active process—practical experimentation is the absolute fastest way to master code.
            </span>
          </div>
        </div>

        {/* Quick Highlights: Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Currently Deepening Card */}
          <div className="p-5 rounded-2xl bg-[#1c2b3c] border border-[#273647] flex flex-col gap-2 shadow-sm">
            <div className="flex items-center gap-2 text-[#d0bcff]">
              <span className="material-symbols-outlined text-lg">auto_stories</span>
              <span className="text-xs font-bold uppercase tracking-wider">Currently Deepening</span>
            </div>
            <p className="text-xs text-[#cbc3d7] mb-1">
              Active engineering subjects and technical competencies:
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[#122131] border border-[#273647] font-mono text-xs text-[#4cd7f6]">
                C Programming
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#122131] border border-[#273647] font-mono text-xs text-[#d0bcff]">
                Python
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#122131] border border-[#273647] font-mono text-xs text-[#c0c1ff]">
                MySQL Basics
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#122131] border border-[#273647] font-mono text-xs text-[#d4e4fa]">
                Git &amp; GitHub
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#122131] border border-[#273647] font-mono text-xs text-[#acedff]">
                Arduino Microcontrollers
              </span>
            </div>
          </div>

          {/* Base Location & Tech Hub */}
          <div className="p-5 rounded-2xl bg-[#1c2b3c] border border-[#273647] flex items-center justify-between shadow-sm">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-[#cbc3d7] uppercase tracking-wider">Base Location</span>
              <span className="text-xl sm:text-2xl font-bold text-[#d4e4fa]">Bengaluru, India</span>
              <span className="text-sm text-[#4cd7f6]">Karnataka Tech Hub • Silicon Valley of India</span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[#4cd7f6]/15 border border-[#4cd7f6]/30 flex items-center justify-center text-[#4cd7f6] shrink-0">
              <span className="material-symbols-outlined text-3xl">location_on</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
