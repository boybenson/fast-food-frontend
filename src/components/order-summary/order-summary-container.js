import React from "react";
import { useMutation } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import { calcTotalPrice } from "../../helpers/cart";
import OrderSummaryComponent from "./order-summary-component";
import { CREATE_ORDER } from "../../graphql/mutations/orders";
import toast from "react-hot-toast";
import { clearCart } from "../../redux/cart/cart-slice";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSummaryContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.user);
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

  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: userInfo?.email,
    amount: totalPrice * 100,
    publicKey: "pk_test_1f8a48067da5793e978f1b1d07e1feea71c756f3",
    currency: "GHS",
    channels: ["mobile_money"],
    metadata: {
      email: userInfo?.email,
      phone: userInfo?.phone,
    },
  };
  const initializePaystackPayment = usePaystackPayment(paystackConfig);

  const onPaymentSuccess = (reference) => {
    createOrder({
      variables: {
        content: {
          totalPrice,
          address: initialValues?.location,
          paymentMethod: "momo",
        },
        foods: orderedItems(),
      },
      onCompleted: (data) => {
        dispatch(clearCart());
        toast.success(
          "🎉🎉🎉🍟Congrats!!, Kindly wait patiently for your delicious meaal!"
        );
      },
      onError: (err) => {
        toast.error(err?.message);
      },
    });
  };

  const onPaymentFailure = () => {
    console.log("closed");
  };

  const handleSubmit = async (values) => {
    if (!userInfo) {
      navigate("/auth/signin", { state: { from: location } });
      toast.error("please login!");
    } else {
      if (cartItems.length === 0) {
        toast.error("Opps!🥺 No Items in cart!");
      } else {
        if (values?.paymentMethod === "momo") {
          initializePaystackPayment(onPaymentSuccess, onPaymentFailure);
        } else {
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
              dispatch(clearCart());
              toast.success(
                "🎉🎉🎉🍟Congrats!!, Kindly wait patiently for your delicious meaal!"
              );
            },
            onError: (err) => {
              toast.error(err?.message);
            },
          });
        }
      }
    }
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
