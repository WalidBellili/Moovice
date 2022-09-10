import { useEffect, useState } from "react";
import Card from "../components/Card";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const request = await fetch(`
    https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`);
    const response = await request.json();
    setMovies(response.results);
  };
  // console.log(movies);
  return (
    <section className="card-container">
      {movies.map((movie) => {
        return <Card movie={movie} />;
      })}
    </section>
  );
};

export default Popular;
