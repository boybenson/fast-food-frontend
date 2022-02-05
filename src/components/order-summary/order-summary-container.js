import React from "react";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../helpers/cart";
import OrderSummaryComponent from "./order-summary-component";
import { CREATE_ORDER } from "../../graphql/mutations/orders";

const OrderSummaryContainer = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [createOrder, { loading }] = useMutation(CREATE_ORDER);
  const totalPrice = calcTotalPrice(cartItems);

  const initialValues = {
    location: "",
    paymentMethod: "",
  };

  const orderedItems = () => {
    let orders = [];

    for (let i = 0; i < cartItems.length; i++) {
      let order = {};
      order.name = cartItems[i].name;
      order.price = cartItems[i].price;
      order.image = cartItems[i].image;
      order.category = cartItems[i].category;
      order.id = cartItems[i].id;
      order.qtyToBuy = cartItems[i].qtyToBuy;
      orders.push(order);
    }

    return orders;
  };

  const handleSubmit = (values) => {
    createOrder({
      variables: {
        content: {
          totalPrice,
          address: values.location,
          paymentMethod: values.paymentMethod,
        },
        foods: orderedItems(),
      },
      onCompleted: (data) => {
        console.log("order created", data);
      },
      onError: (err) => {},
    });
  };

  return (
    <OrderSummaryComponent
      cartItems={cartItems}
      totalPrice={totalPrice}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default React.memo(OrderSummaryContainer);
