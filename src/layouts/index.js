import React from "react";
import Header from "../components/header/header-container";
import Footer from "../components/footer/footer-container";
import DropDownNavContainer from "../components/dropdown-nav/dropdown-nav-container";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="block md:hidden">
        <DropDownNavContainer />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default React.memo(MainLayout);
