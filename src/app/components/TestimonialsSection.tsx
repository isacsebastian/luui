"use client";

import React from 'react';
import { FaQuoteLeft } from "react-icons/fa6";
import Count from "./Count";

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-[#EBF8FF] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#004D85] leading-tight text-center sm:text-left">
            Testimonios
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Left Side - Stats */}
          <div className="space-y-6">
            {/* Counter */}
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#004D85]">
              <Count finalValue={1950} duration={2000} />
            </div>
            
            {/* Rating */}
            <h3 className="text-base sm:text-lg lg:text-xl text-[#004D85] font-medium">
              <strong>4.9 ★</strong> | Basado en 500 reseñas verificadas
            </h3>
            
            {/* Button */}
            <button className="border-2 border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base">
              Reseñas
            </button>
          </div>

          {/* Right Side - Testimonial */}
          <div className="space-y-6">
            
            {/* Quote Icon */}
            <div className="text-4xl sm:text-5xl text-[#56A6E9]">
              <FaQuoteLeft />
            </div>
            
            {/* Quote Text */}
            <p className="text-base sm:text-lg text-[#004D85] leading-relaxed">
              Con la app puedo organizar el cuidado de mi mamá desde cualquier lugar. 
              Recibo reportes claros y notificaciones en tiempo real, lo que me da seguridad y confianza.
            </p>
            
            {/* Author Info */}
            <div className="space-y-1">
              <h4 className="text-lg sm:text-xl font-semibold text-[#56A6E9]">
                Susana
              </h4>
              <p className="text-sm sm:text-base text-[#56A6E9]">
                Clienta
              </p>
            </div>
            
            {/* Author Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-md">
              <img 
                className="w-full h-[240px] sm:h-[280px] object-cover" 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                alt="Susana García sonriendo - Cliente satisfecha con Luuí"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;

