import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../utils/tmdbApi";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies);
    };

    getMovies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Trending Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 text-white p-2 rounded-lg">
            <img
              className="rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="text-center mt-2 text-sm">{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
