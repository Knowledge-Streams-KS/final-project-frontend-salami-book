import React, { useState } from "react";
import PlayersTable from "./PlayersTable";

const TeamsTable = ({ teams }) => {
  
  const teamsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  
  const [seePlayers, setSeePlayers] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const indexOfLastTeam = currentPage * teamsPerPage;
  const indexOfFirstTeam = indexOfLastTeam - teamsPerPage;
  const currentTeams = teams.slice(indexOfFirstTeam, indexOfLastTeam);
  console.log(indexOfFirstTeam, "first")
  console.log(indexOfLastTeam, "last")

  const nextPage = () => {
    if (currentPage < Math.ceil(teams.length / teamsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {seePlayers && selectedTeam && (
        <div className="flex flex-col items-center fixed inset-0 justify-center z-50 bg-[#0e0f0f] space-y-8 rounded-lg">
          <div className="text-7xl">Players</div>
          <div>
            <PlayersTable players={selectedTeam.Players} />
          </div>
          <button
            className="bg-[#08723e] px-4 py-2 rounded-md"
            onClick={() => setSeePlayers(false)}
          >
            Close
          </button>
        </div>
      )}

      <table className="border-collapse">
        <thead className="bg-[#232727] text-[#08723e]">
          <tr>
            <th className="border border-gray-700 px-4 py-2 text-xl">#</th>
            <th className="border border-gray-700 px-4 py-2 text-xl">Name</th>
            <th className="border border-gray-700 px-4 py-2 text-xl">
              Division
            </th>
            <th className="border border-gray-700 px-4 py-2 text-xl">
              Players
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#232727] text-center text-white">
          {currentTeams.map((team, index) => (
            <tr key={team.id} className="border-t border-gray-600">
              <td className="border border-gray-600 px-4 py-2">
                {indexOfFirstTeam + index + 1}
              </td>
              <td className="border border-gray-600 px-4 py-2">{team.name}</td>
              <td className="border border-gray-600 px-4 py-2">
                {team.division}
              </td>
              <td className="border border-gray-600 px-4 py-2">
                <button
                  onClick={() => {
                    setSeePlayers(true);
                    setSelectedTeam(team);
                  }}
                  className="rounded-md bg-[#08723e] px-4 py-2 text-xs"
                >
                  See Players
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
          disabled={currentPage === Math.ceil(teams.length / teamsPerPage)}
          className="rounded bg-[#08723e] px-4 py-2 text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TeamsTable;
