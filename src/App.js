// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Kenmerken, Omgeving, Algemeen } from './pages';
import ContactPage from './pages/ContactPage';
import { Phone, Menu, X } from 'lucide-react';
import { LanguageProvider, LanguageSwitcher } from './pages/Navigation';
import ImageGallery from './components/ImageGallery';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State voor menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              Schapenweide 5
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/algemeen"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              Algemeen
            </NavLink>
            <NavLink
              to="/kenmerken"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              Kenmerken
            </NavLink>
            <NavLink
              to="/omgeving"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              Omgeving
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              Contact
            </NavLink>
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
          {/* Hamburger Menu Icon voor Mobiel */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label={isOpen ? 'Sluit menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {/* Telefoonnummer */}
          <div className="flex items-center">
            <a href="tel:0228592253" className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>(0228) 59 22 53</span>
            </a>
          </div>
        </div>
      </div>
      {/* Mobiel Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/algemeen"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              Algemeen
            </NavLink>
            <NavLink
              to="/kenmerken"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              Kenmerken
            </NavLink>
            <NavLink
              to="/omgeving"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              Omgeving
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`
              }
            >
              Contact
            </NavLink>
            {/* Language Switcher in Mobiel Menu */}
            <div className="flex space-x-2 mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Home Page
const HomePage = () => (
  <div className="pt-16">
    <div className="relative h-[80vh]">
      <ImageGallery
        images={[
          '/images/image00035.jpg',
          '/images/image00036.jpeg',
          '/images/image00037.jpeg',
          '/images/image00038.jpeg',
          '/images/image00039.jpeg',
          '/images/image00040.jpeg',
        ]}
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center z-10"
        style={{ pointerEvents: 'none' }} // Voorkomt dat de overlay klikgebeurtenissen blokkeert
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-white" style={{ pointerEvents: 'auto' }}>
            <h1 className="text-5xl font-bold mb-4">Luxe Villa in Zwaag</h1>
            <p className="text-2xl mb-6">€799.000 k.k.</p>
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Plan een bezichtiging
              </Link>
              <Link
                to="/kenmerken"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Bekijk kenmerken
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// App Component
const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kenmerken" element={<Kenmerken />} />
            <Route path="/omgeving" element={<Omgeving />} />
            <Route path="/algemeen" element={<Algemeen />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
