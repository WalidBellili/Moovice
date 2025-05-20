// src/pages/Favorites.jsx
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const handleRemove = (id) => {
    const updated = favorites.filter((m) => m.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <main className="px-4 py-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Mes Films Favoris</h1>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {favorites.map((movie) => (
            <Card key={movie.id} movie={movie} onRemove={handleRemove} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">Aucun favori pour le moment.</p>
      )}
    </main>
  );
};

export default Favorites;
