import React from 'react';

const PlayersTable = ({ players }) => {
  return (
    <table className="border-collapse">
      <thead className= "bg-[#232727] text-[#08723e]">
        <tr>
          <th className="border border-gray-700 px-4 py-2">#</th>
          <th className="border border-gray-700 px-4 py-2">Name</th>
          <th className="border border-gray-700 px-4 py-2">Team</th>
          <th className="border border-gray-700 px-4 py-2">Goals</th>
          <th className="border border-gray-700 px-4 py-2">Assists</th>
          <th className="border border-gray-700 px-4 py-2">Position</th>
          <th className="border border-gray-700 px-4 py-2">Man of the Match</th>
        </tr>
      </thead>
      <tbody className= "bg-[#232727] text-white text-center">
        {players.map((player, index) => (
          <tr key={player.id} className="border-t border-gray-600">
            <td className="border border-gray-600 px-4 py-2">{index + 1}</td>
            <td className="border border-gray-600 px-4 py-2">{player.name}</td>
            <td className="border border-gray-600 px-4 py-2">{player.team}</td>
            <td className="border border-gray-600 px-4 py-2">{player.goals}</td>
            <td className="border border-gray-600 px-4 py-2">{player.assists}</td>
            <td className="border border-gray-600 px-4 py-2">{player.position}</td>
            <td className="border border-gray-600 px-4 py-2">{player.motm}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayersTable;
