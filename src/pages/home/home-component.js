import React from "react";
import { NavLink } from "react-router-dom";
const HomeComponent = () => {
  return (
    <div>
      <section className="bg-landingBgColor">
        {/* heading */}
        <section className="flex justify-between w-11/12 my-0 mx-auto items-center py-2 top-heading">
          <div className="text-3xl text-primary font-extrabold">FedUp</div>

          <ul className="flex gap-x-6">
            <li className="cursor-pointer">How It Works</li>
            <li className="cursor-pointer">Testimonials</li>
            <li className="cursor-pointer">FAQs</li>
          </ul>

          <div className="flex gap-x-4">
            <NavLink
              to="/"
              className="py-2 px-6 rounded-2xl  border-2 border-gray-400"
            >
              Login
            </NavLink>
            <NavLink
              to="/"
              className="bg-primary text-white py-2 px-4 rounded-2xl"
            >
              Get Started
            </NavLink>
          </div>
        </section>

        {/* landing image and writeup */}
        <section className="bg-landingBgColor w-11/12 my-0 mx-auto grid grid-cols-2 bottom-heading">
          <div className="flex flex-col justify-center gap-y-10">
            <h1 className="text-5xl">We are building an army of chefs</h1>
            <p className="text-lg">
              At Fedup, we have an ambitious plan to build a food service for
              the gig economy by starting with providing chefs or homecooks a
              platform to sell directly to customers
            </p>

            <div className="flex gap-x-4">
              <NavLink
                to="/"
                className="bg-primary text-white py-2 px-4 rounded-2xl"
              >
                Get Started
              </NavLink>
              <NavLink
                to="/"
                className="py-2 px-6 rounded-2xl  border-2 border-gray-400"
              >
                Learn More
              </NavLink>
            </div>
          </div>
          <div className="flex justify-self-end">
            <img src="/assets/images/landing-img.svg" alt="logo" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomeComponent;
