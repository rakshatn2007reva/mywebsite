import React from 'react';

interface BottomNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeSection, onNavigate }) => {
  const items = [
    { id: 'hero', label: 'Overview', icon: 'terminal' },
    { id: 'skills', label: 'Skills', icon: 'code' },
    { id: 'projects', label: 'Projects', icon: 'folder' },
    { id: 'education', label: 'Academics', icon: 'school' },
    { id: 'contact', label: 'Contact', icon: 'send' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#051424]/90 backdrop-blur-xl border-t border-[#1c2b3c] shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
        {items.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-all ${
                isActive
                  ? 'text-[#4cd7f6] scale-105'
                  : 'text-[#cbc3d7] hover:text-[#d4e4fa]'
              }`}
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span className={`text-[10px] mt-0.5 tracking-wide ${isActive ? 'font-bold text-[#4cd7f6]' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
