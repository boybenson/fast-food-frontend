import { useMutation } from "@apollo/client";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { SIGNIN } from "../../graphql/mutations/auth.js";
import { signin, signinError } from "../../redux/auth/signin.js";
import SigninComponent from "./signin-component.js";

const SigninContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();
  const [signIn, { error, loading }] = useMutation(SIGNIN);
  const initialValues = { email: "", password: "" };
  let comingFrom = location.state?.from?.pathname || "/";

  const handleSubmit = (values) => {
    signIn({
      variables: { content: values },
      onCompleted: (data) => {
        localStorage.setItem("userInfo", JSON.stringify(data.signIn));
        dispatch(signin(data.signIn));
        navigate(`${comingFrom}`, { replace: true });
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
