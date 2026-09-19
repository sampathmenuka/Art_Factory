import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const links = [
    { href: '#privacy', label: 'Privacy Policy' },
    { href: '#terms', label: 'Terms of Use' },
    { href: '#support', label: 'Support' },
  ];

  return (
    <footer className="relative bg-[#2a6f97] text-white pt-12 pb-32 lg:pb-12 overflow-hidden">
      {/* Decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -right-16 h-56 w-56 bg-[#00a896]/20 animate-morph" />
        <div className="absolute -bottom-24 left-10 h-48 w-48 bg-white/5 animate-morph [animation-delay:-6s]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-bold mb-1">Art Factory</p>
            <p className="text-white/80 text-sm">
              Copyright © 2025 Art Factory Company
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-medium text-[#ffd700] transition-colors duration-200 hover:text-[#ffed4e]"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-[#ffed4e] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#ffd700] text-[#2a6f97] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffed4e]"
          >
            <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-white/80">
            Inspiring creativity and connecting artists worldwide through innovative digital experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
