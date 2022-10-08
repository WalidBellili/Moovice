import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const { title, release_date, overview, poster_path } = movies;

  useEffect(() => {
    fetchMovieById();
    // eslint-disable-next-line
  }, []);
  const { id } = useParams();
  console.log(id);

  const fetchMovieById = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const response = await request.json();
    setMovies(response);
  };
  console.log(movies);

  return (
    <section className="backGroundImage">
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt=""
        className="img"
      />

      <div className="postionTextParams">
        <p>{title}</p>
        <br />
        <p>{release_date}</p>
        <br />
        <p>{overview}</p>
      </div>
    </section>
  );
};

export default Movie;
