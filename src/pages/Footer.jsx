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
        {/* <div className="flex flex-row justify-between bg-[#08723e] px-6 py-3 text-white">
          <div className="ml-50 flex justify-center">
            Copyright 2023 | All Rights Reserved
          </div>
          <div className="flex flex-row space-x-2">
            <h1>Follow us</h1>
            <div>Insta</div>
            <div>face</div>
            <div>tiktok</div>
          </div>
        </div> */}
      </div>

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
    </>
  );
};

export default Footer;
