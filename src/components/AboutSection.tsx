import React from 'react';
import { ArrowRight, Heart, Globe, Lightbulb } from 'lucide-react';
import Reveal from './Reveal';

interface AboutSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const highlights = [
  { icon: Lightbulb, label: 'Think deeply', color: 'bg-[#ffd700] text-[#2a6f97]' },
  { icon: Heart, label: 'Express emotion', color: 'bg-[#00a896] text-white' },
  { icon: Globe, label: 'Connect cultures', color: 'bg-[#2a6f97] text-white' },
];

const AboutSection: React.FC<AboutSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-white/10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="eyebrow mb-6">About us</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="section-title mb-8">
            Art is a way for people to express their thoughts, emotions, and creativity
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10 md:mb-12 max-w-3xl mx-auto">
            Art can be found everywhere, from museums and galleries to street walls and homes.
            It helps people relax, think deeply, and appreciate beauty. No matter the form,
            art connects people across cultures and generations, making the world a more
            colorful and inspiring place.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {highlights.map(({ icon: Icon, label, color }, index) => (
            <Reveal key={label} delay={250 + index * 120}>
              <div className="card group flex items-center gap-4 p-4 text-left transition-all duration-300 hover:-translate-y-1">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${color} transition-transform duration-500 group-hover:rotate-[360deg]`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-semibold text-[#2a6f97]">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <button onClick={() => scrollToSection('services')} className="btn-primary w-full sm:w-auto px-8 py-4 text-lg">
            Discover More
            <ArrowRight className="btn-arrow h-5 w-5" />
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
