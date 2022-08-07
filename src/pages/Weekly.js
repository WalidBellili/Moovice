import React, { useEffect, useState } from "react";
import moment from "moment";
import Cards from "../components/Cards";
// console.log(moment.now());

const Weekly = () => {
  const [weekly, setWeekly] = useState([]);
  useEffect(() => {
    fetchData();
  });

  const today = moment().format("YYYY-MM-DD");
  const lastWeek = moment().subtract(7, "d").format("YYYY-MM-DD");

  const fetchData = async () => {
    const request = await fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=9f6028c7eca26f5709c3882ffd943beb`
    );
    const response = await request.json();
    setWeekly(response.results);
  };
  return (
    <div className="row justify-content-center">
      {weekly.map((movie) => (
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
  );
};

export default Weekly;
