import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeContainer from "./pages/home/home-container";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <HomeContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
