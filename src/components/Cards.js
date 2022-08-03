import React from "react";

const Cards = (props) => {
  // console.log(props);

  return (
    <div>
      <img src={props.image} alt="" />
      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.description}</p>
      <button onClick={props.handleClickFavorites}>Favoris</button>
    </div>
  );
};

export default Cards;
