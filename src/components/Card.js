import H3 from "./H3";
import ImgDb from "./ImgDb";

const Card = ({ movie }) => {
  const { title, release_date, overview, id } = movie;

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
    <article className="card">
      <ImgDb movie={movie} />
      <br />

      <H3 text={title} />
      <div className="description">
        <p>{release_date}</p>
        <p>{overview}</p>
      </div>
      <div className="btn">
        <button onClick={handleFavoriteClick}>Add to Favorites</button>
        <button onClick={handleRemove}>Remove from favorites</button>
      </div>
    </article>
  );
};

export default Card;
