import React from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../helpers/cart";
import OrderSummaryComponent from "./order-summary-component";

const OrderSummaryContainer = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = calcTotalPrice(cartItems);
  return (
    <OrderSummaryComponent cartItems={cartItems} totalPrice={totalPrice} />
  );
};

export default React.memo(OrderSummaryContainer);
