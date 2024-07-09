import React, { useEffect, useState } from "react";
import TeamsTable from "../components/TeamsTable";
import axiosInstance from "../axios/axios";

const Teams = () => {

  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    const response = await axiosInstance.get('/teams');
    setTeams(response.data.teams);
  }

  useEffect(() => {
    getTeams()
  },[])

  return (
    <>
      <div className="flex flex-col items-center py-20 space-y-10">
        <div className="text-7xl">Teams</div>
        <TeamsTable teams={teams} />
      </div>
    </>
  )
};

export default Teams;
