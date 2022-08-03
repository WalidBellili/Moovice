import { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Popular = () => {
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
  return (
    <div>
      {movies.map((movie) => {
        return (
          <Cards
            key={movie.id}
            image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            title={movie.original_title}
            year={movie.release_date}
            description={movie.overview}
          />
        );
      })}
    </div>
  );
};

export default Popular;
