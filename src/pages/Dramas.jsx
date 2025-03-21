import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const Dramas = () => {
  const [dramas, setDramas] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=18`) // Drama Genre
      .then((res) => res.json())
      .then((data) => setDramas(data.results));
  }, []);

  return (
    <div className="p-10 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-5 text-center">Popular Dramas 🎭</h1>

      {/* Dramas Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dramas.map((drama) => (
          <MovieCard key={drama.id} movie={drama} />
        ))}
      </div>
    </div>
  );
};

export default Dramas;
