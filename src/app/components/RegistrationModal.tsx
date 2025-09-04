"use client";

import React, { useState } from 'react';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaIdCard, FaGraduationCap, FaHeart } from 'react-icons/fa';

interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  icon?: React.ReactNode;
  options?: string[];
}

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType: 'adultos-mayores' | 'profesionales' | 'cuidadores';
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, formType }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Configuración de campos según el tipo de formulario
  const getFormConfig = () => {
    const baseFields: FormField[] = [
      {
        name: 'nombre',
        label: 'Nombre completo',
        type: 'text',
        placeholder: 'Ingresa tu nombre completo',
        required: true,
        icon: <FaUser className="text-gray-400" />
      },
      {
        name: 'email',
        label: 'Correo electrónico',
        type: 'email',
        placeholder: 'ejemplo@correo.com',
        required: true,
        icon: <FaEnvelope className="text-gray-400" />
      },
      {
        name: 'telefono',
        label: 'Teléfono',
        type: 'tel',
        placeholder: '+593 99 999 9999',
        required: true,
        icon: <FaPhone className="text-gray-400" />
      }
    ];

    switch (formType) {
      case 'adultos-mayores':
        return {
          title: 'Registro para Adultos Mayores',
          subtitle: 'Completa tu información para acceder a nuestros servicios',
          fields: [
            ...baseFields,
            {
              name: 'edad',
              label: 'Edad',
              type: 'number',
              placeholder: '65',
              required: true,
              icon: <FaIdCard className="text-gray-400" />
            },
            {
              name: 'condiciones',
              label: 'Condiciones médicas (opcional)',
              type: 'textarea',
              placeholder: 'Describe cualquier condición médica relevante',
              required: false,
              icon: <FaHeart className="text-gray-400" />
            },
            {
              name: 'contacto_emergencia',
              label: 'Contacto de emergencia',
              type: 'text',
              placeholder: 'Nombre y teléfono de familiar',
              required: true,
              icon: <FaPhone className="text-gray-400" />
            }
          ]
        };

      case 'profesionales':
        return {
          title: 'Registro para Profesionales',
          subtitle: 'Únete a nuestro equipo de profesionales de la salud',
          fields: [
            ...baseFields,
            {
              name: 'especialidad',
              label: 'Especialidad',
              type: 'select',
              placeholder: 'Selecciona tu especialidad',
              required: true,
              icon: <FaGraduationCap className="text-gray-400" />,
              options: [
                'Medicina General',
                'Geriatría',
                'Enfermería',
                'Fisioterapia',
                'Psicología',
                'Trabajo Social',
                'Nutrición'
              ]
            },
            {
              name: 'experiencia',
              label: 'Años de experiencia',
              type: 'number',
              placeholder: '5',
              required: true,
              icon: <FaIdCard className="text-gray-400" />
            },
            {
              name: 'licencia',
              label: 'Número de licencia profesional',
              type: 'text',
              placeholder: 'Ej: MSP-12345',
              required: true,
              icon: <FaIdCard className="text-gray-400" />
            }
          ]
        };

      case 'cuidadores':
        return {
          title: 'Registro para Cuidadores',
          subtitle: 'Forma parte de nuestro equipo de cuidadores certificados',
          fields: [
            ...baseFields,
            {
              name: 'experiencia_cuidado',
              label: 'Experiencia en cuidado (años)',
              type: 'number',
              placeholder: '2',
              required: true,
              icon: <FaHeart className="text-gray-400" />
            },
            {
              name: 'disponibilidad',
              label: 'Disponibilidad',
              type: 'select',
              placeholder: 'Selecciona tu disponibilidad',
              required: true,
              icon: <FaUser className="text-gray-400" />,
              options: [
                'Tiempo completo',
                'Medio tiempo',
                'Por horas',
                'Fines de semana',
                'Nocturno'
              ]
            },
            {
              name: 'certificaciones',
              label: 'Certificaciones (opcional)',
              type: 'textarea',
              placeholder: 'Describe tus certificaciones en cuidado de adultos mayores',
              required: false,
              icon: <FaGraduationCap className="text-gray-400" />
            }
          ]
        };

      default:
        return { title: '', subtitle: '', fields: baseFields };
    }
  };

  const config = getFormConfig();

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Datos del formulario:', {
        tipo: formType,
        datos: formData
      });

      // Mostrar mensaje de éxito
      alert('¡Registro exitoso! Te contactaremos pronto.');
      
      // Resetear formulario y cerrar modal
      setFormData({});
      onClose();
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Hubo un error. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'textarea':
        return (
          <div className="relative">
            <div className="absolute left-3 top-3 z-10">
              {field.icon}
            </div>
            <textarea
              id={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              rows={3}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent resize-none"
            />
          </div>
        );

      case 'select':
        return (
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
              {field.icon}
            </div>
            <select
              id={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              required={field.required}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent appearance-none bg-white"
            >
              <option value="">{field.placeholder}</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );

      default:
        return (
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
              {field.icon}
            </div>
            <input
              type={field.type}
              id={field.name}
              value={formData[field.name] || ''}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
            />
          </div>
        );
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-md lg:max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-[#004D85]">
              {config.title}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {config.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
          <div className="lg:col-span-2 space-y-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
            {config.fields.map((field) => (
              <div key={field.name} className={field.type === 'textarea' ? 'lg:col-span-2' : ''}>
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {renderField(field)}
              </div>
            ))}
          </div>

          {/* Términos y condiciones */}
          <div className="flex items-start gap-2 mt-6 lg:col-span-2">
            <input
              type="checkbox"
              id="terminos"
              required
              className="mt-1 h-4 w-4 text-[#0077B6] focus:ring-[#0077B6] border-gray-300 rounded"
            />
            <label htmlFor="terminos" className="text-xs text-gray-600">
              Acepto los <a href="#" className="text-[#0077B6] hover:underline">términos y condiciones</a> y la <a href="#" className="text-[#0077B6] hover:underline">política de privacidad</a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0077B6] hover:bg-[#004D85] disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed lg:col-span-2"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Registro'}
          </button>
        </form>

      </div>
    </div>
  );
};

export default RegistrationModal;