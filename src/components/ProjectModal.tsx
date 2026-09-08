import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010f1f]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#122131] border border-[#1c2b3c] p-6 flex flex-col gap-5 shadow-2xl text-[#d4e4fa]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-[#1c2b3c] pb-4">
          <div className="flex flex-col gap-1">
            <span className="px-2.5 py-0.5 rounded-full bg-[#1c2b3c] text-[#4cd7f6] font-mono text-xs font-semibold self-start">
              {project.number} • {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#ffffff] mt-1">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1c2b3c] hover:bg-[#273647] flex items-center justify-center text-[#cbc3d7] hover:text-[#ffffff] transition-colors shrink-0"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Summary */}
        <div className="flex flex-col gap-1.5">
          <h4 className="text-xs uppercase font-bold text-[#d0bcff] tracking-wider">
            Project Overview
          </h4>
          <p className="text-sm text-[#cbc3d7] leading-relaxed">
            {project.overviewDetails.summary}
          </p>
        </div>

        {/* Key Features */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xs uppercase font-bold text-[#4cd7f6] tracking-wider">
            Key Implementations &amp; Capabilities
          </h4>
          <ul className="flex flex-col gap-2">
            {project.overviewDetails.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#d4e4fa]">
                <span className="material-symbols-outlined text-[#4cd7f6] text-base shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xs uppercase font-bold text-[#c0c1ff] tracking-wider">
            Tools &amp; Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.overviewDetails.technologiesUsed.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-[#1c2b3c] border border-[#273647] font-mono text-xs text-[#d4e4fa]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Future Enhancements */}
        <div className="flex flex-col gap-2 p-3.5 rounded-xl bg-[#1c2b3c]/60 border border-[#273647]">
          <h4 className="text-xs uppercase font-bold text-[#acedff] tracking-wider flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            Future Enhancements Planned
          </h4>
          <ul className="list-disc list-inside text-xs text-[#cbc3d7] flex flex-col gap-1">
            {project.overviewDetails.futureEnhancements.map((enh, idx) => (
              <li key={idx}>{enh}</li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-[#1c2b3c]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#1c2b3c] hover:bg-[#273647] text-xs font-semibold text-[#d4e4fa] flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-base text-[#4cd7f6]">code</span>
              <span>View Source</span>
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] text-[#001f26] text-xs font-bold uppercase tracking-wider shadow-md active:scale-95 transition-transform"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
