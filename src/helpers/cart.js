import toast from "react-hot-toast";
import { addToCart, removeFromCart } from "../redux/cart/cart-slice";

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
export { handleAddToCart, handleRemoveFromCart };
