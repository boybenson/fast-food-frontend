import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { unProtectedRoutes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {unProtectedRoutes.map(({ path, element }, index) => {
          return <Route path={path} element={element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
