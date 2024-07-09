
const PlayerCard = (props) => {

  return (
    <>
      <div
        className={
          props.styling
            ? props.styling
            : "flex space-x-6 rounded-md bg-[#232727] px-8 py-2"
        }
      >
        <h1>{props.str}</h1>
        <h1>{props.name}</h1>
        <h1>{props.team}</h1>
        <h1>{props.goals}</h1>
        <h1>{props.assists}</h1>
        <h1>{props.position}</h1>
        <h1>{props.motm}</h1>
      </div>
    </>
  );
};

export default PlayerCard;
