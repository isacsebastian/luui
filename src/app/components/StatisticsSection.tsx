"use client";

import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  animate: boolean;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 4500, suffix = '', animate }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let startTime: number | undefined;
    let animationFrame: number;

    const animateCount = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Ease out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, animate]);

  return <span>{count}{suffix}</span>;
};

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const statistics = [
    {
      value: 44,
      suffix: '%',
      title: 'En Ecuador',
      description: 'sufren abandono o maltrato',
      delay: 0
    },
    {
      value: 28,
      suffix: '%',
      title: ' de adultos mayores',
      description: 'sufren caídas cada año',
      delay: 200
    },
    {
      value: 17,
      suffix: '%',
      title: 'de adultos mayores',
      description: 'Sufren algún tipo de maltrato',

      delay: 400
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="text-lg text-gray-600 leading-loose text-left mb-5">
          En Luuí creemos que el envejecimiento debe vivirse con <strong>respeto, </strong> <strong>amor </strong> e <strong>innovación.</strong> Por eso creamos un ecosistema que une <strong>cuidadores certificados</strong>, <strong> servicios de salud</strong> y <strong>dispositivos inteligentes</strong> para brindar seguridad, compañía y tranquilidad a las familias.
        </h3>
        {/* Título con animación de entrada */}
        <div className="text-center mb-16">
          <h1 className={`text-3xl lg:text-4xl font-bold text-[#0077B6] mb-4 transition-all duration-1000 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}>
            Adultos mayores: <span className="font-normal">una realidad que requiere atención</span>
          </h1>
          <div className={`w-24 h-1 bg-gradient-to-r from-[#56A6E9] to-[#0077B6] rounded-full mx-auto transition-all duration-1000 delay-300 ${isVisible
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-50'
            }`}></div>
        </div>

        {/* Grid de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                }`}
              style={{
                transitionDelay: `${stat.delay + 600}ms`
              }}
            >
              {/* Contenedor del número con efecto de pulso */}
              <div className={`relative mb-6 transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-90'
                }`}>
                {/* Círculo de fondo animado */}
                <div className={`absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#56A6E9]/20 to-[#0077B6]/20 transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${stat.delay + 800}ms`
                  }}></div>

                {/* Número principal */}
                <div className="relative z-10 text-6xl lg:text-7xl font-bold text-[#0077B6] mb-2 py-8">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={4500}
                    animate={hasAnimated}
                  />
                </div>
              </div>

              {/* Título */}
              <h3 className="text-xl lg:text-2xl font-semibold text-[#004D85] mb-2">
                {stat.title}
              </h3>

              {/* Descripción */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {stat.description}
              </p>

              {/* Línea decorativa individual */}
              <div className={`w-12 h-0.5 bg-[#56A6E9] mx-auto mt-4 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{
                  transitionDelay: `${stat.delay + 1200}ms`
                }}></div>
            </div>
          ))}
        </div>

        {/* Mensaje final con animación */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
          }`}>

        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;