import React, { Suspense, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { appRoutes } from "./routes";
import MainLayout from "./layouts/index";
import RequireAuth from "./routes/protected-route";
import Loader from "./components/loader";

const App = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  let toggleNav = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <BrowserRouter>
      <MainLayout
        showDropDown={showDropDown}
        setShowDropDown={setShowDropDown}
        toggleNav={toggleNav}
      >
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element, protected: protect }, index) => {
              return !protect ? (
                <Route path={path} element={element} key={index} />
              ) : (
                <Route
                  path={path}
                  element={<RequireAuth>{element}</RequireAuth>}
                  key={index}
                />
              );
            })}
          </Routes>
        </Suspense>
      </MainLayout>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
};

export default App;
