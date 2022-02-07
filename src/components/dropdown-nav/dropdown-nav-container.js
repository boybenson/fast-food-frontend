import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/auth/signin";
import DropDownNavComponent from "./dropdown-nav-component";

const DropDownNavContainer = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { userInfo } = useSelector((state) => state.user);
  let handleLogout = () => {
    localStorage.removeItem("userInfo");
    dispatch(signOut());
    navigate("/auth/signin");
  };

  return (
    <DropDownNavComponent userInfo={userInfo} handleLogout={handleLogout} />
  );
};

export default React.memo(DropDownNavContainer);
