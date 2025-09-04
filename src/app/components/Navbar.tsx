"use client";

import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-[#0077B6]">
          Luuí
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-[#004D85] hover:text-[#0077B6] transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="text-[#004D85] hover:text-[#0077B6] transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="text-[#004D85] hover:text-[#0077B6] transition-colors">
            Acerca de nosotros
          </a>
          <a href="#contacto" className="text-[#004D85] hover:text-[#0077B6] transition-colors">
            Contáctanos
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-[#004D85]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;