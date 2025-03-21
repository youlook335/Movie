import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`) // Action Movies
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="p-10 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-5 text-center">Popular Movies 🎬</h1>

      {/* Movies Grid */}
      <div className="grid grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
