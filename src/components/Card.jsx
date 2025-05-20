// Dans Card.jsx
import { Link } from "react-router-dom";
import { Star, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Card = ({ movie, onRemove }) => {
  const { id, title, release_date, vote_average, poster_path } = movie;
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFav(stored.some((m) => m.id === id));
  }, [id]);

  const toggleFavorite = () => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = stored.find((m) => m.id === id);
    let updated;

    if (exists) {
      updated = stored.filter((m) => m.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFav(false);
      toast("Retiré des favoris ❌");
      if (onRemove) onRemove(id);
    } else {
      updated = [...stored, movie];
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFav(true);
      toast.success("Ajouté aux favoris ❤️");
    }
  };

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden transition hover:scale-105 hover:shadow-lg relative">
      <Link to={`/movie/${id}`}>
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-[400px] object-cover"
        />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 truncate">{title}</h2>
        <p className="text-sm text-gray-500">{release_date}</p>
        <div className="flex items-center gap-1 mt-2">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium text-gray-700">
            {vote_average}
          </span>
        </div>
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-1 bg-white/90 rounded-full"
          title={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
          <Heart
            className={`w-5 h-5 transition ${
              isFav ? "text-red-500 fill-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>
    </article>
  );
};

export default Card;
