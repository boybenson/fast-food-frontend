import React from "react";
import Footer from "../components/footer/footer-container";
import NewHeader from "../components/new-header/header-container";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="sticky top-0">
        <NewHeader />
      </div>

      {children}
      <Footer />
    </div>
  );
};

export default React.memo(MainLayout);
