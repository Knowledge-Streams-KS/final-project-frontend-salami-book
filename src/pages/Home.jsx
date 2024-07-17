import React from "react";
import AboutUs from "./AboutUs";
import { useNavigate } from "react-router";

const Home = () => {

  const navigate = useNavigate()

  return (
    <>
      <div
        style={{ backgroundImage: "url('images/wallpaper2.jpg')" }}
        className="h-screen w-full bg-cover bg-no-repeat"
      >
        <div className="flex h-screen w-full flex-col justify-center space-y-20 bg-black bg-opacity-70 pl-[20%]">
          <div className="font-extralight">REVOLUTIONIZE YOUR GAME!</div>
          <div className="font-roboto text-7xl font-semibold">
            FIND YOUR MATCH
          </div>
          <div className="flex space-x-12">
            <button onClick={() => navigate('/creatematch')} className="rounded-md bg-[#ecd706] px-4 py-2 text-2xl text-black">
              Create Match
            </button>
            <button onClick={() => navigate('/aboutus')} className="rounded-md bg-[#ecd706] px-4 py-2 text-2xl text-black">
              About Us
            </button>
          </div>
        </div>
      </div>
      <AboutUs />
    </>
  );
};

export default Home;
