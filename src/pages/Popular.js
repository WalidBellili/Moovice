import { useEffect, useState } from "react";

import Card from "../components/Card";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const request = await fetch(`
    https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9f6028c7eca26f5709c3882ffd943beb`);
    const response = await request.json();
    setMovies(response.results);
  };

  return (
    <main className="fullContainerCard">
      <section className="card-container">
        {movies.map((movie) => (
          <Card movie={movie} />
        ))}
      </section>
    </main>
  );
};

export default Popular;
