"use client";

import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaHeart, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { useEmailSender } from '../../../hooks/useEmailSender';

interface FormData {
  que_tipo_de_apoyo_buscas: string;
  relacion_con_el_adulto_mayor: string;
  edad_del_adulto_mayor: string;
  condiciones_de_salud_del_adulto_mayor: string;
  email: string;
  full_name: string;
  phone_number: string;
}

const ServiciosGeriatricos = () => {
  const [formData, setFormData] = useState<FormData>({
    que_tipo_de_apoyo_buscas: '',
    relacion_con_el_adulto_mayor: '',
    edad_del_adulto_mayor: '',
    condiciones_de_salud_del_adulto_mayor: '',
    email: '',
    full_name: '',
    phone_number: ''
  });

  const { sendEmail, isLoading, error, success } = useEmailSender();

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailMessage = `SOLICITUD DE SERVICIOS GERIÁTRICOS

Información del solicitante:
- Nombre completo: ${formData.full_name}
- Email: ${formData.email}
- Teléfono: ${formData.phone_number}

Detalles del adulto mayor:
- Relación con el adulto mayor: ${formData.relacion_con_el_adulto_mayor}
- Edad del adulto mayor: ${formData.edad_del_adulto_mayor} años
- Tipo de apoyo que busca: ${formData.que_tipo_de_apoyo_buscas}
- Condiciones de salud: ${formData.condiciones_de_salud_del_adulto_mayor}`;

    const emailData = {
      name: formData.full_name,
      email: formData.email,
      subject: 'Nueva solicitud de servicios geriátricos',
      message: emailMessage,
      formType: "service" as const
    };

    const emailSent = await sendEmail(emailData);

    if (emailSent) {
      setFormData({
        que_tipo_de_apoyo_buscas: '',
        relacion_con_el_adulto_mayor: '',
        edad_del_adulto_mayor: '',
        condiciones_de_salud_del_adulto_mayor: '',
        email: '',
        full_name: '',
        phone_number: ''
      });
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          animation-fill-mode: both;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Header Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#004D85] mb-6 opacity-0 animate-fade-in-up">
              Luuí
            </h1>
            <p className="text-xl lg:text-2xl text-[#0077B6] mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Servicios geriátricos especializados
            </p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Brindamos cuidado especializado y personalizado para adultos mayores, conectando familias con profesionales calificados para garantizar un envejecimiento digno y saludable.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <h2 className="text-3xl font-bold text-[#004D85] text-center mb-8">
                Solicita información personalizada
              </h2>

              {success && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-3">
                  <FaCheckCircle className="text-green-500" />
                  <span>¡Solicitud enviada exitosamente! Nos contactaremos contigo pronto.</span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Error: {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Nombre completo */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        value={formData.full_name}
                        onChange={(e) => handleInputChange('full_name', e.target.value)}
                        placeholder="Ingrese su nombre completo"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Correo electrónico *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="ejemplo@correo.com"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Número de teléfono *
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type="tel"
                        value={formData.phone_number}
                        onChange={(e) => handleInputChange('phone_number', e.target.value)}
                        placeholder="+593 99 999 9999"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Relación con el adulto mayor */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Relación con el adulto mayor *
                    </label>
                    <div className="relative">
                      <FaHeart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <select
                        value={formData.relacion_con_el_adulto_mayor}
                        onChange={(e) => handleInputChange('relacion_con_el_adulto_mayor', e.target.value)}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">Seleccione su relación</option>
                        <option value="Hijo/a">Hijo/a</option>
                        <option value="Nieto/a">Nieto/a</option>
                        <option value="Cónyuge">Cónyuge</option>
                        <option value="Hermano/a">Hermano/a</option>
                        <option value="Cuidador profesional">Cuidador profesional</option>
                        <option value="Otro familiar">Otro familiar</option>
                        <option value="Amigo/a cercano">Amigo/a cercano</option>
                      </select>
                    </div>
                  </div>

                  {/* Edad del adulto mayor */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Edad del adulto mayor *
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type="number"
                        value={formData.edad_del_adulto_mayor}
                        onChange={(e) => handleInputChange('edad_del_adulto_mayor', e.target.value)}
                        placeholder="Edad en años"
                        min="60"
                        max="120"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Tipo de apoyo */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      ¿Qué tipo de apoyo buscas? *
                    </label>
                    <div className="relative">
                      <FaHeart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <select
                        value={formData.que_tipo_de_apoyo_buscas}
                        onChange={(e) => handleInputChange('que_tipo_de_apoyo_buscas', e.target.value)}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">Seleccione el tipo de apoyo</option>
                        <option value="Cuidado médico especializado">Cuidado médico especializado</option>
                        <option value="Acompañamiento diario">Acompañamiento diario</option>
                        <option value="Fisioterapia y rehabilitación">Fisioterapia y rehabilitación</option>
                        <option value="Apoyo psicológico">Apoyo psicológico</option>
                        <option value="Cuidado nocturno">Cuidado nocturno</option>
                        <option value="Asistencia con medicamentos">Asistencia con medicamentos</option>
                        <option value="Cuidado post-hospitalario">Cuidado post-hospitalario</option>
                        <option value="Actividades recreativas">Actividades recreativas</option>
                        <option value="Consulta inicial / Evaluación">Consulta inicial / Evaluación</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Condiciones de salud */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Condiciones de salud del adulto mayor *
                  </label>
                  <textarea
                    value={formData.condiciones_de_salud_del_adulto_mayor}
                    onChange={(e) => handleInputChange('condiciones_de_salud_del_adulto_mayor', e.target.value)}
                    placeholder="Describa detalladamente las condiciones de salud, medicamentos actuales, limitaciones físicas, diagnósticos médicos y cualquier información relevante que nos ayude a brindar el mejor cuidado..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0077B6] focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Términos y condiciones */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terminos"
                    required
                    className="mt-1 h-4 w-4 text-[#0077B6] focus:ring-[#0077B6] border-gray-300 rounded"
                  />
                  <label htmlFor="terminos" className="text-sm text-gray-600 leading-relaxed">
                    Acepto los términos y condiciones y autorizo el tratamiento de mis datos personales para fines de contacto y prestación de servicios geriátricos.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#0077B6] hover:bg-[#004D85] disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? 'Enviando solicitud...' : 'Solicitar información personalizada'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 px-6 bg-white/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-[#004D85] mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              ¿Por qué elegir Luuí?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-[#0077B6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUser className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-[#004D85] mb-3">Profesionales Certificados</h4>
                <p className="text-gray-600">Equipo de especialistas geriátricos con amplia experiencia y certificaciones.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-[#0077B6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-[#004D85] mb-3">Cuidado Personalizado</h4>
                <p className="text-gray-600">Planes de cuidado adaptados a las necesidades específicas de cada adulto mayor.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-[#0077B6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-[#004D85] mb-3">Tecnología Avanzada</h4>
                <p className="text-gray-600">Plataforma digital e IoT para monitoreo y seguimiento continuo del bienestar.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiciosGeriatricos;