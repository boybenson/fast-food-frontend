import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SIGNUP } from "../../graphql/mutations/auth.js";
import { signin, signinError } from "../../redux/auth/signin.js";
import SignupComponent from "./signup-component.js";

const SignupContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);

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
    <SignupComponent
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
};

export default SignupContainer;
