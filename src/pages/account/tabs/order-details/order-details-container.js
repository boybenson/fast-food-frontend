import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_ORDER } from "../../../../graphql/queries/orders";
import OrderDetailsComponent from "./order-details-component";

const OrderDetailsContainer = () => {
  let params = useParams();
  let navigate = useNavigate();
  const { loading, data } = useQuery(GET_ORDER, {
    variables: {
      orderId: params?.orderId,
    },
    pollInterval: 500,
  });

  let handleGoBack = () => {
    navigate(-1);
  };
  return (
    <OrderDetailsComponent
      loading={loading}
      data={data?.getOrder}
      handleGoBack={handleGoBack}
    />
  );
};

export default React.memo(OrderDetailsContainer);
