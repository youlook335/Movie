import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-5 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold">{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="my-4" />
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
    </div>
  );
};

export default MovieDetails;
