import React from "react";
import { useSelector } from "react-redux";
import HeaderComponent from "./header-component";

const HeaderContainer = ({ bg }) => {
  const { userInfo } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  return <HeaderComponent userInfo={userInfo} cartItems={cartItems} bg={bg} />;
};

export default HeaderContainer;
