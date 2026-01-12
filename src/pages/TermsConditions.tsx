import { FaFileContract, FaHandshake, FaExclamationTriangle, FaGavel, FaCopyright } from 'react-icons/fa';

const TermsConditions = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* === HEADER (Estilo Institucional) === */}
      <section
        className="pt-40 pb-20 px-6 text-center relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 rounded-full border border-white/10 mb-6 bg-white/5">
            <FaFileContract className="text-[var(--color-accent)] text-2xl" />
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Términos y Condiciones
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Lineamientos claros para una relación profesional transparente y segura.
          </p>
        </div>
      </section>

      {/* === CONTENIDO LEGAL === */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Introducción */}
          <div className="mb-12 border-b border-gray-100 pb-8">
            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-2">
              Vigencia desde: {new Date().getFullYear()}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Bienvenido al sitio web de <strong>Falleti Abogados</strong>. Al navegar por este sitio y utilizar
              nuestros canales de contacto, usted acepta cumplir con los siguientes términos y condiciones de uso. Si no
              está de acuerdo con alguna parte de estos términos, le rogamos abstenerse de utilizar nuestros servicios
              digitales.
            </p>
          </div>

          <div className="space-y-12">
            {/* 1. Naturaleza de la Información */}
            <div className="flex gap-6 items-start">
              <div className="hidden md:flex shrink-0 w-12 h-12 rounded-sm bg-gray-50 items-center justify-center text-[var(--color-primary)]">
                <FaHandshake size={20} />
              </div>
              <div>
                <h2
                  className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-serif"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  1. Relación Abogado-Cliente
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  La información contenida en este sitio web tiene carácter meramente informativo y general.{' '}
                  <strong>
                    El envío de un formulario de contacto o un correo electrónico no constituye automáticamente una
                    relación formal abogado-cliente.
                  </strong>{' '}
                  Dicha relación solo se perfeccionará mediante la firma de un convenio de honorarios o la aceptación
                  explícita del caso por parte del estudio.
                </p>
              </div>
            </div>

            {/* 2. Propiedad Intelectual */}
            <div className="flex gap-6 items-start">
              <div className="hidden md:flex shrink-0 w-12 h-12 rounded-sm bg-gray-50 items-center justify-center text-[var(--color-primary)]">
                <FaCopyright size={20} />
              </div>
              <div>
                <h2
                  className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-serif"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  2. Propiedad Intelectual
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Todo el contenido de este sitio web, incluyendo textos, logotipos, imágenes, diseño gráfico y código
                  fuente, es propiedad exclusiva de <strong>Falleti Abogados</strong> o de terceros que han autorizado
                  su uso. Queda prohibida su reproducción, distribución o modificación sin autorización previa por
                  escrito.
                </p>
              </div>
            </div>

            {/* 3. Limitación de Responsabilidad */}
            <div className="flex gap-6 items-start">
              <div className="hidden md:flex shrink-0 w-12 h-12 rounded-sm bg-gray-50 items-center justify-center text-[var(--color-primary)]">
                <FaExclamationTriangle size={20} />
              </div>
              <div>
                <h2
                  className="text-2xl font-bold text-[var(--color-primary)] mb-4 font-serif"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  3. Limitación de Responsabilidad
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Si bien nos esforzamos por mantener la información del sitio actualizada y precisa, las leyes y
                  regulaciones cambian constantemente. Falleti Abogados no se hace responsable por acciones tomadas
                  basándose únicamente en la información general de este sitio sin el debido asesoramiento legal
                  personalizado.
                </p>
              </div>
            </div>

            {/* 4. Jurisdicción */}
            <div className="bg-gray-50 p-8 rounded-sm border-l-4" style={{ borderColor: 'var(--color-accent)' }}>
              <div className="flex items-center gap-3 mb-4">
                <FaGavel className="text-[var(--color-primary)]" size={24} />
                <h2
                  className="text-xl font-bold text-[var(--color-primary)] font-serif"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  4. Legislación y Jurisdicción
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Estos términos se rigen por las leyes de la República Argentina. Para cualquier controversia que pudiera
                derivarse del uso de este sitio web o de los servicios contratados, las partes se someten a la
                jurisdicción exclusiva de los{' '}
                <strong>Tribunales Ordinarios de la I Circunscripción Judicial de la Provincia del Neuquén</strong>,
                renunciando a cualquier otro fuero o jurisdicción.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;
