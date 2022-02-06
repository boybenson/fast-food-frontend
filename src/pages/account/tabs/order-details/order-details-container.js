import React from "react";
import OrderDetailsComponent from "./order-details-component";

const OrderDetailsContainer = () => {
  return <OrderDetailsComponent />;
};

export default React.memo(OrderDetailsContainer);
