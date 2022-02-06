import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SettingsComponent from "./settings-component";

const SettingsContainer = () => {
  const { userInfo } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    !userInfo ? navigate("/auth/signin") : console.log("null");
  });

  return <SettingsComponent />;
};

export default SettingsContainer;
