const CastingCard = (props) => {
  return (
    <div>
      <div className="min-card-actor">
        <img
          src={`https://image.tmdb.org/t/p/w300/${props.actor.profile_path}`}
        />
        <h1>{`${props.actor.name} (${props.actor.character})`}</h1>
      </div>
    </div>
  );
};

export default CastingCard;
