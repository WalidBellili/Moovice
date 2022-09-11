import { useEffect, useState } from "react";
import Card from "../components/Card";

const Favorites = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchFavoriteIds();
    // eslint-disable-next-line
  }, []);

  const fetchFavoriteIds = async () => {
    const stringifiedFavoritesIds = localStorage.getItem("favoriteIds");
    const favoriteIds = JSON.parse(stringifiedFavoritesIds);

    if (favoriteIds) {
      const boxOfPromises = favoriteIds.map((id) => {
        return fetchMovieById(id);
      });
      const response = await Promise.all(boxOfPromises);
      setMovies(response);
    }
  };
  // console.log(movies);

  const fetchMovieById = async (id) => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fea42b1e836ac59816b8332e564dbb41`
    );
    const response = await request.json();
    return response;
  };

  return (
    <>
      <h1>Favorites Movies</h1>
      <section className="favorite-container">
        {movies.length === 0 && (
          <article className="empty-alert">
            <p>There is no favorites</p>
          </article>
        )}
        {movies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </section>
    </>
  );
};

export default Favorites;
