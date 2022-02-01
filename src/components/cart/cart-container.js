import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartComponent from "./cart-component";
import { handleRemoveFromCart } from "../../helpers/cart";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const removeFromCart = (food) => {
    handleRemoveFromCart(food, dispatch);
  };
  return (
    <CartComponent cartItems={cartItems} removeFromCart={removeFromCart} />
  );
};

export default React.memo(CartContainer);
