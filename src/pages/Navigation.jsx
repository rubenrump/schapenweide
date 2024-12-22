import React, { useState, createContext, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LanguageContext = createContext();

const translations = {
  nl: {
    home: "Home",
    algemeen: "Algemeen",
    kenmerken: "Kenmerken",
    omgeving: "Omgeving",
    contact: "Contact"
  },
  en: {
    home: "Home",
    algemeen: "General",
    kenmerken: "Features",
    omgeving: "Surroundings",
    contact: "Contact"
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('nl');
  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

const Navigation = () => {
  const { currentLang, setCurrentLang } = useLanguage();
  const content = translations[currentLang];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Schapenweide 5</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              `transition-colors ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`
            }>{content.home}</NavLink>
            <NavLink to="/algemeen" className={({ isActive }) => 
              `transition-colors ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`
            }>{content.algemeen}</NavLink>
            <NavLink to="/kenmerken" className={({ isActive }) => 
              `transition-colors ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`
            }>{content.kenmerken}</NavLink>
            <NavLink to="/omgeving" className={({ isActive }) => 
              `transition-colors ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`
            }>{content.omgeving}</NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `transition-colors ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`
            }>{content.contact}</NavLink>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentLang('nl')}
              className={`px-2 py-1 rounded ${currentLang === 'nl' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}
            >NL</button>
            <button
              onClick={() => setCurrentLang('en')}
              className={`px-2 py-1 rounded ${currentLang === 'en' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}
            >EN</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


