import React from "react";
import SignupComponent from "./signup-component.js";

const SignupContainer = () => {
  const initialValues = { email: "", password: "", phone: "" };
  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };
  return (
    <SignupComponent
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignupContainer;
