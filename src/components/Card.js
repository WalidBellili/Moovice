import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const shortDescription = movie.overview.substring(0, 50);

  const handleFavoriteClick = () => {
    let stringifiedFavoriteIds = localStorage.getItem("favoriteIds");
    // console.log(stringifiedFavoriteIds);

    let favoriteIds = [];

    if (stringifiedFavoriteIds) {
      favoriteIds = JSON.parse(stringifiedFavoriteIds);
    }
    if (!favoriteIds.includes(movie.id)) {
      favoriteIds.push(movie.id);
      stringifiedFavoriteIds = JSON.stringify(favoriteIds);
      localStorage.setItem("favoriteIds", stringifiedFavoriteIds);
    }
    console.log(favoriteIds);
  };
  return (
    <article className="card">
      <Link to={`/movie/${movie.id}`}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="description">
          <p>{movie.title}</p>
          <p>{shortDescription}</p>
          <p>{movie.release_date}</p>
        </div>
      </Link>
      <button onClick={handleFavoriteClick}>Add to favorites</button>
    </article>
  );
};

export default Card;
