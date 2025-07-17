import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Artistic Foundations & Skill Building",
      description: "Dive into the core principles of art with our foundational courses. Whether you're new to art or looking to refine your basic skills, our expert instructors will guide you through essential techniques in drawing, painting, sculpting, and more.",
      buttonText: "Read More"
    },
    {
      title: "Creative Workshops & Advanced Techniques",
      description: "Elevate your artistry with our specialized workshops and advanced technique classes. Explore diverse mediums, experiment with innovative styles, and master complex methods under the guidance of renowned artists.",
      buttonText: "Discover More"
    },
    {
      title: "Art Consultancy & Portfolio Development",
      description: "For serious artists aiming for professional growth, our art consultancy and portfolio development services provide personalized guidance. From curating your best work to preparing for exhibitions and navigating the art market, we'll help you showcase your talent effectively.",
      buttonText: "Learn More"
    },
    {
      title: "Kids & Teen Art Programs",
      description: "Ignite the spark of creativity in young minds with our engaging art programs designed specifically for children and teenagers. From fun introductory classes to advanced workshops, we foster artistic expression and skill development in a supportive and inspiring environment. Our curriculum encourages imagination, critical thinking, and a lifelong love for art. Join us to unlock your child's artistic potential.",
      buttonText: "Read More"
    },
    {
      title: "Corporate & Team Building Art Experiences",
      description: " Boost creativity, foster collaboration, and enhance team dynamics with our unique corporate art experiences. Art Factory offers tailored workshops for businesses looking for innovative team-building activities, creative retreats, or unique client engagement events. We provide all materials and expert guidance, ensuring a memorable and productive artistic journey for your team.",
      buttonText: "Discover More"
    },
    {
      title: "TitleCustom Artwork & Commissions",
      description: " Bring your artistic visions to life with our custom artwork and commission service. Whether you're looking for a bespoke painting for your home, a unique sculpture for your office, or a special gift, our network of talented Art Factory artists is available to create personalized masterpieces that perfectly match your requirements and style. Consult with us to transform your ideas into reality.",
      buttonText: "Explore More"
    },
    
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a6f97] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our comprehensive range of creative services designed to inspire and support your artistic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-[#2a6f97] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="bg-[#ffd700] text-[#2a6f97] px-6 py-2 rounded-full font-bold hover:bg-[#ffed4e] hover:scale-105 transition-all duration-200 shadow-md">
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;