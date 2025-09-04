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
    <div className="bg-white rounded-lg shadow-lg flex items-center justify-between p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
      <div className="flex-1">
        <h3 className="font-bold text-[#0077B6] text-base sm:text-lg mb-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">
          {subtitle}
        </p>
      </div>
      <button 
        onClick={onClick}
        className="bg-[#56A6E9] hover:bg-[#0077B6] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base group-hover:scale-105"
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
      title: "Adultos Mayores",
      subtitle: "Servicios y apoyo",
      buttonText: "Registrarme",
      formType: 'adultos-mayores' as const
    },
    {
      title: "Profesionales",
      subtitle: "Únete a nuestro equipo",
      buttonText: "Unirme",
      formType: 'profesionales' as const
    },
    {
      title: "Cuidadores",
      subtitle: "Oportunidades de trabajo",
      buttonText: "Aplicar",
      formType: 'cuidadores' as const
    }
  ];

  return (
    <>
      <section id="contacto" className="w-full bg-gradient-to-r from-[#0077B6] to-[#56A6E9] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Side - Contact Info */}
            <div className="space-y-6">
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                ¿Deseas probar Luuí?
              </h2>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-xl text-white" />
                  <p className="text-base sm:text-lg font-medium text-white">
                    Phone: +593 98 701 7018
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-xl text-white" />
                  <p className="text-base sm:text-lg font-medium text-white">
                    Email: info@luui.com
                  </p>
                </div>
              </div>

              {/* Decorative line */}
              <div className="w-20 h-1 bg-white opacity-50 rounded-full"></div>
            </div>

            {/* Right Side - CTA Cards */}
            <div className="space-y-4">
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