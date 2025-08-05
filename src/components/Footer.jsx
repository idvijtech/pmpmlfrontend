import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-0">
      {/* Top Accent Bars */}
      <div className="w-full">
      </div>
      
      {/* Main Footer with Background Image */}
      <div className="relative">
        {/* Your Background Image */}
        <img 
          src="/footer.png"
          alt="PMPML Footer Background"
          className="w-full h-130 object-cover object-bottom"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-start justify-center">
          <div className="max-w-7xl mx-auto px-6 pt-16 pb-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* Left Section - Logo & Address */}
              <div className="flex flex-col items-center md:items-start">
                <div className="flex flex-col items-center md:items-start mb-3">
                  <img 
                    src="/PMPML.png"
                    alt="PMPML Logo"
                    className="w-24 h-24 mb-3 shadow-lg"
                  />
                  <div className="text-gray-800 text-center md:text-left">
                    <p className="font-semibold text-base mb-1">Satara Rd, Swargate,</p>
                    <p className="font-semibold text-base mb-1">Pune, Maharashtra</p>
                    <p className="font-semibold text-base">411042</p>
                  </div>
                </div>
              </div>
              
              {/* First Quick Links Section */}
              <div className="flex justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-left">
                        <li><a href="#" className="text-gray-700 hover:text-orange-500 transition-colors text-base font-medium">Private Policys</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-500 transition-colors text-base font-medium">Terms & Conditions</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-500 transition-colors text-base font-medium">Site Map</a></li>
                      </ul>
                    </div>
              </div>
              
              {/* Second Quick Links Section */}
              <div className="flex justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-left">
                        <li><a href="#" className="text-gray-700 hover:text-orange-500 transition-colors text-base font-medium">FAQ</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-500 transition-colors text-base font-medium">RTI</a></li>
                        <li><a href="#" className="text-gray-700 hover:text-orange-500 transition-colors text-base font-medium">Contact</a></li>
                      </ul>
                </div>
              </div>
              
              {/* Right Section - Helpline */}
              <div className="flex flex-col items-center md:items-end">
                <div className="text-center md:text-right">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Helpline Number:</h3>
                  <p className="text-3xl font-bold text-gray-800">02024545454</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Separator Line */}
        <div className="absolute bottom-16 left-6 right-6 border-t border-gray-300"></div>
        
        {/* Copyright Section */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-gray-600 text-base">
            Copyright @ 2025 Pune Mahanagar Parivahan Mahamandal Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 