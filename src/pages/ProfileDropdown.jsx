import React, { useContext } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProfileDropdown = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative ml-3 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="h-8 w-8 rounded-full"
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MenuItem>
          <Link
            to="/profile"
            className="block px-4 py-2 text-lg text-green-700 data-[focus]:bg-gray-100"
          >
            Your Profile
          </Link>
        </MenuItem>

        <MenuItem>
          <button
            onClick={handleLogout}
            className="block w-full px-4 py-2 text-left text-lg text-green-700 data-[focus]:bg-gray-100"
          >
            Log out
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default ProfileDropdown;
