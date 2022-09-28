import { useEffect, useState } from "react";

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
  console.log(movies);
  return <div></div>;
};

export default Popular;
