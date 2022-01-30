import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/auth/signin";
import HeaderComponent from "./header-component";

const HeaderContainer = ({ bg }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    dispatch(signOut());
  };

  return (
    <HeaderComponent
      userInfo={userInfo}
      cartItems={cartItems}
      bg={bg}
      handleLogout={handleLogout}
    />
  );
};

export default HeaderContainer;
