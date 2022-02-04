import React from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../helpers/cart";
import OrderSummaryComponent from "./order-summary-component";

const OrderSummaryContainer = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = calcTotalPrice(cartItems);

  const initialValues = {
    location: "",
    paymentMethod: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <OrderSummaryComponent
      cartItems={cartItems}
      totalPrice={totalPrice}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  );
};

export default React.memo(OrderSummaryContainer);
