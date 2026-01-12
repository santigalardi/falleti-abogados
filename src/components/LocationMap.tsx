import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const LocationMap = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="text-[var(--color-accent)] font-bold tracking-widest uppercase text-xs">Ubicación</span>
          <h2
            className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-primary)] mt-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Nuestras Oficinas
          </h2>
        </div>

        {/* Contenedor del Mapa */}
        <div className="relative w-full h-[450px] md:h-[500px] rounded-sm overflow-hidden shadow-lg border border-gray-200 group">
          {/* Google Maps Embed */}
          <iframe
            title="Ubicación Estudio Falleti"
            // TU NUEVO LINK CON EL ZOOM AJUSTADO:
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.4181697204217!2d-68.06724955986499!3d-38.952925120118614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33ceb7a6021b%3A0x506f3d3db6dc0f68!2sSantiago%20del%20Estero%20112%2C%20Q8300%20Neuqu%C3%A9n!5e0!3m2!1ses!2sar!4v1768242608183!5m2!1ses!2sar"
            // === TRUCO PARA OCULTAR LA TARJETA ===
            // 1. h-[150%]: Hacemos el mapa mucho más alto.
            // 2. -mt-[150px]: Lo subimos 150px para "recortar" la parte superior donde sale la tarjeta blanca.
            className="w-full h-[150%] -mt-[150px] relative z-0"
            style={{ border: 0, filter: 'grayscale(10%) contrast(1.1)' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Tarjeta Flotante con Datos (Solo desktop) */}
          <div className="absolute bottom-6 left-6 z-10 bg-white/95 backdrop-blur-sm p-6 rounded-sm shadow-2xl max-w-xs border-l-4 border-[var(--color-accent)] hidden md:block transition-transform duration-300 group-hover:-translate-y-1">
            <div className="space-y-4">
              {/* Dirección */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[var(--color-primary)]">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] text-sm mb-1 uppercase tracking-wider">
                    Falleti Abogados
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Santiago del Estero 112
                    <br />
                    Neuquén, Argentina
                  </p>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="mt-1 text-[var(--color-primary)]">
                  <FaClock size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)] text-sm mb-1 uppercase tracking-wider">
                    Atención
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Lunes a Viernes
                    <br />
                    09:00 - 17:00 hs
                    <br />
                    <span className="italic text-[var(--color-accent)]">(Con cita previa)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
