import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="flex items-center justify-between bg-[#08723e] px-[10%] py-4">
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

          {user ? <ProfileDropdown /> : <NavLink to={"/login"}>LOGIN</NavLink>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
