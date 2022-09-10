import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchMovieById();
  }, []);

  const fetchMovieById = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=fea42b1e836ac59816b8332e564dbb41`
    );
    const response = await request.json();
    setMovie(response);
  };
  console.log(movie);
  return (
    <section className="single-card-container">
      <article className="single-card">
        <div className="single-img-container">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="singledescription">
          <p>{movie.title}</p>
          <p>{movie.overview}</p>
          <p>{movie.release_date}</p>
        </div>
      </article>
    </section>
  );
};

export default Movie;
