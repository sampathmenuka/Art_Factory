import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ scrollToSection }) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "First Common Question",
      answer: [
        "Duis vulputate porttitor urna sit amet pretium. Phasellus sed pulvinar eros, condimentum consequat ex. Suspendisse potenti.",
        "Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere mauris ut eros rutrum sodales. Aliquam erat volutpat."
      ]
    },
    {
      question: "Second Question Answer",
      answer: [
        "Sed odio elit, cursus sed consequat at, rutrum eget augue. Cras ac eros iaculis, tempor quam sit amet, scelerisque mi.",
        "Praesent ut placerat turpis, vel pellentesque dolor. Sed rutrum eleifend tortor, eu luctus orci sagittis in."
      ]
    },
    {
      question: "Third Answer for you",
      answer: [
        "Proin feugiat ante ut vulputate rutrum. Nam quis erat turpis. Nullam maximus pharetra lorem, eu condimentum est iaculis ut.",
        "Etiam et enim finibus, feugiat massa efficitur, finibus sapien. Sed cursus lacus quis arcu scelerisque, eget ornare risus maximus."
      ]
    },
    {
      question: "Fourth Question Asked",
      answer: [
        "Phasellus eu purus ornare, eleifend orci nec, egestas nulla. Sed sed aliquet sapien. Proin placerat, ipsum eu posuere blandit.",
        "Aenean fermentum eget turpis egestas semper. Sed finibus mollis venenatis. Praesent at sem in massa iaculis pharetra."
      ]
    },
    {
      question: "Fifth Ever Question",
      answer: [
        "Quisque aliquet ipsum ut magna rhoncus, euismod lacinia elit rhoncus. Sed sapien elit, mollis ut ultricies quis.",
        "Sed nec ex nec tortor fermentum sollicitudin id ut ligula. Ut sagittis rutrum lectus, non sagittis ante euismod."
      ]
    },
    {
      question: "Sixth Sense Question",
      answer: [
        "Suspendisse potenti. Ut dapibus leo ut massa vulputate semper. Pellentesque maximus lorem sed elit imperdiet mattis."
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white/10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a6f97] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Vivamus venenatis eu mi ac mattis. Maecenas ut elementum sapien. Nunc euismod risus ac lobortis congue. Sed erat quam.
          </p>
        </div>

        {/* Detailed FAQ Item */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-gray-100">
          <h3 className="text-2xl font-bold text-[#2a6f97] mb-6">
            Class aptent taciti sociosqu ad litora torquent per conubia
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Curabitur placerat diam in risus lobortis, laoreet porttitor est elementum. Nulla ultricies risus quis risus scelerisque, a aliquam tellus maximus. Cras pretium nulla ac convallis iaculis. Aenean bibendum erat vitae odio sodales, in facilisis tellus volutpat.
            </p>
            <p>
              Sed lobortis pellentesque magna ac congue. Suspendisse quis molestie magna, id eleifend ex. Ut mollis ultricies diam nec dictum. Morbi commodo hendrerit mi vel vulputate. Proin non tincidunt dui. Lorem ipsum dolor sit amet.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <p className="text-[#00a896] font-semibold">
                Email: contact@artfactory.com
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#ffd700] text-[#2a6f97] px-6 py-2 rounded-full font-bold hover:bg-[#ffed4e] hover:scale-105 transition-all duration-200 shadow-md"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full bg-[#00a896] text-white px-6 py-4 text-left font-semibold hover:bg-[#008577] transition-colors duration-200 flex justify-between items-center"
              >
                <span>{faq.question}</span>
                {openAccordion === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {openAccordion === index && (
                <div className="bg-white px-6 py-4 space-y-3">
                  {faq.answer.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;