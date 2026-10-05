import React from 'react';
import { ArrowRight, Palette, Brush, Sparkles, MessageCircle, CheckCircle2, GraduationCap } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const features = ['Free resources', 'Expert instructors', 'All skill levels'];

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-4rem)] flex items-center pt-10 pb-16 sm:py-16 lg:py-24 overflow-hidden"
    >
      {/* Decorative background shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 bg-[#00a896]/15 animate-morph" />
        <div className="absolute -bottom-32 right-1/3 h-72 w-72 bg-[#ffd700]/20 animate-morph [animation-delay:-4s]" />
        <div className="absolute top-20 left-1/2 h-3 w-3 rounded-full bg-[#ffd700] animate-float" />
        <div className="absolute bottom-24 left-10 h-3 w-3 rounded-full bg-[#00a896] animate-float [animation-delay:-2s]" />
        <div className="absolute top-1/3 left-[45%] h-5 w-5 rotate-45 border-2 border-[#2a6f97]/30 animate-float-slow" />

        {/* Dot grid */}
        <svg className="absolute right-8 top-10 hidden lg:block text-[#2a6f97]/25" width="140" height="140">
          <defs>
            <pattern id="hero-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="140" height="140" fill="url(#hero-dots)" />
        </svg>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 sm:gap-16 lg:gap-12">
          {/* Text column */}
          <div className="text-center lg:text-left">
            <span className="eyebrow mb-6 animate-fade-up">
              <Sparkles className="h-3.5 w-3.5" />
              Creative studio &amp; community
            </span>

            <h1 className="font-display text-[2.6rem] sm:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-[#2a6f97] mb-6 animate-fade-up [animation-delay:100ms]">
              Art Factory is free for{' '}
              <span className="relative isolate inline-block text-[#00a896]">
                YOU
                <span className="absolute -bottom-1 left-0 h-2 md:h-3 w-full origin-left rounded-full bg-[#ffd700]/80 -z-10 animate-draw-line" />
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#2a6f97]/80 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up [animation-delay:200ms]">
              Unlock your creative potential with our resources
            </p>

            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 mb-8 sm:mb-10 animate-fade-up [animation-delay:300ms]">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm font-medium text-[#2a6f97]">
                  <CheckCircle2 className="h-5 w-5 text-[#00a896]" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up [animation-delay:400ms]">
              <button onClick={() => scrollToSection('services')} className="btn-primary w-full sm:w-auto px-8 py-4 text-lg">
                Find Out More
                <ArrowRight className="btn-arrow h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-[#2a6f97] px-8 py-[14px] text-lg font-bold text-[#2a6f97] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a6f97] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2a6f97]/30"
              >
                <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
                Contact Us
              </button>
            </div>
          </div>

          {/* Visual column */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up [animation-delay:300ms]">
            <div className="relative h-60 w-60 min-[400px]:h-72 min-[400px]:w-72 sm:h-96 sm:w-96 lg:mr-8">
              {/* Solid backdrop blob */}
              <div className="absolute -inset-6 bg-[#00a896] opacity-90 animate-morph" />
              <div className="absolute -inset-10 bg-[#2a6f97]/15 animate-morph [animation-delay:-6s]" />

              {/* Rotating dashed ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-[#ffd700] animate-spin-slow" />

              {/* Image */}
              <div className="group relative h-full w-full overflow-hidden rounded-full bg-[#2a6f97] ring-8 ring-[#f4e4bc] shadow-[0_25px_60px_-15px_rgba(42,111,151,0.6)]">
                <img
                  src="https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Colourful paint on an artist's palette"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#2a6f97]/0 transition-colors duration-500 group-hover:bg-[#2a6f97]/50">
                  <span className="translate-y-3 font-display text-2xl font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Creative Art
                  </span>
                </div>
              </div>

              {/* Floating info cards */}
              <div className="absolute -left-8 sm:-left-16 top-4 sm:top-8 z-10 flex items-center gap-2 sm:gap-3 rounded-2xl bg-white/95 px-3 py-2 sm:px-4 sm:py-3 shadow-xl backdrop-blur animate-float">
                <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#00a896]/10 text-[#00a896]">
                  <Palette className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-[#2a6f97]">Painting &amp; Drawing</p>
                  <p className="text-[11px] sm:text-xs text-gray-500">Classes &amp; workshops</p>
                </div>
              </div>

              <div className="absolute -right-6 sm:-right-10 bottom-6 sm:bottom-10 z-10 flex items-center gap-2 sm:gap-3 rounded-2xl bg-[#ffd700] px-3 py-2 sm:px-4 sm:py-3 shadow-xl animate-float [animation-delay:-3s]">
                <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-white/60 text-[#2a6f97]">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-[#2a6f97]">For beginners</p>
                  <p className="text-[11px] sm:text-xs text-[#2a6f97]/70">and advanced artists</p>
                </div>
              </div>

              <div className="absolute -bottom-4 left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#2a6f97] text-[#ffd700] shadow-lg animate-float-slow">
                <Brush className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:flex h-11 w-7 justify-center rounded-full border-2 border-[#2a6f97]/40 pt-2 transition-colors duration-300 hover:border-[#2a6f97]"
      >
        <span className="h-2 w-1 rounded-full bg-[#2a6f97] animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
