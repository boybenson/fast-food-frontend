import React, { useEffect } from "react";
import HomeComponent from "./home-component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomeContainer = () => {
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    userInfo ? navigate("/en") : console.log("null");
  });
  return <HomeComponent />;
};

export default HomeContainer;
