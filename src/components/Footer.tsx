import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:pb-12 flex flex-col items-center text-center gap-6 bg-[#010f1f] border-t border-[#122131]">
      {/* Motto Card */}
      <div className="p-5 rounded-2xl bg-[#0d1c2d] border border-[#1c2b3c] max-w-lg w-full flex flex-col items-center gap-2 shadow-sm">
        <span className="material-symbols-outlined text-[#4cd7f6] text-2xl">auto_awesome</span>
        <p className="text-sm sm:text-base text-[#d4e4fa] italic">
          "Learn continuously, improve consistently, and never be afraid to try something new."
        </p>
      </div>

      {/* Identification Details */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-lg font-bold text-[#d4e4fa] tracking-wider">
          {PERSONAL_INFO.name}
        </span>
        <span className="text-xs sm:text-sm text-[#cbc3d7]">
          {PERSONAL_INFO.role} • {PERSONAL_INFO.institution}
        </span>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="font-mono text-xs text-[#4cd7f6] hover:underline mt-0.5"
        >
          {PERSONAL_INFO.email}
        </a>
      </div>

      {/* Quick Footer Links */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-[#cbc3d7] font-mono text-xs">
        <a href="#hero" className="hover:text-[#d0bcff] transition-colors">Home</a>
        <span>•</span>
        <a href="#about" className="hover:text-[#d0bcff] transition-colors">About</a>
        <span>•</span>
        <a href="#education" className="hover:text-[#d0bcff] transition-colors">Academics</a>
        <span>•</span>
        <a href="#skills" className="hover:text-[#d0bcff] transition-colors">Skills</a>
        <span>•</span>
        <a href="#projects" className="hover:text-[#d0bcff] transition-colors">Projects</a>
        <span>•</span>
        <a href="#contact" className="hover:text-[#d0bcff] transition-colors">Contact</a>
      </div>

      {/* Copyright */}
      <div className="font-mono text-[11px] text-[#958ea0]">
        © 2026 {PERSONAL_INFO.name}. Built with curiosity and code.
      </div>
    </footer>
  );
};
