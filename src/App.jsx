import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import MoviesList from './components/MoviesList'
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;