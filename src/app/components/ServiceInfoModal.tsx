"use client";

import React from 'react';
import { FaTimes, FaCheck, FaClock, FaShieldAlt } from 'react-icons/fa';

interface ServiceInfo {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  availability: string;
  security: string;
}

interface ServiceInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceData: ServiceInfo | null;
}

const ServiceInfoModal: React.FC<ServiceInfoModalProps> = ({ isOpen, onClose, serviceData }) => {
  if (!isOpen || !serviceData) return null;

  const { icon: Icon, title, description, features, benefits, availability, security } = serviceData;

  return (
    <div 
      className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg lg:max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#EBF8FF] rounded-lg">
              <Icon className="text-2xl text-[#0077B6]" />
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-[#004D85]">
                {title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Información detallada del servicio
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 lg:grid lg:grid-cols-2 lg:gap-8">
          
          {/* Left Column - Description and Features */}
          <div className="space-y-6">
            
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-[#004D85] mb-3">
                ¿Qué incluye este servicio?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-[#004D85] mb-3 flex items-center gap-2">
                <FaCheck className="text-[#0077B6]" />
                Características principales
              </h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheck className="text-[#56A6E9] mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column - Benefits and Info */}
          <div className="space-y-6 mt-6 lg:mt-0">
            
            {/* Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-[#004D85] mb-3">
                Beneficios para ti
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-[#EBF8FF] p-3 rounded-lg border-l-4 border-[#0077B6]">
                    <p className="text-[#004D85] text-sm lg:text-base font-medium">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              
              {/* Availability */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <FaClock className="text-[#0077B6] mt-1" />
                <div>
                  <h4 className="font-semibold text-[#004D85] text-sm">Disponibilidad</h4>
                  <p className="text-gray-700 text-sm">{availability}</p>
                </div>
              </div>

              {/* Security */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <FaShieldAlt className="text-[#0077B6] mt-1" />
                <div>
                  <h4 className="font-semibold text-[#004D85] text-sm">Seguridad</h4>
                  <p className="text-gray-700 text-sm">{security}</p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={onClose}
                className="w-full bg-[#0077B6] hover:bg-[#004D85] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Solicitar este servicio
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ServiceInfoModal;