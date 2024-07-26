import React from "react";

const MatchesCard = ({ matches, teams, fields }) => {
  return (
    <>
      <div className="rounded-md bg-[#232727] p-6">
        <div>
          <div className="flex justify-start text-[#08723e]">
            {teams.find((team) => team.id === parseInt(matches.team1))?.name}
          </div>
          <div className="flex justify-center">vs</div>
          <div className="flex justify-end text-[#08723e]">
            {teams.find((team) => team.id === parseInt(matches.team2))?.name}
          </div>
        </div>
        <div className="my-2 border-t-2 border-black"></div>
        <div>
          <div>
            Field Name:{" "}
            {fields.find((field) => field.id === parseInt(matches.FieldId))?.name}
          </div>
          <div>Match day: {matches.Bookings[0].date}</div>
          <div>Match Time: {matches.Bookings[0].time}</div>
        </div>
        {matches.completed ? (
          <div className="space-y-1 py-2 text-center text-[#08723e]">
            {matches.team1Score > matches.team2Score ? (
              <h1>{teams.find((team) => team.id === parseInt(matches.team1))?.name} Won</h1>
            ) : matches.team2Score > matches.team1Score ? (
              <h1>{teams.find((team) => team.id === parseInt(matches.team2))?.name} Won</h1>
            ) : (
              <h1>Draw</h1>
            )}
            <h1>
              Score: {matches.team1Score} - {matches.team2Score}
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
