import { useEffect, useState } from "react";
import Card from "../components/Card";

import "../App.css";

const Home = () => {
  // const [latestMovie, setLatestMovie] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    setMovies();
    // eslint-disable-next-line
  }, []);

  const fetchMovies = async (url) => {
    const request = await fetch(url);
    const response = await request.json();
    return response;
  };

  const setMovies = async () => {
    const topRated = await fetchMovies(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=fea42b1e836ac59816b8332e564dbb41`
    );
    setTopRatedMovies(topRated.results);
    console.log(topRatedMovies);

    const nowPlaying = await fetchMovies(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=fea42b1e836ac59816b8332e564dbb41`
    );
    setNowPlayingMovies(nowPlaying.results);

    const upcoming = await fetchMovies(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=fea42b1e836ac59816b8332e564dbb41`
    );
    setUpcomingMovies(upcoming.results);

    // const latest = await fetchMovies(
    //   `https://api.themoviedb.org/3/movie/latest?api_key=fea42b1e836ac59816b8332e564dbb41`
    // );
    // setLatestMovie(latest);
  };

  return (
    <>
      <h1>Home</h1>
      <main>
        <h2>Top Rated</h2>
        <section className="container">
          {topRatedMovies.map((movie) => {
            return <Card movie={movie} />;
          })}
        </section>
      </main>
      <main>
        <h2>nowPlayingMovies</h2>
        <section className="container">
          {nowPlayingMovies.map((movie) => {
            return <Card movie={movie} />;
          })}
        </section>
      </main>
      <main>
        <h2>upcomingMovies</h2>
        <section className="container">
          {upcomingMovies.map((movie) => {
            return <Card movie={movie} />;
          })}
        </section>
      </main>
    </>
  );
};

export default Home;
