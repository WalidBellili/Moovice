import moment from "moment/moment";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card";

const Weekly = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);
  const formatDate = "YYYY-MM-DD";
  const TODAY = moment().format(formatDate);
  //   console.log(today);
  const LAST_WEEK = moment().subtract(7, "days").format(formatDate);
  //   console.log(lastWeek);

  const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${process.env.REACT_APP_API_KEY}`;

  //   console.log(url);

  const fetchMovies = async () => {
    const request = await fetch(`${url}`);
    const response = await request.json(request);
    setMovies(response.results);
  };
  console.log(movies);

  return (
    <main>
      <section className="container">
        {movies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </section>
    </main>
  );
};

export default Weekly;
