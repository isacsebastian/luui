"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Controlar visibilidad del navbar basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mostrar/ocultar navbar según dirección del scroll
      if (currentScrollY < lastScrollY) {
        // Scroll hacia arriba - mostrar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scroll hacia abajo después de 80px - ocultar
        setIsVisible(false);
        // Cerrar menú si está abierto
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
      
      // Siempre visible cerca del top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    closeMenu();
  };

  const navLinks = [
    { href: '#inicio', label: 'Inicio', id: 'inicio' },
    { href: '#servicios', label: 'Servicios', id: 'servicios' },
    { href: '#nosotros', label: 'Acerca de nosotros', id: 'nosotros' },
    { href: '#contacto', label: 'Contáctanos', id: 'contacto' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full bg-white shadow-sm px-4 sm:px-8 py-4 z-50 transition-transform duration-200 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#0077B6]">
            Luuí
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors duration-200 px-3 py-2 rounded-md ${
                  activeSection === link.id
                    ? 'text-[#0077B6] bg-blue-50'
                    : 'text-[#004D85] hover:text-[#0077B6]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#004D85] hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white border-t shadow-lg">
            <div className="py-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`block px-6 py-3 transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'text-[#0077B6] bg-blue-50 border-r-4 border-[#0077B6]'
                      : 'text-[#004D85] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer para compensar navbar fijo */}
      <div className="h-20"></div>

      {/* Overlay muy sutil para cerrar menú móvil */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-opacity-5 z-40"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;