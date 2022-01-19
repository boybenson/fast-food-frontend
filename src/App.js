import React from "react";
import HomePage from "./pages/home/home-container";
import SignInPage from "./pages/signin/signin-container";
import SignUpPage from "./pages/signup/signup-container";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signin" element={<SignInPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
