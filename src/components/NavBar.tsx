import { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
// ASEGÚRATE DE QUE ESTA IMAGEN EXISTA EN TU CARPETA ASSETS
import logoImg from '../assets/law.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '5492995551234';
  const message = 'Hola, me contacto desde la web de Falleti Abogados para realizar una consulta.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Definimos los enlaces para un sitio multi-página
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Áreas de Práctica', path: '/areas' },
  ];

  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-300"
      style={{ backgroundColor: 'var(--color-primary)' }} // Fondo oscuro base
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-24 items-center justify-between">
          {/* === LOGO (Imagen + Texto HTML) === */}
          <a href="/" className="group flex items-center gap-4">
            {/* Contenedor de la imagen de la balanza */}
            <div
              className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-[3px] p-1 transition-transform duration-500 group-hover:scale-105"
              style={{ borderColor: 'var(--color-accent)' }}
            >
              {/* IMPORTANTE: La imagen debe ser cuadrada (1:1) para que no se deforme */}
              <img
                src={logoImg}
                alt="Insignia Falleti"
                className="h-full w-full object-cover rounded-full opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Texto del Logo */}
            <div className="flex flex-col">
              <span
                className="font-serif text-2xl lg:text-3xl font-bold tracking-wide text-white leading-none"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                FALLETI
              </span>
              <span
                className="font-sans text-[10px] lg:text-xs font-bold uppercase tracking-[0.3em] mt-1.5"
                style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-sans)' }}
              >
                Abogados
              </span>
            </div>
          </a>

          {/* === DESKTOP NAVIGATION === */}
          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="relative text-sm font-medium text-white/80 transition-all duration-300 hover:text-white group py-2"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {link.name}
                    {/* Línea dorada animada al hacer hover */}
                    <span
                      className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Botón CTA Destacado (Desktop) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              // CAMBIO AQUÍ: hover:brightness-110 para igualar al formulario
              className="px-7 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:brightness-110 rounded-sm"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Consulta
            </a>
          </nav>

          {/* === MOBILE MENU TOGGLE === */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white transition-colors hover:text-[var(--color-accent)]"
            aria-label="Alternar menú"
          >
            {isOpen ? <HiX size={32} /> : <HiOutlineMenu size={32} />}
          </button>
        </div>
      </div>

      {/* === MOBILE MENU DRAWER === */}
      <div
        className={`absolute left-0 w-full border-b border-white/10 shadow-xl transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <nav className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-xl font-serif text-white transition-colors hover:text-[var(--color-accent)] hover:pl-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              <span className="text-xs" style={{ color: 'var(--color-accent)' }}>
                ◆
              </span>
              {link.name}
            </a>
          ))}
          {/* Botón CTA Destacado (Mobile) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            onClick={() => setIsOpen(false)}
            // CAMBIO AQUÍ: hover:brightness-110
            className="mt-4 block w-full text-center py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:brightness-110 rounded-sm"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Consulta
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
