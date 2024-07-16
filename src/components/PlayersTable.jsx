import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlayersTable = ({ players, teams }) => {
  const navigate = useNavigate();
  const playersPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastTeam = currentPage * playersPerPage;
  const indexOfFirstTeam = indexOfLastTeam - playersPerPage;
  const currentPlayers = players.slice(indexOfFirstTeam, indexOfLastTeam);

  const nextPage = () => {
    if (currentPage < Math.ceil(players.length / playersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleClick = () => {
    navigate("/player");
  };

  return (
    <>
      <div>
        <table className="border-collapse">
          <thead className="bg-[#232727] text-[#08723e]">
            <tr>
              <th className="border border-gray-700 px-4 py-2">#</th>
              <th className="border border-gray-700 px-4 py-2">Name</th>
              {teams && (
                <th className="border border-gray-700 px-4 py-2">Team</th>
              )}
              <th className="border border-gray-700 px-4 py-2">Goals</th>
              <th className="border border-gray-700 px-4 py-2">Assists</th>
              <th className="border border-gray-700 px-4 py-2">Position</th>
              <th className="border border-gray-700 px-4 py-2">
                Man of the Match
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#232727] text-center text-white">
            {currentPlayers.map((player, index) => (
              <tr key={player.id} className="border-t border-gray-600">
                <td className="border border-gray-600 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  {player.name}
                </td>
                {teams && (
                  <td className="border border-gray-600 px-4 py-2">
                    {teams.find((team) => team.id === player.TeamId)?.name}
                  </td>
                )}
                <td className="border border-gray-600 px-4 py-2">
                  {player.goals}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  {player.assists}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  {player.position}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  {player.motm}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {teams && (
        <div className="mt-4 flex space-x-5">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="rounded bg-[#08723e] px-4 py-2 text-white disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(players.length / playersPerPage)
            }
            className="rounded bg-[#08723e] px-4 py-2 text-white disabled:opacity-50"
          >
            Next
          </button>
          <button
            className="rounded bg-[#08723e] px-4 py-2 text-white disabled:opacity-50"
            onClick={handleClick}
          >
            Add Player
          </button>
        </div>
      )}
    </>
  );
};

export default PlayersTable;
