import { FaBalanceScale, FaFileSignature, FaRegHandshake } from 'react-icons/fa';

const features = [
  {
    icon: <FaFileSignature />,
    title: 'Conocimiento del Sistema',
    desc: 'Entendemos los tiempos y procesos de la Administración Pública. Sabemos cómo destrabar expedientes.',
  },
  {
    icon: <FaRegHandshake />, // Icono de trato humano/compromiso
    title: 'Claridad y Franqueza',
    // CAMBIO AQUÍ: Enfoque en la honestidad profesional en lugar de "quién atiende"
    desc: 'Hablamos con la verdad sobre las posibilidades reales de su caso. Sin falsas promesas y con comunicación constante.',
  },
  {
    icon: <FaBalanceScale />,
    title: 'Rigor Técnico',
    desc: 'En el derecho administrativo, los detalles importan. Analizamos cada acto administrativo buscando nulidades y soluciones.',
  },
];

const stats = [
  { number: '+15', label: 'Años de Experiencia' },
  { number: '+500', label: 'Expedientes Gestionados' },
  { number: '98%', label: 'Resoluciones Favorables' },
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-white text-[var(--color-primary)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* === COLUMNA IZQUIERDA: Filosofía === */}
          <div>
            <span className="font-bold uppercase tracking-widest text-xs mb-4 block text-[var(--color-accent)]">
              Nuestra Filosofía
            </span>
            <h2
              className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              "Nuestra misión es{' '}
              <span className="italic text-[var(--color-primary)] relative z-10">
                equilibrar la fuerza
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[var(--color-accent-light)] -z-10 opacity-30"></span>
              </span>{' '}
              entre el ciudadano y el Estado."
            </h2>

            {/* CAMBIO DE MARCA AQUÍ */}
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Enfrentar a la administración pública puede ser intimidante. En <strong>Falleti Abogados</strong>,
              transformamos esa complejidad en una estrategia de defensa sólida. No solo gestionamos papeles; defendemos
              sus derechos frente a la arbitrariedad y la burocracia con un enfoque inteligente.
            </p>

            <a
              href="/nosotros"
              className="inline-block border-b-2 border-[var(--color-primary)] pb-1 text-sm font-bold uppercase tracking-widest hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all"
            >
              Conozca nuestra propuesta
            </a>
          </div>

          {/* === COLUMNA DERECHA: Features & Stats === */}
          <div className="relative">
            {/* Grid de Características */}
            <div className="grid sm:grid-cols-1 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent)] text-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Barra de Estadísticas */}
            <div className="border-t border-gray-200 pt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <p
                    className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-accent)] mb-1"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
