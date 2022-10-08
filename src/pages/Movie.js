import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CastingCard from "../components/CastingCard";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [cast, setCast] = useState([]);
  const { title, release_date, overview, poster_path } = movies;

  useEffect(() => {
    fetchMovieById();
    fetchCast();
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
  //   console.log(movies);
  const fetchCast = async () => {
    const requestCast = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=1068f48961417d98e5c5673164bb2d37&language=en-US`
    );
    const responseCast = await requestCast.json();
    setCast(responseCast.cast);
  };
  console.log(cast);

  return (
    <section className="backGroundImage">
      <article className="left">
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
      </article>

      <article className="right">
        {!cast ? (
          <p>Loading..</p>
        ) : (
          cast.map((actor) => {
            return <CastingCard actor={actor} />;
          })
        )}
      </article>
    </section>
  );
};

export default Movie;
