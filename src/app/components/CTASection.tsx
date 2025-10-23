"use client";

import React, { useState } from 'react';
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import RegistrationModal from './RegistrationModal'; 

interface CTACardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onClick: () => void;
}

const CTACard: React.FC<CTACardProps> = ({ title, subtitle, buttonText, onClick }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#0077B6]/20 p-6 sm:p-8 transform hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#EBF8FF]/0 to-[#EBF8FF]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-[#004D85] text-lg sm:text-xl mb-3 group-hover:text-[#0077B6] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        <button 
          onClick={onClick}
          className="bg-gradient-to-r from-[#0077B6] to-[#56A6E9] hover:from-[#004D85] hover:to-[#0077B6] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold transition-all duration-300 text-base hover:shadow-xl hover:scale-105 transform relative overflow-hidden group/btn"
        >
          <span className="relative z-10">{buttonText}</span>
          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#56A6E9]/10 to-[#0077B6]/10 rounded-full transform translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
    </div>
  );
};

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFormType, setSelectedFormType] = useState<'adultos-mayores' | 'profesionales' | 'cuidadores'>('adultos-mayores');

  const openModal = (formType: 'adultos-mayores' | 'profesionales' | 'cuidadores') => {
    setSelectedFormType(formType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ctaOptions = [
    {
      title: "Servicios para Adultos Mayores",
      subtitle: "Acceda a nuestros servicios.",
      buttonText: "UNIRME",
      formType: 'adultos-mayores' as const
    },
    {
      title: "Profesionales Geriátricos",
      subtitle: "Forme parte de nuestro equipo.",
      buttonText: "APLICAR",
      formType: 'profesionales' as const
    },
    {
      title: "Cuidadores Familiares",
      subtitle: "Obtenga información y apoyo.",
      buttonText: "SABER MÁS",
      formType: 'cuidadores' as const
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <section id="contacto" className="w-full bg-gradient-to-br from-[#004D85] via-[#0077B6] to-[#56A6E9] py-16 sm:py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full transform -translate-x-32 translate-y-32"></div>
        <div className="w-full">
          <div className="w-full lg:w-4/5 mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              {/* Title */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4">
                  Únase a Luuí
                </h1>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                  Conéctese con nosotros y descubra cómo podemos apoyarle
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-md flex items-center justify-center">
                    <FaPhone className="text-lg text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80 font-medium">Teléfono</p>
                    <p className="text-lg font-semibold text-white">
                      +593 98 701 7018
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-md flex items-center justify-center">
                    <FaEnvelope className="text-lg text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80 font-medium">Correo electrónico</p>
                    <p className="text-lg font-semibold text-white">
                      info@luui.io
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="w-24 h-1 bg-white/40 rounded-full"></div>
            </div>

            {/* Right Side - CTA Cards */}
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Seleccione su perfil
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Elija la opción que mejor describa su situación
                </p>
                <div className="w-16 h-1 bg-white/60 rounded-full mt-4"></div>
              </div>
              
              <div className="space-y-6">
                {ctaOptions.map((option, index) => (
                  <div 
                    key={index}
                    className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CTACard
                      title={option.title}
                      subtitle={option.subtitle}
                      buttonText={option.buttonText}
                      onClick={() => openModal(option.formType)}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <RegistrationModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        formType={selectedFormType}
      />
    </>
  );
};

export default CTASection;