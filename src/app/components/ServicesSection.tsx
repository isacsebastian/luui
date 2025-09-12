"use client";

import React from 'react';
import { FaHeartPulse, FaNotesMedical, FaPersonFallingBurst, FaUserNurse, FaHospitalUser, FaPills } from "react-icons/fa6";

// ✅ Datos de servicios con as const
const servicesData = {
  'monitoreo-vital': {
    icon: FaHeartPulse,
    title: "Monitoreo de signos vitales",
    description: "Seguimiento en tiempo real de frecuencia cardíaca, presión arterial, oxígeno en sangre y temperatura, con alertas inmediatas para la familia y el cuidador.",
  },
  'historias-clinicas': {
    icon: FaNotesMedical,
    title: "Historias clínicas digitales",
    description: "Toda la información médica y de cuidado organizada en un solo lugar, accesible y actualizada para asegurar continuidad en los tratamientos.",
  },
  'deteccion-caidas': {
    icon: FaPersonFallingBurst,
    title: "Detección automática de caídas",
    description: "Sensores IoT que identifican caídas y envían alertas de emergencia al instante, reduciendo riesgos y tiempos de respuesta.",
  },
  'cuidadores': {
    icon: FaUserNurse,
    title: "Cuidadores certificados",
    description: "Red de profesionales validados, capacitados en cuidado geriátrico y acompañamiento humano, listos para atender a domicilio por horas o de forma permanente.",
  },
  'consultas-medicas': {
    icon: FaHospitalUser,
    title: "Control de consultas médicas",
    description: "Agendamiento, recordatorios y trazabilidad de citas médicas presenciales o virtuales, con reportes automáticos para toda la familia.",
  },
  'medicamentos': {
    icon: FaPills,
    title: "Acceso a insumos y medicamentos",
    description: "Conexión con proveedores confiables de medicinas y suplementos, con entregas programadas y gestión integrada desde la app.",
  }
} as const;

// ✅ Tipo de las llaves de servicesData
type ServiceKey = keyof typeof servicesData;

const services: {
  icon: React.ElementType;
  title: string;
  key: ServiceKey;
}[] = [
  { icon: FaHeartPulse, title: "Monitoreo de signos vitales", key: "monitoreo-vital" },
  { icon: FaNotesMedical, title: "Historias clínicas digitales", key: "historias-clinicas" },
  { icon: FaPersonFallingBurst, title: "Detección automática de caídas", key: "deteccion-caidas" },
  { icon: FaUserNurse, title: "Cuidadores certificados", key: "cuidadores" },
  { icon: FaHospitalUser, title: "Control de consultas médicas", key: "consultas-medicas" },
  { icon: FaPills, title: "Acceso a insumos y medicamentos", key: "medicamentos" }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="w-full bg-[#EBF8FF] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#004D85] leading-tight text-center sm:text-left">
            Mejora la vida de los adultos mayores con Luuí
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-sm">
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={servicesData[service.key].description}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center sm:text-left">
          <button className="bg-[#0077B6] hover:bg-[#004D85] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
            Nuestros servicios
          </button>
        </div>

      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group [perspective:1000px] w-full h-[220px] sm:h-[240px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Frente */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
            <div className="px-4 py-5 sm:px-5 sm:py-6 flex-1 flex flex-col">
              <div className="mb-4 text-center">
                <Icon className="text-8xl sm:text-7xl text-[#56A6E9] mx-auto mt-7" />
              </div>
              <div className="flex-1"></div>
              <div className="w-full h-0.5 bg-[#B4BFCC] mb-4"></div>
              <div className="flex flex-row items-center">
                <p className="text-sm sm:text-base text-[#004D85] font-medium leading-tight flex-1">
                  {title}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reverso */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="bg-[#56A6E9] text-white rounded-lg shadow-lg h-full p-4 sm:p-5 flex flex-col justify-center">
            <h2 className="text-base font-bold mb-4 text-center">{title}</h2>
            <p className="text-sm leading-relaxed text-center px-2">
              {description}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ServicesSection;
