import { FaGraduationCap, FaUniversity, FaBook, FaBalanceScale, FaPenNib } from 'react-icons/fa';

const milestones = [
  {
    year: '2002',
    title: 'Título de Abogado',
    institution: 'Universidad Argentina de la Empresa (UADE)',
    desc: 'Inicio de la carrera profesional.',
    icon: <FaUniversity />,
  },
  {
    year: '2006',
    title: 'Especialista en Derecho Administrativo',
    institution: 'Universidad de Buenos Aires (UBA)',
    desc: 'Posgrado acreditado por la CONEAU (Cat. A). Formación intensiva en contratos administrativos, servicios públicos y responsabilidad del Estado.',
    icon: <FaGraduationCap />,
  },
  {
    year: '2011',
    title: 'Maestría en Derecho Procesal',
    institution: 'Universidad Nacional de Rosario (UNR)',
    desc: 'Tesis aprobada y defendida. Perfeccionamiento en la estrategia de litigios y defensa en juicio.',
    icon: <FaBalanceScale />,
  },
  {
    year: '2013',
    title: 'Derecho del Petróleo y Gas',
    institution: 'Universidad de Buenos Aires (UBA)',
    desc: 'Programa de actualización con Tesina aprobada (Nota: 10). Conocimiento clave para la región patagónica.',
    icon: <FaBook />,
  },
  {
    year: '2025',
    title: 'Licenciado en Letras',
    institution: 'Universidad Nacional del Comahue (UNCOMA)',
    desc: 'Graduado con promedio 9.33. Una formación humanista que potencia la argumentación jurídica y la retórica.',
    icon: <FaPenNib />,
  },
];

const Timeline = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        {/* Título de la Sección */}
        <div className="text-center mb-20">
          <span className="text-[var(--color-accent)] font-bold tracking-widest uppercase text-xs">
            Trayectoria Académica
          </span>
          <h2
            className="text-3xl md:text-4xl font-serif font-bold text-white mt-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Formación de Excelencia
          </h2>
        </div>

        {/* CONTENEDOR TIMELINE */}
        <div className="relative">
          {/* LÍNEA CENTRAL (Vertical Line) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-ml-0.5"></div>

          {/* ITEM LOOP */}
          <div className="space-y-12">
            {milestones.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center md:justify-between ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* 1. ESPACIO VACÍO (Para alternancia en Desktop) */}
                <div className="hidden md:block w-5/12"></div>

                {/* 2. PUNTO CENTRAL (Dot) */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[#0b111a] bg-[var(--color-accent)] z-10 flex items-center justify-center text-[#0b111a] text-xs">
                  {/* Círculo dorado */}
                </div>

                {/* 3. TARJETA DE CONTENIDO */}
                <div className="ml-12 md:ml-0 w-full md:w-5/12">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-[var(--color-accent)] transition-colors duration-300 group">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[var(--color-accent)] text-xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="font-bold text-[var(--color-accent)] text-xl font-serif">{item.year}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1 leading-tight">{item.title}</h3>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">{item.institution}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
