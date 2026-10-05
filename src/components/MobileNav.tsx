import React from 'react';
import { Home, Info, Palette, HelpCircle, Mail } from 'lucide-react';

interface MobileNavProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: Info },
  { id: 'services', label: 'Services', icon: Palette },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
  { id: 'contact', label: 'Contact', icon: Mail },
];

// Bottom tab bar shown on phones and tablets
const MobileNav: React.FC<MobileNavProps> = ({ activeSection, scrollToSection }) => {
  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
    >
      <ul className="mx-auto flex max-w-md items-center justify-between rounded-2xl bg-[#2a6f97]/95 px-2 py-2 shadow-[0_10px_40px_-10px_rgba(42,111,151,0.7)] ring-1 ring-white/10 backdrop-blur-lg">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <li key={id} className="flex-1">
              <button
                onClick={() => scrollToSection(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative flex w-full flex-col items-center gap-1 rounded-xl py-1.5 text-[11px] font-medium transition-colors duration-300 active:scale-95 ${
                  isActive ? 'text-[#2a6f97]' : 'text-white/75 hover:text-white'
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-xl bg-[#ffd700] transition-all duration-300 ${
                    isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                  }`}
                />
                <Icon
                  className={`relative h-5 w-5 transition-transform duration-300 ${isActive ? '-translate-y-0.5' : ''}`}
                />
                <span className="relative">{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNav;
