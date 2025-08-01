import React, { useState } from 'react';

const Navbar = ({ activePage = 'tenders' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 py-3 sticky top-0 z-50 shadow-lg border-b border-white/10 w-screen">
      <div className="w-full flex justify-between items-center px-6">
        <div className="flex items-center gap-4">
          <h2 className="text-white text-4xl font-bold drop-shadow-lg tracking-wide">PMPML</h2>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex list-none m-0 p-0 gap-8 items-center">
          <li className="relative">
            <a 
              href="#home" 
              className={`text-white no-underline font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer block relative hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-lg ${
                activePage === 'home' ? 'bg-white/25 shadow-lg' : ''
              }`}
            >
              Home
              {activePage === 'home' && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              )}
            </a>
          </li>
          <li className="relative">
            <a 
              href="#tenders" 
              className={`text-white no-underline font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer block relative hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-lg ${
                activePage === 'tenders' ? 'bg-white/25 shadow-lg' : ''
              }`}
            >
              Tenders
              {activePage === 'tenders' && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              )}
            </a>
          </li>
          <li className="relative">
            <a 
              href="#pune-darshan" 
              className={`text-white no-underline font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer block relative hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-lg ${
                activePage === 'pune-darshan' ? 'bg-white/25 shadow-lg' : ''
              }`}
            >
              Pune Darshan
              {activePage === 'pune-darshan' && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              )}
            </a>
          </li>
          <li className="relative">
            <a 
              href="#about" 
              className={`text-white no-underline font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer block relative hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-lg ${
                activePage === 'about' ? 'bg-white/25 shadow-lg' : ''
              }`}
            >
              About
              {activePage === 'about' && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              )}
            </a>
          </li>
          <li className="relative">
            <a 
              href="#contact" 
              className={`text-white no-underline font-semibold px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer block relative hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-lg ${
                activePage === 'contact' ? 'bg-white/25 shadow-lg' : ''
              }`}
            >
              Contact
              {activePage === 'contact' && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              )}
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div 
          className="md:hidden flex flex-col cursor-pointer p-2 rounded-lg transition-colors duration-300 hover:bg-white/10"
          onClick={toggleMenu}
        >
          <span className={`w-6 h-0.5 bg-white my-0.5 rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white my-0.5 rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white my-0.5 rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col p-4 gap-0">
          <li className="w-full">
            <a 
              href="#home" 
              className={`block text-white no-underline font-semibold px-8 py-4 text-center transition-all duration-300 ${
                activePage === 'home' ? 'bg-white/25' : 'hover:bg-white/15'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li className="w-full">
            <a 
              href="#tenders" 
              className={`block text-white no-underline font-semibold px-8 py-4 text-center transition-all duration-300 ${
                activePage === 'tenders' ? 'bg-white/25' : 'hover:bg-white/15'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Tenders
            </a>
          </li>
          <li className="w-full">
            <a 
              href="#pune-darshan" 
              className={`block text-white no-underline font-semibold px-8 py-4 text-center transition-all duration-300 ${
                activePage === 'pune-darshan' ? 'bg-white/25' : 'hover:bg-white/15'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pune Darshan
            </a>
          </li>
          <li className="w-full">
            <a 
              href="#about" 
              className={`block text-white no-underline font-semibold px-8 py-4 text-center transition-all duration-300 ${
                activePage === 'about' ? 'bg-white/25' : 'hover:bg-white/15'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li className="w-full">
            <a 
              href="#contact" 
              className={`block text-white no-underline font-semibold px-8 py-4 text-center transition-all duration-300 ${
                activePage === 'contact' ? 'bg-white/25' : 'hover:bg-white/15'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
