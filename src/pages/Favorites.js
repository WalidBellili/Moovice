import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    favoritesMovies();
    // eslint-disable-next-line
  }, []);

  const fetchData = async (id) => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9f6028c7eca26f5709c3882ffd943beb`
    );
    const response = await request.json();
    return response;
  };

  const favoritesMovies = async () => {
    const ids = localStorage.getItem("favoriteIds");
    const parsing = JSON.parse(ids);

    const promises = parsing.map((id) => {
      return fetchData(id);
      // console.log(id);
    });

    const promiseAll = await Promise.all(promises);
    setMovies(promiseAll);
  };

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div>
            <Cards />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
