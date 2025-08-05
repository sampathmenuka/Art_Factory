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
      question: "How do I register for a class or workshop at Art Factory?",
      answer: [
        "Registering for an Art Factory class or workshop is simple and convenient! You can browse our full catalog of offerings on our Classes & Workshops page. Once you've found a program that interests you, simply click on the Enroll Now or Book Your Spot button. You'll be guided through our secure online registration process."
      ]
    },
    {
      question: "What is your cancellation and refund policy for classes?",
      answer: [
        "We understand that plans can change. For cancellations made at least 7 days prior to the start date of a class or workshop, you will receive a full refund or credit towards a future class. For cancellations made 3-6 days before the start date, a 50% refund or full credit will be issued. For cancellations made less than 3 days before the class, we regret that no refunds or credits can be issued. Please refer to our full Cancellation Policy for more details."
      ]
    },
    {
      question: "Are there age restrictions for certain classes or programs?",
      answer: [
        "Yes, some of our classes and programs at Art Factory do have age recommendations or restrictions to ensure the best learning environment for all participants. Our Kids & Teen Art Programs are specifically designed for younger artists within specified age ranges (e.g., 5-8 years, 9-12 years, 13-17 years). "
      ]
    },
    {
      question: "Do you offer private art lessons or customized workshops?",
      answer: [
        "Absolutely! Art Factory is delighted to offer private art lessons tailored to your individual goals and pace. Whether you're looking for one-on-one instruction in a specific medium, portfolio review, or just personalized guidance, our experienced instructors are available for private sessions. Duis vulputate porttitor urna sit amet pretium. You can also request customized workshops for groups or events, which can be designed to fit your specific interests and needs."
      ]
    },
    {
      question: "What are the benefits of becoming an Art Factory member?",
      answer: [
        "Becoming an Art Factory member unlocks a range of exclusive benefits designed to enhance your artistic journey. Members often receive discounts on classes and workshops, priority registration for popular programs, and special access to member-only events, open studio hours, or exclusive online content."
      ]
    },
    {
      question: "Can I showcase my artwork at Art Factory?",
      answer: [
        "Art Factory is committed to supporting emerging and established artists within our community. We periodically host student exhibitions to showcase the incredible talent nurtured within our classes and workshops. Duis vulputate porttitor urna sit amet pretium. Phasellus sed pulvinar eros, condimentum consequat ex. Suspendisse potenti."
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
            Welcome to the Art Factory FAQ section! Here, you'll find answers to common questions about our services, classes, workshops, and general operations. We aim to provide clarity and make your artistic journey with us as smooth as possible. 
          </p>
        </div>

        {/* Detailed FAQ Item */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-gray-100">
          <h3 className="text-2xl font-bold text-[#2a6f97] mb-6">
            Art for Everyone: Embracing Beginners at Art Factory
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Absolutely! At Art Factory, we believe that art is for everyone, regardless of skill level or prior experience. Many of our classes and workshops are specifically designed for beginners, providing foundational knowledge and a supportive environment to explore your creativity. Our instructors are experienced in guiding students from the ground up, ensuring a comfortable and enriching learning experience. We encourage experimentation and discovery, focusing on the process as much as the outcome. Curabitur placerat diam in risus lobortis, laoreet porttitor est elementum. Nulla ultricies risus quis risus scelerisque, a aliquam tellus maximus. Cras pretium nulla ac convallis iaculis. Aenean bibendum erat vitae odio sodales, in facilisis tellus volutpat.</p>

            <p> For more advanced artists, we also offer specialized workshops and masterclasses to help you refine existing skills or explore new techniques. Sed lobortis pellentesque magna ac congue. Suspendisse quis molestie magna, id eleifend ex. Ut mollis ultricies diam nec dictum. Morbi commodo hendrerit mi vel vulputate. Proin non tincidunt dui. Lorem ipsum dolor sit amet.</p>

              <p> If you can't find the answer you're looking for, or if you have specific questions about a class or service, please don't hesitate to reach out!
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