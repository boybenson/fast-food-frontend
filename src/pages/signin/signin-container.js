import { useMutation } from "@apollo/client";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SIGNIN } from "../../graphql/mutations/auth.js";
import { signin, signinError } from "../../redux/auth/signin.js";
import SigninComponent from "./signin-component.js";

const SigninContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signIn, { error, loading }] = useMutation(SIGNIN);

  const initialValues = { email: "", password: "" };

  const handleSubmit = (values) => {
    signIn({
      variables: { content: values },
      onCompleted: (data) => {
        localStorage.setItem("userInfo", JSON.stringify(data.signIn));
        dispatch(signin(data.signIn));
        navigate("/en");
        toast.success("login successful");
      },
      onError: (err) => {
        dispatch(signinError(err));
        toast.error(err?.message);
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
