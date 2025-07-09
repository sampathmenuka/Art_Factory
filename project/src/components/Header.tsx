import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const dropdownItems = [
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Features' },
    { id: 'faq', label: "FAQ's" },
    { id: 'contact', label: 'Blog' },
  ];

  return (
    <header className="bg-[#2a6f97] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-[#2a6f97] text-2xl font-bold bg-white px-3 py-1 rounded">
              Art Factory
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-white hover:text-[#ffd700] transition-colors duration-200 font-medium ${
                  activeSection === item.id ? 'text-[#ffd700]' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white hover:text-[#ffd700] transition-colors duration-200 font-medium flex items-center"
              >
                More
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#2a6f97] rounded-md shadow-lg py-1 border border-white/20">
                  {dropdownItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#ffd700] text-[#2a6f97] px-6 py-2 rounded-full font-bold hover:bg-[#ffed4e] transition-colors duration-200"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#ffd700] transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#2a6f97]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              {dropdownItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 bg-[#ffd700] text-[#2a6f97] rounded-md font-bold hover:bg-[#ffed4e] transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;