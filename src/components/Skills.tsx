import React from 'react';

export const Skills: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-6 bg-[#010f1f]/40 border-y border-[#122131]/60" id="skills">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4cd7f6] text-xl">code_blocks</span>
            <span className="text-xs font-bold text-[#4cd7f6] uppercase tracking-widest">
              Capabilities
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#d4e4fa]">Skills &amp; Technologies</h2>
          <p className="text-sm text-[#cbc3d7]">
            Practical foundations and core academic computing disciplines
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Programming */}
          <div className="p-5 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex flex-col gap-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#d0bcff] font-semibold text-lg">
                <span className="material-symbols-outlined">terminal</span>
                <span>Programming</span>
              </div>
              <span className="font-mono text-xs text-[#4cd7f6] font-semibold">Core Focus</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <div className="px-3.5 py-2 rounded-xl bg-[#1c2b3c] border border-[#273647] flex items-center gap-2.5">
                <span className="font-mono text-xs text-[#d4e4fa] font-semibold">C Language</span>
                <span className="w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_6px_#4cd7f6]" />
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-[#1c2b3c] border border-[#273647] flex items-center gap-2.5">
                <span className="font-mono text-xs text-[#d4e4fa] font-semibold">Python</span>
                <span className="w-2 h-2 rounded-full bg-[#d0bcff] shadow-[0_0_6px_#d0bcff]" />
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="p-5 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex flex-col gap-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#c0c1ff] font-semibold text-lg">
                <span className="material-symbols-outlined">database</span>
                <span>Database</span>
              </div>
              <span className="font-mono text-xs text-[#cbc3d7]">Relational</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1.5 rounded-xl bg-[#1c2b3c] border border-[#273647] font-mono text-xs text-[#d4e4fa]">
                MySQL
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#1c2b3c] border border-[#273647] font-mono text-xs text-[#d4e4fa]">
                Schema &amp; Tables
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#1c2b3c] border border-[#273647] font-mono text-xs text-[#d4e4fa]">
                CRUD Queries
              </span>
            </div>
          </div>

          {/* Web Basics */}
          <div className="p-5 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex flex-col gap-2 shadow-sm">
            <div className="flex items-center gap-2 text-[#4cd7f6]">
              <span className="material-symbols-outlined text-lg">html</span>
              <span className="font-mono text-xs font-semibold uppercase">Web Basics</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1.5 rounded-xl bg-[#1c2b3c] border border-[#273647] font-semibold text-xs text-[#d4e4fa]">
                HTML5
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#1c2b3c] border border-[#273647] font-semibold text-xs text-[#d4e4fa]">
                CSS3
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#1c2b3c] border border-[#273647] font-semibold text-xs text-[#cbc3d7]">
                Responsive Layouts
              </span>
            </div>
          </div>

          {/* Dev Tools */}
          <div className="p-5 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex flex-col gap-2 shadow-sm">
            <div className="flex items-center gap-2 text-[#d0bcff]">
              <span className="material-symbols-outlined text-lg">construction</span>
              <span className="font-mono text-xs font-semibold uppercase">Dev Tools</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1.5 rounded-xl bg-[#1c2b3c] border border-[#273647] font-semibold text-xs text-[#d4e4fa]">
                Git
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#1c2b3c] border border-[#273647] font-semibold text-xs text-[#d4e4fa]">
                GitHub
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#1c2b3c] border border-[#273647] font-semibold text-xs text-[#cbc3d7]">
                VS Code
              </span>
            </div>
          </div>

          {/* Hardware & IoT Foundations */}
          <div className="md:col-span-2 p-5 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex flex-col gap-3 shadow-sm">
            <div className="flex items-center gap-2 text-[#4cd7f6] font-semibold text-lg">
              <span className="material-symbols-outlined">memory</span>
              <span>Hardware &amp; IoT Foundations</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1.5 rounded-xl bg-[#1c2b3c] border border-[#273647] font-mono text-xs text-[#d4e4fa]">
                Arduino Uno
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#1c2b3c] border border-[#273647] font-mono text-xs text-[#d4e4fa]">
                Sensors (IR, Ultrasonic HC-SR04, DHT11 Temp)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#1c2b3c] border border-[#273647] font-mono text-xs text-[#d4e4fa]">
                Basic Electronics, Breadboards &amp; LEDs
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-[#1c2b3c] border border-[#273647] font-mono text-xs text-[#d4e4fa]">
                Embedded C Wiring
              </span>
            </div>
          </div>

          {/* Core Academic CS Concepts */}
          <div className="md:col-span-2 p-5 rounded-2xl bg-[#1c2b3c] border border-[#273647] flex flex-col gap-3 shadow-sm">
            <span className="text-xs font-bold text-[#cbc3d7] uppercase tracking-wider">
              Academic Computing Fundamentals
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-[#122131] border border-[#273647] font-mono text-xs text-[#d0bcff]">
                Functions &amp; Recursion
              </span>
              <span className="px-3 py-1 rounded-full bg-[#122131] border border-[#273647] font-mono text-xs text-[#4cd7f6]">
                Arrays &amp; Matrices
              </span>
              <span className="px-3 py-1 rounded-full bg-[#122131] border border-[#273647] font-mono text-xs text-[#c0c1ff]">
                Pointers &amp; Memory
              </span>
              <span className="px-3 py-1 rounded-full bg-[#122131] border border-[#273647] font-mono text-xs text-[#d4e4fa]">
                Structures (struct)
              </span>
              <span className="px-3 py-1 rounded-full bg-[#122131] border border-[#273647] font-mono text-xs text-[#d4e4fa]">
                Dynamic Allocation (malloc)
              </span>
              <span className="px-3 py-1 rounded-full bg-[#122131] border border-[#273647] font-mono text-xs text-[#4cd7f6]">
                Algorithmic Thinking
              </span>
            </div>
          </div>
        </div>

        {/* Currently Exploring Horizon Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#122131] to-[#273647] border border-[#1c2b3c] flex flex-col gap-3 shadow-md">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4cd7f6] text-2xl">rocket_launch</span>
            <h3 className="text-lg font-bold text-[#d4e4fa]">Currently Exploring</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#cbc3d7]">
            Fields and technology branches I am proactively researching for upcoming terms:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-1">
            <div className="p-3 rounded-xl bg-[#010f1f]/80 border border-[#1c2b3c] flex flex-col justify-between gap-1">
              <span className="font-mono text-xs text-[#d4e4fa] font-semibold">Artificial Intelligence</span>
              <span className="text-[10px] text-[#4cd7f6] font-mono uppercase font-bold">Reading</span>
            </div>
            <div className="p-3 rounded-xl bg-[#010f1f]/80 border border-[#1c2b3c] flex flex-col justify-between gap-1">
              <span className="font-mono text-xs text-[#d4e4fa] font-semibold">Machine Learning</span>
              <span className="text-[10px] text-[#d0bcff] font-mono uppercase font-bold">Tutorials</span>
            </div>
            <div className="p-3 rounded-xl bg-[#010f1f]/80 border border-[#1c2b3c] flex flex-col justify-between gap-1">
              <span className="font-mono text-xs text-[#d4e4fa] font-semibold">Full-Stack Web Dev</span>
              <span className="text-[10px] text-[#c0c1ff] font-mono uppercase font-bold">Starting</span>
            </div>
            <div className="p-3 rounded-xl bg-[#010f1f]/80 border border-[#1c2b3c] flex flex-col justify-between gap-1">
              <span className="font-mono text-xs text-[#d4e4fa] font-semibold">Advanced Database</span>
              <span className="text-[10px] text-[#4cd7f6] font-mono uppercase font-bold">Next Term</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
