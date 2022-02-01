import React from "react";
import { Link } from "react-router-dom";
const HomeComponent = () => {
  return (
    <div>
      <section className="bg-landingBgColor">
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
    </div>
  );
};

export default HomeComponent;
