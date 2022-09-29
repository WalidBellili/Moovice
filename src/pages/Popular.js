import { useEffect, useState } from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import H1 from "../components/H1";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`
    );
    const request = await response.json();
    setMovies(request.results);
  };
  //   console.log(movies);
  return (
    <Container>
      <H1 text="Popular movies" />
      <section className="container">
        {movies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </section>
    </Container>
  );
};

export default Popular;
