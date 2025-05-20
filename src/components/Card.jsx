// src/components/Card.jsx

import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const Card = ({ movie }) => {
  const { id, title, release_date, vote_average, poster_path } = movie;

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <Link to={`/movie/${id}`} className="block">
      <article className="bg-white rounded-xl shadow-md overflow-hidden transition hover:scale-105 hover:shadow-lg">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-[400px] object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 truncate">{title}</h2>
          <p className="text-sm text-gray-500">{release_date}</p>
          <div className="flex items-center gap-1 mt-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">{vote_average}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Card;
