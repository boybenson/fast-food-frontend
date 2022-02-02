import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartComponent from "./cart-component";
import {
  handleDecreaseQty,
  handleIncreaseQty,
  handleRemoveFromCart,
} from "../../helpers/cart";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const removeFromCart = (food) => {
    handleRemoveFromCart(food, dispatch);
  };

  const increaseQty = (food) => {
    handleIncreaseQty(food, dispatch);
  };

  const decreaseQty = (food) => {
    handleDecreaseQty(food, dispatch);
  };

  return (
    <CartComponent
      cartItems={cartItems}
      removeFromCart={removeFromCart}
      increaseQty={increaseQty}
      decreaseQty={decreaseQty}
    />
  );
};

export default React.memo(CartContainer);
