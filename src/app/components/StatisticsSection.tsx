"use client";

import React from 'react';

const StatisticsSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0077B6] mb-4">
            Adultos mayores en Latinoamérica: una realidad urgente
          </h2>
        </div>

        {/* Grid de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Estadística 1 */}
          <div className="text-center">
            <div className="text-6xl lg:text-7xl font-bold text-[#56A6E9] mb-4">
              25%
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-[#0077B6] mb-2">
              Envejecimiento
            </h3>
            <p className="text-lg text-[#0077B6]">
              acelerado
            </p>
          </div>

          {/* Estadística 2 */}
          <div className="text-center">
            <div className="text-6xl lg:text-7xl font-bold text-[#56A6E9] mb-4">
              44%
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-[#0077B6] mb-2">
              Vulnerabilidad de los
            </h3>
            <p className="text-lg text-[#0077B6]">
              adultos mayores
            </p>
          </div>

          {/* Estadística 3 */}
          <div className="text-center">
            <div className="text-6xl lg:text-7xl font-bold text-[#56A6E9] mb-4">
              12%
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-[#0077B6] mb-2">
              Brecha en la
            </h3>
            <p className="text-lg text-[#0077B6]">
              profesionalización
            </p>
          </div>

        </div>

        {/* Línea decorativa opcional */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-[#56A6E9] to-[#0077B6] rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default StatisticsSection;