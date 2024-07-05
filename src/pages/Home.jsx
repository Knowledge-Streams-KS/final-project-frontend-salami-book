import React from "react";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <>
      <div style={{backgroundImage: "url('images/bg-image.jpg')"}} className="w-full h-screen bg-no-repeat bg-cover">
        <div className="flex flex-col justify-center space-y-20 pl-[20%] bg-black bg-opacity-70 w-full h-screen">
          <div className="font-extralight">REVOLUTIONIZE YOUR GAME!</div>
          <div className="font-semibold text-7xl font-roboto">FIND YOUR MATCH</div>
          <div className="flex space-x-12">
            <button className="bg-[#ecd706] text-black py-2 px-4 rounded-md text-2xl">
              Find Match
            </button>
            <button className="bg-[#ecd706] text-black py-2 px-4 rounded-md text-2xl">
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
