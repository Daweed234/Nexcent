import React from "react";
// import Tesla from '../assets/Tesla.png'
import Logo from "../assets/Logo.png";
import { PiInstagramLogoBold } from "react-icons/pi";
// import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="text-center py-10">
        <p className="text-[#263238] font-semibold text-6xl">
          Pellentesque suscipit <br />
          fringilla libero eu.
        </p>
        <div className="py-5">
          <div>
            <button className="px-8 py-4 rounded-md text-white bg-[#4CAF4F]">
              Get Demo
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#263238] flex justify-center py-10 gap-64">
        <div className="">
          <div>
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className="py-8">
              <p className="text-white">Copyright © 2020 Nexcent ltd.</p>
              <p className="text-white">All rights reserved</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="rounded-full bg-[#4f4f4f] px-2 py-2">
              <FaInstagram className="text-3xl text-white" />
            </div>
            <div className="rounded-full bg-[#4f4f4f] px-2 py-2">
              <FaDribbble className="text-3xl text-white" />
            </div>
            <div className="rounded-full bg-[#4f4f4f] px-2 py-2">
              <FaTwitter className="text-3xl text-white" />
            </div>
            <div className="rounded-full bg-[#4f4f4f] px-2 py-2">
              <FaYoutube className="text-3xl text-white" />
            </div>
          </div>
        </div>
        <div className="flex gap-9">
          <div className="text-white">
            <h1 className="font-semibold text-2xl py-4">Company</h1>
            <div>
              <p>About us</p>
              <p>Blog</p>
              <p>Contact us</p>
              <p>Pricing</p>
              <p>Testimonials</p>
            </div>
          </div>
            <div className="text-white">
              <h1 className="font-semibold text-2xl py-4">Support</h1>
              <div>
                <p>Help center</p>
                <p>Terms of service</p>
                <p>Legal</p>
                <p>Privancy policy</p>
                <p>Status</p>
              </div>
            </div>
            <div className="py-6">
              <input type="email" placeholder="Your email address" className="px-12 py-4 rounded-md " />
              {/* <IoIosSend /> */}
            </div>
          </div>
      </div>
    </>
  );
};

export default Footer;
