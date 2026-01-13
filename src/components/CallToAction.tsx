import { FaWhatsapp } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fondo con superposición oscura */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: 'var(--color-primary)' }}>
        {/* Círculo decorativo dorado difuminado */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: 'var(--color-accent)' }}
        ></div>
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: 'var(--color-accent)' }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2
          className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          ¿Tiene un caso complejo? <br />
          <span style={{ color: 'var(--color-accent)' }}>No deje pasar más tiempo.</span>
        </h2>

        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          La primera consulta es clave para definir la estrategia de su defensa. Contáctenos hoy mismo y reciba el
          asesoramiento profesional que su situación requiere.
        </p>

        {/* Único Botón de Acción */}
        <div className="flex flex-col items-center justify-center gap-4">
          <a
            href="https://wa.me/5492995330138"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:scale-105 hover:bg-white rounded-sm"
            style={{ backgroundColor: 'var(--color-accent)' }}
          >
            <FaWhatsapp size={20} />
            Iniciar Consulta por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
