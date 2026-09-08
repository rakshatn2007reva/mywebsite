import React, { useState } from 'react';
import { PERSONAL_INFO, CODE_SNIPPETS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'c' | 'python' | 'arduino'>('c');
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentSnippet = CODE_SNIPPETS[activeTab];

  const handleRunCode = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 450);
  };

  const handleCopyCode = () => {
    const rawText = currentSnippet.lines.map((l) => l.text).join('\n');
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-16 overflow-hidden flex flex-col gap-6 max-w-7xl mx-auto" id="hero">
      {/* Ambient Radial Photonic Blooms */}
      <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-[#d0bcff]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-48 -left-16 w-72 h-72 rounded-full bg-[#4cd7f6]/15 blur-3xl pointer-events-none" />

      {/* Student Status Pill Badge */}
      <div className="flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#1c2b3c] border border-[#273647] shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_8px_#4cd7f6]" />
        <span className="font-mono text-xs text-[#4cd7f6] font-medium tracking-wide">
          {PERSONAL_INFO.batch} • REVA University
        </span>
      </div>

      {/* Main Typography Header */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase text-[#d0bcff] tracking-widest">
          {PERSONAL_INFO.title}
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#d4e4fa] tracking-tight font-extrabold leading-tight">
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-xl sm:text-2xl text-[#4cd7f6] font-semibold">
          {PERSONAL_INFO.role}
        </p>
      </div>

      {/* Persona & Narrative */}
      <div className="flex flex-col gap-3 max-w-3xl">
        <p className="text-base sm:text-lg text-[#d0bcff] font-medium italic border-l-2 border-[#d0bcff]/40 pl-3">
          "{PERSONAL_INFO.quote}"
        </p>
        <p className="text-sm sm:text-base text-[#cbc3d7] leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <a
          href="#projects"
          className="flex-1 sm:flex-none min-w-[150px] h-12 px-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] text-[#001f26] font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(208,188,255,0.3)] hover:shadow-[0_0_28px_rgba(76,215,246,0.45)] active:scale-95 transition-all"
        >
          <span>Explore Work</span>
          <span className="material-symbols-outlined text-base">arrow_downward</span>
        </a>
        <a
          href="#contact"
          className="flex-1 sm:flex-none min-w-[150px] h-12 px-6 flex items-center justify-center gap-2 rounded-full bg-[#1c2b3c] hover:bg-[#273647] border border-[#273647] text-[#d4e4fa] font-bold text-xs uppercase tracking-wider shadow-sm active:scale-95 transition-all"
        >
          <span>Get In Touch</span>
          <span className="material-symbols-outlined text-base text-[#4cd7f6]">mail</span>
        </a>
      </div>

      {/* Interactive Glassmorphic Terminal Card Mockup */}
      <div className="w-full mt-2 rounded-2xl bg-[#010f1f]/90 border border-[#1c2b3c] backdrop-blur-xl p-4 sm:p-5 flex flex-col gap-3 shadow-2xl relative overflow-hidden">
        {/* Terminal Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#122131] pb-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ffb4ab]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#03b5d3]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#4cd7f6]/80 inline-block" />
            </div>
            <span className="font-mono text-xs text-[#cbc3d7] ml-2 font-medium">
              raksha@reva-dev:~
            </span>
          </div>

          {/* Interactive Snippet Tabs */}
          <div className="flex items-center gap-1 bg-[#051424] p-1 rounded-lg border border-[#1c2b3c]">
            {(['c', 'python', 'arduino'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setShowOutput(false);
                }}
                className={`px-2.5 py-1 rounded font-mono text-[11px] transition-all ${
                  activeTab === tab
                    ? 'bg-[#1c2b3c] text-[#4cd7f6] font-semibold shadow-sm'
                    : 'text-[#cbc3d7] hover:text-[#d4e4fa]'
                }`}
              >
                {tab === 'c' ? 'main.c' : tab === 'python' ? 'profile.py' : 'arduino.ino'}
              </button>
            ))}
          </div>

          {/* Code Execution & Copy Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyCode}
              title="Copy code"
              className="p-1.5 rounded-lg bg-[#0d1c2d] hover:bg-[#1c2b3c] text-[#cbc3d7] hover:text-[#d4e4fa] border border-[#1c2b3c] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">
                {copied ? 'check' : 'content_copy'}
              </span>
            </button>
            <button
              type="button"
              onClick={handleRunCode}
              disabled={isRunning}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#4cd7f6]/15 hover:bg-[#4cd7f6]/25 border border-[#4cd7f6]/40 text-[#4cd7f6] font-mono text-xs font-semibold active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[14px]">
                {isRunning ? 'sync' : 'play_arrow'}
              </span>
              <span>{isRunning ? 'Running...' : 'Run'}</span>
            </button>
          </div>
        </div>

        {/* Code Content lines with syntax highlighting */}
        <div className="font-mono text-[12px] sm:text-[13px] leading-relaxed p-3.5 rounded-xl bg-[#010f1f] border border-[#0d1c2d] flex flex-col gap-1 overflow-x-auto text-[#d4e4fa]">
          {currentSnippet.lines.map((line, idx) => {
            let colorClass = 'text-[#d4e4fa]';
            if (line.type === 'keyword') colorClass = 'text-[#d0bcff] font-semibold';
            if (line.type === 'comment') colorClass = 'text-[#958ea0] italic';
            if (line.type === 'function') colorClass = 'text-[#c0c1ff] font-semibold';
            if (line.type === 'statement') colorClass = 'text-[#4cd7f6]';
            if (line.type === 'print') colorClass = 'text-[#a078ff]';

            return (
              <div key={idx} className="flex gap-4">
                <span className="text-[#494454] select-none w-5 text-right shrink-0">
                  {idx + 1}
                </span>
                <span className={colorClass}>{line.text}</span>
              </div>
            );
          })}
        </div>

        {/* Terminal Run Output Drawer */}
        {showOutput && (
          <div className="p-3 rounded-xl bg-[#0d1c2d] border border-[#4cd7f6]/30 font-mono text-xs text-[#4cd7f6] flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between text-[#cbc3d7] text-[10px] uppercase tracking-wider border-b border-[#1c2b3c] pb-1">
              <span>Console Output</span>
              <button
                type="button"
                onClick={() => setShowOutput(false)}
                className="hover:text-[#ffffff]"
              >
                Close
              </button>
            </div>
            <pre className="whitespace-pre-wrap pt-1 font-mono text-[11px] sm:text-xs">
              {currentSnippet.output}
            </pre>
          </div>
        )}

        {/* Floating Tech Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#122131]">
          <span className="px-2.5 py-1 rounded-full bg-[#122131] border border-[#1c2b3c] font-mono text-[11px] text-[#4cd7f6] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]" />
            C Programming
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#122131] border border-[#1c2b3c] font-mono text-[11px] text-[#d0bcff] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d0bcff]" />
            Python
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#122131] border border-[#1c2b3c] font-mono text-[11px] text-[#c0c1ff] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c0c1ff]" />
            MySQL
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#122131] border border-[#1c2b3c] font-mono text-[11px] text-[#acedff] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]" />
            Arduino
          </span>
        </div>
      </div>
    </section>
  );
};
