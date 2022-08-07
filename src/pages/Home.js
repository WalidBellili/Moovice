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
  // console.log(topRated);

  const fetchDatalastestMovies = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/latest?api_key=9f6028c7eca26f5709c3882ffd943beb&language=en-US`
    );
    const response = await request.json();
    setlastestMovies(response);
  };
  console.log(lastestMovies);

  const fetchDataNowPlaying = async () => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=1068f48961417d98e5c5673164bb2d37&page=1`
    );
    const response = await request.json();
    setNowPlaying(response.results);
  };
  // console.log(nowPlaying);

  const fetchDataUpComing = async () => {
    const request = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=upcoming.desc&api_key=9f6028c7eca26f5709c3882ffd943beb"
    );
    const response = await request.json();
    setUpComing(response.results);
  };
  console.log(upComing);

  return (
    <main>
      <section>
        {topRated.map((movie) => {
          return (
            <div>
              <article>
                <h2>Top rated</h2>
                <Cards
                  key={movie.id}
                  image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  title={movie.original_title}
                  year={movie.release_date}
                  description={movie.overview}
                  id={movie.id}
                />
              </article>
            </div>
          );
        })}
      </section>
      {/*  */}
      <section>
        <article>
          <h2>Lastest</h2>
          <Cards
            image={`https://image.tmdb.org/t/p/w300/${lastestMovies.poster_path}`}
            title={lastestMovies.original_title}
            year={lastestMovies.release_date}
            description={lastestMovies.overview}
            id={lastestMovies.id}
          />
        </article>
      </section>
      {/*  */}
      <section>
        {nowPlaying.map((movie) => {
          return (
            <div>
              <article className="top-rated">
                <h2>Now Playing</h2>
                <Cards
                  key={movie.id}
                  image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  title={movie.original_title}
                  year={movie.release_date}
                  description={movie.overview}
                  id={movie.id}
                />
              </article>
            </div>
          );
        })}
      </section>
      {/*  */}
      <section className="movie-app">
        {upComing.map((movie) => {
          return (
            <div className="view">
              <article className="top-rated">
                <h2>Up Coming</h2>
                <Cards
                  key={movie.id}
                  image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  title={movie.original_title}
                  year={movie.release_date}
                  description={movie.overview}
                  id={movie.id}
                />
              </article>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
