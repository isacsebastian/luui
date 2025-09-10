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
    <div className="bg-white rounded-md shadow-md flex items-center justify-between p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex-1">
        <h3 className="font-semibold text-[#004D85] text-base sm:text-lg mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      </div>
      <button 
        onClick={onClick}
        className="bg-[#0077B6] hover:bg-[#004D85] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md font-medium transition-all duration-300 text-sm sm:text-base hover:shadow-md"
      >
        {buttonText}
      </button>
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
      <section id="contacto" className="w-full bg-gradient-to-r from-[#004D85] to-[#0077B6] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              {/* Title */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4">
                  Únase a Luuí
                </h2>
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
                      info@luui.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="w-24 h-1 bg-white/40 rounded-full"></div>
            </div>

            {/* Right Side - CTA Cards */}
            <div className="space-y-5">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  Seleccione su perfil
                </h3>
                <p className="text-white/90 text-base">
                  Elija la opción que mejor describa su situación
                </p>
              </div>
              
              {ctaOptions.map((option, index) => (
                <CTACard
                  key={index}
                  title={option.title}
                  subtitle={option.subtitle}
                  buttonText={option.buttonText}
                  onClick={() => openModal(option.formType)}
                />
              ))}
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