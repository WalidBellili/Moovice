import { useEffect, useState } from "react";
import Card from "../components/Card";

const Weekly = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Weekly:", data.results);
        setMovies(data.results || []);
      })
      .catch((error) => {
        console.error("Erreur lors du fetch des tendances :", error);
        setMovies([]);
      });
  }, []);

  return (
    <main className="px-4 py-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Tendances de la Semaine</h1>

      {movies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">Aucune tendance trouvée.</p>
      )}
    </main>
  );
};

export default Weekly;
