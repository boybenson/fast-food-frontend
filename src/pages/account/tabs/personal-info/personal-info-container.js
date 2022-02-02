import React from "react";
import { useSelector } from "react-redux";
import PersonalInfoComponent from "./personal-info-component";

const PersonalInfoContainer = () => {
  const { userInfo } = useSelector((state) => state.user);

  const initialValues = userInfo;
  return (
    <PersonalInfoComponent userInfo={userInfo} initialValues={initialValues} />
  );
};

export default PersonalInfoContainer;
