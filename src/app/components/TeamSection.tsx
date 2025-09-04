"use client";

import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  alt: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, role, imageUrl, alt }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-[380px] sm:h-[380px] hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
      <div className="px-4 py-6 sm:px-6 sm:py-4 flex-1 flex flex-col">
        {/* Image Container */}
        <div className="relative h-[280px] sm:h-[280px] w-full mb-4 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, 400px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
        {/* Spacer */}
        <div className="flex-1"></div>
        {/* Text Content */}
        <div className="text-center">
          <h3 className="text-base sm:text-lg font-semibold text-[#004D85] mb-1 group-hover:text-[#0077B6] transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-[#004D85] opacity-80">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sofia Mendez",
      role: "Cardióloga",
      imageUrl: "https://res.cloudinary.com/djmmbd8xd/image/upload/v1756370582/dr1_shpsqk.png",
      alt: "Dr. Sofia Mendez - Cardióloga especializada en adultos mayores"
    },
    {
      name: "Dr. Juan Pérez",
      role: "Cardiólogo",
      imageUrl: "https://res.cloudinary.com/djmmbd8xd/image/upload/v1756370582/dr2_eal6de.png",
      alt: "Dr. Juan Pérez - Cardiólogo con experiencia en geriatría"
    },
    {
      name: "Dr. Kimberly Torres",
      role: "Geriatra",
      imageUrl: "https://res.cloudinary.com/djmmbd8xd/image/upload/v1756370582/dr4_k48k6i.png",
      alt: "Dr. Kimberly Torres - Especialista en medicina geriátrica"
    },
    {
      name: "Dr. Ana Rodriguez",
      role: "Medicina General",
      imageUrl: "https://res.cloudinary.com/djmmbd8xd/image/upload/v1756370582/dra_vgt3wr.png",
      alt: "Dr. Ana Rodriguez - Médica general enfocada en adultos mayores"
    },
    {
      name: "Mateo Moreira",
      role: "CEO | Founder",
      imageUrl: "https://res.cloudinary.com/djmmbd8xd/image/upload/v1756370581/david-castillo_g6rbxq.jpg",
      alt: "Mateo Moreira - CEO y Fundador de Luuí"
    },
    {
      name: "David Castillo",
      role: "CTO | Co-Founder",
      imageUrl: "https://res.cloudinary.com/djmmbd8xd/image/upload/v1756370582/mateo-moreira_wakw5x.jpg",
      alt: "David Castillo - CTO y Co-Fundador de Luuí"
    }
  ];

  return (
    <section id="nosotros" className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#004D85] mb-4">
            Nuestro equipo
          </h2>
          <p className="text-lg text-[#004D85] opacity-80 max-w-2xl mx-auto">
            Profesionales especializados comprometidos con el bienestar de los adultos mayores
          </p>
        </div>

        {/* Team Grid - 2 filas de 3 columnas con misma distribución que servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-sm">
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  imageUrl={member.imageUrl}
                  alt={member.alt}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button - Alineado a la izquierda */}
        <div className="text-left">
          <button className="bg-[#0077B6] hover:bg-[#004D85] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
            Nuestros expertos
          </button>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;