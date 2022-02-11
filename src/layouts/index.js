import React from "react";
import Header from "../components/header/header-container";
import Footer from "../components/footer/footer-container";
import DropDownNavContainer from "../components/dropdown-nav/dropdown-nav-container";
import NewHeader from "../components/new-header/header-container";

const MainLayout = ({ children, showDropDown, toggleNav }) => {
  return (
    <div>
      <div className="sticky top-0">
        <NewHeader />
      </div>
      {showDropDown && (
        <div className="block md:hidden">
          <DropDownNavContainer />
        </div>
      )}
      {children}
      <Footer />
    </div>
  );
};

export default React.memo(MainLayout);
