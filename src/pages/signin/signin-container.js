import { useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SIGNIN } from "../../graphql/mutations/auth.js";
import { signin, signinError } from "../../redux/auth/signin.js";
import SigninComponent from "./signin-component.js";

const SigninContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const [signIn, { error, loading }] = useMutation(SIGNIN);

  const initialValues = { email: "", password: "" };

  const handleSubmit = (values) => {
    signIn({
      variables: { content: values },
      onCompleted: (data) => {
        localStorage.setItem("userInfo", JSON.stringify(data.signIn));
        dispatch(signin(data.signIn));
        navigate("/en", { replace: true });
        toast.success("login successful");
      },
      onError: (err) => {
        dispatch(signinError(err));
        toast.error(err?.message);
      },
    });
  };

  useEffect(() => {
    userInfo ? navigate("/en") : console.log("null");
  });

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
