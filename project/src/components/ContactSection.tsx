import React, { useState } from 'react';

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
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2a6f97] mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700">
            Get in touch with us to learn more about our services and how we can help you.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-[#00a896] rounded-lg focus:ring-2 focus:ring-[#00a896] focus:border-transparent transition-colors duration-200"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-[#00a896] rounded-lg focus:ring-2 focus:ring-[#00a896] focus:border-transparent transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-[#00a896] rounded-lg focus:ring-2 focus:ring-[#00a896] focus:border-transparent transition-colors duration-200 resize-vertical"
                placeholder="Tell us about your project or question..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ffd700] text-[#2a6f97] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ffed4e] hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Send It'}
            </button>

            {statusMessage && (
              <div
                className={`mt-4 p-4 rounded-lg text-center font-medium ${
                  messageType === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}
              >
                {statusMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;