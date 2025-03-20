import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [page]);

  const searchMovies = () => {
    fetch(`${BASE_URL}/search/movie?query=${search}&api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <div className="p-5 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">🎬 Movie App</h1>
      <input 
        className="p-2 w-1/2 text-black" 
        type="text" 
        placeholder="Search Movies..."
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchMovies} className="ml-2 bg-blue-500 px-4 py-2">Search</button>
      
      <div className="grid grid-cols-5 gap-4 mt-5">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>

      <div className="mt-5">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="mr-3 bg-gray-700 p-2">Prev</button>
        <button onClick={() => setPage(page + 1)} className="bg-gray-700 p-2">Next</button>
      </div>
    </div>
  );
};

export default Home;