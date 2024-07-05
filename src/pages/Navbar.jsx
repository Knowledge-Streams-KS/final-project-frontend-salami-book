import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#08723e] flex justify-between items-center px-[10%] py-4">
        <div className="w-60">
          <NavLink to={"/"}>
            <img src={"/images/logoNav.svg"} alt="logo" />
          </NavLink>
        </div>
        <div className="flex space-x-3">
          <NavLink to={"/"}>HOME</NavLink>
          <NavLink to={"tournaments"}>TOURNAMENTS</NavLink>
          <NavLink to={"leagues"}>LEAGUES</NavLink>
          <NavLink to={"teams"}>TEAMS</NavLink>
          <NavLink to={"players"}>PLAYERS</NavLink>
          <NavLink to={"fields"}>FIELDS</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
