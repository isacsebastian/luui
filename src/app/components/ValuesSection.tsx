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
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#004D85] mb-4">
            Nuestros valores
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Principios fundamentales que guían cada acción en nuestra misión de
            transformar el cuidado de adultos mayores.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col items-start space-y-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: value.delay }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#E6F1FA]">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#004D85]">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <h3 className="text-2xl font-semibold text-[#004D85] mb-4">
            Construyendo el futuro del cuidado
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Cada valor que compartimos se traduce en acciones concretas que
            mejoran la vida de nuestros adultos mayores y sus familias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;