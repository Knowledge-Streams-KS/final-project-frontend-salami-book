import React from "react";

const MatchesCard = ({matches, teams, fields}) => {
  return (
    <>
      <div className="rounded-md bg-[#232727] p-6">
        <div>
          <div className="flex justify-start text-[#08723e]">{teams.find(team => team.id === matches.team1)?.name}</div>
          <div className="flex justify-center">vs</div>
          <div className="flex justify-end text-[#08723e]">{teams.find(team => team.id === matches.team2)?.name}</div>
        </div>
        <div className="my-2 border-t-2 border-black"></div>
        <div>
          <div>Field Name: {fields.find(field => field.id === matches.Booking.FieldId)?.name}</div>
          <div>Match day: {matches.Booking.date}</div>
          <div>Match Time: {matches.Booking.time}</div>
        </div>
        {matches.completed ? (
          <div className="py-2 text-center text-[#08723e] space-y-1">
            {matches.team1Score > matches.team2Score ? <h1>Team 1 Won</h1> :
            matches.team2Score > matches.team1Score ? <h1>Team 2 Won</h1> :
            <h1>Draw</h1>}
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
