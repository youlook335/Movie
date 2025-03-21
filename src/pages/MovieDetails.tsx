import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// Mumbai to take a priority scooter to harmand aki mastiva magano Ki jhare take one. 
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videoKey, setVideoKey] = useState(""); // Video Key for YouTube

  useEffect(() => {
    // Fetch Movie Details
    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));

    // Fetch Movie Videos
    fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        // Check if videos exist
        if (data.results.length > 0) {
          const trailer = data.results.find((video) => video.type === "Trailer") || data.results[0];
          setVideoKey(trailer.key);
        }
      });
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-5 bg-gray-900 text-white">
      <h1 className="text-4xl m-2 font-bold">{movie.title}</h1>
      {/* <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="my-4 rounded-lg"
      /> */}
      <p className="mb-4">{movie.overview}</p>

      {/* Video Player */}
      {videoKey ? (
        <VideoPlayer videoUrl={`https://www.youtube.com/watch?v=${videoKey}`} />
      ) : (
        <p className="text-gray-400">No trailer available</p>
      )}

      <p className="mt-4">
        <strong>Release Date:</strong> {movie.release_date}
      </p>
    </div>
  );
};

export default MovieDetails;
