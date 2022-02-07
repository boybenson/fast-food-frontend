import React from "react";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import OrdersComponent from "./orders-component";
import { GET_ORDERS } from "../../../../graphql/queries/orders";

const OrdersContainer = () => {
  const { loading, data, error } = useQuery(GET_ORDERS, {
    pollInterval: 500,
  });

  let { userInfo } = useSelector((state) => state.user);
  return (
    <OrdersComponent
      loading={loading}
      orders={data?.getOrders}
      userInfo={userInfo}
      error={error}
    />
  );
};

export default OrdersContainer;
