"use client";

import React, { useState } from 'react';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaIdCard, FaGraduationCap, FaHeart, FaMapMarkerAlt, FaUpload } from 'react-icons/fa';
import { useEmailSender } from '../../../hooks/useEmailSender';

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
  const [cvFile, setCvFile] = useState<File | null>(null);
  const { sendEmail, isLoading, error, success } = useEmailSender();

  // Configuración de campos según el tipo de formulario
  const getFormConfig = () => {
    switch (formType) {
      case 'adultos-mayores':
        return {
          title: 'Adultos Mayores',
          subtitle: 'Complete su información para acceder a nuestros servicios',
          buttonText: 'UNIRME',
          fields: [
            {
              name: 'nombre',
              label: 'Nombre completo',
              type: 'text',
              placeholder: 'Ingrese su nombre completo',
              required: true,
              icon: <FaUser className="text-gray-500" />
            },
            {
              name: 'telefono',
              label: 'Teléfono',
              type: 'tel',
              placeholder: '+593 99 999 9999',
              required: true,
              icon: <FaPhone className="text-gray-500" />
            },
            {
              name: 'edad',
              label: 'Edad',
              type: 'number',
              placeholder: '65',
              required: true,
              icon: <FaIdCard className="text-gray-500" />
            },
            {
              name: 'condiciones',
              label: 'Condiciones médicas (opcional)',
              type: 'textarea',
              placeholder: 'Describa cualquier condición médica relevante',
              required: false,
              icon: <FaHeart className="text-gray-500" />
            },
            {
              name: 'nombre_familiar',
              label: 'Nombre del familiar de contacto',
              type: 'text',
              placeholder: 'Nombre completo del familiar',
              required: true,
              icon: <FaUser className="text-gray-500" />
            },
            {
              name: 'telefono_familiar',
              label: 'Teléfono del familiar de contacto',
              type: 'tel',
              placeholder: '+593 99 999 9999',
              required: true,
              icon: <FaPhone className="text-gray-500" />
            }
          ] as FormField[]
        };

      case 'profesionales':
        return {
          title: 'Profesionales Geriátricos',
          subtitle: 'Únase a nuestro equipo de profesionales de la salud',
          buttonText: 'APLICAR',
          fields: [
            {
              name: 'nombre',
              label: 'Nombre completo',
              type: 'text',
              placeholder: 'Ingrese su nombre completo',
              required: true,
              icon: <FaUser className="text-gray-500" />
            },
            {
              name: 'cedula',
              label: 'Cédula de identidad',
              type: 'text',
              placeholder: '1234567890',
              required: true,
              icon: <FaIdCard className="text-gray-500" />
            },
            {
              name: 'email',
              label: 'Correo electrónico',
              type: 'email',
              placeholder: 'ejemplo@correo.com',
              required: true,
              icon: <FaEnvelope className="text-gray-500" />
            },
            {
              name: 'telefono',
              label: 'Teléfono',
              type: 'tel',
              placeholder: '+593 99 999 9999',
              required: true,
              icon: <FaPhone className="text-gray-500" />
            },
            {
              name: 'especialidad',
              label: 'Especialidad',
              type: 'select',
              placeholder: 'Seleccione su especialidad',
              required: true,
              icon: <FaGraduationCap className="text-gray-500" />,
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
              icon: <FaIdCard className="text-gray-500" />
            }
          ] as FormField[]
        };

      case 'cuidadores':
        return {
          title: 'Adultos Cuidadores (Familiares)',
          subtitle: 'Complete la información del cuidador familiar',
          buttonText: 'Quiero más información',
          fields: [
            {
              name: 'nombre',
              label: 'Nombre completo',
              type: 'text',
              placeholder: 'Ingrese su nombre completo',
              required: true,
              icon: <FaUser className="text-gray-500" />
            },
            {
              name: 'cedula',
              label: 'Cédula / Documento de identidad',
              type: 'text',
              placeholder: '1234567890',
              required: true,
              icon: <FaIdCard className="text-gray-500" />
            },
            {
              name: 'relacion',
              label: 'Relación con el adulto mayor',
              type: 'select',
              placeholder: 'Seleccione su relación',
              required: true,
              icon: <FaHeart className="text-gray-500" />,
              options: [
                'Hijo/a',
                'Nieto/a',
                'Cónyuge',
                'Otro'
              ]
            },
            {
              name: 'telefono',
              label: 'Teléfono de contacto',
              type: 'tel',
              placeholder: '+593 99 999 9999',
              required: true,
              icon: <FaPhone className="text-gray-500" />
            },
            {
              name: 'email',
              label: 'Correo electrónico',
              type: 'email',
              placeholder: 'ejemplo@correo.com',
              required: true,
              icon: <FaEnvelope className="text-gray-500" />
            },
            {
              name: 'direccion',
              label: 'Ciudad / Dirección de residencia',
              type: 'text',
              placeholder: 'Ciudad y dirección completa',
              required: true,
              icon: <FaMapMarkerAlt className="text-gray-500" />
            },
            {
              name: 'estado_adulto_mayor',
              label: 'Estado de salud y condiciones del adulto mayor',
              type: 'textarea',
              placeholder: 'Describa detalladamente el estado de salud, condiciones médicas, nivel de dependencia y cualquier información relevante sobre el adulto mayor que cuida',
              required: true,
              icon: <FaHeart className="text-gray-500" />
            }
          ] as FormField[]
        };

      default:
        return { title: '', subtitle: '', buttonText: '', fields: [] };
    }
  };

  const config = getFormConfig();

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setCvFile(file);
    } else {
      alert('Por favor seleccione un archivo PDF válido');
    }
  };

  // Función para formatear los datos según el tipo de formulario
  const formatEmailMessage = () => {
    let message = '';
    
    switch (formType) {
      case 'adultos-mayores':
        message = `REGISTRO DE ADULTO MAYOR\n\n`;
        message += `Nombre: ${formData.nombre}\n`;
        message += `Teléfono: ${formData.telefono}\n`;
        message += `Edad: ${formData.edad} años\n`;
        if (formData.condiciones) {
          message += `Condiciones médicas: ${formData.condiciones}\n`;
        }
        message += `\nFamiliar de contacto:\n`;
        message += `Nombre: ${formData.nombre_familiar}\n`;
        message += `Teléfono: ${formData.telefono_familiar}\n`;
        break;

      case 'profesionales':
        message = `APLICACIÓN DE PROFESIONAL GERIÁTRICO\n\n`;
        message += `Nombre: ${formData.nombre}\n`;
        message += `Cédula: ${formData.cedula}\n`;
        message += `Email: ${formData.email}\n`;
        message += `Teléfono: ${formData.telefono}\n`;
        message += `Especialidad: ${formData.especialidad}\n`;
        message += `Años de experiencia: ${formData.experiencia}\n`;
        if (cvFile) {
          message += `\nCV adjunto: ${cvFile.name}\n`;
        }
        break;

      case 'cuidadores':
        message = `SOLICITUD DE INFORMACIÓN - CUIDADOR FAMILIAR\n\n`;
        message += `Nombre del cuidador: ${formData.nombre}\n`;
        message += `Cédula: ${formData.cedula}\n`;
        message += `Email: ${formData.email}\n`;
        message += `Teléfono: ${formData.telefono}\n`;
        message += `Relación: ${formData.relacion}\n`;
        message += `Dirección: ${formData.direccion}\n`;
        message += `\nEstado del adulto mayor:\n${formData.estado_adulto_mayor}\n`;
        break;
    }

    return message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailData = {
      name: formData.nombre || 'Usuario',
      email: formData.email || formData.telefono || 'sin-email@temp.com',
      subject: `Nuevo registro - ${config.title}`,
      message: formatEmailMessage(),
      formType: "registration" as const
    };

    const emailSent = await sendEmail(emailData);

    if (emailSent) {
      // Resetear formulario y cerrar modal
      setFormData({});
      setCvFile(null);
      // El modal se cerrará automáticamente después de mostrar el mensaje de éxito
      setTimeout(() => {
        onClose();
      }, 3000);
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
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077B6] focus:border-transparent resize-none"
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
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077B6] focus:border-transparent appearance-none bg-white"
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
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
            />
          </div>
        );
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-md lg:max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-semibold text-[#004D85]">
              {config.title}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {config.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Mensajes de estado */}
        {success && (
          <div className="mx-6 mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            ¡Registro enviado exitosamente! Nos contactaremos contigo pronto.
          </div>
        )}

        {error && (
          <div className="mx-6 mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            Error: {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-5 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
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

          {/* CV Upload para profesionales */}
          {formType === 'profesionales' && (
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Curriculum Vitae (PDF) *
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                  <FaUpload className="text-gray-500" />
                </div>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077B6] focus:border-transparent"
                />
              </div>
              {cvFile && (
                <p className="text-sm text-green-600 mt-1">
                  Archivo seleccionado: {cvFile.name}
                </p>
              )}
            </div>
          )}

          {/* Términos y condiciones */}
          <div className="flex items-start gap-3 mt-6">
            <input
              type="checkbox"
              id="terminos"
              required
              className="mt-1 h-4 w-4 text-[#0077B6] focus:ring-[#0077B6] border-gray-300 rounded"
            />
            <label htmlFor="terminos" className="text-sm text-gray-600 leading-relaxed">
              Acepto los <a href="#" className="text-[#0077B6] hover:underline font-medium">términos y condiciones</a> y la <a href="#" className="text-[#0077B6] hover:underline font-medium">política de privacidad</a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#0077B6] hover:bg-[#004D85] disabled:bg-gray-400 text-white py-3 px-6 rounded-md font-semibold transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed mt-6"
          >
            {isLoading ? 'Enviando...' : config.buttonText}
          </button>
        </form>

      </div>
    </div>
  );
};

export default RegistrationModal;