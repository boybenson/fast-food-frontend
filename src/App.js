import React, { Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { unProtectedRoutes } from "./routes";
import MainLayout from "./layouts/index";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout>
          <Routes>
            {unProtectedRoutes.map(({ path, element }, index) => {
              return <Route path={path} element={element} key={index} />;
            })}
          </Routes>
        </MainLayout>
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
};

export default App;
