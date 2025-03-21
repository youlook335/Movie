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
    if (search.trim() === "") return; // Empty search prevent
    fetch(`${BASE_URL}/search/movie?query=${search}&api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <div className="p-10 bg-gray-900 text-white">
      {/* Search Input */}
      <div className="flex items-center w-full max-w-lg bg-gray-800 rounded-full shadow-md p-2">
        <input
          className="flex-grow px-4 py-3 text-white bg-transparent border-none focus:outline-none placeholder-gray-400"
          type="text"
          placeholder="Search Movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchMovies()} // Enter Key Event
        />
        <button
          onClick={searchMovies}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-full shadow-md text-white font-semibold"
        > Search
        </button>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-5 gap-4 mt-5">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="mt-5 flex justify-center gap-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 rounded-lg bg-gray-700 text-white transition-all duration-300 hover:bg-gray-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 rounded-lg bg-gray-700 text-white transition-all duration-300 hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
