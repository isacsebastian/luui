"use client";

import React from 'react';
import Image from "next/image";

const HeroSection = () => {
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
      
      <section className="w-full bg-gradient-to-br from-blue-50 to-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Mobile: 3 rows layout */}
          <div className="lg:hidden space-y-8">
            
            {/* Row 1: Small images */}
            <div className="flex justify-center">
              <div className="flex gap-3 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="relative h-16 w-20">
                  <Image 
                    src="/images/Temporal/one.webp" 
                    alt="Elderly care 1"
                    fill
                    className="object-cover rounded shadow-sm"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABRAQEAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                  />
                </div>
                <div className="relative h-16 w-20">
                  <Image 
                    src="/images/Temporal/two.webp" 
                    alt="Elderly care 2"
                    fill
                    className="object-cover rounded shadow-sm"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABRAQEAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Text content and button */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold text-[#004D85] leading-tight opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Conectar generaciones,
                <br />
                <span className="text-[#0077B6]">garantizando</span>
                <br />
                el envejecimiento digno

              </h1>

              <p className="text-base text-[#004D85] leading-relaxed mx-auto max-w-sm opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                Una plataforma digital e IoT que transforma el cuidado de adultos mayores en Latinoamérica, comenzando en Ecuador.
              </p>
                <button
                className="bg-[#0077B6] hover:bg-[#004D85] text-white px-6 py-3 rounded font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.8s' }}
                onClick={() => {
                  const el = document.getElementById('servicios');
                  if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                >
                Conoce cómo funciona
                </button>
            </div>

            {/* Row 3: Stats and images */}
            <div className="space-y-4">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#56A6E9] text-white p-4 rounded shadow-lg opacity-0 animate-fade-in-up" style={{animationDelay: '1s'}}>
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-xs opacity-90">Monitoreo continuo</div>
                </div>

                <div className="bg-[#0077B6] text-white p-4 rounded shadow-lg opacity-0 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-xs opacity-90">Atención personalizada</div>
                </div>
              </div>

              {/* Large Image */}
              <div className="relative h-40 w-full opacity-0 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
                <Image 
                  src="/images/Temporal/two.webp" 
                  alt="Doctor with elderly patient"
                  fill
                  className="object-cover rounded shadow-lg"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                />
              </div>

              {/* Bottom Grid */}
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-[#004D85] text-white p-3 rounded shadow-lg col-span-2 opacity-0 animate-fade-in-up" style={{animationDelay: '1.6s'}}>
                  <div className="text-xl font-bold mb-1">IoT</div>
                  <div className="text-xs opacity-90">Tecnología avanzada</div>
                </div>

                <div className="relative h-16 w-full opacity-0 animate-fade-in-up" style={{animationDelay: '1.8s'}}>
                  <Image 
                    src="/images/Temporal/three.webp" 
                    alt="Medical team"
                    fill
                    className="object-cover rounded shadow-md"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABRAQEAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                  />
                </div>

                <div className="relative h-16 w-full opacity-0 animate-fade-in-up" style={{animationDelay: '2s'}}>
                  <Image 
                    src="/images/Temporal/four.webp" 
                    alt="Healthcare"
                    fill
                    className="object-cover rounded shadow-sm"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Original 2 columns layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content with small images */}
            <div className="flex items-center gap-6">
              {/* Small Images Column - Positioned at top and bottom */}
              <div className="flex flex-col justify-between h-96 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="relative h-16 w-20">
                  <Image 
                    src="/images/Temporal/one.webp" 
                    alt="Elderly care 1"
                    fill
                    className="object-cover rounded shadow-sm"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABRAQEAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                  />
                </div>
               
                <div className="relative h-16 w-20">
                  <Image 
                    src="/images/Temporal/two.webp" 
                    alt="Elderly care 3"
                    fill
                    className="object-cover rounded shadow-sm"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABRAQEAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                  />
                </div>
              </div>

              {/* Text Content - Centered vertically */}
              <div className="flex-1 space-y-6">
                <h1 className="text-6xl lg:text-5xl font-bold text-[#004D85] leading-tight opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                 Conectar generaciones,
                <br />
                <span className="text-[#0077B6]">garantizando</span>
                <br />
                el envejecimiento digno.
                </h1>

                <p className="text-lg text-[#004D85] leading-relaxed max-w-lg opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  Una plataforma digital e IoT que transforma el cuidado de adultos mayores en Latinoamérica, comenzando en Ecuador.
                </p>

                <button className="bg-[#0077B6] hover:bg-[#004D85] text-white text-base px-8 py-4 rounded font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 opacity-0 animate-fade-in-up"
                 style={{animationDelay: '0.8s'}}
                  onClick={() => {
                  const el = document.getElementById('servicios');
                  if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                >
                Descubre cómo funciona
                </button>
              </div>
            </div>

            {/* Right Side - Enhanced Images and Stats Grid */}
            <div className="space-y-6">
              {/* Main Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                
                <div className="bg-[#56A6E9] text-white p-6 rounded shadow-lg opacity-0 animate-fade-in-up" style={{animationDelay: '1s'}}>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-base opacity-90">Monitoreo continuo</div>
                </div>

                <div className="bg-[#0077B6] text-white p-6 rounded shadow-lg opacity-0 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-base opacity-90">Atención personalizada</div>
                </div>

              </div>

              {/* Large Image Section */}
              <div className="relative h-48 w-full opacity-0 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
                <Image 
                  src="/images/Temporal/two.webp" 
                  alt="Doctor with elderly patient"
                  fill
                  className="object-cover rounded shadow-lg"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABRAQEAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                />
              </div>

              {/* Bottom Grid */}
              <div className="grid grid-cols-3 gap-4">
                
                <div className="bg-[#004D85] text-white p-4 rounded shadow-lg col-span-2 opacity-0 animate-fade-in-up" style={{animationDelay: '1.6s'}}>
                  <div className="text-3xl font-bold mb-2">IoT</div>
                  <div className="text-base opacity-90">Tecnología avanzada</div>
                </div>

                <div className="relative h-20 w-full opacity-0 animate-fade-in-up" style={{animationDelay: '1.8s'}}>
                  <Image 
                    src="/images/Temporal/three.webp" 
                    alt="Medical team"
                    fill
                    className="object-cover rounded shadow-md"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABRAQEAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                  />
                </div>

              </div>

              {/* Additional Small Images Row */}
              <div className="grid grid-cols-4 gap-3">
                <div className="relative h-16 w-full opacity-0 animate-fade-in-up" style={{animationDelay: '2s'}}>
                  <Image 
                    src="/images/Temporal/four.webp" 
                    alt="Healthcare 1"
                    fill
                    className="object-cover rounded shadow-sm"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABRAQEAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                  />
                </div>
                <div className="relative h-16 w-full opacity-0 animate-fade-in-up" style={{animationDelay: '2.1s'}}>
                  <Image 
                    src="/images/Temporal/five.webp" 
                    alt="Healthcare 2"
                    fill
                    className="object-cover rounded shadow-sm"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABRAQEAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                  />
                </div>
                <div className="relative h-16 w-full opacity-0 animate-fade-in-up" style={{animationDelay: '2.2s'}}>
                  <Image 
                    src="/images/Temporal/six.webp" 
                    alt="Healthcare 3"
                    fill
                    className="object-cover rounded shadow-sm"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABRAQEAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                  />
                </div>
                <div className="relative h-16 w-full opacity-0 animate-fade-in-up" style={{animationDelay: '2.3s'}}>
                  <Image 
                    src="/images/Temporal/seven.webp" 
                    alt="Healthcare 4"
                    fill
                    className="object-cover rounded shadow-sm"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkaGx0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABRAQEAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO5j9KBBiJmKYjFDqvbcfPHp1UjBjEyP/9k="
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;