import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=fr-FR`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Film:", data);
        setMovie(data);
      })
      .catch((err) => {
        console.error("Erreur lors du fetch du film :", err);
        setMovie(null);
      });
  }, [id]);

  if (!movie) {
    return (
      <main className="p-8 bg-gray-900 text-white min-h-screen">
        <p className="text-gray-400">Chargement du film...</p>
      </main>
    );
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <main className="bg-gray-900 text-white min-h-screen px-4 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-full md:w-1/3 rounded shadow-md"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-sm text-gray-400 mb-2">{movie.release_date}</p>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-lg font-medium">{movie.vote_average}</span>
          </div>
          <p className="text-gray-200 leading-relaxed">{movie.overview}</p>
        </div>
      </div>
    </main>
  );
};

export default Movie;
