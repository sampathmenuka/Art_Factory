import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  // Close the "More" dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'faq', label: 'Frequently Asked Questions' },
  ];

  const mobileItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Blog' },
  ];

  const dropdownItems = [
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Features' },
    { id: 'faq', label: "FAQ's" },
    { id: 'contact', label: 'Blog' },
  ];

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#2a6f97]/90 shadow-xl backdrop-blur-lg' : 'bg-[#2a6f97] shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-14' : 'h-16'}`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="group flex items-center gap-2"
              aria-label="Art Factory home"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#ffd700] animate-pulse-ring" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#ffd700]" />
              </span>
              <h1 className="font-display text-[#2a6f97] text-xl sm:text-2xl font-bold bg-white px-3 py-1 rounded-lg transition-transform duration-300 group-hover:-rotate-2 group-hover:scale-105">
                Art Factory
              </h1>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative py-1 font-medium transition-colors duration-200 hover:text-[#ffd700] ${
                  activeSection === item.id ? 'text-[#ffd700]' : 'text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-[#ffd700] transition-transform duration-300 ${
                    activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}

            {/* More Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white hover:text-[#ffd700] transition-colors duration-200 font-medium flex items-center"
                aria-expanded={isDropdownOpen}
              >
                More
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`absolute right-0 mt-3 w-48 origin-top-right rounded-xl bg-[#2a6f97] py-2 shadow-2xl ring-1 ring-white/20 transition-all duration-200 ${
                  isDropdownOpen
                    ? 'visible scale-100 opacity-100'
                    : 'invisible scale-95 opacity-0 -translate-y-1'
                }`}
              >
                {dropdownItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-white transition-all duration-200 hover:bg-white/10 hover:pl-6 hover:text-[#ffd700]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => scrollToSection('contact')} className="btn-primary px-6 py-2">
              Contact Us
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors duration-200 active:scale-95 hover:bg-white/20 hover:text-[#ffd700]"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile drawer (outside the header so the header's backdrop blur doesn't trap it) */}
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${isMenuOpen ? 'visible' : 'invisible'}`}
      aria-hidden={!isMenuOpen}
    >
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`absolute inset-0 bg-[#2a6f97]/40 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-[#2a6f97] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/15">
          <span className="font-display text-xl font-bold text-white">Art Factory</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:rotate-90 hover:text-[#ffd700] active:scale-95"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1">
            {mobileItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <li
                  key={item.label}
                  className={`transition-all duration-500 ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${150 + index * 60}ms` : '0ms' }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium transition-colors duration-200 active:scale-[0.98] ${
                      isActive ? 'bg-white/15 text-[#ffd700]' : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                    <ArrowRight className={`h-5 w-5 ${isActive ? 'opacity-100' : 'opacity-40'}`} />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-4 border-t border-white/15 px-6 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <a
            href="mailto:contact@artfactory.com"
            className="flex items-center gap-3 text-sm text-white/80 hover:text-[#ffd700]"
          >
            <Mail className="h-4 w-4" />
            contact@artfactory.com
          </a>
          <button onClick={() => scrollToSection('contact')} className="btn-primary w-full px-6 py-3.5 text-lg">
            Contact Us
            <ArrowRight className="btn-arrow h-5 w-5" />
          </button>
        </div>
      </aside>
    </div>
    </>
  );
};

export default Header;
