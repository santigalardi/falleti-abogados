import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// === COMPONENTES GLOBALES (Carga inmediata) ===
// Estos se quedan estáticos porque se ven siempre
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
// Importamos el loader que creamos antes
import PageLoader from './components/PageLoader';

// === CODE SPLITTING (Lazy Loading) ===
// Las páginas ahora se importan dinámicamente.
// Vite separará cada una en un archivo .js distinto (chunk).
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Areas = lazy(() => import('./pages/Areas'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));

const App = () => {
  return (
    <BrowserRouter>
      {/* Contenedor principal para estructura de página completa (Sticky Footer) */}
      <div className="flex flex-col min-h-screen">
        <NavBar />

        {/* 'flex-grow' hace que el contenido ocupe todo el espacio disponible,
            empujando el Footer hacia abajo */}
        {/* Suspense maneja la espera mientras llega el código de la página */}
        <Suspense fallback={<PageLoader />}>
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/areas" element={<Areas />} />
              <Route path="/privacidad" element={<PrivacyPolicy />} />
              <Route path="/terminos" element={<TermsConditions />} />
            </Routes>
          </main>

          <Footer />
        </Suspense>
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
