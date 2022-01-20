import React from "react";
import { Link } from "react-router-dom";
const HomeComponent = ({ support, followUs, countries, joinUs }) => {
  return (
    <div>
      <section className="bg-landingBgColor">
        {/* heading */}
        <section className="flex justify-between w-11/12 my-0 mx-auto items-center top-heading">
          <div>
            <img src="/assets/images/logo.svg" alt="logo" />
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
              <Link
                to="/auth/signin"
                className="py-2 px-6 rounded-2xl  border-2 border-gray-400"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="bg-primary text-white py-2 px-4 rounded-2xl"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* mobile view menu icons */}
          <div className="flex items-center gap-x-4">
            <Link
              to="/auth/signup"
              className="bg-primary text-white py-2 px-6 rounded-2xl"
            >
              <p>sign up</p>
            </Link>
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

        {/* landing image and writeup */}
        <section className="bg-landingBgColor w-10/12 my-0 mx-auto grid grid-cols-1 md:grid-cols-2 bottom-heading">
          <div className="flex flex-col justify-center gap-y-6 md:gap-y-10">
            <h1 className="text-3xl md:text-5xl">
              We are building an army of chefs
            </h1>
            <p className="text-sm md:text-lg">
              At Fedup, we have an ambitious plan to build a food service for
              the gig economy by starting with providing chefs or homecooks a
              platform to sell directly to customers
            </p>

            <div className="hidden md:block">
              <div className="flex gap-x-4">
                <Link
                  to="/"
                  className="bg-primary text-white py-2 px-4 rounded-2xl"
                >
                  Get Started
                </Link>
                <Link
                  to="/"
                  className="py-2 px-6 rounded-2xl  border-2 border-gray-400"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <img src="/assets/images/landing-img.svg" alt="logo" />
          </div>
        </section>
      </section>

      {/* image and description */}
      <section className="mt-4">
        <div className="w-9/12 my-0 mx-auto flex flex-col md:flex-row items-center gap-x-10 py-10">
          <div>
            <img src="/assets/images/img1.svg" alt="img 1" />
          </div>
          <div>
            <h1 className="text-lg md:text-5xl md:font-bold font-extrabold">
              Everything in one place.
            </h1>
            <p className="hidden md:block text-md mt-6 text-gray-500">
              Whatever you want, we can get it. Order delivery for yourself and
              your friends and watch in realtime as your postmate brings you all
              the things you love.
            </p>
            <p className="md:hidden text-xs text-gray-500">
              Create an account and add items to your cart with serving size
              prices and image
            </p>
            <button className="bg-primary text-white py-2 px-4 rounded-2xl mt-4 hidden md:block">
              Get the App
            </button>
          </div>
        </div>

        <hr />
        <div className="w-9/12 my-0 mx-auto flex flex-col-reverse  md:flex-row items-center gap-x-10 py-10">
          <div>
            <h1 className="text-lg md:text-5xl md:font-bold font-extrabold">
              Order from your favourite chefs.
            </h1>
            <p className="hidden md:block text-md mt-6 text-gray-500">
              Whatever you want, we can get it. Order delivery for yourself and
              your friends and watch in realtime as your postmate brings you all
              the things you love.
            </p>
            <p className="md:hidden text-xs text-gray-500">
              Create an account and add items to your cart with serving size
              prices and image
            </p>
            <button className="bg-primary text-white py-2 px-4 rounded-2xl mt-4 hidden md:block">
              Find Chefs
            </button>
          </div>
          <div>
            <img src="/assets/images/img1.svg" alt="img 1" />
          </div>
        </div>
      </section>

      {/* ready to order section */}
      <section className="bg-landingBgColor">
        <div className="text-center py-14">
          <h1 className="text-5xl font-bold py-2">Ready To Order?</h1>
          <p className="text-sm text-gray-500">
            Enter your location to get access to your favourite food within the
            shortest possible time.
          </p>
          <form className="py-4">
            <input
              type="text"
              className="py-4 px-12 mr-2 rounded-md"
              placeholder="Legon Campus...."
            />
            <input
              type="submit"
              value="send"
              className="bg-primary text-white py-4 px-4 rounded-md cursor-pointer"
            />
          </form>
        </div>
      </section>

      <footer className="bg-footerBgColor">
        <div className="w-11/12 my-0 mx-auto py-12">
          <section className="flex gap-x-8 items-start py-6">
            <div>
              <img src="/assets/images/logo.svg" alt="logo" />
            </div>
            <ul>
              <h4 className="font-bold text-white text-xl">support</h4>
              {support.map((data, index) => (
                <li key={index} className="text-sm text-gray-500 mt-2">
                  {data.label}
                </li>
              ))}
            </ul>
            <ul>
              <h4 className="font-bold text-white text-xl">Follow Us</h4>
              {followUs.map((data, index) => (
                <li key={index} className="text-sm text-gray-500 mt-2">
                  {data.label}
                </li>
              ))}
            </ul>
            <ul>
              <h4 className="font-bold text-white text-xl">Countries</h4>
              {countries.map((data, index) => (
                <li key={index} className="text-sm text-gray-500 mt-2">
                  {data.label}
                </li>
              ))}
            </ul>
            <ul>
              <h4 className="font-bold text-white text-xl">Join Us</h4>
              {joinUs.map((data, index) => (
                <li key={index} className="text-sm text-gray-500 mt-2">
                  {data.label}
                </li>
              ))}
            </ul>
          </section>

          <section className="flex justify-between items-center mt-4">
            <div className="flex gap-x-4">
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Fedup Co. All rights reserved.
              </p>
              <p className="text-white text-xs">Terms Of Service</p>
              <p className="text-white text-xs">Privacy</p>
            </div>
            <div>
              <img
                src="/assets/images/stores.svg"
                alt="stores logos"
                className="w-9/12"
              />
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default HomeComponent;
