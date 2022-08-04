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
      "https://api.themoviedb.org/3/discover/movie?sort_by=top_rated.desc&api_key=9f6028c7eca26f5709c3882ffd943beb"
    );
    const response = await request.json();
    setTopRated(response.results);
  };
  // console.log(topRated);

  const fetchDatalastestMovies = async () => {
    const request = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=latest.desc&api_key=9f6028c7eca26f5709c3882ffd943beb"
    );
    const response = await request.json();
    setlastestMovies(response.results);
  };
  // console.log(lastestMovies);

  const fetchDataNowPlaying = async () => {
    const request = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=now_playing.desc&api_key=9f6028c7eca26f5709c3882ffd943beb"
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
    <div>
      {topRated.map((movie) => {
        return (
          <div>
            {/* <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.original_title}
            /> */}
            <section>
              <h2>Top rated</h2>
              <Cards
                key={movie.id}
                image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                title={movie.original_title}
                year={movie.release_date}
                description={movie.overview}
                id={movie.id}
              />
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

// {
//   lastestMovies.map((movie) => {
//     <section>
//       <h2>Lastest Movie</h2>
//       <Cards
//         key={movie.id}
//         image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
//         title={movie.original_title}
//         year={movie.release_date}
//         description={movie.overview}
//         id={movie.id}
//       />
//     </section>;
//   });
// }
// {
//   /*  */
// }
// <section>
//   <h2>Now Playing</h2>
//   <Cards
//     key={movie.id}
//     image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
//     title={movie.original_title}
//     year={movie.release_date}
//     description={movie.overview}
//     id={movie.id}
//   />
// </section>;
// {
//   /*  */
// }
// <section>
//   <h2>Up Coming</h2>
//   <Cards
//     key={movie.id}
//     image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
//     title={movie.original_title}
//     year={movie.release_date}
//     description={movie.overview}
//     id={movie.id}
//   />
// </section>;
