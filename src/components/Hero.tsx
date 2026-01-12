import { useState, useEffect } from 'react';

const heroImages = [
  // 'https://www.rionegro.com.ar/wp-content/uploads/2019/10/ag-nqn-poder-judicial-salto-1.jpg', // Poder Judicial
  'https://media.lmneuquen.com/p/75dc8b8de20be1ced0c2b97562be6aa2/adjuntos/195/imagenes/007/329/0007329545/770x0/smart/on-poder-judicial-10jpg.jpg', // Poder Judicial
  // 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop', // Firma/Escritorio
  // 'https://media.lmneuquen.com/p/a7b82caeb6b6664f87c582a2b4dc593a/adjuntos/195/imagenes/007/457/0007457053/770x0/smart/ciudad-judicial-poder-judicial-4jpg.jpg', // Poder Judicial
  'https://images.unsplash.com/photo-1505664063603-28e48ca204eb?q=80&w=2000&auto=format&fit=crop', // Libros
  'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=2000&auto=format&fit=crop', // Arquitectura Columnas
];

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
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* === BACKGROUND CAROUSEL === */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
            index === currentImage ? 'opacity-55' : 'opacity-0'
          }`}
        >
          <img src={img} alt="Fondo Legal" className="w-full h-full object-cover" />
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/90 via-[var(--color-primary)]/50 to-[var(--color-primary)]/90"></div>
        </div>
      ))}

      {/* === CONTENIDO CENTRADO === */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Título Principal */}
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Abogados especialistas en <br />
          <span className="text-[var(--color-accent)] relative inline-block mt-2">Derecho Administrativo</span>
        </h1>

        {/* Bajada / Descripción */}
        <p className="font-sans text-white text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Resolución de conflictos complejos con la Administración Pública. Brindamos defensa técnica y estratégica en
          sumarios, empleo público y licitaciones, protegiendo sus intereses con rigor profesional.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* <a
            href="https://wa.me/5492995330138"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:-translate-y-1 rounded-sm"
            style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)' }}
          >
            <FaWhatsapp size={20} />
            Quiero Asesoramiento
          </a> */}
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
