import { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
// Asegúrate de que esta imagen exista
import logoImg from '../assets/law.webp';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '5492995551234';
  const message = 'Hola, me contacto desde la web de Falleti Abogados para realizar una consulta.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Áreas de Práctica', path: '/areas' },
  ];

  return (
    <header
      // CAMBIO: Reemplazado style={{ backgroundColor... }} por 'bg-primary'
      className="fixed top-0 z-50 w-full border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-300 bg-primary"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-24 items-center justify-between">
          {/* === LOGO === */}
          <a href="/" className="group flex items-center gap-4">
            <div
              // CAMBIO: Reemplazado style={{ borderColor... }} por 'border-accent'
              className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-[3px] border-accent p-1 transition-transform duration-500 group-hover:scale-105"
            >
              <img
                src={logoImg}
                alt="Insignia Falleti"
                className="h-full w-full object-cover rounded-full opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Texto del Logo */}
            <div className="flex flex-col">
              <span
                // CAMBIO: Reemplazado style={{ fontFamily... }} por 'font-serif'
                className="font-serif text-2xl lg:text-3xl font-bold tracking-wide text-white leading-none"
              >
                FALLETI
              </span>

              {/* Texto Inferior */}
              <div
                // CAMBIO: Reemplazado style={{ color, fontFamily }} por 'text-accent font-sans'
                className="flex justify-between w-full mt-1.5 font-sans text-[10px] lg:text-xs font-bold uppercase text-accent"
                aria-label="Abogados"
              >
                {'Abogados'.split('').map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
              </div>
            </div>
          </a>

          {/* === DESKTOP NAVIGATION === */}
          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    // CAMBIO: Reemplazado style={{ fontFamily }} por 'font-sans'
                    className="relative text-sm font-medium text-white/80 transition-all duration-300 hover:text-white group py-2 font-sans"
                  >
                    {link.name}
                    <span
                      // CAMBIO: Reemplazado style={{ backgroundColor }} por 'bg-accent'
                      className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full bg-accent"
                    ></span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              // CAMBIO: Eliminado el bloque style gigante.
              // Agregado: bg-accent text-primary font-sans
              className="px-7 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:brightness-110 rounded-sm bg-accent text-primary font-sans"
            >
              Consulta
            </a>
          </nav>

          {/* === MOBILE MENU TOGGLE === */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            // CAMBIO: Reemplazado hover:text-[var(--color-accent)] por 'hover:text-accent'
            className="md:hidden p-2 text-white transition-colors hover:text-accent cursor-pointer"
            aria-label="Alternar menú"
          >
            {isOpen ? <HiX size={32} /> : <HiOutlineMenu size={32} />}
          </button>
        </div>
      </div>

      {/* === MOBILE MENU DRAWER === */}
      <div
        // CAMBIO: Reemplazado style={{ backgroundColor }} por 'bg-primary'
        className={`absolute left-0 w-full border-b border-white/10 shadow-xl transition-all duration-500 ease-in-out md:hidden bg-primary ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              // CAMBIO: 'hover:text-accent' y 'font-serif'
              className="flex items-center gap-3 text-xl font-serif text-white transition-colors hover:text-accent"
            >
              {/* CAMBIO: style={{ color }} por 'text-accent' */}
              <span className="text-xs text-accent">◆</span>
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            onClick={() => setIsOpen(false)}
            // CAMBIO: Clases limpias usando el tema
            className="mt-4 block w-full text-center py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:brightness-110 rounded-sm bg-accent text-primary font-sans"
          >
            Consulta
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
