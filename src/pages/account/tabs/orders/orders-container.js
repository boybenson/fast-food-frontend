import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import OrdersComponent from "./orders-component";
import { GET_ORDERS } from "../../../../graphql/queries/orders";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const OrdersContainer = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    !userInfo ? navigate("/auth/signin") : console.log("null");
  });

  const { loading, data } = useQuery(GET_ORDERS, {
    pollInterval: 100,
  });
  return <OrdersComponent loading={loading} orders={data?.getOrders} />;
};

export default OrdersContainer;
