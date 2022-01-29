import { addToCart } from "../redux/cart/cart-slice";

const handleAddToCart = (food, dispatch, cartItems) => {
  const isInCart = cartItems.some((item) => item.id === food.id);
  if (!isInCart) {
    dispatch(addToCart(food));
    // toast.success("food added to cart");
  } else {
    // toast.error("food already in cart");
    console.log("food is already in cart");
  }
};

export { handleAddToCart };
