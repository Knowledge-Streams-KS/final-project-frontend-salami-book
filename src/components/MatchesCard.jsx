import React, { useState } from "react";

const MatchesCard = () => {
  const [completed, setCompleted] = useState(true);
  let team1Score = Math.floor(Math.random() * 10);
  let team2Score = Math.floor(Math.random() * 10);
  return (
    <>
      <div className="rounded-md bg-[#232727] p-6">
        <div>
          <div className="flex justify-start text-[#08723e]">Unknown FC</div>
          <div className="flex justify-center">vs</div>
          <div className="flex justify-end text-[#08723e]">Al Mooryat FC</div>
        </div>
        <div className="my-2 border-t-2 border-black"></div>
        <div>
          <div>Field Name: Lords Mega or something</div>
          <div>Match day:</div>
          <div>Match Time:</div>
        </div>
        {completed ? (
          <div className="py-2 text-center text-[#08723e] space-y-1">
            {team1Score > team2Score ? <h1>Team 1 Won</h1> :
            team2Score > team1Score ? <h1>Team 2 Won</h1> :
            <h1>Draw</h1>}
            <h1>
              Score: {team1Score} - {team2Score}
            </h1>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default MatchesCard;
