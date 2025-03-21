import { Route, Routes } from 'react-router-dom'; // ✅ Router کو import نہ کرو
import './App.css';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Footer from './components/Footer';
import Dramas from './pages/Dramas';
import Navbar from './components/Navbar';
import DramaDetails from './pages/DramaDetails';
import Movies from './pages/Movies';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/movie/:id" element={<MovieDetails />} /> 
        <Route path="/Movies" element={<Movies />} /> 
        <Route path="/drama/:id" element={<DramaDetails />} />
        <Route path="/Drama" element={<Dramas/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;