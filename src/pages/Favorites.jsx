import { useEffect, useState } from "react";
import Card from "../components/Card";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchFavoriteMovies();
    // eslint-disable-next-line
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

  const fetchMovieById = async (id) => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const response = await request.json();
    return response;
  };
  console.log(movies);

  return (
    <main>
      <section className="container">
        {movies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </section>
    </main>
  );
};

export default Favorites;
