import { useEffect, useState } from "react";

const Home = () => {
  const [topRated, setTopRated] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    gatheringFetchMovie();
  }, []);

  // ***********************************
  const fetchMoviesAllCategories = async (url) => {
    const request = await fetch(url);
    const response = await request.json();
    return response;
  };
  // ***********************************

  const gatheringFetchMovie = async () => {
    const topRated = await fetchMoviesAllCategories(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=9f6028c7eca26f5709c3882ffd943beb`
    );
    setTopRated(topRated.results);
    const nowPlaying = await fetchMoviesAllCategories(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=9f6028c7eca26f5709c3882ffd943beb`
    );
    setNowPlayingMovies(nowPlaying.results);
    const upComing = await fetchMoviesAllCategories(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=9f6028c7eca26f5709c3882ffd943beb`
    );
    setUpcomingMovies(upComing.results);
  };
  //   // ***********************************  //   //

  return (
    <>
      <section>
        {topRated.map((topRatedMovie) => {
          return (
            <article className="card-container-favorite">
              <div className="card-favorite">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${topRatedMovie.poster_path}`}
                  alt={topRatedMovie.title}
                />
              </div>
              <div className="description-favorite">
                <p>{topRatedMovie.title}</p>
                <p>{topRatedMovie.release_date}</p>
              </div>
            </article>
          );
        })}
      </section>
      <section>
        {nowPlayingMovies.map((nowPlayingMovie) => {
          return (
            <article className="card-container-favorite">
              <div className="card-favorite">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${nowPlayingMovie.poster_path}`}
                  alt={nowPlayingMovie.title}
                />
              </div>
              <div className="description-favorite">
                <p>{nowPlayingMovie.title}</p>
                <p>{nowPlayingMovie.release_date}</p>
              </div>
            </article>
          );
        })}
      </section>
      <section>
        {upcomingMovies.map((upcomingMovie) => {
          return (
            <article className="card-container-favorite">
              <div className="card-favorite">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${upcomingMovie.poster_path}`}
                  alt={upcomingMovie.title}
                />
              </div>
              <div className="description-favorite">
                <p>{upcomingMovie.title}</p>
                <p>{upcomingMovie.release_date}</p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Home;
