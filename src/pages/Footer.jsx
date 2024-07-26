import React from "react";
import ContactUs from "./ContactUs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div>
        <ContactUs />
        <div className="flex flex-row justify-between bg-[#08723e] px-6 py-3 text-white">
          <div>Copyright 2023 | All Rights Reserved</div>
          <div className="flex flex-row items-center space-x-2">
            <h1>Follow us</h1>
            <div><FaInstagram /></div>
            <div><FaFacebook /></div>
            <div><FaTiktok /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;