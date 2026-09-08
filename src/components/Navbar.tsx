import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#hero', label: 'Home', id: 'hero' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#interests', label: 'Interests', id: 'interests' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#051424]/85 backdrop-blur-xl border-b border-[#1c2b3c]/60 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Monogram Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="flex items-center gap-3 group"
          id="brand-logo"
        >
          <img 
            alt="Raksha TN Monogram Logo" 
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105" 
            src={PERSONAL_INFO.logoUrl}
          />
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-[#d4e4fa] leading-none group-hover:text-[#4cd7f6] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-[10px] text-[#4cd7f6] tracking-wider mt-0.5">
              CSE • REVA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0d1c2d]/70 p-1.5 rounded-full border border-[#1c2b3c]/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#1c2b3c] text-[#4cd7f6] shadow-[0_0_12px_rgba(76,215,246,0.2)]'
                    : 'text-[#cbc3d7] hover:text-[#d4e4fa] hover:bg-[#122131]/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] text-[#001f26] font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(208,188,255,0.25)] hover:shadow-[0_0_24px_rgba(76,215,246,0.4)] active:scale-95 transition-all"
            id="desktop-connect-btn"
          >
            <span className="material-symbols-outlined text-[16px]">alternate_email</span>
            <span>Let's Connect</span>
          </a>

          {/* User Icon Avatar */}
          <div className="w-8 h-8 rounded-full bg-[#d0bcff] flex items-center justify-center shadow-inner">
            <span className="material-symbols-outlined text-[#3c0091] text-[18px]">person</span>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#1c2b3c]/60 text-[#d4e4fa] hover:text-[#4cd7f6] hover:bg-[#1c2b3c] transition-colors border border-[#1c2b3c]"
            id="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-[#122131]/95 backdrop-blur-2xl p-4 flex flex-col gap-2 border-b border-[#1c2b3c] shadow-[0_12px_36px_rgba(0,0,0,0.7)] animate-in fade-in duration-200">
          <nav className="flex flex-col gap-1.5 font-semibold text-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-4 py-2.5 rounded-xl flex items-center justify-between transition-colors ${
                    isActive
                      ? 'text-[#4cd7f6] bg-[#1c2b3c]/80 font-bold'
                      : 'text-[#cbc3d7] hover:text-[#d4e4fa] hover:bg-[#1c2b3c]/40'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-sm opacity-50">arrow_forward</span>
                </a>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-[#1c2b3c]/70">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="w-full h-11 flex items-center justify-center gap-2 bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] rounded-full text-xs font-bold text-[#001f26] uppercase tracking-wider shadow-[0_0_20px_rgba(208,188,255,0.3)] active:scale-98 transition-transform"
            >
              <span className="material-symbols-outlined text-[18px]">alternate_email</span>
              <span>Let's Connect</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
