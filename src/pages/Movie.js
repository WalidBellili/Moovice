import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchMovieById();
  }, []);

  const fetchMovieById = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=fea42b1e836ac59816b8332e564dbb41`
    );
    const response = await request.json();
    setMovies(response);
  };
  console.log(movies);
  return <div></div>;
};

export default Movie;
