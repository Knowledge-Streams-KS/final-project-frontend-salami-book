import React, { useState, useEffect } from "react";
import axiosInstance from "../axios/axios";
import PlayersTable from "../components/PlayersTable";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([])

  const getPlayers = async () => {
    const response = await axiosInstance.get("/players");
    setPlayers(response.data.players);
  };

  const getTeams = async () => {
    const response = await axiosInstance.get('/teams');
    setTeams(response.data.teams)
  }

  useEffect(() => {
    getPlayers();
    getTeams();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center space-y-10 py-20">
        <div className="text-7xl">Players</div>
        <div className="rounded-md bg-[#232727]">
        </div>
        <PlayersTable players={players} teams={teams} />
      </div>
    </>
  );
};

export default Players;
