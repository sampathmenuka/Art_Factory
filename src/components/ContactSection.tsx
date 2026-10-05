import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import Reveal from './Reveal';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage('Please fill in all fields.');
      setMessageType('error');
      setIsSubmitting(false);
      
      setTimeout(() => {
        setStatusMessage('');
      }, 3000);
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatusMessage('Please enter a valid email address.');
      setMessageType('error');
      setIsSubmitting(false);
      
      setTimeout(() => {
        setStatusMessage('');
      }, 3000);
      return;
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setStatusMessage('Thank you! Your message has been sent.');
    setMessageType('success');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => {
      setStatusMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-20 h-72 w-72 bg-[#ffd700]/25 animate-morph" />
        <div className="absolute -left-20 bottom-10 h-64 w-64 bg-[#00a896]/15 animate-morph [animation-delay:-5s]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <Reveal>
            <span className="eyebrow mb-6">Say hello</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="section-title mb-4">Contact Us</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base md:text-lg text-gray-700">
              Get in touch with us to learn more about our services and how we can help you.
            </p>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="card p-5 sm:p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-[#2a6f97] mb-2 transition-colors duration-300 group-focus-within:text-[#00a896]">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/70 border-2 border-[#00a896]/40 rounded-xl outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-[#00a896]/70 focus:border-[#00a896] focus:bg-white focus:ring-4 focus:ring-[#00a896]/15 focus:-translate-y-0.5"
                    placeholder="Your full name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-[#2a6f97] mb-2 transition-colors duration-300 group-focus-within:text-[#00a896]">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/70 border-2 border-[#00a896]/40 rounded-xl outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-[#00a896]/70 focus:border-[#00a896] focus:bg-white focus:ring-4 focus:ring-[#00a896]/15 focus:-translate-y-0.5"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-[#2a6f97] mb-2 transition-colors duration-300 group-focus-within:text-[#00a896]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/70 border-2 border-[#00a896]/40 rounded-xl outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-[#00a896]/70 focus:border-[#00a896] focus:bg-white focus:ring-4 focus:ring-[#00a896]/15 focus:-translate-y-0.5 resize-y"
                  placeholder="Tell us about your project or question..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full px-8 py-4 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send It
                    <Send className="btn-arrow h-5 w-5" />
                  </>
                )}
              </button>

              {statusMessage && (
                <div
                  role="status"
                  className={`mt-4 flex items-center justify-center gap-2 p-4 rounded-xl font-medium animate-fade-up ${
                    messageType === 'success'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {messageType === 'success' ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <AlertCircle className="h-5 w-5" />
                  )}
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
