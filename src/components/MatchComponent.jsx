import React, { useState, useEffect } from "react";
import axiosInstance from "../axios/axios";

const MatchComponent = () => {
  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState("");

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axiosInstance.get("/matches");
        console.log(response.data.matches);
        setMatches(response.data.matches);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);

  const handleChange = (e) => {
    setSelectedMatch(e.target.value);
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-80">
        <h2 className="mb-4 mt-5 text-center text-4xl text-[#08723e]">
          Upcoming Matches
        </h2>
        <select
          className="w-full rounded-md border border-gray-300 p-2 text-lg text-black"
          value={selectedMatch}
          onChange={handleChange}
        >
          <option value="">Select a match</option>
          {matches.map((match) => (
            <option key={match.id} value={match.id}>
              {match.team1} vs {match.team2}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MatchComponent;
