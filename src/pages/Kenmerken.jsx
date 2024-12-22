import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Voeg deze import toe
import { Check, ArrowRight } from 'lucide-react';

const translations = {
  nl: {
    title: "Kenmerken",
    subtitle: "Schapenweide 5, 1689 MX Zwaag",
    details: {
      objectData: {
        title: "Object gegevens",
        content: `Soort woning: Eengezinswoning\nType woning: Vrijstaande woning\nBouwjaar: 2002`
      },
      dimensions: {
        title: "Maten object",
        content: `Aantal kamers: 6 kamers\nAantal slaapkamers: 4 slaapkamer(s)\nInhoud woning: 762 m³\nPerceel oppervlakte: 555 m²\nGebruiksoppervlakte woonfunctie: 174 m²`
      },
      location: {
        title: "Details",
        content: `Gelegen in een rustige doodlopende straat. Vrij gelegen aan een zijde en aan de achterzijde aan het water.\nOp korte afstand tref je alle voorzieningen.`
      },
      energy: {
        title: "Energie",
        content: `Energielabel: A\nIsolatie: Volledig geïsoleerd\nVerwarming: C.V.-Ketel\nWarmwater: C.V.-Ketel\nC.V.-Ketel: Remeha (Gas gestookt combiketel uit 2013, eigendom)`
      },
      garden: {
        title: "Tuin gegevens",
        content: `Tuin: Verzorgd, rondom\nHoofdtuin: Tuin rondom`
      }
    },
    cta: "Plan een bezichtiging"
  },
  en: {
    title: "Characteristics",
    subtitle: "Schapenweide 5, 1689 MX Zwaag",
    details: {
      objectData: {
        title: "Object Data",
        content: `Type of house: Detached house\nHouse type: Freestanding\nYear of construction: 2002`
      },
      dimensions: {
        title: "Object Dimensions",
        content: `Number of rooms: 6 rooms\nNumber of bedrooms: 4 bedroom(s)\nHouse volume: 762 m³\nPlot area: 555 m²\nUsable living area: 174 m²`
      },
      location: {
        title: "Details",
        content: `Located in a quiet dead-end street. Freely located on one side and at the back by the water.\nAll amenities are within short distance.`
      },
      energy: {
        title: "Energy",
        content: `Energy label: A\nInsulation: Fully insulated\nHeating: Central heating\nHot water: Central heating\nBoiler: Remeha (Gas-fired combi boiler from 2013, owned)`
      },
      garden: {
        title: "Garden Details",
        content: `Garden: Well-maintained, surrounding\nMain garden: Garden surrounding`
      }
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

const Kenmerken = () => {
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

        {Object.values(content.details).map((section, index) => (
          <section key={index} className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</p>
          </section>
        ))}

       {/* Link naar de contactpagina */}
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

export default Kenmerken;
