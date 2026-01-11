import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer'; // <--- Importar Footer
import Home from './pages/Home';
import About from './pages/About';
import WhatsAppButton from './components/WhatsAppButton';
import Areas from './pages/Areas';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Futuras rutas: */}
        <Route path="/nosotros" element={<About />} />
        <Route path="/areas" element={<Areas />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
};

export default App;
