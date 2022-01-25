import React, { Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { outerRoutes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {outerRoutes.map(({ path, element }, index) => {
            return <Route path={path} element={element} key={index} />;
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
