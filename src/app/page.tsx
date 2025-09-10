"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatisticsSection from "./components/StatisticsSection";
import TechnologySection from "./components/TechnologySection";
import SercvicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import ValuesSection from "./components/ValuesSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen w-full">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      <StatisticsSection />

      <TechnologySection />

      {/* Main content - Tus secciones existentes */}
      <main className="flex flex-col gap-[32px] items-center sm:items-start">

        <SercvicesSection />

        <ValuesSection />
        
        {/* <TeamSection /> */}

       {/* <TestimonialsSection /> */}

        <CTASection />
        
        <Footer />
      </main>
    </div>
  );
}

