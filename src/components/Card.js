const Card = ({ movie }) => {
  const { title, release_date, overview, id, poster_path } = movie;

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
      console.log(favoriteIds);
    }
  };

  return (
    <article className="cardContainer">
      <div className="card">
        <div className="mainContainer">
          <div className="theCard">
            <div className="theFront">
              <img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={title}
                className=""
              />
            </div>

            <div className="theBack">
              <p>{release_date}</p>
              <p>{overview}</p>
            </div>
          </div>
        </div>

        <div className="btn">
          <button onClick={handleFavoriteClick}>Add to Favorites</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </article>
  );
};

export default Card;
