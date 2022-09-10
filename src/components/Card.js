import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  // console.log(movie.id);
  const shortDescription = movie.overview.substring(0, 50);
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
    </article>
  );
};

export default Card;
