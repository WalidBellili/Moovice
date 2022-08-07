import React from "react";

const Cards = (props) => {
  // console.log(props);

  return (
    <section className="card m-2" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.image} alt="film posters" />
      <article>
        <p className="title">{props.title}</p>
        <p className="year">{props.year}</p>
        <p className="description">{props.description}</p>
        <button onClick={props.handleClickFavorites}>Favoris</button>
      </article>
    </section>
  );
};

export default Cards;
