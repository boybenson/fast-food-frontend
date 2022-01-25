import React from "react";
import FooterContainer from "../../components/footer/footer-container";
import HeaderContainer from "../../components/header/header-container";
import Slider from "../../components/slider/slider";
import { categories } from "../../data/food";

const StoreFrontComponent = () => {
  return (
    <div>
      <HeaderContainer bg={true} />
      <main>
        <div className="w-11/12 my-0 mx-auto">
          <Slider />
        </div>

        <div className=" py-10 bg-gray-100">
          <h3 className="py-2  w-11/12 my-0 mx-auto font-bold text-xl">
            Favourite Categories :
          </h3>
          <div className="w-11/12 my-0 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 ">
            {categories.map(({ name, image, duration }, index) => (
              <div
                class="max-w-sm rounded-lg overflow-hidden shadow-lg grid-cols-span-1 bg-white"
                key={index}
              >
                <img class="w-full" src={image} alt="img" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{name}</div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer ">
                    {duration} Mins
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">
                    Pastries
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <FooterContainer />
    </div>
  );
};

export default StoreFrontComponent;
