import { FaBalanceScale, FaFileSignature, FaRegHandshake } from 'react-icons/fa';

const features = [
  {
    icon: <FaFileSignature />,
    title: 'Conocimiento del Sistema',
    desc: 'Comprendemos la lógica interna de la Administración Pública. Nuestros abogados son expertos en el campo.',
  },
  {
    icon: <FaRegHandshake />,
    title: 'Claridad y Franqueza',
    desc: 'Hablamos con la verdad sobre las posibilidades reales de su caso. Sin falsas promesas y con comunicación constante.',
  },
  {
    icon: <FaBalanceScale />,
    title: 'Rigor Técnico',
    desc: 'En el derecho administrativo, los detalles importan. Analizamos cada acto administrativo buscando nulidades y soluciones.',
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-white text-primary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* === COLUMNA IZQUIERDA: Misión === */}
          <div>
            <span className="font-bold uppercase tracking-widest text-xs mb-4 block text-accent">Misión</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
              Nuestra misión es
              <span className="italic text-primary relative z-10 inline-block">
                equilibrar la fuerza
                <span className="absolute bottom-1 left-0 w-full h-3 bg-accent-light -z-10 opacity-30"></span>
              </span>{' '}
              entre el ciudadano y el Estado.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Enfrentar a la administración pública puede ser intimidante. En <strong>Falleti Abogados</strong>,
              transformamos esa complejidad en una estrategia de defensa sólida. No solo gestionamos documentos;
              defendemos sus derechos frente a la arbitrariedad con un enfoque inteligente.
            </p>

            <a
              href="/nosotros"
              className="inline-block border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-widest hover:text-accent hover:border-accent transition-all"
            >
              Conozca nuestra propuesta
            </a>
          </div>

          {/* === COLUMNA DERECHA: Features & Big Stat === */}
          <div className="relative flex flex-col justify-between h-full">
            {/* 1. Lista de Características */}
            <div className="grid sm:grid-cols-1 gap-10 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-accent text-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 2. DATO DE IMPACTO (25 AÑOS) */}
            <div className="relative border-t border-gray-100 pt-8 mt-4">
              <div className="flex flex-row items-center gap-6">
                {/* Número Grande */}
                <span className="text-7xl font-serif font-bold text-accent leading-none">+25</span>

                {/* Texto Descriptivo */}
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-primary uppercase tracking-wide">
                    Años de <br />
                    Trayectoria
                  </span>
                  <span className="text-sm text-gray-500 mt-1">
                    Ejerciendo ininterrumpidamente en el fuero administrativo.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
