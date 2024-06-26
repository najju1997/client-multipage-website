import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Booking from './pages/Booking';
import Navbar from './components/Header'
import './index.css'
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
