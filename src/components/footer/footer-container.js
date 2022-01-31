import React from "react";
import FooterComponent from "./footer-component";

const FooterContainer = () => {
  const support = [{ label: "Contact Us" }, { label: "FAQ" }];
  const followUs = [
    { label: "Instagram" },
    { label: "Facebook" },
    { label: "Linkedln" },
    { label: "Twitter" },
  ];
  const countries = [
    { label: "Ghana" },
    { label: "United States" },
    { label: "Nigeria" },
    { label: "Togo" },
  ];

  const joinUs = [{ label: "sign up as a user" }];

  return (
    <FooterComponent
      support={support}
      followUs={followUs}
      countries={countries}
      joinUs={joinUs}
    />
  );
};

export default React.memo(FooterContainer);
