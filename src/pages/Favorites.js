import { useEffect, useState } from "react";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchFavoriteMovies();
  }, []);

  const fetchFavoriteMovies = async () => {
    const stringifiedFavoriteIds = localStorage.getItem("favoriteIds");
    const favoriteIds = JSON.parse(stringifiedFavoriteIds);

    if (favoriteIds) {
      const promises = favoriteIds.map((id) => {
        return fetchMovieById(id);
      });

      const response = await Promise.all(promises);
      setMovies(response);
    }
  };

  const fetchMovieById = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/{ID}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const response = await request.json();
    return response;
  };

  return <></>;
};

export default Favorites;
