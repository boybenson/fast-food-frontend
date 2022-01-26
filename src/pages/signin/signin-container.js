import { useMutation } from "@apollo/client";
import React from "react";
import { SIGNIN } from "../../graphql/mutations/auth.js";
import SigninComponent from "./signin-component.js";

const SigninContainer = () => {
  const [signIn, { error, loading, data }] = useMutation(SIGNIN);

  const initialValues = { email: "", password: "" };

  const handleSubmit = (values) => {
    signIn({
      variables: { content: values },
      onCompleted: (data) => {
        console.log("data from backend api", data);
      },
      onError: (err) => {
        console.log("error from backend api", err);
      },
    });
  };

  return (
    <SigninComponent
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
};

export default SigninContainer;
