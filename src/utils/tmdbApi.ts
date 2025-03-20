const BASE_URL = "https://api.themoviedb.org/3"; // TMDB کا Base URL
const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // .env سے API Key لے رہے ہیں

// 🔹 Trending Movies Fetch کرنے کا Function
export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results; // Movies کا ڈیٹا return کریں
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};

// 🔹 Popular Movies Fetch کرنے کا Function
export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

// 🔹 Movie Details (ID کے ذریعے)
export const fetchMovieDetails = async (movieId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

// 🔹 Movie Search (User Query سے)
export const searchMovies = async (query: string) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};
