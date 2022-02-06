import React, { Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { unProtectedRoutes } from "./routes";
import MainLayout from "./layouts/index";
import RequireAuth from "./routes/protected-route";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout>
          <Routes>
            {unProtectedRoutes.map(
              ({ path, element, protected: protect }, index) => {
                return !protect ? (
                  <Route path={path} element={element} key={index} />
                ) : (
                  <Route
                    path={path}
                    element={<RequireAuth>{element}</RequireAuth>}
                    key={index}
                  />
                );
              }
            )}
          </Routes>
        </MainLayout>
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
};

export default App;
