import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const Home = () => {
  const [topRated, setTopRated] = useState([]);
  const [lastestMovies, setlastestMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upComing, setUpComing] = useState([]);
  useEffect(() => {
    fetchDataTopRated();
    fetchDatalastestMovies();
    fetchDataNowPlaying();
    fetchDataUpComing();
  }, []);

  const fetchDataTopRated = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=9f6028c7eca26f5709c3882ffd943beb&page=1`
    );
    const response = await request.json();
    setTopRated(response.results);
  };

  const fetchDatalastestMovies = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/latest?api_key=9f6028c7eca26f5709c3882ffd943beb&language=en-US`
    );
    const response = await request.json();
    setlastestMovies(response);
  };
  // console.log(lastestMovies);

  const fetchDataNowPlaying = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=9f6028c7eca26f5709c3882ffd943beb&page=1`
    );
    const response = await request.json();
    setNowPlaying(response.results);
  };
  // console.log(nowPlaying);

  const fetchDataUpComing = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=9f6028c7eca26f5709c3882ffd943beb&page=1`
    );
    const response = await request.json();
    setUpComing(response.results);
  };
  // console.log(upComing);

  return (
    <main className="home">
      <article className="top-rated">
        <h2 className="text-light m-5">Top rated</h2>
        <div className="row justify-content-center">
          {topRated.map((movie) => (
            <Cards
              key={movie.id}
              image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              title={movie.original_title}
              year={movie.release_date}
              description={movie.overview}
              id={movie.id}
            />
          ))}
        </div>
      </article>

      {/*  */}
      <section className="second-container-home">
        <h2 className="text-light m-5">Lastest</h2>
        <Cards
          image={`https://image.tmdb.org/t/p/w300/${lastestMovies.poster_path}`}
          title={lastestMovies.original_title}
          year={lastestMovies.release_date}
          description={lastestMovies.overview}
          id={lastestMovies.id}
        />
      </section>
      {/*  */}
      <article>
        <h2 className="text-light m-5">Now Playing</h2>
        <div className="row  justify-content-center">
          {nowPlaying.map((movie) => (
            <Cards
              key={movie.id}
              image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              title={movie.original_title}
              year={movie.release_date}
              description={movie.overview}
              id={movie.id}
            />
          ))}
        </div>
      </article>
      {/*  */}
    </main>
  );
};

export default Home;
