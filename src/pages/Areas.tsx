import {
  FaLandmark,
  FaUserShield,
  FaFileContract,
  FaBriefcase,
  FaBalanceScale,
  FaHandshake,
  FaCheck,
} from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import CallToAction from '../components/CallToAction';

// Datos extendidos con "sub-servicios"
const detailedAreas = [
  {
    id: 1,
    title: 'Derecho Administrativo',
    icon: <FaLandmark size={32} />,
    desc: 'Nuestra especialidad principal. Litigamos contra el poder sancionador y la inactividad del Estado.',
    services: [
      'Impugnación de actos administrativos.',
      'Defensa en sumarios administrativos.',
      'Reclamos por responsabilidad del Estado.',
      'Amparos por mora y medidas cautelares.',
      'Agotamiento de la vía administrativa.',
    ],
  },
  {
    id: 2,
    title: 'Empleo Público',
    icon: <FaUserShield size={32} />,
    desc: 'Protección integral para el agente estatal frente a arbitrariedades de la administración.',
    services: [
      'Impugnación de cesantías y exoneraciones.',
      'Reclamos por traslados arbitrarios.',
      'Concursos y pases a planta permanente.',
      'Diferencias salariales y suplementos.',
      'Reincorporaciones y medidas de no innovar.',
    ],
  },
  {
    id: 3,
    title: 'Licitaciones y Contratos',
    icon: <FaFileContract size={32} />,
    desc: 'Asesoramiento corporativo para empresas que contratan con el sector público.',
    services: [
      'Análisis de pliegos de bases y condiciones.',
      'Impugnación de pre-adjudicaciones.',
      'Redeterminación de precios en obra pública.',
      'Ejecución de contratos administrativos.',
      'Defensa ante rescisiones contractuales.',
    ],
  },
  {
    id: 4,
    title: 'Derecho Laboral',
    icon: <FaBriefcase size={32} />,
    desc: 'Defensa de derechos laborales en el ámbito privado con estrategia de negociación.',
    services: [
      'Despidos directos e indirectos.',
      'Trabajo no registrado o deficiente.',
      'Accidentes de trabajo (ART).',
      'Diferencias salariales e indemnizaciones.',
      'Acoso laboral (Mobbing).',
    ],
  },
  {
    id: 5,
    title: 'Derecho Civil y Daños',
    icon: <FaBalanceScale size={32} />,
    desc: 'Reparación integral de daños y resolución de conflictos entre particulares.',
    services: [
      'Accidentes de tránsito y siniestros.',
      'Mala praxis médica y profesional.',
      'Incumplimientos contractuales.',
      'Juicios ejecutivos y cobranzas.',
      'Derechos del consumidor.',
    ],
  },
  {
    id: 6,
    title: 'Sucesiones y Familia',
    icon: <FaHandshake size={32} />,
    desc: 'Gestión sensible y eficiente de conflictos familiares y patrimoniales.',
    services: [
      'Sucesiones ab-intestato y testamentarias.',
      'Declaratoria de herederos.',
      'Divorcios y división de bienes.',
      'Acuerdos prenupciales.',
      'Planificación hereditaria.',
    ],
  },
];

const Areas = () => {
  return (
    <div className="bg-white">
      {/* === HEADER SIMPLE === */}
      <section className="pt-32 pb-16 bg-[#0b111a] text-center px-6">
        <h1
          className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Áreas de Práctica
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Un enfoque integral dividido en dos grandes ramas:{' '}
          <span className="text-[var(--color-accent)]">Derecho Público </span>y{' '}
          <span className="text-white">Derecho Privado</span>.
        </p>
      </section>

      {/* === GRID DETALLADO === */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedAreas.map((area) => (
              <div
                key={area.id}
                className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Header Card */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-accent)]">
                    {area.icon}
                  </div>
                  {/* Número decorativo */}
                  <span className="text-6xl font-serif font-bold text-gray-100 -mt-4 -mr-4 select-none">
                    0{area.id}
                  </span>
                </div>

                <h3
                  className="text-2xl font-serif font-bold text-[var(--color-primary)] mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {area.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed border-b border-gray-100 pb-6">{area.desc}</p>

                {/* Lista de Sub-servicios */}
                <ul className="space-y-3">
                  {area.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <FaCheck className="text-[var(--color-accent)] shrink-0 mt-1" size={12} />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón Consultar específico */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href={`https://wa.me/5492995330138?text=Hola, quisiera consultar sobre un tema de ${area.title}...`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    Consultar por esto
                    <HiArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL (Reutilizamos el que ya tenemos) */}
      <CallToAction />
    </div>
  );
};

export default Areas;
