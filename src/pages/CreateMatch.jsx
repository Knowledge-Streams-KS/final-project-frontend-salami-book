import React, { useEffect, useState } from "react";
import axiosInstance from "../axios/axios";

const CreateMatch = () => {
  const [fields, setFields] = useState([]);
  const [teams, setTeams] = useState([]);

  const getFields = async () => {
    const response = await axiosInstance.get("/fields");
    setFields(response.data.fields);
  };

  const getTeams = async () => {
    const response = await axiosInstance.get("/teams");
    setTeams(response.data.teams);
  };

  useEffect(() => {
    getFields();
    getTeams();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center space-y-10 py-20">
        <div className="text-7xl">Create Match</div>
        <div className="rounded-md bg-[#232727] px-10 py-5">
          <form className="flex flex-col space-y-5">
            <div className="space-x-3">
              <label className="" htmlFor="fields">
                Field:
              </label>
              <select
                className="rounded-md bg-[#0e0f0f] px-4 py-2"
                id="fields"
                name="fields"
              >
                <option value="" selected disabled hidden>
                  Select Field
                </option>
                {fields.map((field) => {
                  return (
                    <option key={field.id} value={field.id}>
                      {field.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <div>Booking Date:</div>
              <div>Booking Time:</div>
            </div>

            <div className="flex space-x-10">
              <div className="space-x-3">
                <label htmlFor="team1">Team 1:</label>
                <select
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="team1"
                  name="team1"
                >
                  <option value="" selected disabled hidden>
                    Select Team
                  </option>
                  {teams.map((team) => {
                    return (
                      <option key={team.id} value={team.id}>
                        {team.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="space-x-3">
                <label htmlFor="team2">Team 2:</label>
                <select
                  className="rounded-md bg-[#0e0f0f] px-4 py-2"
                  id="team2"
                  name="team2"
                >
                  <option value="" selected disabled hidden>
                    Select Team
                  </option>
                  {teams.map((team) => {
                    return (
                      <option key={team.id} value={team.id}>
                        {team.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="flex flex-row justify-end space-x-5">
              <button className="rounded-md bg-[#ecd706] px-4 py-2 text-black">
                Cancel
              </button>
              <button className="rounded-md bg-[#ecd706] px-4 py-2 text-black">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateMatch;
