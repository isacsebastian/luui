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
    <section id="servicios" className="w-full min-h-screen bg-[#EBF8FF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004D85] leading-tight mb-4">
            Mejora la vida de los adultos mayores con Luuí
          </h1>
          <div className="w-24 h-1 bg-[#0077B6] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="w-full">
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={servicesData[service.key].description}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="text-center">
          <button className="bg-[#0077B6] hover:bg-[#004D85] text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
            Nuestros servicios
          </button>
        </div>
         */}
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
    <div className="group [perspective:1000px] w-full h-80">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Frente */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
            <div className="p-8 flex flex-col h-full justify-center items-center text-center">
              <div className="mb-6">
                <Icon className="text-6xl text-[#56A6E9] mx-auto" />
              </div>
              <div className="w-full h-px bg-[#B4BFCC] mb-6"></div>
              <h3 className="text-lg font-semibold text-[#004D85] leading-tight">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Reverso */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="bg-gradient-to-br from-[#56A6E9] to-[#0077B6] text-white rounded-xl shadow-lg h-full p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>
            <p className="text-sm leading-relaxed text-center opacity-95">
              {description}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ServicesSection;