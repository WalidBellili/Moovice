import moment from "moment";
import { useEffect, useState } from "react";

const Weekly = () => {
  const [weeklyMovies, setWeeklyMovies] = useState([]);

  useEffect(() => {
    fetchWeeklyMovies();
  }, []);

  const fetchWeeklyMovies = async () => {
    const TODAY = moment().format("YYYY-MM-DD");
    const LAST_WEEK = moment().subtract(7, "days").format("YYYY-MM-DD");
    const request = await fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=9f6028c7eca26f5709c3882ffd943beb`
    );
    const response = await request.json();
    setWeeklyMovies(response);
  };
  console.log(weeklyMovies);
  return <div></div>;
};

export default Weekly;
