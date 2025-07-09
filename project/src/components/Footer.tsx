import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2a6f97] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white">
              Copyright © 2025 Art Factory Company
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a 
              href="#privacy" 
              className="text-[#ffd700] hover:text-[#ffed4e] transition-colors duration-200 font-medium hover:underline"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-[#ffd700] hover:text-[#ffed4e] transition-colors duration-200 font-medium hover:underline"
            >
              Terms of Use
            </a>
            <a 
              href="#support" 
              className="text-[#ffd700] hover:text-[#ffed4e] transition-colors duration-200 font-medium hover:underline"
            >
              Support
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-white/80">
            Inspiring creativity and connecting artists worldwide through innovative digital experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;