import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <section className="flex justify-between w-11/12 my-0 mx-auto items-center top-heading">
      <div>
        <NavLink to="/">
          <img src="/assets/images/logo.svg" alt="logo" />
        </NavLink>
      </div>

      <div className="hidden md:flex">
        <ul className="flex gap-x-6">
          <li className="cursor-pointer">How It Works</li>
          <li className="cursor-pointer">Testimonials</li>
          <li className="cursor-pointer">FAQs</li>
        </ul>
      </div>

      <div className="hidden md:block">
        <div className="flex gap-x-4">
          <NavLink
            to="/en"
            className="py-2 px-6 rounded-2xl  border-2 border-gray-400"
          >
            Login
          </NavLink>
          <NavLink
            to="/auth/signup"
            className="bg-primary text-white py-2 px-4 rounded-2xl"
          >
            Get Started
          </NavLink>
        </div>
      </div>

      {/* mobile view menu icons */}
      <div className="flex items-center gap-x-4 md:hidden">
        <NavLink
          to="/auth/signup"
          className="bg-primary text-white py-2 px-6 rounded-xl"
        >
          <p>sign up</p>
        </NavLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeaderComponent;
