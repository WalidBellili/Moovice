const Card = ({ movie }) => {
  const { title, poster_path, release_date, overview } = movie;
  return (
    <article className="card">
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
      <p>{movie.title}</p>
      <br />

      <div className="scroll">
        <p>Release date : {release_date}</p>
        <p>Overview : {overview}</p>
      </div>
      <button>Favorites</button>
    </article>
  );
};

export default Card;
