import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-10 pt-8">
        <div className="pl-12 text-7xl">About Us</div>
        <div className="mx-8 flex w-[60%] flex-col space-y-10 rounded-md bg-[#232727] p-4">
          <h1 className="text-2xl font-bold text-[#08723e]">
            WE ARE A TEAM OF FUTSAL ENTHUSIASTS
          </h1>
          <p className="">
            Welcome to MAIDAN, a revolutionary online platform that helps
            football enthusiasts organize matches and connect with players and
            sports centers in their area. Our app streamlines the process of
            organizing a match, saving both time and energy while bringing the
            entire football community together. With MAIDAN, you can sign up for
            free and easily create or join matches in your city. Our app also
            provides post-match analysis and progress tracking features,
            allowing you to monitor your performance and stay motivated. With
            our marketplace, you can have access to top quality sporting goods
            and merchandise across Pakistan. Join MAIDAN today and experience
            the value of organized football.
          </p>
          <img src="images/aboutus.jpg" alt="aboutus" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
