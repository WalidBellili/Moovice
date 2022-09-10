import { useEffect, useState } from "react";

const Favorites = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchFavoriteIds();
  }, []);

  const fetchFavoriteIds = async () => {
    const stringifiedFavoritesIds = localStorage.getItem("favoriteIds");
    const favoriteIds = JSON.parse(stringifiedFavoritesIds);

    const boxOfPromises = favoriteIds.map((id) => {
      return fetchMovieById(id);
    });

    const response = await Promise.all(boxOfPromises);
    setMovies(response);
  };
  console.log(movies);

  const fetchMovieById = async (id) => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fea42b1e836ac59816b8332e564dbb41`
    );
    const response = await request.json();
    return response;
  };

  return <div></div>;
};

export default Favorites;
