import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-6 max-w-7xl mx-auto w-full" id="projects">
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#4cd7f6] text-xl">folder_code</span>
          <span className="text-xs font-bold text-[#4cd7f6] uppercase tracking-widest">
            Portfolio Showcase
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#d4e4fa]">
          Projects &amp; Practical Work
        </h2>
        <p className="text-sm text-[#cbc3d7]">
          Hands-on applications built during my first-year engineering coursework
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((proj) => {
          let badgeColor = 'bg-[#d0bcff]/15 text-[#d0bcff]';
          let btnColor = 'bg-[#d0bcff] text-[#3c0091] hover:bg-[#a078ff] hover:text-[#ffffff]';

          if (proj.colorScheme === 'secondary') {
            badgeColor = 'bg-[#4cd7f6]/15 text-[#4cd7f6]';
            btnColor = 'bg-[#03b5d3] text-[#003640] hover:bg-[#4cd7f6] hover:text-[#001f26]';
          } else if (proj.colorScheme === 'tertiary') {
            badgeColor = 'bg-[#c0c1ff]/15 text-[#c0c1ff]';
            btnColor = 'bg-[#a078ff] text-[#001f26] hover:bg-[#d0bcff] hover:text-[#3c0091]';
          }

          return (
            <div
              key={proj.id}
              className="p-5 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex flex-col justify-between gap-4 shadow-lg hover:border-[#273647] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-full font-mono text-xs font-semibold ${badgeColor}`}>
                    {proj.number}
                  </span>
                  <span className="font-mono text-xs text-[#cbc3d7]">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#d4e4fa] group-hover:text-[#ffffff] transition-colors leading-snug">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#cbc3d7] leading-relaxed line-clamp-4">
                  {proj.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#1c2b3c] border border-[#273647] font-mono text-[11px] text-[#4cd7f6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-3 border-t border-[#1c2b3c]">
                <button
                  type="button"
                  onClick={() => setSelectedProject(proj)}
                  className={`flex-1 h-10 flex items-center justify-center gap-1.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-sm active:scale-95 transition-all ${btnColor}`}
                >
                  <span>Overview</span>
                  <span className="material-symbols-outlined text-base">visibility</span>
                </button>
                <a
                  href={proj.githubUrl || 'https://github.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 flex items-center justify-center gap-1.5 rounded-full bg-[#1c2b3c] hover:bg-[#273647] text-[#d4e4fa] font-bold text-xs uppercase tracking-wider border border-[#273647] active:scale-95 transition-all"
                >
                  <span>GitHub</span>
                  <span className="material-symbols-outlined text-base text-[#4cd7f6]">code</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal View for Project Overview */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
