import React from "react";
import { useQuery } from "@apollo/client";
import OrdersComponent from "./orders-component";
import { GET_ORDERS } from "../../../../graphql/queries/orders";
import { Outlet } from "react-router-dom";

const OrdersContainer = () => {
  const { loading, data } = useQuery(GET_ORDERS, {
    pollInterval: 100,
  });
  return (
    <>
      <OrdersComponent loading={loading} orders={data?.getOrders} />
      <Outlet />
    </>
  );
};

export default OrdersContainer;
