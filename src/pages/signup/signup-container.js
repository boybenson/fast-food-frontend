import { useMutation } from "@apollo/client";
import React from "react";
import { useDispatch } from "react-redux";
import { SIGNUP } from "../../graphql/mutations/auth.js";
import { signin, signinError } from "../../redux/auth/signin.js";
import SignupComponent from "./signup-component.js";

const SignupContainer = () => {
  const dispatch = useDispatch();
  const [signUp, { error, loading }] = useMutation(SIGNUP);
  const initialValues = { email: "", password: "", phone: "" };

  const handleSubmit = (values) => {
    signUp({
      variables: {
        phone: values.phone,
        content: { email: values.email, password: values.password },
      },
      onCompleted: (data) => {
        localStorage.setItem("userInfo", JSON.stringify(data.signUp));
        dispatch(signin(data.signUp));
      },
      onError: (err) => {
        console.log("error from backend api", err);
        dispatch(signinError(err));
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
