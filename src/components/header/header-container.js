import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/auth/signin";
import HeaderComponent from "./header-component";

const HeaderContainer = ({ bg, showDropDown, toggleNav }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    dispatch(signOut());
    navigate("/");
  };

  return (
    <HeaderComponent
      userInfo={userInfo}
      cartItems={cartItems}
      bg={bg}
      handleLogout={handleLogout}
      showDropDown={showDropDown}
      toggleNav={toggleNav}
    />
  );
};

export default React.memo(HeaderContainer);
