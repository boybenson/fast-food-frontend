import { useMutation } from "@apollo/client";
import React from "react";
import { SIGNUP } from "../../graphql/mutations/auth.js";
import SignupComponent from "./signup-component.js";

const SignupContainer = () => {
  const [signUp, { error, loading, data }] = useMutation(SIGNUP);
  const initialValues = { email: "", password: "", phone: "" };

  const handleSubmit = (values) => {
    signUp({
      variables: {
        phone: values.phone,
        content: { email: values.email, password: values.password },
      },
      onCompleted: (data) => {
        console.log("data from backend api", data);
      },
      onError: (err) => {
        console.log("error from backend api", err);
      },
    });
  };
  return (
    <SignupComponent
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
};

export default SignupContainer;
