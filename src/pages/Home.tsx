import Contact from '../components/Contact';
import Hero from '../components/Hero';
import LocationMap from '../components/LocationMap';
import PracticeAreas from '../components/PractiseAreas';
import WhyUs from '../components/WhyUs';

const Home = () => {
  return (
    <main>
      <Hero />
      <PracticeAreas />
      <WhyUs />
      <Contact />
      <LocationMap />
    </main>
  );
};

export default Home;
