import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageButtonRef = useRef(null);
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'EN');
  const [isAtTop, setIsAtTop] = useState(true);

  const { i18n } = useTranslation();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (languageButtonRef.current && !languageButtonRef.current.contains(e.target)) {
        setLanguageMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [languageMenuOpen]);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem('selectedLanguage', language); 
    setLanguageMenuOpen(false);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    // Normal Screen
    <nav className={`${darkMode ? 'bg-black' : 'bg-gray-100'} fixed top-0 w-full flex justify-between items-center ${isAtTop ? 'p-4' : 'p-2'} text-${darkMode ? 'white' : 'black'} transition-all duration-100`}>
      {/* Logo */}
      <div className="flex items-center">
        {/* <img src="/logo.png" alt="Logo" className="h-8 mr-2" /> */}
        <a href='#home' className={`text-4xl font-bold ${darkMode ? 'text-yellow-400' : 'text-blue-800'}`}>RideLink</a>
      </div>

      {/* Links */}
      <div className={`flex rounded-lg border ${darkMode ? 'border-white' : 'border-black'} border-solid border-3 divide-x divide-gray-600`}>
        <a href="#home" className={`px-4 py-1 text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'} ${darkMode ? 'hover:text-yellow-300' : 'hover:text-blue-500'}`}>Home</a>
        <a href="#about" className={`px-4 py-1 text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'} ${darkMode ? 'hover:text-yellow-300' : 'hover:text-blue-500'}`}>About</a>
        <a href="#service" className={`px-4 py-1 text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'} ${darkMode ? 'hover:text-yellow-300' : 'hover:text-blue-500'}`}>Service</a>
        <a href="#contact" className={`px-4 py-1 text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-800'} ${darkMode ? 'hover:text-yellow-300' : 'hover:text-blue-500'}`}>Contact</a>
      </div>

      {/* Login, Mode, Language */}
      <div className="flex space-x-4 relative">
        <button ref={languageButtonRef}
          onClick={(e) => {
            setLanguageMenuOpen(!languageMenuOpen)
          }}
          className={`flex items-center ${darkMode ? 'hover:bg-gray-500' : 'hover:bg-yellow-300'} ${darkMode ? 'text-white' : 'text-black'} px-2 py-1 rounded-md`}
        >
          <span className="mr-1 text-xs">▼{selectedLanguage}</span>
        </button>
        {languageMenuOpen && (
          <div className={`absolute top-full left-0 ${darkMode ? 'bg-gray-600 dark:bg-gray-800' : 'bg-gray-300'} shadow-md rounded-lg mt-1 border border-gray-400 dark:border-gray-600 dark:text-black`} style={{ left: "-17px" }}>
            <button
              onClick={() => {
                selectLanguage('EN')
                i18n.changeLanguage('en')
              }}
              className={`block w-full text-left px-3 py-1 hover:bg-yellow-300 dark:hover:bg-gray-700 dark:text-white hover:text-black`}
            >EN</button>
            <button
              onClick={() => {
                selectLanguage('DE')
                i18n.changeLanguage('de')
              }}
              className={`block w-full text-left px-3 py-1 hover:bg-yellow-300 dark:hover:bg-gray-700 dark:text-white hover:text-black`}
            >DE</button>
          </div>
        )}
        <button className='text-xs'
          onClick={(e) => {
            setDarkMode(!darkMode)
          }}
        >Mode</button>
        <button className={`bg-yellow-300 text-black font-bold w-full px-9 p-1 shadow-md rounded-md hover:text-blue-600 focus:ring-4 focus:ring-blue-700`}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
