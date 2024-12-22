import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Check, ArrowRight } from 'lucide-react';

const translations = {
  nl: {
    title: "Algemeen",
    subtitle: "Schapenweide 5, 1689 MX Zwaag",
    introduction: {
      title: "Unieke kans",
      content: `Uitgebouwde vrijstaande villa met dubbele garage en tuinkamer op uitstekende locatie. 
      Ontdek deze prachtige vrijstaande villa die net dat beetje extra biedt. De woning is gelegen in een rustige, 
      doodlopende straat en biedt ultieme privacy en rust.`
    },
    location: {
      title: "Locatie",
      content: `Aan het einde van deze straat, omgeven door groen aan de ene zijde en aan de achterzijde grenzend aan water. 
      Bovendien bevinden zich scholen, een winkelcentrum, sportaccommodaties, het NS-station dichtbij en het bruisende 
      stadscentrum van Hoorn is op slechts 5 minuten fietsen.`
    },
    construction: {
      title: "Constructie & Onderhoud",
      content: `De woning is gebouwd in 2002 met hoogwaardige materialen en perfect onderhouden door de eigenaren. 
      Dankzij de rechte wanden biedt de woning onwijs veel ruimte op alle verdiepingen.`
    },
    highlights: {
      title: "Bijzonderheden",
      items: [
        "Perceeloppervlakte van ca. 555 m² eigen grond",
        "Alarminstallatie in de woning aanwezig",
        "4 slaapkamers aanwezig en 2 badkamers",
        "Uitstekende locatie in een rustige woonwijk",
        "Alle voorzieningen op korte afstand",
        "Omgeven door groen en water"
      ]
    },
    cta: "Plan een bezichtiging"
  },
  en: {
    title: "General",
    subtitle: "Schapenweide 5, 1689 MX Zwaag",
    introduction: {
      title: "Unique Opportunity",
      content: `Expanded detached villa with double garage and garden room in an excellent location. 
      Discover this beautiful detached villa that offers that little bit extra. The house is located in a quiet, 
      dead-end street and offers ultimate privacy and tranquility.`
    },
    location: {
      title: "Location",
      content: `At the end of this street, surrounded by greenery on one side and bordering water at the rear. 
      Moreover, schools, a shopping center, sports facilities, and the train station are nearby, and the vibrant 
      city center of Hoorn is only 5 minutes cycling away.`
    },
    construction: {
      title: "Construction & Maintenance",
      content: `The house was built in 2002 with high-quality materials and perfectly maintained by the owners. 
      Thanks to the straight walls, the house offers an incredible amount of space on all floors.`
    },
    highlights: {
      title: "Special Features",
      items: [
        "Plot area of approximately 555 m² freehold",
        "Alarm system present in the house",
        "4 bedrooms and 2 bathrooms",
        "Excellent location in a quiet residential area",
        "All amenities within short distance",
        "Surrounded by greenery and water"
      ]
    },
    cta: "Schedule a Viewing"
  }
};

const LanguageButton = ({ language, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg transition-colors ${
      isActive 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-700 hover:bg-gray-100'
    }`}
  >
    {language.toUpperCase()}
  </button>
);

const Algemeen = () => {
  const [currentLang, setCurrentLang] = useState('nl');
  const content = translations[currentLang];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="fixed top-20 right-4 flex space-x-2 bg-white rounded-lg shadow-lg p-2 z-50">
        <LanguageButton 
          language="nl" 
          isActive={currentLang === 'nl'} 
          onClick={() => setCurrentLang('nl')} 
        />
        <LanguageButton 
          language="en" 
          isActive={currentLang === 'en'} 
          onClick={() => setCurrentLang('en')} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">{content.title}</h1>
        <p className="text-xl text-gray-600 mb-12">{content.subtitle}</p>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">{content.introduction.title}</h2>
          <p className="text-gray-700 leading-relaxed">{content.introduction.content}</p>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">{content.location.title}</h2>
          <p className="text-gray-700 leading-relaxed">{content.location.content}</p>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">{content.construction.title}</h2>
          <p className="text-gray-700 leading-relaxed">{content.construction.content}</p>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">{content.highlights.title}</h2>
          <ul className="space-y-4">
            {content.highlights.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            {content.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Algemeen;
