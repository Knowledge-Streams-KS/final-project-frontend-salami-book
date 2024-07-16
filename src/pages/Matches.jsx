import React, { useEffect, useState } from "react";
import MatchesCard from "../components/MatchesCard";
import { useNavigate } from "react-router";
import axiosInstance from "../axios/axios";

const Matches = () => {
  const navigate = useNavigate();
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState([]);
  const [fields, setFields] = useState([]);

  const getMatches = async () => {
    const response = await axiosInstance("/matches");
    setMatches(response.data.matches);
  };

  const getTeams = async () => {
    const response = await axiosInstance("/teams")
    setTeams(response.data.teams)
  }

  const getFields = async () => {
    const response = await axiosInstance("/fields")
    setFields(response.data.fields)
  }

  useEffect(() => {
    getMatches();
    getTeams();
    getFields();
  }, []);

  return (
    <>
      <div className="space-y-4 py-20">
        <div className="flex justify-center pb-12 text-7xl">Matches</div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/creatematch")}
            className="rounded-md bg-[#ecd706] px-4 py-2 text-2xl text-black"
          >
            Create Match
          </button>
        </div>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col items-center space-y-10">
            <h1 className="text-4xl">Upcoming</h1>
            {matches.map((match) => {
              if (!match.completed) {
                return <MatchesCard fields={fields} teams={teams} key={match.id} matches={match} />;
              }
              return null;
            })}
          </div>

          <div className="flex flex-col items-center space-y-10">
            <h1 className="text-4xl">Completed</h1>
            {matches.map((match) => {
              if (match.completed) {
                return <MatchesCard  fields={fields} teams={teams} key={match.id} matches={match} />
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Matches;
