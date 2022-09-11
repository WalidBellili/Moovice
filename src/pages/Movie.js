import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Movie = () => {
  const [movie, setMovie] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetchMovieById();

    // eslint-disable-next-line
  }, [params.id]);

  const fetchMovieById = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=fea42b1e836ac59816b8332e564dbb41`
    );
    const response = await request.json();
    setMovie(response);
  };

  // console.log(movie);

  return (
    <section className="single-card-container">
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
        className="bg-img"
      />
      <article className="description-absolute">
        <p>Title : {movie.title}</p>
        <br />
        <br />
        <p>Overview : {movie.overview}</p>
        <br />
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
          className="front-img"
        />
      </article>
    </section>
  );
};

export default Movie;
