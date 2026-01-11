import profileImg from '../assets/profile-nobg.png';

const AboutHero = () => {
  return (
    <section
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* === TEXTO BIO (En Tercera Persona) === */}
          <div className="relative z-10 order-2 lg:order-1">
            <h1
              className="font-serif text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Nicolas Atilio Falleti
            </h1>

            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
              <p>
                <strong className="text-white font-medium">
                  Abogado (UADE) y Especialista en Derecho Administrativo (UBA).
                </strong>
              </p>
              <p>
                Nacido y radicado en Neuquén, cuenta con más de 20 años de ejercicio profesional. Su formación combina
                el rigor técnico de una <strong>Maestría en Derecho Procesal (UNR)</strong> y un Posgrado en Petróleo y
                Gas (UBA), con una profunda vocación humanista.
              </p>
              <p>
                Recientemente graduado como <strong>Licenciado en Letras (UNCOMA, 2025)</strong> con honores, aporta a
                cada caso una ventaja estratégica única: la capacidad de construir argumentos sólidos, persuasivos y
                técnicamente impecables.
              </p>
            </div>

            {/* Idiomas / Habilidades Extra */}
            <div className="mt-8 pt-8 border-t border-white/10 flex gap-6 text-sm text-gray-400 uppercase tracking-wider font-bold">
              <span>Español</span>
              <span className="text-[var(--color-accent)]">•</span>
              <span>Portugués</span>
              <span className="text-[var(--color-accent)]">•</span>
              <span>Francés</span>
            </div>
          </div>

          {/* === IMAGEN PERFIL (Tamaño Original Restaurado) === */}
          <div className="relative z-10 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Marco Dorado detrás (Offset original de 3) */}
              <div
                className="absolute inset-0 border-2 translate-x-3 translate-y-3 rounded-sm opacity-50"
                style={{ borderColor: 'var(--color-accent)' }}
              ></div>

              {/* Contenedor Imagen: Restaurado a max-w-md */}
              <div className="relative bg-gradient-to-b from-white/10 to-transparent rounded-sm overflow-hidden max-w-md">
                <img
                  src={profileImg}
                  alt="Nicolas Atilio Falleti"
                  className="w-full h-auto object-cover transform scale-100 hover:scale-105 transition-transform duration-700"
                />
                {/* Degradado inferior original */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--color-primary)] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
