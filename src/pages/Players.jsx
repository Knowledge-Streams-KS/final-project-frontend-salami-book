import React, { useState, useEffect } from "react";
import axiosInstance from "../axios/axios";
import PlayersTable from "../components/PlayersTable";
import { useNavigate } from "react-router";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([])
  const navigate = useNavigate();

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

  const admin = true;

  return (
    <>
      <div className="flex flex-col items-center space-y-10 py-20">
        <div className="text-7xl">Players</div>
        <div className="rounded-md bg-[#232727]">
        </div>
        <PlayersTable players={players} teams={teams} />
      </div>
      {admin && (
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/addPlayer")}
              className="rounded-md bg-[#ecd706] px-4 py-2 text-black"
            >
              Add Player
            </button>
          </div>
        )}
    </>
  );
};

export default Players;
