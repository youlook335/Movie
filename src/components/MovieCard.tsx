const MovieCard = ({ movie }) => {
    return (
      <div className="bg-gray-800 rounded-lg p-2">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-lg" />
        <p className="text-center mt-2">{movie.title}</p>
      </div>
    );
  };
  
  export default MovieCard;