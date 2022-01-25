import React from "react";
import SigninComponent from "./signin-component.js";

const SigninContainer = () => {
  const initialValues = { email: "", password: "" };
  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };
  return (
    <SigninComponent
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  );
};

export default SigninContainer;
