import { useState, useEffect } from 'react';

import poderJudicialImg from '../assets/poder-judicial.webp';
import booksImg from '../assets/books.webp';
import arqImg from '../assets/arq.webp';

const heroImages = [poderJudicialImg, booksImg, arqImg];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Lógica del Carrusel Automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden bg-black">
      {/* === BACKGROUND CAROUSEL === */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-2000 ease-in-out ${
            index === currentImage ? 'opacity-50' : 'opacity-0'
          }`}
        >
          <img src={img} alt="Fondo Legal" className="w-full h-full object-cover" />

          {/* Overlay oscuro */}
          {/* CAMBIO: Usamos las clases del tema (primary) en lugar de var(--color-primary) */}
          <div className="absolute inset-0 bg-linear-to-b from-primary/90 via-primary/20 to-primary/90"></div>
        </div>
      ))}

      {/* === CONTENIDO CENTRADO === */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Título Principal */}
        <h1
          // CAMBIO: Eliminado style={{ fontFamily... }}. Ahora 'font-serif' lo maneja Tailwind.
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
        >
          Abogados especialistas en <br />
          {/* CAMBIO: Reemplazado text-[var(--color-accent)] por text-accent */}
          <span className="text-accent relative inline-block mt-2">Derecho Administrativo</span>
        </h1>

        {/* Bajada / Descripción */}
        <p className="font-sans text-white text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Resolución de conflictos complejos con la Administración Pública. Brindamos defensa técnica y estratégica en
          sumarios, empleo público y licitaciones, protegiendo sus intereses con rigor profesional.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Nota: Si descomentas el botón de WhatsApp, recuerda cambiar:
              style={{ backgroundColor... }} por className="... bg-accent text-primary" 
          */}

          <a
            href="/areas"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 rounded-sm"
          >
            Ver Áreas de Práctica
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
