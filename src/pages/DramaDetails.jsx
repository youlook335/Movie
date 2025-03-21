import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const DramaDetails = () => {
  const { id } = useParams();
  const [drama, setDrama] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setDrama(data));
  }, [id]);

  if (!drama) return <p>Loading...</p>;

  return (
    <div className="p-10 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 p-5 rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${drama.poster_path}`}
          alt={drama.title}
          className="rounded-lg mb-3"
        />
        <h1 className="text-3xl font-bold">{drama.title}</h1>
        <p className="text-gray-400 mt-2">{drama.overview}</p>
      </div>
    </div>
  );
};

export default DramaDetails;
