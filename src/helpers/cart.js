import toast from "react-hot-toast";
import {
  addToCart,
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../redux/cart/cart-slice";

const handleAddToCart = (food, dispatch, cartItems) => {
  const isInCart = cartItems.some((item) => item.id === food.id);
  if (!isInCart) {
    dispatch(addToCart(food));
    toast.success("food added to cart");
  } else {
    toast.error("food already in cart");
  }
};

const handleRemoveFromCart = (food, dispatch) => {
  dispatch(removeFromCart(food));
};

const handleIncreaseQty = (food, dispatch) => {
  dispatch(increaseQty(food));
};

const handleDecreaseQty = (food, dispatch) => {
  dispatch(decreaseQty(food));
};

export {
  handleAddToCart,
  handleRemoveFromCart,
  handleIncreaseQty,
  handleDecreaseQty,
};
