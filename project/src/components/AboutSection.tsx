import React from 'react';

interface AboutSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="about" className="py-20 bg-white/10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2a6f97] mb-8">
          Art is a way for people to express their thoughts, emotions, and creativity
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
          Art can be found everywhere, from museums and galleries to street walls and homes. 
          It helps people relax, think deeply, and appreciate beauty. No matter the form, 
          art connects people across cultures and generations, making the world a more 
          colorful and inspiring place.
        </p>
        <button
          onClick={() => scrollToSection('services')}
          className="bg-[#ffd700] text-[#2a6f97] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ffed4e] hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Discover More
        </button>
      </div>
    </section>
  );
};

export default AboutSection;