import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WishListComponent from "./wish-list-component";

const WishListContainer = () => {
  const { userInfo } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    !userInfo ? navigate("/auth/signin") : console.log("null");
  });

  return <WishListComponent />;
};

export default WishListContainer;
