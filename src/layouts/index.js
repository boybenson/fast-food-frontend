import React from "react";
import Header from "../components/header/header-container";
import Footer from "../components/footer/footer-container";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default React.memo(MainLayout);
