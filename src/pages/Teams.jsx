import React, { useEffect, useState } from "react";
import TeamsTable from "../components/TeamsTable";
import axiosInstance from "../axios/axios";
import { useNavigate } from "react-router";

const Teams = () => {

  const [teams, setTeams] = useState([]);
  const navigate = useNavigate()

  const getTeams = async () => {
    const response = await axiosInstance.get('/teams');
    setTeams(response.data.teams);
  }

  useEffect(() => {
    getTeams()
  },[])

  const admin = true;

  return (
    <>
      <div className="flex flex-col items-center py-20 space-y-10">
        <div className="text-7xl">Teams</div>
        <TeamsTable teams={teams} />
      </div>
      {admin && (
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/addteam")}
              className="rounded-md bg-[#ecd706] px-4 py-2 text-black"
            >
              Add Team
            </button>
          </div>
        )}
    </>
  )
};

export default Teams;
