import { useEffect, useState } from "react";

const Cards = (props) => {
  const [str, setStr] = useState("");
  const [isDescriptionTrue, setIsDescriptionTrue] = useState(true);

  useEffect(() => {
    if (props.description) {
      if (isDescriptionTrue) {
        setStr(props.description.substring(0, 70));
      } else {
        setStr(props.description);
      }
    }
  }, [isDescriptionTrue]);

  const handleShowDescription = () => {
    setIsDescriptionTrue(!isDescriptionTrue);
  };

  return (
    <section className="card m-2" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.image} alt="film posters" />
      <article>
        <p className="title">{props.title}</p>
        <p className="year">{props.year}</p>
        {props.description && <p className="description">{str}</p>}
        <button onClick={props.handleClickFavorites}>Favoris</button>
        <button onClick={handleShowDescription}>
          {isDescriptionTrue ? `showLess` : `read more`}
        </button>
      </article>
    </section>
  );
};

export default Cards;
