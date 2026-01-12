import { FaHandshake, FaUserShield, FaFileContract, FaBalanceScale, FaLandmark } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const areas = [
  // === NIVEL 1: ESPECIALIDAD ===
  {
    id: 1,
    title: 'Derecho Administrativo',
    desc: 'Defensa ante sumarios, multas y actos administrativos arbitrarios del Estado.',
    icon: <FaLandmark size={24} />,
  },
  {
    id: 2,
    title: 'Empleo Público',
    desc: 'Representación de agentes estatales en ingresos, ascensos, traslados y cesantías.',
    icon: <FaUserShield size={24} />,
  },
  {
    id: 3,
    title: 'Licitaciones y Contratos',
    desc: 'Asesoramiento a empresas en compras públicas, concesiones y obras del Estado.',
    icon: <FaFileContract size={24} />,
  },

  // === NIVEL 2: ÁREAS GENERALES ===
  {
    id: 4,
    title: 'Derecho Civil',
    desc: 'Asesoramiento en contratos y derechos reales.',
    icon: <FaBalanceScale size={24} />,
  },
  {
    id: 5,
    title: 'Sucesiones',
    desc: 'Gestión de herencias y declaratorias de herederos.',
    icon: <FaHandshake size={24} />,
  },
];

const PracticeAreas = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Encabezado de la Sección */}
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <div className="max-w-2xl">
            <span
              className="font-bold uppercase tracking-widest text-xs mb-2 block"
              style={{ color: 'var(--color-accent)' }}
            >
              Nuestra Experiencia
            </span>
            <h2
              className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Soluciones legales <br />
              <span className="text-white/50">especializadas e integrales.</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href="/areas"
              className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-[var(--color-accent)] transition-colors"
            >
              Ver todas las áreas
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* CAMBIO PRINCIPAL AQUÍ:
           1. Usamos 'flex flex-wrap' en lugar de 'grid'.
           2. Usamos 'justify-center' para que los elementos sobrantes (los últimos 2) vayan al medio.
           3. 'gap-6' se mantiene para el espaciado.
        */}
        <div className="flex flex-wrap justify-center gap-6">
          {areas.map((area) => (
            <div
              key={area.id}
              onClick={() => navigate('/areas')}
              // CAMBIO EN TAMAÑOS:
              // - Mobile: w-full (100%)
              // - Tablet (md): calc(50% - 12px) -> Mitad menos la mitad del gap
              // - Desktop (lg): calc(33.33% - 16px) -> Tercio menos compensación del gap
              className="
                w-full 
                md:w-[calc(50%-12px)] 
                lg:w-[calc(33.333%-16px)] 
                group relative p-8 border border-white/10 hover:border-[var(--color-accent)] transition-colors duration-500 bg-white/[0.02] cursor-pointer"
            >
              {/* Icono */}
              <div
                className="mb-6 w-12 h-12 flex items-center justify-center rounded-sm text-white group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-primary)] transition-all duration-300"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              >
                {area.icon}
              </div>

              {/* Texto */}
              <h3 className="text-xl font-serif font-bold text-white mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                {area.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{area.desc}</p>

              {/* Link Simulado (Flecha) */}
              <div className="absolute bottom-8 right-8 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <HiArrowRight className="text-[var(--color-accent)]" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
