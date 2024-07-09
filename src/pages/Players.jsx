import React, { useState, useEffect } from "react";
import axiosInstance from "../axios/axios";
import PlayerCard from "../components/PlayerCard";
import PlayersTable from "../components/PlayersTable";

const Players = () => {
  const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    const response = await axiosInstance.get("/players");
    setPlayers(response.data.players);
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center space-y-10 py-20">
        <div className="text-7xl">Players</div>
        <div className="rounded-md bg-[#232727]">
        </div>
        <PlayersTable players={players} />
      </div>
    </>
  );
};

export default Players;
