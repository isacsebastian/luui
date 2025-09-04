"use client";

import React, { useState } from 'react';
import { FaHeartPulse, FaNotesMedical, FaPersonFallingBurst, FaUserNurse, FaHospitalUser, FaPills, FaAngleRight, FaCheck, FaClock, FaShieldCat } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

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
              <Icon className="text-2xl lg:text-3xl text-[#0077B6]" />
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
              <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                {description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-[#004D85] mb-3 flex items-center gap-2">
                <FaCheck className="text-[#0077B6]" />
                Características principales
              </h3>
              <ul className="space-y-3">
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
                  <div key={index} className="bg-[#EBF8FF] p-4 rounded-lg border-l-4 border-[#0077B6]">
                    <p className="text-[#004D85] text-sm lg:text-base font-medium">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info Cards */}
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
                <FaShieldCat className="text-[#0077B6] mt-1" />
                <div>
                  <h4 className="font-semibold text-[#004D85] text-sm">Seguridad y Confianza</h4>
                  <p className="text-gray-700 text-sm">{security}</p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-gray-100">
              <button 
                onClick={onClose}
                className="w-full bg-[#0077B6] hover:bg-[#004D85] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
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


const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceInfo | null>(null);

  // Datos detallados de cada servicio
  const servicesData: Record<string, ServiceInfo> = {
    'monitoreo-vital': {
      icon: FaHeartPulse,
      title: "Monitoreo de signos vitales",
      description: "Sistema de monitoreo continuo y en tiempo real de los signos vitales más importantes para adultos mayores, utilizando tecnología wearable y sensores no invasivos.",
      features: [
        "Monitoreo continuo de frecuencia cardíaca y presión arterial",
        "Alertas automáticas ante valores anórmales",
        "Reportes médicos detallados y análisis de tendencias",
        "Integración con dispositivos wearables compatibles",
        "Dashboard familiar para seguimiento remoto"
      ],
      benefits: [
        "Detección temprana de problemas de salud",
        "Tranquilidad para familiares",
        "Reducción de visitas de emergencia",
        "Mejor comunicación con médicos tratantes"
      ],
      availability: "24/7 con soporte técnico especializado",
      security: "Datos encriptados con certificación médica internacional"
    },
    'historias-clinicas': {
      icon: FaNotesMedical,
      title: "Historias clínicas digitales",
      description: "Plataforma digital centralizada que mantiene un registro completo y actualizado del historial médico, facilitando el acceso y la gestión de información de salud.",
      features: [
        "Historial médico completo y digitalizado",
        "Acceso seguro para médicos autorizados",
        "Registro de medicamentos y tratamientos",
        "Subida de exámenes médicos y resultados",
        "Sincronización con centros de salud"
      ],
      benefits: [
        "Información médica siempre disponible",
        "Mejor coordinación entre especialistas",
        "Reducción de exámenes duplicados",
        "Historial portable y seguro"
      ],
      availability: "Acceso 24/7 desde cualquier dispositivo",
      security: "Cumple estándares internacionales HIPAA y GDPR"
    },
    'deteccion-caidas': {
      icon: FaPersonFallingBurst,
      title: "Detección automática de caídas",
      description: "Sistema inteligente de detección de caídas que utiliza sensores avanzados y algoritmos de IA para identificar incidentes y activar protocolos de emergencia inmediatamente.",
      features: [
        "Detección automática mediante sensores inteligentes",
        "Alertas inmediatas a contactos de emergencia",
        "Geolocalización precisa del incidente",
        "Protocolo de respuesta rápida activado",
        "Historial de incidentes y análisis de riesgo"
      ],
      benefits: [
        "Respuesta inmediata ante emergencias",
        "Mayor seguridad y confianza",
        "Reducción de tiempo de respuesta crítico",
        "Prevención de complicaciones mayores"
      ],
      availability: "Monitoreo continuo las 24 horas del día",
      security: "Sistema redundante con múltiples sensores de respaldo"
    },
    'cuidadores': {
      icon: FaUserNurse,
      title: "Cuidadores certificados",
      description: "Red de cuidadores profesionales altamente capacitados y certificados, especializados en el cuidado integral de adultos mayores con diferentes niveles de dependencia.",
      features: [
        "Cuidadores certificados y con experiencia comprobada",
        "Planes de cuidado personalizados",
        "Supervisión médica regular",
        "Capacitación continua en geriatría",
        "Disponibilidad según necesidades específicas"
      ],
      benefits: [
        "Cuidado profesional y especializado",
        "Flexibilidad en horarios y servicios",
        "Tranquilidad total para la familia",
        "Mejora significativa en calidad de vida"
      ],
      availability: "Servicio flexible: por horas, días o permanente",
      security: "Verificación exhaustiva de antecedentes y seguros incluidos"
    },
    'consultas-medicas': {
      icon: FaHospitalUser,
      title: "Control de consultas médicas",
      description: "Sistema integral de gestión médica que facilita la programación, seguimiento y coordinación de citas médicas con especialistas en geriatría y medicina general.",
      features: [
        "Programación automática de citas médicas",
        "Recordatorios personalizados multicanal",
        "Telemedicina con especialistas certificados",
        "Coordinación con médicos de cabecera",
        "Transporte médico cuando sea necesario"
      ],
      benefits: [
        "Nunca olvidar citas médicas importantes",
        "Acceso directo a especialistas en geriatría",
        "Atención médica oportuna y preventiva",
        "Reducción de estrés en gestiones administrativas"
      ],
      availability: "Atención médica 6 días a la semana",
      security: "Profesionales licenciados y verificados por el MSP"
    },
    'medicamentos': {
      icon: FaPills,
      title: "Acceso a insumos y medicamentos",
      description: "Servicio de farmacia especializada que garantiza el acceso oportuno a medicamentos y insumos médicos, con entrega a domicilio y gestión automatizada de recetas.",
      features: [
        "Entrega de medicamentos a domicilio garantizada",
        "Gestión automática de recetas médicas",
        "Recordatorios inteligentes de toma de medicamentos",
        "Stock especializado en insumos geriátricos",
        "Coordinación directa con médicos tratantes"
      ],
      benefits: [
        "Nunca quedarse sin medicamentos esenciales",
        "Cumplimiento adecuado del tratamiento",
        "Ahorro de tiempo en gestiones de farmacia",
        "Acceso a medicamentos especializados"
      ],
      availability: "Entrega programada y servicio de emergencia",
      security: "Farmacia licenciada con estricto control de calidad"
    }
  };

  const services = [
    {
      icon: FaHeartPulse,
      title: "Monitoreo de signos vitales",
      key: "monitoreo-vital"
    },
    {
      icon: FaNotesMedical,
      title: "Historias clínicas digitales",
      key: "historias-clinicas"
    },
    {
      icon: FaPersonFallingBurst,
      title: "Detección automática de caídas",
      key: "deteccion-caidas"
    },
    {
      icon: FaUserNurse,
      title: "Cuidadores certificados",
      key: "cuidadores"
    },
    {
      icon: FaHospitalUser,
      title: "Control de consultas médicas",
      key: "consultas-medicas"
    },
    {
      icon: FaPills,
      title: "Acceso a insumos y medicamentos",
      key: "medicamentos"
    }
  ];

  const openModal = (serviceKey: string) => {
    const serviceData = servicesData[serviceKey];
    if (serviceData) {
      setSelectedService(serviceData);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section id="servicios" className="w-full bg-[#EBF8FF] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Title */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#004D85] leading-tight text-center sm:text-left">
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
                    onClick={() => openModal(service.key)}
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

      {/* Modal de información del servicio */}
      <ServiceInfoModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        serviceData={selectedService}
      />
    </>
  );
};

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-[260px] sm:h-[280px] hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
    >
      <div className="px-4 py-6 sm:px-6 sm:py-4 flex-1 flex flex-col">
        {/* Icon */}
        <div className="mb-4 sm:mb-6">
          <Icon className="text-5xl sm:text-6xl text-[#56A6E9] ml-2 sm:ml-2.5 group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        {/* Spacer */}
        <div className="flex-1"></div>
        
        {/* Divider */}
        <div className="w-full h-0.5 bg-[#B4BFCC] mb-6 sm:mb-8"></div>
        
        {/* Title and Arrow */}
        <div className="flex flex-row items-center gap-2 group-hover:gap-3 transition-all duration-300">
          <p className="text-sm sm:text-base text-[#004D85] font-medium leading-tight flex-1">
            {title}
          </p>
          <FaAngleRight className="text-[#004D85] text-sm flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;