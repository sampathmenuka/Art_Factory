import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "First Box Service",
      description: "Aenean vulputate massa sed neque consectetur, ac fringilla quam aliquet. Sed a enim nec eros tempor cursus at id libero.",
      buttonText: "Read More"
    },
    {
      title: "Second Box Title",
      description: "Pellentesque vitae urna ut nisi viverra tristique quis at dolor. In non sodales dolor, id egestas quam.",
      buttonText: "Discover More"
    },
    {
      title: "Third Title Box",
      description: "Quisque finibus libero augue, in ultrices quam dictum id. Aliquam quis tellus sit amet urna tincidunt bibendum.",
      buttonText: "Learn More"
    },
    {
      title: "Fourth Service Box",
      description: "Fusce sollicitudin feugiat risus, tempus faucibus arcu blandit nec. Duis auctor dolor eu scelerisque vestibulum.",
      buttonText: "Read More"
    },
    {
      title: "Fifth Service Title",
      description: "Curabitur aliquam eget tellus id porta. Proin justo sapien, posuere suscipit tortor in, fermentum mattis elit.",
      buttonText: "Discover More"
    },
    {
      title: "Sixth Box Title",
      description: "Ut nibh velit, aliquam vitae pellentesque nec, convallis vitae lacus. Aliquam porttitor urna ut pellentesque.",
      buttonText: "Explore More"
    },
    {
      title: "Seventh Title Box",
      description: "Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien sit amet, ultrices malesuada odio.",
      buttonText: "Read More"
    }
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