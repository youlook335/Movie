import { Route, Routes } from 'react-router-dom'; // ✅ Router کو import نہ کرو
import './App.css';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
