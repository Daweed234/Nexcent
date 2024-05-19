import React, { useState } from "react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <nav className="flex justify-center items-center gap-36 bg-[#F5F7FA] py-5">
        <div>
          <img src={Logo} />
        </div>
        <div className=" md:hidden flex gap-20 justify-center">
        <ul className="flex justify-center items-center gap-10">
          <li>Home</li>
          <li>Services</li>
          <li>Features</li>
          <li>Product</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>
        <div>
          <button className="text-green-500 px-8 py-4 rounded-md">Login</button>
          <button className="bg-[#4CAF4F] px-8 text-white py-4 rounded-md">
            Sign Up
          </button>
        </div>
        </div>
        {/* <IoMenu className="size-10 md:hidden" />
         */}

<div className="">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="hidden md:visible md:flex md:space-x-4 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div>
            <ul className="justify-center items-center gap-10 block">
          <li>Home</li>
          <li>Services</li>
          <li>Features</li>
          <li>Product</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>
        <div>
        <button className="text-green-500 px-8 py-4 rounded-md">Login</button>
        <button className="bg-[#4CAF4F] px-8 text-white py-4 rounded-md">
          Sign Up
        </button>
      </div>
          </div>
        )}
        
      </nav>
    </>
  );
};

export default Navbar;
