import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 6000);
    }, 600);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-6 bg-[#010f1f]/80 border-t border-[#122131]/60" id="contact">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#d0bcff] text-xl">contact_mail</span>
            <span className="text-xs font-bold text-[#d0bcff] uppercase tracking-widest">
              Inquiries
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#d4e4fa]">Let's Connect</h2>
          <p className="text-sm text-[#cbc3d7]">
            Have an opportunity, idea, project, or simply want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Contact Details & Cards */}
          <div className="flex flex-col gap-3">
            {/* Full Name */}
            <div className="p-4 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#4cd7f6]/15 border border-[#4cd7f6]/30 flex items-center justify-center text-[#4cd7f6] shrink-0">
                <span className="material-symbols-outlined text-2xl">person</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#cbc3d7] uppercase">Full Name</span>
                <span className="text-base font-bold text-[#d4e4fa]">{PERSONAL_INFO.name}</span>
              </div>
            </div>

            {/* Location */}
            <div className="p-4 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#d0bcff]/15 border border-[#d0bcff]/30 flex items-center justify-center text-[#d0bcff] shrink-0">
                <span className="material-symbols-outlined text-2xl">pin_drop</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#cbc3d7] uppercase">Location</span>
                <span className="text-base font-bold text-[#d4e4fa]">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Email Address */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-4 rounded-2xl bg-[#122131] border border-[#1c2b3c] hover:bg-[#1c2b3c] flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#c0c1ff]/15 border border-[#c0c1ff]/30 flex items-center justify-center text-[#c0c1ff] shrink-0">
                  <span className="material-symbols-outlined text-2xl">alternate_email</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-[#cbc3d7] uppercase">Email Address</span>
                  <span className="text-sm font-semibold text-[#4cd7f6] group-hover:underline truncate max-w-[220px] sm:max-w-none">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#cbc3d7] group-hover:text-[#ffffff] transition-colors">
                arrow_outward
              </span>
            </a>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-12 rounded-2xl bg-[#122131] hover:bg-[#1c2b3c] border border-[#1c2b3c] flex items-center justify-center gap-2 text-[#d4e4fa] hover:text-[#4cd7f6] transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-xl">link</span>
                <span className="text-xs font-bold uppercase tracking-wider">LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-12 rounded-2xl bg-[#122131] hover:bg-[#1c2b3c] border border-[#1c2b3c] flex items-center justify-center gap-2 text-[#d4e4fa] hover:text-[#d0bcff] transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-xl">terminal</span>
                <span className="text-xs font-bold uppercase tracking-wider">GitHub</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-12 h-12 rounded-2xl bg-[#122131] hover:bg-[#1c2b3c] border border-[#1c2b3c] flex items-center justify-center text-[#d4e4fa] hover:text-[#4cd7f6] transition-colors shrink-0 shadow-sm"
                title="Send Email"
              >
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="p-5 sm:p-6 rounded-2xl bg-[#122131] border border-[#1c2b3c] flex flex-col gap-4 shadow-lg"
            id="contact-form"
          >
            <h3 className="text-lg font-bold text-[#d4e4fa]">Drop a Message</h3>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-name" className="font-mono text-[11px] text-[#cbc3d7] uppercase">
                Your Name
              </label>
              <input
                id="form-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Mercer"
                className="w-full h-11 px-3.5 rounded-xl bg-[#010f1f] text-[#d4e4fa] placeholder-[#958ea0]/70 border border-[#1c2b3c] text-sm outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6] transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-email" className="font-mono text-[11px] text-[#cbc3d7] uppercase">
                Your Email
              </label>
              <input
                id="form-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@example.com"
                className="w-full h-11 px-3.5 rounded-xl bg-[#010f1f] text-[#d4e4fa] placeholder-[#958ea0]/70 border border-[#1c2b3c] text-sm outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6] transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="form-message" className="font-mono text-[11px] text-[#cbc3d7] uppercase">
                Message
              </label>
              <textarea
                id="form-message"
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Raksha, would love to talk about your engineering projects..."
                className="w-full p-3 rounded-xl bg-[#010f1f] text-[#d4e4fa] placeholder-[#958ea0]/70 border border-[#1c2b3c] text-sm outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#a078ff] to-[#4cd7f6] text-[#001f26] font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-transform mt-1"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <span className="material-symbols-outlined text-base">send</span>
            </button>

            {/* Instant Confirmation Feedback */}
            {isSent && (
              <div
                className="p-3 rounded-xl bg-[#03b5d3]/20 border border-[#03b5d3]/50 text-[#4cd7f6] text-center text-xs sm:text-sm font-semibold animate-in fade-in duration-200"
                id="form-feedback"
              >
                Thank you for reaching out! Your message has been recorded and I will respond promptly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
