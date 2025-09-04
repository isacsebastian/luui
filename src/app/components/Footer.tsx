"use client";

import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Left Section - Logo & Description */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-[#0077B6] rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-[#0077B6]">Luuí</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Plataforma digital que transforma el cuidado de adultos mayores en Latinoamérica, 
              mejorando su calidad de vida con tecnología e innovación.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-[#4267B2] rounded-lg flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-colors">
                <FaFacebookF className="text-white text-sm" />
              </div>
              <div className="w-10 h-10 bg-[#1DA1F2] rounded-lg flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-colors">
                <FaTwitter className="text-white text-sm" />
              </div>
              <div className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-colors">
                <FaLinkedinIn className="text-white text-sm" />
              </div>
            </div>
          </div>

          {/* Center Section - Links Columns */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Servicios Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Servicios</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">Monitoreo vital</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">Historias clínicas</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">Detección de caídas</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">Cuidadores</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">Consultas médicas</a></li>
              </ul>
            </div>

            {/* Equipo Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Equipo</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">Dr. Sofia Mendez</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">Dr. Juan Pérez</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">Dr. Kimberly Torres</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">Mateo Moreira</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">David Castillo</a></li>
              </ul>
            </div>

            {/* Enlaces Rápidos Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">Servicios</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">Doctores</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">Acerca de</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#0077B6] transition-colors text-sm">Contacto</a></li>
              </ul>
            </div>

          </div>

          {/* Right Section - Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Email*" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                />
                <button className="w-full bg-[#4267B2] hover:bg-[#365899] text-white py-3 px-4 rounded-lg font-medium text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 Luuí. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-[#0077B6] text-sm transition-colors">Términos</a>
              <a href="#" className="text-gray-600 hover:text-[#0077B6] text-sm transition-colors">Privacidad</a>
              <a href="#" className="text-gray-600 hover:text-[#0077B6] text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;