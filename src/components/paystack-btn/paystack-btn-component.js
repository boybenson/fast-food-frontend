import React from "react";
import { usePaystackPayment } from "react-paystack";

const PaystackBtnComponent = ({ onSuccess, onClose, config }) => {
  const initializePayment = usePaystackPayment(config);
  return (
    <button
      type="button"
      className={`bg-gray-800 w-full py-2 text-white rounded-lg cursor-pointer text-center flex justify-center`}
      onClick={() => {
        initializePayment(onSuccess, onClose);
      }}
    >
      Make Payment
    </button>
  );
};

export default PaystackBtnComponent;
