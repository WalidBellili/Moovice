const CastingCard = (props) => {
  return (
    <div className="paramsInfo">
      <div className="min-card-actor">
        <img
          src={`https://image.tmdb.org/t/p/w300/${props.actor.profile_path}`}
          className="actor"
        />
        <h4>Personnage : {props.actor.character}</h4>
        <h4>Name : {props.actor.original_name}</h4>
      </div>
    </div>
  );
};

export default CastingCard;
