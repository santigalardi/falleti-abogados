import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaSpinner, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // === SIMULACIÓN DE ENVÍO ===
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 2000);
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-primary" aria-label="Sección de contacto">
      {/* === CSS HACK PARA EL AUTOCOMPLETADO === */}
      <style>{`
        .autofill-input:-webkit-autofill,
        .autofill-input:-webkit-autofill:hover, 
        .autofill-input:-webkit-autofill:focus, 
        .autofill-input:-webkit-autofill:active{
            -webkit-text-fill-color: white !important;
            -webkit-box-shadow: 0 0 0 30px rgba(0,0,0,0) inset !important;
            transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* === COLUMNA IZQUIERDA: INFORMACIÓN === */}
          <div>
            <span className="font-bold uppercase tracking-widest text-xs mb-4 block text-accent">Contacto Directo</span>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Evaluemos su caso.</h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              La primera consulta es fundamental para definir la viabilidad de su reclamo. Complete el formulario o
              utilice nuestros canales directos para recibir asesoramiento.
            </p>

            <div className="space-y-8">
              {/* Item Dirección */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent shrink-0">
                  <FaMapMarkerAlt aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Oficina Neuquén</h4>
                  <p className="text-gray-400 text-sm">Neuquén Capital, Argentina.</p>
                  <p className="text-gray-500 text-xs mt-1">(Atención con cita previa)</p>
                </div>
              </div>

              {/* Item Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent shrink-0">
                  <FaEnvelope aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <a
                    href="mailto:estudiojuridico@falleti.com.ar"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                    aria-label="Enviar correo a estudiojuridico@falleti.com.ar"
                  >
                    estudiojuridico@falleti.com.ar
                  </a>
                </div>
              </div>

              {/* Item Teléfono */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent shrink-0">
                  <FaPhone aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Teléfono / WhatsApp</h4>
                  <p className="text-gray-400 text-sm" aria-label="Número de teléfono">
                    +54 9 299 533 0138
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Lun a Vie de 9:00 a 17:00 hs</p>
                </div>
              </div>
            </div>
          </div>

          {/* === COLUMNA DERECHA: FORMULARIO === */}
          <div className="bg-white/5 p-8 md:p-10 border border-white/10 rounded-sm relative overflow-hidden">
            {/* OVERLAY DE ÉXITO */}
            {isSent && (
              <div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-primary/95 backdrop-blur-sm p-8 text-center animate-in fade-in zoom-in duration-500"
                role="alert"
                aria-live="polite"
              >
                <FaCheckCircle
                  size={60}
                  className="mb-6 text-accent drop-shadow-[0_0_10px_rgba(197,160,89,0.5)]"
                  aria-hidden="true"
                />
                <h3 className="text-2xl font-serif font-bold text-white mb-3">Mensaje Enviado</h3>
                <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                  Gracias por contactarnos. Hemos recibido su consulta y le responderemos a la brevedad al email o
                  teléfono indicado.
                </p>
              </div>
            )}

            <h3 className="text-white font-serif font-bold text-2xl mb-6">Envíenos su consulta</h3>

            <form
              onSubmit={handleSubmit}
              className={`space-y-6 transition-opacity duration-300 ${
                isSending ? 'opacity-50 pointer-events-none' : 'opacity-100'
              }`}
              aria-label="Formulario de contacto"
            >
              {/* Campo Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-xs font-bold uppercase text-gray-400 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  placeholder="Ingrese su nombre"
                  className="autofill-input w-full bg-black/20 border border-white/10 text-white p-4 text-sm focus:border-accent outline-none transition-colors rounded-sm placeholder:text-gray-600"
                  onChange={handleChange}
                  aria-label="Ingrese su nombre completo"
                />
              </div>

              {/* Campo Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  placeholder="Ingrese su email"
                  className="autofill-input w-full bg-black/20 border border-white/10 text-white p-4 text-sm focus:border-accent outline-none transition-colors rounded-sm placeholder:text-gray-600"
                  onChange={handleChange}
                  aria-label="Ingrese su correo electrónico"
                />
              </div>

              {/* Campo Teléfono */}
              <div>
                <label htmlFor="telefono" className="block text-xs font-bold uppercase text-gray-400 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  placeholder="Ej: 299 123 4567"
                  className="autofill-input w-full bg-black/20 border border-white/10 text-white p-4 text-sm focus:border-accent outline-none transition-colors rounded-sm placeholder:text-gray-600"
                  onChange={handleChange}
                  aria-label="Ingrese su número de teléfono"
                />
              </div>

              {/* Campo Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-xs font-bold uppercase text-gray-400 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  value={formData.mensaje}
                  placeholder="Describa brevemente su situación..."
                  className="autofill-input w-full bg-black/20 border border-white/10 text-white p-4 text-sm focus:border-accent outline-none transition-colors rounded-sm resize-none placeholder:text-gray-600"
                  onChange={handleChange}
                  aria-label="Describa brevemente su situación"
                ></textarea>
              </div>

              {/* Botón Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 text-xs font-bold uppercase tracking-widest text-primary bg-accent hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 rounded-sm disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
                aria-label={isSending ? 'Enviando mensaje' : 'Enviar mensaje'}
              >
                {isSending ? (
                  <>
                    <FaSpinner className="animate-spin" size={18} aria-hidden="true" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <FaPaperPlane size={14} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
