import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "../../components/slider/slider";
import { categories } from "../../data/food";

const StoreFrontComponent = () => {
  return (
    <div>
      <main>
        <div className="md:w-7/12 w-11/12 my-0 mx-auto">
          <Slider />
        </div>

        <div className=" py-10 bg-gray-100">
          <h3 className="py-2  w-11/12 my-0 mx-auto font-bold text-xl">
            Favourite Categories :
          </h3>
          <div className="w-11/12 my-0 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 ">
            {categories.map(({ name, image, duration }, index) => (
              <NavLink to={`/en/category/${name.toLowerCase()}`} key={index}>
                <div className="max-w-sm rounded-lg overflow-hidden shadow-xs grid-cols-span-1 bg-white">
                  <img className="w-full" src={image} alt="img" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer ">
                      {duration} Mins
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                      Pastries
                    </span>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StoreFrontComponent;
