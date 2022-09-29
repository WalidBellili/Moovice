const Card = ({ movie }) => {
  const { title, poster_path, release_date, overview, id } = movie;

  const handleFavoriteClick = () => {
    let stringifiedFavoriteIds = localStorage.getItem("favoriteIds");

    let favoriteIds = [];

    if (stringifiedFavoriteIds) {
      favoriteIds = JSON.parse(stringifiedFavoriteIds);
    }

    if (!favoriteIds.includes(id)) {
      favoriteIds.push(id);
      stringifiedFavoriteIds = JSON.stringify(favoriteIds);
      localStorage.setItem("favoriteIds", stringifiedFavoriteIds);
    } else {
      alert("This movie is already a favorite movie");
    }
  };

  const handleRemove = () => {
    let stringifiedFavoriteIds = localStorage.getItem("favoriteIds");
    let favoriteIds = [];

    if (stringifiedFavoriteIds) {
      favoriteIds = JSON.parse(stringifiedFavoriteIds);
      localStorage.removeItem("favoriteIds");
    }
  };
  return (
    <article className="card">
      <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
      <p>{title}</p>
      <br />

      <div className="scroll">
        <p>Release date : {release_date}</p>
        <p>Overview : {overview}</p>
      </div>
      <button onClick={handleFavoriteClick}>Favorites</button>
      <button onClick={handleRemove}>Remove</button>
    </article>
  );
};

export default Card;
