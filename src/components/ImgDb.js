import React from "react";

const ImgDb = ({ movie }) => {
  const { poster_path, title } = movie;
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={title}
        className="imgDb"
      />
    </>
  );
};

export default ImgDb;
