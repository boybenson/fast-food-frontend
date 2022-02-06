import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PasswordComponent from "./password-component";

const PasswordContainer = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    !userInfo ? navigate("/auth/signin") : console.log("null");
  });
  return <PasswordComponent />;
};

export default PasswordContainer;
