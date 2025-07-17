import React from 'react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2a6f97] mb-6">
          Art Factory is free for YOU
        </h1>
        <p className="text-xl text-[#2a6f97] mb-12 max-w-2xl mx-auto">
          Unlock your creative potential with our resources
        </p>
        
        {/* Circular Art Image */}
        <div className="mb-12 flex justify-center">
          <div 
            className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#00a896] to-[#2a6f97] flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:shadow-[0_0_30px_rgba(255,215,0,0.7)] transition-shadow duration-300"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=400')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay for better text visibility if needed */}
            <div className="w-full h-full rounded-full bg-black/20 flex items-center justify-center">
              <span className="text-white font-bold text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                Creative Art
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('services')}
          className="bg-[#ffd700] text-[#2a6f97] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ffed4e] hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Find Out More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;