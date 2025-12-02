import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Facility', path: '/facility' },
    { name: 'Classes', path: '/classes' },
    // Trainers link removed
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0B5FFF] backdrop-blur-sm z-50 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
             <div className="relative w-8 h-8 overflow-hidden rounded bg-white p-0.5">
                <img 
                  src={IMAGES.logo.src} 
                  alt={IMAGES.logo.alt} 
                  className="w-full h-full object-cover"
                />
             </div>
             <span className="font-display font-bold text-xl tracking-wide text-white">
               EXTREME<span className="text-blue-100">FITNESS</span>
             </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  "text-sm font-bold transition-all duration-200 hover:text-blue-200",
                  location.pathname === link.path ? "text-white border-b-2 border-white" : "text-blue-50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-100 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      <div
        className={clsx(
          "md:hidden fixed inset-x-0 top-16 bg-white border-b border-gray-100 transition-all duration-300 ease-in-out overflow-hidden shadow-xl",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={clsx(
                "block w-full text-center px-3 py-2 rounded-md text-base font-bold transition-colors",
                location.pathname === link.path
                  ? "text-[#0B5FFF] bg-blue-50"
                  : "text-gray-600 hover:text-[#0B5FFF] hover:bg-gray-50"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;