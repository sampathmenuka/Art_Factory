import React, { useState } from 'react';
import { ChevronDown, Mail, ArrowRight, Sprout, GraduationCap, Trophy } from 'lucide-react';
import Reveal from './Reveal';

interface FAQSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ scrollToSection }) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);

  const keyPoints = [
    { icon: Sprout, label: 'Beginner-friendly classes' },
    { icon: GraduationCap, label: 'Experienced instructors' },
    { icon: Trophy, label: 'Masterclasses for advanced artists' },
  ];

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
    <section id="faq" className="py-16 md:py-24 bg-white/10 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <Reveal>
            <span className="eyebrow mb-6">Help center</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title mb-6">Frequently Asked Questions</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Welcome to the Art Factory FAQ section! Here, you'll find answers to common questions about our services, classes, workshops, and general operations. We aim to provide clarity and make your artistic journey with us as smooth as possible. 
            </p>
          </Reveal>
        </div>

        {/* Detailed FAQ Item */}
        <Reveal>
          <div className="card relative overflow-hidden p-6 md:p-10 mb-10 md:mb-12">
            <span className="absolute left-0 top-0 h-full w-1.5 bg-[#00a896]" />
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#2a6f97] mb-4 md:mb-6">
              Art for Everyone: Embracing Beginners at Art Factory
            </h3>
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg font-medium text-[#2a6f97]">
                Absolutely! At Art Factory, we believe that art is for everyone, regardless of skill level or prior experience.
              </p>

              {/* Quick summary for skimming */}
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {keyPoints.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-xl bg-[#00a896]/10 px-3 py-2.5 text-sm font-semibold text-[#2a6f97]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#00a896] shadow-sm">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>

              {/* Full details, collapsed by default */}
              <div
                id="faq-detail-more"
                className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isDetailExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`space-y-4 pt-5 transition-opacity duration-500 ${
                      isDetailExpanded ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p>
                      Many of our classes and workshops are specifically designed for beginners, providing foundational knowledge and a supportive environment to explore your creativity. Our instructors are experienced in guiding students from the ground up, ensuring a comfortable and enriching learning experience. We encourage experimentation and discovery, focusing on the process as much as the outcome. Curabitur placerat diam in risus lobortis, laoreet porttitor est elementum. Nulla ultricies risus quis risus scelerisque, a aliquam tellus maximus. Cras pretium nulla ac convallis iaculis. Aenean bibendum erat vitae odio sodales, in facilisis tellus volutpat.
                    </p>
                    <p>
                      For more advanced artists, we also offer specialized workshops and masterclasses to help you refine existing skills or explore new techniques. Sed lobortis pellentesque magna ac congue. Suspendisse quis molestie magna, id eleifend ex. Ut mollis ultricies diam nec dictum. Morbi commodo hendrerit mi vel vulputate. Proin non tincidunt dui. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsDetailExpanded(!isDetailExpanded)}
                aria-expanded={isDetailExpanded}
                aria-controls="faq-detail-more"
                className="group mt-4 inline-flex items-center gap-1.5 rounded-full px-1 py-1 font-semibold text-[#00a896] transition-colors duration-200 hover:text-[#008577]"
              >
                {isDetailExpanded ? 'Show less' : 'Read more'}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${isDetailExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
                />
              </button>

              <p className="mt-6 border-t border-[#2a6f97]/10 pt-6">
                If you can't find the answer you're looking for, or if you have specific questions about a class or service, please don't hesitate to reach out!
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <a
                  href="mailto:contact@artfactory.com"
                  className="group inline-flex items-center gap-2 break-all text-[#00a896] font-semibold"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00a896]/10 transition-colors duration-300 group-hover:bg-[#00a896] group-hover:text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  Email: contact@artfactory.com
                </a>
                <button onClick={() => scrollToSection('contact')} className="btn-primary w-full sm:w-auto px-6 py-3 sm:py-2">
                  Contact Us
                  <ArrowRight className="btn-arrow h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openAccordion === index;
            return (
              <Reveal key={index} delay={index * 80}>
                <div
                  className={`overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 ${
                    isOpen ? 'shadow-xl ring-2 ring-[#00a896]' : 'hover:shadow-lg'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className={`w-full px-4 sm:px-6 py-4 sm:py-5 text-left text-sm sm:text-base font-semibold transition-colors duration-300 flex justify-between items-center gap-4 ${
                      isOpen ? 'bg-[#00a896] text-white' : 'bg-white text-[#2a6f97] hover:bg-[#00a896]/5'
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`hidden sm:flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
                          isOpen ? 'bg-[#ffd700] text-[#2a6f97]' : 'bg-[#00a896]/10 text-[#00a896]'
                        }`}
                      >
                        {index + 1}
                      </span>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`px-4 sm:px-6 py-4 sm:py-5 space-y-3 transition-all duration-500 ${
                          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                        }`}
                      >
                        {faq.answer.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
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

export default FAQSection;
