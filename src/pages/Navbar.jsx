import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-[#08723e] px-[10%] py-4">
        <div className="w-60">
          <NavLink to={"/"}>
            <img src={"/images/logoNav.svg"} alt="logo" />
          </NavLink>
        </div>
        <div className="flex space-x-3 text-xl">
          <NavLink className={({ isActive }) => isActive ? 'text-[#0e0f0f]' : ''} to={"/"}>HOME</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'text-[#0e0f0f]' : ''} to={"tournaments"}>TOURNAMENTS</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'text-[#0e0f0f]' : ''} to={"leagues"}>LEAGUES</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'text-[#0e0f0f]' : ''} to={"teams"}>TEAMS</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'text-[#0e0f0f]' : ''} to={"players"}>PLAYERS</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'text-[#0e0f0f]' : ''} to={"fields"}>FIELDS</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'text-[#0e0f0f]' : ''} to={'matches'}>MATCHES</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
