import React from "react";
import ContactUs from "./ContactUs";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div>
        <ContactUs />
        <div class="bg-[#08723e] px-4 py-6 md:flex md:items-center md:justify-between dark:bg-gray-700">
          <span class="text-lg font-normal text-white sm:text-center">
            © 2023 Copyright 2023 | All Rights Reserved™
          </span>
          <div class="mt-4 flex space-x-5 sm:justify-center md:mt-0 rtl:space-x-reverse">
            <Link to="">
              <FaFacebookSquare className="text-2xl" />
            </Link>

            <Link to="">
              <FaSquareInstagram className="text-2xl" />
            </Link>

            <Link to="">
              <FaSquareXTwitter className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
