const Card = ({ movie }) => {
  console.log(movie);
  return (
    <article className="card">
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt=""
      />
      <p>{movie.title}</p>
      <br />

      <div className="scroll">
        <p>Release date : {movie.release_date}</p>
        <p>Overview : {movie.overview}</p>
      </div>
      <button>Favorites</button>
    </article>
  );
};

export default Card;
