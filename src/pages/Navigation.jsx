// src/pages/Navigation.jsx
import React, { createContext, useContext, useState } from 'react';

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

// LanguageSwitcher Component
export const LanguageSwitcher = () => {
  const { currentLang, setCurrentLang } = useLanguage();

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setCurrentLang('nl')}
        className={`px-2 py-1 rounded ${
          currentLang === 'nl' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'
        }`}
      >
        NL
      </button>
      <button
        onClick={() => setCurrentLang('en')}
        className={`px-2 py-1 rounded ${
          currentLang === 'en' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'
        }`}
      >
        EN
      </button>
    </div>
  );
};
