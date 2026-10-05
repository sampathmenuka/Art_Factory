import React from 'react';
import { ArrowRight, PenTool, Layers, Briefcase, Smile, Users, Frame } from 'lucide-react';
import Reveal from './Reveal';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Artistic Foundations & Skill Building",
      description: "Dive into the core principles of art with our foundational courses. Whether you're new to art or looking to refine your basic skills, our expert instructors will guide you through essential techniques in drawing, painting, sculpting, and more.",
      buttonText: "Read More",
      icon: PenTool
    },
    {
      title: "Creative Workshops & Advanced Techniques",
      description: "Elevate your artistry with our specialized workshops and advanced technique classes. Explore diverse mediums, experiment with innovative styles, and master complex methods under the guidance of renowned artists.",
      buttonText: "Discover More",
      icon: Layers
    },
    {
      title: "Art Consultancy & Portfolio Development",
      description: "For serious artists aiming for professional growth, our art consultancy and portfolio development services provide personalized guidance. From curating your best work to preparing for exhibitions and navigating the art market, we'll help you showcase your talent effectively.",
      buttonText: "Learn More",
      icon: Briefcase
    },
    {
      title: "Kids & Teen Art Programs",
      description: "Ignite the spark of creativity in young minds with our engaging art programs designed specifically for children and teenagers. From fun introductory classes to advanced workshops, we foster artistic expression and skill development in a supportive and inspiring environment. Our curriculum encourages imagination, critical thinking, and a lifelong love for art. Join us to unlock your child's artistic potential.",
      buttonText: "Read More",
      icon: Smile
    },
    {
      title: "Corporate & Team Building Art Experiences",
      description: " Boost creativity, foster collaboration, and enhance team dynamics with our unique corporate art experiences. Art Factory offers tailored workshops for businesses looking for innovative team-building activities, creative retreats, or unique client engagement events. We provide all materials and expert guidance, ensuring a memorable and productive artistic journey for your team.",
      buttonText: "Discover More",
      icon: Users
    },
    {
      title: "Custom Artwork & Commissions",
      description: " Bring your artistic visions to life with our custom artwork and commission service. Whether you're looking for a bespoke painting for your home, a unique sculpture for your office, or a special gift, our network of talented Art Factory artists is available to create personalized masterpieces that perfectly match your requirements and style. Consult with us to transform your ideas into reality.",
      buttonText: "Explore More",
      icon: Frame
    },
  ];

  // Cycle the existing brand colours across the cards
  const accents = [
    { bar: 'bg-[#00a896]', icon: 'bg-[#00a896]/10 text-[#00a896] group-hover:bg-[#00a896] group-hover:text-white' },
    { bar: 'bg-[#ffd700]', icon: 'bg-[#ffd700]/20 text-[#2a6f97] group-hover:bg-[#ffd700]' },
    { bar: 'bg-[#2a6f97]', icon: 'bg-[#2a6f97]/10 text-[#2a6f97] group-hover:bg-[#2a6f97] group-hover:text-white' },
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <Reveal>
            <span className="eyebrow mb-6">What we offer</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title mb-4">Our Services</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Discover our comprehensive range of creative services designed to inspire and support your artistic journey.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {services.map((service, index) => {
            const accent = accents[index % accents.length];
            const Icon = service.icon;
            return (
              <Reveal key={index} delay={(index % 3) * 120} className="h-full">
                <div className="card group relative flex h-full flex-col overflow-hidden p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_-20px_rgba(42,111,151,0.5)]">
                  {/* Accent bar that grows on hover */}
                  <span className={`absolute left-0 top-0 h-1.5 w-full origin-left scale-x-0 ${accent.bar} transition-transform duration-500 group-hover:scale-x-100`} />

                  {/* Large faded number */}
                  <span className="pointer-events-none absolute right-6 top-4 font-display text-6xl font-bold text-[#2a6f97]/[0.07] transition-all duration-500 group-hover:text-[#2a6f97]/15 group-hover:-translate-y-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className={`mb-5 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 ${accent.icon}`}>
                    <Icon className="h-7 w-7" />
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-[#2a6f97] mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div>
                    <button className="btn-primary px-6 py-2">
                      {service.buttonText}
                      <ArrowRight className="btn-arrow h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
