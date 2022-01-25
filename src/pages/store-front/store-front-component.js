import React from "react";
import FooterContainer from "../../components/footer/footer-container";
import HeaderContainer from "../../components/header/header-container";
import Slider from "../../components/slider/slider";

const StoreFrontComponent = () => {
  return (
    <div>
      <HeaderContainer />
      <main className="w-11/12 my-0 mx-auto">
        <Slider />
      </main>
      <FooterContainer />
    </div>
  );
};

export default StoreFrontComponent;
