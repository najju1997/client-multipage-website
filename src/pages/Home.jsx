import Accredition from '../components/Accredition';
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Map from '../components/Map';
import Reviews from '../components/Reviews.jsx';
import Services from '../components/Services.jsx';
import Who from '../components/Who';

const Home = () => {
  return (
    <>
      <Hero />
      <Who />
      <Services />
      <Accredition />
      <Reviews />
      <Map />
    </>
    
  );
};

export default Home;
