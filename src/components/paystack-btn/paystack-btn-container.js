import React from "react";
import PaystackBtnComponent from "./paystack-btn-component";

const PaystackBtnContainer = () => {
  const config = {
    reference: new Date().getTime().toString(),
    email: "ybenson96@gmail.com",
    amount: 200 * 100,
    publicKey: "pk_test_1f8a48067da5793e978f1b1d07e1feea71c756f3",
    currency: "GHS",
    channels: ["mobile_money"],
  };

  const onSuccess = (reference) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log("closed");
  };
  return (
    <PaystackBtnComponent
      onSuccess={onSuccess}
      onClose={onClose}
      config={config}
    />
  );
};

export default PaystackBtnContainer;
