import React, { useState } from 'react';
import { MapPin, Building, Train, Car, School, ShoppingBag, HeartPulse, Coffee } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// ImageCard Component
const ImageCard = ({ src, alt }) => (
  <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden mt-4 flex items-center justify-center bg-gray-200">
    {src ? (
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    ) : (
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-gray-500">{alt || 'Afbeelding komt binnenkort...'}</span>
      </div>
    )}
  </div>
);

const translations = {
  nl: {
    title: "Omgeving",
    subtitle: "Ontdek het beste van Zwaag en Hoorn",
    history: {
      title: "Rijke Historie",
      content: `Hoorn, een stad met een rijke geschiedenis die teruggaat tot de 13e eeuw, was een belangrijke 
havenstad tijdens de Nederlandse Gouden Eeuw. Als een van de zes kamers van de VOC speelde Hoorn een 
cruciale rol in de Nederlandse maritieme geschiedenis. De stad heeft zijn historische karakter bewaard, 
met prachtige monumenten zoals de Hoofdtoren en het Westfries Museum.

Deze rijke historie maakt dit gebied uniek, waar je niet alleen de prachtige architectuur kunt bewonderen 
maar ook het authentieke Nederlandse gevoel kunt ervaren. Wandelen door de smalle straatjes geeft je een 
gevoel van de tijdloze charme die Hoorn en Zwaag zo bijzonder maakt.

Zwaag, nu een moderne woonwijk van Hoorn, was oorspronkelijk een zelfstandig dorp met een geschiedenis 
die teruggaat tot de middeleeuwen. Het gebied rond de Schapenweide heeft zich ontwikkeld tot een 
gewilde woonlocatie die het beste van twee werelden combineert: de rust van een dorpse omgeving met 
alle voorzieningen van een stad binnen handbereik.`,
      imageAlt: "Historie van de stad",
      imageSrc: "/images/hoorn1.jpg" // Zorg ervoor dat deze afbeelding bestaat in public/images/
    },
    amenities: {
      title: "Voorzieningen in de Buurt",
      items: [
        {
          icon: ShoppingBag,
          title: "Winkelcentrum De Korenbloem",
          distance: "400m",
          description: "Compleet winkelcentrum met supermarkt, bakker, en diverse speciaalzaken.",
          imageAlt: "Winkelcentrum De Korenbloem",
          imageSrc: "/images/korenbloem.jpg"
        },
        {
          icon: School,
          title: "Onderwijsvoorzieningen",
          distance: "500-800m",
          description: "Meerdere basisscholen en middelbare scholen binnen loopafstand.",
          imageAlt: "Onderwijsvoorzieningen",
          imageSrc: "/images/school.jpg"
        },
        {
          icon: HeartPulse,
          title: "Medisch Centrum",
          distance: "600m",
          description: "Huisartsenpost en apotheek in de directe omgeving.",
          imageAlt: "Medisch Centrum",
          imageSrc: "/images/ziekenhuis.jpg"
        },
        {
          icon: Coffee,
          title: "Horeca",
          distance: "5 min",
          description: "Diverse restaurants en cafés in het historische centrum.",
          imageAlt: "Horeca",
          imageSrc: "/images/cafe.jpg"
        }
      ]
    },
    accessibility: {
      title: "Bereikbaarheid",
      content: `Geniet van de rust en sereniteit van Zwaag terwijl je toch binnen een half uur in het bruisende 
Amsterdam kunt zijn. Dankzij de directe verbindingen via het openbaar vervoer en de snelle autosnelwegen 
heb je het beste van twee werelden: een vredige woonomgeving en de nabijheid van grote stadscentra.`,
      items: [
        {
          icon: Train,
          title: "Openbaar Vervoer",
          description: "Station Hoorn op 5 minuten fietsafstand met directe verbindingen naar Amsterdam.",
          imageAlt: "Openbaar Vervoer",
          imageSrc: "/images/station.jpg"
        },
        {
          icon: Car,
          title: "Auto",
          description: "Directe aansluiting op A7 richting Amsterdam (30 min) en de Afsluitdijk.",
        }
      ]
    },
    map: {
      title: "Locatie",
      description: "Bekijk onze locatie op de kaart hieronder."
    }
  },
  en: {
    title: "Area",
    subtitle: "Discover the best of Zwaag and Hoorn",
    history: {
      title: "Rich History",
      content: `Hoorn, a city with a rich history dating back to the 13th century, was an important port city 
during the Dutch Golden Age. As one of the six chambers of the Dutch East India Company (VOC), Hoorn 
played a crucial role in Dutch maritime history. The city has preserved its historical character, with 
beautiful monuments such as the Hoofdtoren and the Westfries Museum.

This rich history makes the area unique, where you can not only admire the stunning architecture 
but also experience the authentic Dutch feel. Strolling through the narrow streets gives you a 
sense of the timeless charm that makes Hoorn and Zwaag so special.

Zwaag, now a modern residential area of Hoorn, was originally an independent village with a history 
dating back to medieval times. The area around Schapenweide has developed into a sought-after 
residential location that combines the best of both worlds: the peace of a village environment with 
all city amenities within reach.`,
      imageAlt: "Rich History of the City",
      imageSrc: "/images/hoorn1.jpg"
    },
    amenities: {
      title: "Local Amenities",
      items: [
        {
          icon: ShoppingBag,
          title: "De Korenbloem Shopping Center",
          distance: "400m",
          description: "Complete shopping center with supermarket, bakery, and various specialty shops.",
          imageAlt: "De Korenbloem Shopping Center",
          imageSrc: "/images/korenbloem.jpg"
        },
        {
          icon: School,
          title: "Educational Facilities",
          distance: "500-800m",
          description: "Multiple primary and secondary schools within walking distance.",
          imageAlt: "Educational Facilities",
          imageSrc: "/images/school.jpg"
        },
        {
          icon: HeartPulse,
          title: "Medical Center",
          distance: "600m",
          description: "GP practice and pharmacy in the immediate vicinity.",
          imageAlt: "Medical Center",
          imageSrc: "/images/ziekenhuis.jpg"
        },
        {
          icon: Coffee,
          title: "Dining",
          distance: "5 min",
          description: "Various restaurants and cafés in the historic center.",
          imageAlt: "Dining",
          imageSrc: "/images/cafe.jpg"
        }
      ]
    },
    accessibility: {
      title: "Accessibility",
      content: `Enjoy the peace and serenity of Zwaag while still being within half an hour of the vibrant 
Amsterdam. Thanks to direct connections via public transport and fast highways, you have the best of 
both worlds: a tranquil living environment and the proximity to major city centers.`,
      items: [
        {
          icon: Train,
          title: "Public Transport",
          description: "Hoorn station within 5 minutes cycling distance with direct connections to Amsterdam.",
          imageAlt: "Public Transport",
          imageSrc: "/images/station.jpg"
        },
        {
          icon: Car,
          title: "Car",
          description: "Direct connection to A7 towards Amsterdam (30 min) and Afsluitdijk.",
        }
      ]
    },
    map: {
      title: "Location",
      description: "View our location on the map below."
    }
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

const Omgeving = () => {
  const [currentLang, setCurrentLang] = useState('nl');
  const content = translations[currentLang];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      {/* Language Switcher */}
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
        <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
        <p className="text-xl text-gray-600 mb-12">{content.subtitle}</p>

        {/* History Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">{content.history.title}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.history.content}</p>
          <ImageCard src={content.history.imageSrc} alt={content.history.imageAlt} />
        </section>

        {/* Amenities Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">{content.amenities.title}</h2>
          <ul className="space-y-8">
            {content.amenities.items.map((item, index) => (
              <li key={index} className="flex flex-col">
                <div className="flex items-start">
                  <item.icon className="w-6 h-6 text-gray-700 mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.distance}</p>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
                <ImageCard src={item.imageSrc} alt={item.imageAlt} />
              </li>
            ))}
          </ul>
        </section>

        {/* Accessibility Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">{content.accessibility.title}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.accessibility.content}</p>
          <ul className="space-y-8 mt-4">
            {content.accessibility.items.map((item, index) => (
              <li key={index} className="flex flex-col">
                <div className="flex items-start">
                  <item.icon className="w-6 h-6 text-gray-700 mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Map Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">{content.map.title}</h2>
          <p className="text-gray-700 mb-4">{content.map.description}</p>
          <div className="w-full h-64">
            <MapContainer center={[52.660013, 5.042775]} zoom={13} scrollWheelZoom={false} className="h-full w-full rounded-lg">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[52.660013, 5.042775]}>
                <Popup>
                  {currentLang === 'nl' ? 'Onze Locatie' : 'Our Location'}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Omgeving;
