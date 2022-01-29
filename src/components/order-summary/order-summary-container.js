import React from "react";
import { useSelector } from "react-redux";
import OrderSummaryComponent from "./order-summary-component";

const OrderSummaryContainer = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return <OrderSummaryComponent cartItems={cartItems} />;
};

export default OrderSummaryContainer;
