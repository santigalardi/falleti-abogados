import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// Importamos la imagen del logo
import logoImg from '../assets/law.webp';

const phoneNumber = '5492995330138';
const message = 'Hola, me contacto desde la web de Falleti Abogados para realizar una consulta.';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const Footer = () => {
  return (
    <footer className="bg-primary text-white border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* COLUMNA 1: Marca */}
          <div>
            {/* === LOGO INTEGRADO === */}
            <a href="/" className="group flex items-center gap-3 mb-6">
              {/* Contenedor de la imagen */}
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-accent p-0.5 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={logoImg}
                  alt="Insignia Falleti"
                  className="h-full w-full object-cover rounded-full opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Texto del Logo */}
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wide text-white leading-none">FALLETI</span>
                <div
                  className="flex justify-between w-full mt-1 font-sans text-[10px] font-bold uppercase text-accent"
                  aria-label="Abogados"
                >
                  {'Abogados'.split('').map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </div>
              </div>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Defensa estratégica en Derecho Administrativo y litigios complejos. Hacemos valer sus derechos frente al
              Estado con rigor profesional y cercanía.
            </p>

            <div className="flex gap-4">
              {/* Redes Sociales */}
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMNA 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-accent">Navegación</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/nosotros" className="hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/areas" className="hover:text-white transition-colors">
                  Áreas de Práctica
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: Especialidades */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-accent">Especialidades</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="/areas" className="hover:text-white transition-colors">
                  Derecho Administrativo
                </a>
              </li>
              <li>
                <a href="/areas" className="hover:text-white transition-colors">
                  Empleo Público
                </a>
              </li>
              <li>
                <a href="/areas" className="hover:text-white transition-colors">
                  Licitaciones y Contratos
                </a>
              </li>
              <li>
                <a href="/areas" className="hover:text-white transition-colors">
                  Derecho Civil
                </a>
              </li>
              <li>
                <a href="/areas" className="hover:text-white transition-colors">
                  Sucesiones
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: Contacto */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-accent">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <span className="block text-xs text-gray-500 mb-1">Dirección:</span>
                Neuquén, Argentina (Oficina Centro)
              </li>
              <li>
                <span className="block text-xs text-gray-500 mb-1">Teléfono / WhatsApp:</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  +54 9 299 533 0138
                </a>
              </li>
              <li>
                <span className="block text-xs text-gray-500 mb-1">Email:</span>
                <a href="mailto:estudiojuridico@falleti.com.ar" className="hover:text-accent transition-colors">
                  estudiojuridico@falleti.com.ar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT + FIRMA DIGITALYA */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Falleti Abogados. Todos los derechos reservados.</p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4 md:mt-0">
            <div className="flex gap-6">
              <a href="/terminos" className="hover:text-white transition-colors">
                Términos y Condiciones
              </a>
              <a href="/privacidad" className="hover:text-white transition-colors">
                Privacidad
              </a>
            </div>

            <span className="hidden sm:block text-white/10">|</span>

            {/* === CRÉDITO DIGITALYA === */}
            <a
              href="https://digitalya.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 hover:text-white transition-colors"
            >
              Creado por
              <span className="font-bold text-accent group-hover:underline decoration-accent underline-offset-4">
                DigitalYa
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
