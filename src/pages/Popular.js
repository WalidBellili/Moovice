import { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Popular = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9f6028c7eca26f5709c3882ffd943beb"
    );
    const response = await request.json();
    setMovies(response.results);
  };
  console.log(movies);
  const handleClickFavorites = (id) => {
    if (localStorage.favoriteIds === undefined) {
      const array = [];
      // const array = localStorage.getItem(id);
      array.push(id);
      const stringify = JSON.stringify(array);

      localStorage.setItem("favoriteIds", stringify);
    } else {
      const localStorageIds = localStorage.getItem("favoriteIds");
      const favoritesIds = JSON.parse(localStorageIds);
      const isInclude = favoritesIds.includes(id);
      if (!isInclude) {
        favoritesIds.push(id);
        const stringify = JSON.stringify(favoritesIds);
        localStorage.setItem("favoriteIds", stringify);
      }
    }

    // const favoritesIds = localStorage;
    // console.log(favoritesIds);
    //   const ids = movies.id;
    //   localStorage.setItem("id", ids);
  };

  return (
    <div className="row justify-content-center">
      {movies.map((movie) => (
        <Cards
          key={movie.id}
          image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          title={movie.original_title}
          year={movie.release_date}
          description={movie.overview}
          id={movie.id}
          handleClickFavorites={() => handleClickFavorites(movie.id)}
        />
      ))}
    </div>
  );
};

export default Popular;
