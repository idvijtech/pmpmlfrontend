import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'mr' : 'en');
  };

  return (
    <nav className="py-1 sticky top-0 z-50 shadow-lg w-screen bg-transparent backdrop-blur-md bg-white/10">
      <div className="w-full flex justify-between items-center px-6">
        <div className="flex items-center gap-4">
          <img 
            src="/PMPML.png"
            alt="PMPML Logo"
            className="h-15 w-20 drop-shadow-lg"
          />
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex list-none m-0 p-0 gap-4 items-center">
          <li className="relative">
            <Link 
              to="/" 
              className={`text-black no-underline font-semibold px-3 py-1 transition-all duration-300 cursor-pointer block relative hover:bg-black/10 ${
                isActive('/') ? 'bg-black/20' : ''
              }`}
            >
              {t('navbar.home')}
            </Link>
          </li>
          <li className="relative">
            <Link 
              to="/about" 
              className={`text-black no-underline font-semibold px-3 py-1 transition-all duration-300 cursor-pointer block relative hover:bg-black/10 ${
                isActive('/about') ? 'bg-black/20' : ''
              }`}
            >
              {t('navbar.aboutUs')}
            </Link>
          </li>
          <li className="relative">
            <Link 
              to="/services" 
              className={`text-black no-underline font-semibold px-3 py-1 transition-all duration-300 cursor-pointer block relative hover:bg-black/10 ${
                isActive('/services') ? 'bg-black/20' : ''
              }`}
            >
              {t('navbar.services')}
            </Link>
          </li>
          <li className="relative">
            <Link 
              to="/modules" 
              className={`text-black no-underline font-semibold px-3 py-1 transition-all duration-300 cursor-pointer block relative hover:bg-black/10 ${
                isActive('/modules') ? 'bg-black/20' : ''
              }`}
            >
              {t('navbar.modules')}
            </Link>
          </li>
          <li className="relative">
            <Link 
              to="/features" 
              className={`text-black no-underline font-semibold px-3 py-1 transition-all duration-300 cursor-pointer block relative hover:bg-black/10 ${
                isActive('/features') ? 'bg-black/20' : ''
              }`}
            >
              {t('navbar.features')}
            </Link>
          </li>
          <li className="relative">
            <Link 
              to="/tenders" 
              className={`text-black no-underline font-semibold px-3 py-1 transition-all duration-300 cursor-pointer block relative hover:bg-black/10 ${
                isActive('/tenders') ? 'bg-black/20' : ''
              }`}
            >
              {t('navbar.tender')}
            </Link>
          </li>
          <li className="relative">
            <Link 
              to="/career" 
              className={`text-black no-underline font-semibold px-3 py-1 transition-all duration-300 cursor-pointer block relative hover:bg-black/10 ${
                isActive('/career') ? 'bg-black/20' : ''
              }`}
            >
              {t('navbar.career')}
            </Link>
          </li>
          <li className="relative">
            <Link 
              to="/contact" 
              className={`text-black no-underline font-semibold px-3 py-1 transition-all duration-300 cursor-pointer block relative hover:bg-black/10 ${
                isActive('/contact') ? 'bg-black/20' : ''
              }`}
            >
              {t('navbar.contactUs')}
            </Link>
          </li>
        </ul>

        {/* Right Side Icons and Language Selector */}
        <div className="hidden md:flex items-center gap-4">
          {/* Settings Icon */}
          <button className="text-black hover:text-blue-600 transition-colors duration-300 p-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
              <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd"/>
            </svg>
          </button>
          
          {/* Document Icon with Notification */}
          <button className="text-black hover:text-blue-600 transition-colors duration-300 p-2 relative">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
          
          {/* Language Dropdown */}
          <div className="relative">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-black border border-gray-600 rounded-lg px-3 py-2 bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300"
            >
              <span className="text-sm font-medium">{i18n.language === 'en' ? 'English' : 'मराठी'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

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
      <div className={`md:hidden absolute top-full left-0 right-0 shadow-lg bg-transparent ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col p-4 gap-0">
          <li className="w-full">
            <Link 
              to="/" 
              className={`block text-white no-underline font-semibold px-8 py-4 text-center transition-all duration-300 ${
                isActive('/') ? 'bg-white/25' : 'hover:bg-white/15'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link 
              to="/tenders" 
              className={`block text-white no-underline font-semibold px-8 py-4 text-center transition-all duration-300 ${
                isActive('/tenders') ? 'bg-white/25' : 'hover:bg-white/15'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Tenders
            </Link>
          </li>
          <li className="w-full">
            <Link 
              to="/pune-darshan" 
              className={`block text-white no-underline font-semibold px-8 py-4 text-center transition-all duration-300 ${
                isActive('/pune-darshan') ? 'bg-white/25' : 'hover:bg-white/15'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pune Darshan
            </Link>
          </li>
          <li className="w-full">
            <Link 
              to="/about" 
              className={`block text-white no-underline font-semibold px-8 py-4 text-center transition-all duration-300 ${
                isActive('/about') ? 'bg-white/25' : 'hover:bg-white/15'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="w-full">
            <Link 
              to="/contact" 
              className={`block text-white no-underline font-semibold px-8 py-4 text-center transition-all duration-300 ${
                isActive('/contact') ? 'bg-white/25' : 'hover:bg-white/15'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
