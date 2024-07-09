import React from "react";
import MatchesCard from "../components/MatchesCard";
import { useNavigate } from "react-router";

const Matches = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="py-20 space-y-4">
        <div className="flex justify-center text-7xl pb-12">Matches</div>
        <div className="flex justify-center">
          <button onClick={() => navigate('/creatematch')} className="rounded-md bg-[#ecd706] px-4 py-2 text-2xl text-black">Create Match</button>
        </div>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col items-center space-y-10">
            <h1 className="text-4xl">Upcoming</h1>
            <MatchesCard />
          </div>

          <div className="flex flex-col items-center space-y-10">
            <h1 className="text-4xl">Completed</h1>
            <MatchesCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Matches;
