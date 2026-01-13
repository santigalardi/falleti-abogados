import { FaShieldAlt, FaUserLock, FaServer, FaGavel } from 'react-icons/fa';

const PrivacyPolicy = () => {
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
            <FaShieldAlt className="text-accent text-2xl" />
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Política de Privacidad
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprometidos con la protección de sus datos personales y el secreto profesional.
          </p>
        </div>
      </section>

      {/* === CONTENIDO LEGAL === */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Introducción */}
          <div className="mb-12 border-b border-gray-100 pb-8">
            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-2">
              Última actualización: {new Date().getFullYear()}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Esta Política de Privacidad describe cómo <strong>Falleti Abogados</strong> recopila, utiliza y protege la
              información que usted proporciona al utilizar nuestro sitio web. Al contactarnos, usted acepta las
              prácticas descritas en este documento.
            </p>
          </div>

          <div className="space-y-12">
            {/* 1. Responsable */}
            <div className="flex gap-6 items-start">
              <div className="hidden md:flex shrink-0 w-12 h-12 rounded-sm bg-gray-50 items-center justify-center text-primary">
                <FaGavel size={20} />
              </div>
              <div>
                <h2
                  className="text-2xl font-bold text-primary mb-4 flex items-center gap-3 font-serif"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  1. Responsable del Tratamiento
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  En cumplimiento con la <strong>Ley N° 25.326 de Protección de Datos Personales</strong> de la
                  República Argentina, se informa que los datos recabados serán tratados por Falleti Abogados, con
                  domicilio legal en Neuquén Capital, Argentina.
                </p>
              </div>
            </div>

            {/* 2. Recolección */}
            <div className="flex gap-6 items-start">
              <div className="hidden md:flex shrink-0 w-12 h-12 rounded-sm bg-gray-50 items-center justify-center text-primary">
                <FaServer size={20} />
              </div>
              <div>
                <h2
                  className="text-2xl font-bold text-primary mb-4 font-serif"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  2. Información que Recopilamos
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A través de nuestro formulario de contacto, recopilamos únicamente los datos necesarios para brindarle
                  asesoramiento legal inicial:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Nombre y Apellido.</li>
                  <li>Información de contacto (Email y Teléfono).</li>
                  <li>Detalles del caso que usted decida compartir voluntariamente.</li>
                </ul>
              </div>
            </div>

            {/* 3. Finalidad */}
            <div className="flex gap-6 items-start">
              <div className="hidden md:flex shrink-0 w-12 h-12 rounded-sm bg-gray-50 items-center justify-center text-primary">
                <FaUserLock size={20} />
              </div>
              <div>
                <h2
                  className="text-2xl font-bold text-primary mb-4 font-serif"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  3. Finalidad y Secreto Profesional
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">La información se utiliza exclusivamente para:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                  <li>Responder a sus consultas legales.</li>
                  <li>Evaluar la viabilidad de su caso.</li>
                  <li>Establecer una vía de comunicación profesional.</li>
                </ul>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Toda la información compartida está protegida por el secreto profesional abogado-cliente y no será
                  compartida, vendida ni cedida a terceros bajo ninguna circunstancia, salvo requerimiento judicial.
                </p>
              </div>
            </div>

            {/* 4. Derechos */}
            <div className="bg-gray-50 p-8 rounded-sm border-l-4" style={{ borderColor: 'var(--color-accent)' }}>
              <h2
                className="text-xl font-bold text-primary mb-4 font-serif"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                4. Sus Derechos (Habeas Data)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Como titular de los datos, usted tiene la facultad de ejercer el derecho de acceso a los mismos en forma
                gratuita, así como a solicitar que sean rectificados, actualizados o suprimidos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Para ejercer estos derechos, puede contactarnos a:
                <a
                  href="mailto:estudiojuridico@falleti.com.ar"
                  className="font-bold text-primary hover:text-accent ml-1 transition-colors"
                >
                  estudiojuridico@falleti.com.ar
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
