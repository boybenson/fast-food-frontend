import React from "react";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import OrdersComponent from "./orders-component";
import { GET_ORDERS } from "../../../../graphql/queries/orders";

const OrdersContainer = () => {
  const { loading, data } = useQuery(GET_ORDERS, {
    pollInterval: 100,
  });

  let { userInfo } = useSelector((state) => state.user);
  return (
    <OrdersComponent
      loading={loading}
      orders={data?.getOrders}
      userInfo={userInfo}
    />
  );
};

export default OrdersContainer;
