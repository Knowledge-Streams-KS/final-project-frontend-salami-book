import React, { useState, useEffect } from "react";
import axiosInstance from "../axios/axios";

const MatchListComponent = ({ onSelectMatch }) => {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState([])
  const [selectedMatchId, setSelectedMatchId] = useState("");

  const getTeams = async () => {
    const response = await axiosInstance.get('/teams');
    setTeams(response.data.teams)
  }

  useEffect(() => {
    fetchMatches();
    getTeams();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await axiosInstance.get("/matches");
      setMatches(response.data.matches);
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
  };

  const handleChange = (e) => {
    const matchId = e.target.value;
    setSelectedMatchId(matchId);
    onSelectMatch(matchId); // Pass selected matchId to parent component
  };

  return (
    <select
      className="w-full rounded-md border border-gray-300 p-2 text-lg text-black"
      value={selectedMatchId}
      onChange={handleChange}
    >
      <option value="">Select a match</option>
      {matches.map((match) => (
        <option key={match.id} value={match.id}>
          {`${teams.find(team => team.id === match.team1)?.name} vs ${teams.find(team => team.id === match.team2)?.name}`}
        </option>
      ))}
    </select>
  );
};

export default MatchListComponent;
