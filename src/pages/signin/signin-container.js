import { useMutation } from "@apollo/client";
import React from "react";
import { useDispatch } from "react-redux";
import { SIGNIN } from "../../graphql/mutations/auth.js";
import { signin, signinError } from "../../redux/auth/signin.js";
import SigninComponent from "./signin-component.js";

const SigninContainer = () => {
  const [signIn, { error, loading }] = useMutation(SIGNIN);
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "" };

  const handleSubmit = (values) => {
    signIn({
      variables: { content: values },
      onCompleted: (data) => {
        console.log("data from backend api", data);
        dispatch(signin(data.signIn));
      },
      onError: (err) => {
        console.log("error from backend api", err);
        dispatch(signinError(err));
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
