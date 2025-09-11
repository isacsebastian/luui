"use client";

import React from "react";
import { Heart, Users, Shield, Lightbulb } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-[#0077B6]" />,
      title: "RESPETO",
      description:
        "Respeto a la dignidad humana, al conocimiento, a la experiencia y a la valentía de vivir.",
      delay: "0.2s",
    },
    {
      icon: <Users className="w-7 h-7 text-[#0077B6]" />,
      title: "EMPATÍA",
      description:
        "Empatía por la soledad, por la impotencia de envejecer, por el dolor de una enfermedad, por la tristeza y por la pérdida de autonomía e independencia.",
      delay: "0.4s",
    },
    {
      icon: <Heart className="w-7 h-7 text-[#0077B6]" />,
      title: "AMOR",
      description:
        "Amor por lo que enseñan, por lo invencible del ser humano, por el amor que nos tienen, por el amor que sintieron y por su aporte al mundo.",
      delay: "0.6s",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#0077B6]" />,
      title: "INNOVACIÓN",
      description:
        "Innovación para envejecer mejor, acompañado, cuidado y feliz. Innovación para que duela menos y para írnos más despacio.",
      delay: "0.8s",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-8 relative overflow-hidden">
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
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#004D85] mb-4">
            Nuestros valores
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Los principios fundamentales que guían cada acción en nuestra misión de transformar el cuidado de adultos mayores
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#56A6E9] to-[#0077B6] rounded-full mx-auto mt-6"></div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 opacity-0 animate-fade-in-up group hover:scale-105"
              style={{ animationDelay: value.delay }}
            >
              {/* Icon Section - positioned lower */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#56A6E9] to-[#0077B6] shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  {React.cloneElement(value.icon, { className: 'w-10 h-10 text-white' })}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#004D85] mb-4 group-hover:text-[#0077B6] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
              
              {/* Decorative line */}
              <div className="w-16 h-1 bg-gradient-to-r from-[#56A6E9] to-[#0077B6] rounded-full mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
          <div className="bg-gradient-to-r from-[#EBF8FF] to-[#F0F9FF] rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-[#004D85] mb-4">
              Construyendo el futuro del cuidado
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Cada valor que compartimos se traduce en acciones concretas que
              mejoran la vida de nuestros adultos mayores y sus familias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

