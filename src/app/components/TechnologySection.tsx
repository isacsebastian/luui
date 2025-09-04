"use client";

import React from 'react';
import Image from "next/image";

const TechnologySection = () => {
  return (
    <section className="w-full bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Images Grid */}
          <div className="relative">
            {/* Contenedor centrado para el grid */}
            <div className="max-w-md mx-auto">
              {/* Grid específico de las imágenes */}
              <div className="grid grid-cols-2 gap-3">
                
                {/* Imagen superior izquierda - más grande */}
                <div className="relative h-40 rounded-1xl overflow-hidden shadow-lg">
                  <Image 
                    src="/images/Temporal/six.webp" 
                    alt="Profesional médico tomando presión"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABRAQEAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                  />
                </div>

                {/* Imagen superior derecha - más pequeña */}
                <div className="relative h-32 rounded-1xl overflow-hidden shadow-lg mt-8">
                  <Image 
                    src="/images/Temporal/one.webp" 
                    alt="Médico atendiendo paciente"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABRAQEAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                  />
                </div>

                {/* Imagen inferior - ocupa ambas columnas */}
                <div className="col-span-2 relative h-48 rounded-1xl overflow-hidden shadow-lg">
                  <Image 
                    src="/images/Temporal/two.webp" 
                    alt="Enfermera aplicando vacuna a paciente"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABRAQEAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                  />
                </div>

              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6">
            
            {/* Título */}
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0077B6] leading-tight">
              La tecnología al servicio de los adultos mayores
            </h2>

            {/* Descripción */}
            <p className="text-lg text-[#004D85] leading-relaxed">
              Nuestra Solución integral une cuidado y tecnología: una app para organizar servicios, 
              dispositivos IoT que detectan riesgos de forma preventiva y un marketplace con 
              insumos y apoyo de salud, pensado para mejorar la vida de los adultos mayores.
            </p>

            {/* Botón */}
            <div className="pt-4">
              <button className="border-2 border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
                Conoce más
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologySection;