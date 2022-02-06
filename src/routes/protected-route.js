import React from "react";
import { Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function ProtectedRoute({ element: Component, ...restOfProps }) {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        userInfo ? (
          <Component {...props} />
        ) : (
          navigate("/auth/signin") &&
          toast.error("please signin!") &&
          navigate("/auth/signin")
        )
      }
    />
  );
}

export default ProtectedRoute;
